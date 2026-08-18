const Chat = require("../models/Chat");
const Message = require("../models/Message");

// In-memory fallback store for offline MongoDB support
const memoryChats = new Map();
const memoryMessages = new Map();

// @desc    Get all user or guest chats
// @route   GET /api/chats
const getChats = async (req, res) => {
  try {
    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";

    try {
      const query = userId ? { userId } : { guestId };
      const chats = await Chat.find(query).sort({ updatedAt: -1 });
      return res.json(chats);
    } catch (dbErr) {
      // Memory fallback
      const key = userId ? String(userId) : guestId;
      const userChats = Array.from(memoryChats.values())
        .filter((c) => (userId ? String(c.userId) === String(userId) : c.guestId === guestId))
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      return res.json(userChats);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Helper to check chat ownership
const isOwner = (chat, req) => {
  if (!chat) return false;
  if (req.user) return String(chat.userId) === String(req.user._id);
  return chat.guestId === (req.guestId || "guest_default");
};

// @desc    Get single chat with messages
// @route   GET /api/chats/:id
const getChatById = async (req, res) => {
  try {
    const { id } = req.params;
    try {
      const chat = await Chat.findById(id);
      if (!chat || !isOwner(chat, req)) return res.status(404).json({ message: "Chat not found or access denied" });

      const messages = await Message.find({ chatId: id }).sort({ createdAt: 1 });
      return res.json({ chat, messages });
    } catch (dbErr) {
      const chat = memoryChats.get(id);
      if (!chat || !isOwner(chat, req)) return res.status(404).json({ message: "Chat not found or access denied" });
      const messages = memoryMessages.get(id) || [];
      return res.json({ chat, messages });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new chat
// @route   POST /api/chats
const createChat = async (req, res) => {
  try {
    const { title, model, systemPrompt } = req.body;
    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";

    try {
      const chat = await Chat.create({
        userId,
        guestId: userId ? undefined : guestId,
        title: title || "New chat",
        model: model || "chatdpt-4o",
        systemPrompt: systemPrompt || "",
      });
      return res.status(201).json(chat);
    } catch (dbErr) {
      const newChat = {
        _id: "chat_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
        userId,
        guestId: userId ? undefined : guestId,
        title: title || "New chat",
        model: model || "chatdpt-4o",
        systemPrompt: systemPrompt || "",
        isPinned: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      memoryChats.set(newChat._id, newChat);
      memoryMessages.set(newChat._id, []);
      return res.status(201).json(newChat);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update chat title or model
// @route   PATCH /api/chats/:id
const updateChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, model, isPinned, systemPrompt } = req.body;

    try {
      const chat = await Chat.findById(id);
      if (!chat || !isOwner(chat, req)) return res.status(404).json({ message: "Chat not found or access denied" });

      if (title !== undefined) chat.title = title;
      if (model !== undefined) chat.model = model;
      if (isPinned !== undefined) chat.isPinned = isPinned;
      if (systemPrompt !== undefined) chat.systemPrompt = systemPrompt;

      await chat.save();
      return res.json(chat);
    } catch (dbErr) {
      const chat = memoryChats.get(id);
      if (!chat || !isOwner(chat, req)) return res.status(404).json({ message: "Chat not found or access denied" });

      if (title !== undefined) chat.title = title;
      if (model !== undefined) chat.model = model;
      if (isPinned !== undefined) chat.isPinned = isPinned;
      if (systemPrompt !== undefined) chat.systemPrompt = systemPrompt;
      chat.updatedAt = new Date().toISOString();

      memoryChats.set(id, chat);
      return res.json(chat);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete chat
// @route   DELETE /api/chats/:id
const deleteChat = async (req, res) => {
  try {
    const { id } = req.params;
    try {
      const chat = await Chat.findById(id);
      if (chat && isOwner(chat, req)) {
        await Chat.findByIdAndDelete(id);
        await Message.deleteMany({ chatId: id });
      }
    } catch (dbErr) {
      const chat = memoryChats.get(id);
      if (chat && isOwner(chat, req)) {
        memoryChats.delete(id);
        memoryMessages.delete(id);
      }
    }
    res.json({ message: "Chat deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Clear all chats

// @route   DELETE /api/chats
const clearAllChats = async (req, res) => {
  try {
    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";

    try {
      const query = userId ? { userId } : { guestId };
      const userChats = await Chat.find(query);
      const chatIds = userChats.map((c) => c._id);
      await Chat.deleteMany(query);
      await Message.deleteMany({ chatId: { $in: chatIds } });
    } catch (dbErr) {
      for (const [id, c] of memoryChats.entries()) {
        if ((userId && String(c.userId) === String(userId)) || (!userId && c.guestId === guestId)) {
          memoryChats.delete(id);
          memoryMessages.delete(id);
        }
      }
    }
    res.json({ message: "All chats cleared" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Generate public share link for a chat
// @route   POST /api/chats/:id/share
const shareChat = async (req, res) => {
  try {
    const { id } = req.params;
    const shareId = "share_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);

    try {
      const chat = await Chat.findById(id);
      if (!chat) return res.status(404).json({ message: "Chat not found" });

      chat.isShared = true;
      chat.shareId = shareId;
      await chat.save();

      return res.json({
        shareId,
        shareUrl: `/share/${shareId}`,
        message: "Shareable link generated",
      });
    } catch (dbErr) {
      const chat = memoryChats.get(id);
      if (!chat) return res.status(404).json({ message: "Chat not found" });

      chat.isShared = true;
      chat.shareId = shareId;
      memoryChats.set(id, chat);

      return res.json({
        shareId,
        shareUrl: `/share/${shareId}`,
        message: "Shareable link generated",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to generate share link" });
  }
};

// @desc    Get shared chat data by shareId
// @route   GET /api/chats/share/:shareId
const getSharedChat = async (req, res) => {
  try {
    const { shareId } = req.params;

    try {
      const chat = await Chat.findOne({ shareId, isShared: true });
      if (!chat) return res.status(404).json({ message: "Shared conversation not found or expired" });

      const messages = await Message.find({ chatId: chat._id }).sort({ createdAt: 1 });
      return res.json({ chat, messages });
    } catch (dbErr) {
      const chat = Array.from(memoryChats.values()).find((c) => c.shareId === shareId && c.isShared);
      if (!chat) return res.status(404).json({ message: "Shared conversation not found" });

      const messages = memoryMessages.get(chat._id) || [];
      return res.json({ chat, messages });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to load shared conversation" });
  }
};

module.exports = {
  getChats,
  getChatById,
  createChat,
  updateChat,
  deleteChat,
  clearAllChats,
  shareChat,
  getSharedChat,
  memoryChats,
  memoryMessages,
};

