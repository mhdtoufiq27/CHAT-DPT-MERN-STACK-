const Memory = require("../models/Memory");

// In-memory fallback map for offline database
const memoryStore = new Map();

// Helper to get owner query
const getOwnerQuery = (req) => {
  if (req.user) return { userId: req.user._id };
  return { guestId: req.guestId || "guest_default" };
};

// @desc    Get user/guest memories
// @route   GET /api/memories
const getMemories = async (req, res) => {
  try {
    const query = getOwnerQuery(req);
    try {
      const memories = await Memory.find(query).sort({ createdAt: -1 });
      return res.json(memories);
    } catch (dbErr) {
      const ownerKey = req.user ? String(req.user._id) : (req.guestId || "guest_default");
      const list = memoryStore.get(ownerKey) || [];
      return res.json(list);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch memories" });
  }
};

// @desc    Add new memory
// @route   POST /api/memories
const addMemory = async (req, res) => {
  try {
    const { key, value, category } = req.body;
    if (!key || !value) {
      return res.status(400).json({ message: "key and value are required" });
    }

    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";
    const ownerKey = userId ? String(userId) : guestId;

    try {
      const memory = await Memory.create({
        userId,
        guestId,
        key: key.trim(),
        value: value.trim(),
        category: category || "preference",
      });
      return res.status(201).json(memory);
    } catch (dbErr) {
      const memory = {
        _id: "mem_" + Date.now(),
        userId,
        guestId,
        key: key.trim(),
        value: value.trim(),
        category: category || "preference",
        createdAt: new Date().toISOString(),
      };
      const list = memoryStore.get(ownerKey) || [];
      list.unshift(memory);
      memoryStore.set(ownerKey, list);
      return res.status(201).json(memory);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to add memory" });
  }
};

// @desc    Delete single memory
// @route   DELETE /api/memories/:id
const deleteMemory = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: id, ...getOwnerQuery(req) };

    try {
      await Memory.findOneAndDelete(query);
    } catch (dbErr) {
      const ownerKey = req.user ? String(req.user._id) : (req.guestId || "guest_default");
      const list = memoryStore.get(ownerKey) || [];
      const filtered = list.filter((m) => String(m._id) !== String(id));
      memoryStore.set(ownerKey, filtered);
    }

    return res.json({ message: "Memory deleted", id });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete memory" });
  }
};

// @desc    Clear all user memories
// @route   DELETE /api/memories
const clearMemories = async (req, res) => {
  try {
    const query = getOwnerQuery(req);
    try {
      await Memory.deleteMany(query);
    } catch (dbErr) {
      const ownerKey = req.user ? String(req.user._id) : (req.guestId || "guest_default");
      memoryStore.delete(ownerKey);
    }
    return res.json({ message: "All memories cleared" });
  } catch (error) {
    res.status(500).json({ message: "Failed to clear memories" });
  }
};

module.exports = {
  getMemories,
  addMemory,
  deleteMemory,
  clearMemories,
  memoryStore,
};
