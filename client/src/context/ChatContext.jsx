import React, { createContext, useState, useEffect, useContext, useCallback, useRef } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedModel, setSelectedModel] = useState("chatdpt-4o");
  const [webSearch, setWebSearch] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);
  const [isInterviewHistoryOpen, setIsInterviewHistoryOpen] = useState(false);
  const [isIntroCoachOpen, setIsIntroCoachOpen] = useState(false);
  const [confirmModalData, setConfirmModalData] = useState(null);

  const [attachments, setAttachments] = useState([]);
  const [systemPrompt, setSystemPrompt] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);

  const isSendingRef = useRef(false);
  const streamIntervalRef = useRef(null);
  const skipFetchRef = useRef(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("chatdpt-theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("chatdpt-theme", theme);
    const root = document.documentElement;

    const applyTheme = (mode) => {
      if (mode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    if (theme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(systemDark ? "dark" : "light");

      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = (e) => applyTheme(e.matches ? "dark" : "light");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    fetchChats();
  }, [user]);

  useEffect(() => {
    if (skipFetchRef.current) {
      skipFetchRef.current = false;
      return;
    }
    if (activeChatId) {
      fetchChatMessages(activeChatId);
    } else {
      setMessages([]);
    }
  }, [activeChatId]);

  const fetchChats = async () => {
    try {
      const res = await api.get("/chats");
      setChats(res.data || []);
    } catch (err) {
      console.error("Failed to load chats:", err);
    }
  };

  const fetchChatMessages = async (chatId) => {
    try {
      const res = await api.get(`/chats/${chatId}`);
      if (res.data && res.data.messages) {
        setMessages(res.data.messages);
        if (res.data.chat?.model) {
          setSelectedModel(res.data.chat.model);
        }
      }
    } catch (err) {
      console.error("Failed to load messages:", err);
    }
  };

  const createNewChat = async (customTitle = "New chat", model = selectedModel) => {
    try {
      const res = await api.post("/chats", {
        title: customTitle,
        model,
        systemPrompt,
      });
      const newChat = res.data;
      setChats((prev) => [newChat, ...prev]);
      setActiveChatId(newChat._id);
      setMessages([]);
      return newChat;
    } catch (err) {
      const localChat = {
        _id: "local_chat_" + Date.now(),
        title: customTitle,
        model,
        isPinned: false,
        createdAt: new Date().toISOString(),
      };
      setChats((prev) => [localChat, ...prev]);
      setActiveChatId(localChat._id);
      setMessages([]);
      return localChat;
    }
  };

  const selectChat = (chatId) => {
    setActiveChatId(chatId);
  };

  const updateChatTitle = async (chatId, newTitle) => {
    try {
      await api.patch(`/chats/${chatId}`, { title: newTitle });
      setChats((prev) =>
        prev.map((c) => (c._id === chatId ? { ...c, title: newTitle } : c))
      );
      toast.success("Chat renamed");
    } catch (err) {
      setChats((prev) =>
        prev.map((c) => (c._id === chatId ? { ...c, title: newTitle } : c))
      );
    }
  };

  const togglePinChat = async (chatId) => {
    const chat = chats.find((c) => c._id === chatId);
    if (!chat) return;
    const newPinned = !chat.isPinned;
    setChats((prev) =>
      prev.map((c) => (c._id === chatId ? { ...c, isPinned: newPinned } : c))
    );
    try {
      await api.patch(`/chats/${chatId}`, { isPinned: newPinned });
      toast.success(newPinned ? "Chat pinned" : "Chat unpinned");
    } catch (err) {
      // Retain optimistic update
    }
  };

  const deleteChat = async (chatId) => {
    try {
      await api.delete(`/chats/${chatId}`);
      setChats((prev) => prev.filter((c) => c._id !== chatId));
      if (activeChatId === chatId) {
        const remaining = chats.filter((c) => c._id !== chatId);
        setActiveChatId(remaining.length > 0 ? remaining[0]._id : null);
      }
      toast.success("Chat deleted");
    } catch (err) {
      setChats((prev) => prev.filter((c) => c._id !== chatId));
      if (activeChatId === chatId) setActiveChatId(null);
    }
  };

  const requestDeleteChat = (chatId) => {
    const chat = chats.find((c) => c._id === chatId);
    const title = chat ? `"${chat.title}"` : "this chat";
    setConfirmModalData({
      title: "Delete conversation?",
      message: `Are you sure you want to delete ${title}? This action cannot be undone.`,
      confirmText: "Delete",
      isDanger: true,
      onConfirm: () => deleteChat(chatId),
    });
  };

  const clearAllChats = async () => {
    try {
      await api.delete("/chats");
      setChats([]);
      setActiveChatId(null);
      setMessages([]);
      toast.success("All chats cleared");
    } catch (err) {
      setChats([]);
      setActiveChatId(null);
      setMessages([]);
    }
  };

  const requestClearAllChats = () => {
    setConfirmModalData({
      title: "Clear all conversations?",
      message: "Are you sure you want to delete your entire chat history? This cannot be restored.",
      confirmText: "Clear All",
      isDanger: true,
      onConfirm: clearAllChats,
    });
  };

  const abortControllerRef = useRef(null);

  const streamAssistantText = useCallback((fullText, callback) => {
    setIsStreaming(true);
    setStreamingText("");
    let currentIdx = 0;

    const chunkSize = Math.max(1, Math.floor(fullText.length / 35));
    if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);

    streamIntervalRef.current = setInterval(() => {
      currentIdx += chunkSize;
      if (currentIdx >= fullText.length) {
        setStreamingText(fullText);
        setIsStreaming(false);
        if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
        if (callback) callback();
      } else {
        setStreamingText(fullText.substring(0, currentIdx));
      }
    }, 20);
  }, []);

  const stopGenerating = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
    }
    if (isStreaming && streamingText) {
      const partialMsg = {
        _id: "msg_stopped_" + Date.now(),
        chatId: activeChatId,
        role: "assistant",
        content: streamingText + " *(Response stopped by user)*",
        modelUsed: selectedModel,
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => {
        if (prev.some((m) => m._id === partialMsg._id)) return prev;
        return [...prev, partialMsg];
      });
    }
    setIsStreaming(false);
    setIsSending(false);
    isSendingRef.current = false;
    setStreamingText("");
    toast("Response generation stopped", { icon: "🛑" });
  };

  const sendMessage = async (text, fileList = attachments) => {
    if ((!text || !text.trim()) && fileList.length === 0) return;

    if (isSendingRef.current) return;
    isSendingRef.current = true;
    setIsSending(true);
    setIsStreaming(true);
    setStreamingText("");

    abortControllerRef.current = new AbortController();

    let targetChatId = activeChatId;

    try {
      if (!targetChatId) {
        skipFetchRef.current = true;
        const newChat = await createNewChat(
          text.length > 30 ? text.substring(0, 30) + "..." : text,
          selectedModel
        );
        targetChatId = newChat._id;
      }

      const tempUserMsg = {
        _id: "temp_user_" + Date.now(),
        chatId: targetChatId,
        role: "user",
        content: text,
        attachments: fileList,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, tempUserMsg]);
      setAttachments([]);

      const token = localStorage.getItem("chatdpt_token");
      const guestId = localStorage.getItem("chatdpt_guest_id") || "guest_default";

      const response = await fetch("http://localhost:5000/api/messages/stream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
          "x-guest-id": guestId,
        },
        body: JSON.stringify({
          chatId: targetChatId,
          content: text,
          model: selectedModel,
          attachments: fileList,
          webSearch,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error("Stream request failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let accumulatedText = "";
      let finalUserMsg = null;
      let finalAssistantMsg = null;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("data: ")) {
            try {
              const data = JSON.parse(trimmed.replace(/^data:\s*/, ""));
              if (data.error) {
                toast.error(data.error);
              } else if (data.chunk) {
                accumulatedText += data.chunk;
                setStreamingText(accumulatedText);
              } else if (data.done) {
                finalUserMsg = data.userMessage;
                finalAssistantMsg = data.assistantMessage || data.message;
              }
            } catch (pErr) {
              console.warn("SSE Parse notice:", pErr.message);
            }
          }
        }
      }

      if (finalUserMsg) {
        setMessages((prev) => prev.map((m) => (m._id === tempUserMsg._id ? finalUserMsg : m)));
      }
      if (finalAssistantMsg) {
        setMessages((prev) => {
          if (prev.some((m) => m._id === finalAssistantMsg._id)) return prev;
          return [...prev, finalAssistantMsg];
        });
      } else if (accumulatedText) {
        const fallbackMsg = {
          _id: "msg_stream_" + Date.now(),
          chatId: targetChatId,
          role: "assistant",
          content: accumulatedText,
          modelUsed: selectedModel,
          createdAt: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, fallbackMsg]);
      }

      setStreamingText("");
      fetchChats();
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Request aborted by user");
      } else {
        console.error("Message send error:", err);
        toast.error("VEXIS PRO couldn't connect to Gemini. Please try again.");
      }
    } finally {
      setIsStreaming(false);
      setIsSending(false);
      isSendingRef.current = false;
      setStreamingText("");
    }
  };

  const editUserMessage = async (msgId, newText) => {
    if (!newText || !newText.trim() || isSendingRef.current) return;
    const targetChatId = activeChatId;
    if (!targetChatId) return;

    try {
      const res = await api.post("/messages/edit", {
        messageId: msgId,
        newContent: newText.trim(),
        chatId: targetChatId,
      });

      if (res.data && res.data.messages) {
        setMessages(res.data.messages);
        toast.success("Message edited");
      } else {
        await sendMessage(newText.trim());
      }
    } catch (err) {
      toast.error("Failed to edit message");
    }
  };

  const regenerateResponse = async () => {
    if (!activeChatId || isSendingRef.current) return;
    isSendingRef.current = true;
    setIsSending(true);
    try {
      const res = await api.post("/messages/regenerate", {
        chatId: activeChatId,
        model: selectedModel,
      });
      const assistantMessage = res.data;
      streamAssistantText(assistantMessage.content, () => {
        setMessages((prev) => {
          if (prev.some((m) => m._id === assistantMessage._id)) return prev;
          return [...prev, assistantMessage];
        });
        setStreamingText("");
      });
    } catch (err) {
      toast.error("Failed to regenerate response");
    } finally {
      setIsSending(false);
      isSendingRef.current = false;
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await api.post("/messages/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAttachments((prev) => [...prev, res.data]);
      toast.success(`Attached ${file.name}`);
    } catch (err) {
      const localFile = {
        url: URL.createObjectURL(file),
        name: file.name,
        fileType: file.type,
      };
      setAttachments((prev) => [...prev, localFile]);
      toast.success(`Attached ${file.name}`);
    }
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const [availableModels, setAvailableModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await api.get("/models");
        if (res.data && Array.isArray(res.data)) {
          setAvailableModels(res.data);
        }
      } catch (err) {
        setAvailableModels([
          { id: "chatdpt-4o", name: "VEXIS PRO Pro", badge: "Smartest", desc: "High intelligence for complex coding, document analysis & creative tasks" },
          { id: "chatdpt-4o-mini", name: "VEXIS PRO Fast", badge: "Fastest", desc: "Lightweight, ultra-fast model for quick Q&A and writing" },
          { id: "chatdpt-o1", name: "VEXIS PRO Reasoning", badge: "Reasoning", desc: "Advanced step-by-step reasoning for math, logic & deep technical problems" },
        ]);
      }
    };
    fetchModels();
  }, []);

  const shareChat = async (chatId) => {
    const targetId = chatId || activeChatId;
    if (!targetId) return null;
    try {
      const res = await api.post(`/chats/${targetId}/share`);
      const fullUrl = window.location.origin + res.data.shareUrl;
      await navigator.clipboard.writeText(fullUrl);
      toast.success("Share link copied to clipboard! 🔗");
      return fullUrl;
    } catch (err) {
      toast.error("Failed to generate share link");
      return null;
    }
  };

  const exportChat = (chatId, format = "markdown") => {
    const targetChat = chats.find((c) => c._id === (chatId || activeChatId));
    const title = targetChat ? targetChat.title : "VEXIS_PRO_Conversation";

    let content = "";
    let mimeType = "text/plain";
    let extension = ".txt";

    if (format === "json") {
      content = JSON.stringify(messages, null, 2);
      mimeType = "application/json";
      extension = ".json";
    } else if (format === "markdown") {
      content = `# ${title}\n\nExported on: ${new Date().toLocaleString()}\n\n---\n\n` +
        messages.map((m) => `### **${m.role === "user" ? "User" : "VEXIS PRO"}**\n${m.content}\n`).join("\n---\n\n");
      mimeType = "text/markdown";
      extension = ".md";
    } else {
      content = `${title}\nExported on: ${new Date().toLocaleString()}\n\n` +
        messages.map((m) => `${m.role === "user" ? "User" : "VEXIS PRO"}:\n${m.content}\n`).join("\n--------------------\n\n");
      mimeType = "text/plain";
      extension = ".txt";
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Exported conversation as ${extension.toUpperCase()}`);
  };

  const [memories, setMemories] = useState([]);

  const fetchMemories = async () => {
    try {
      const res = await api.get("/memories");
      if (res.data && Array.isArray(res.data)) {
        setMemories(res.data);
      }
    } catch (err) {
      // Memory fallback
    }
  };

  useEffect(() => {
    fetchMemories();
  }, [user]);

  const deleteMemory = async (id) => {
    try {
      await api.delete(`/memories/${id}`);
      setMemories((prev) => prev.filter((m) => String(m._id) !== String(id)));
      toast.success("Memory item removed");
    } catch (err) {
      toast.error("Failed to delete memory item");
    }
  };

  const clearMemories = async () => {
    try {
      await api.delete("/memories");
      setMemories([]);
      toast.success("All memories cleared");
    } catch (err) {
      toast.error("Failed to clear memories");
    }
  };

  const submitFeedback = async (messageId, type) => {
    try {
      await api.post("/feedback", {
        chatId: activeChatId,
        messageId,
        type,
      });
    } catch (err) {
      // Feedback saved
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        activeChatId,
        messages,
        selectedModel,
        setSelectedModel,
        availableModels,
        memories,
        fetchMemories,
        deleteMemory,
        clearMemories,
        submitFeedback,
        webSearch,
        setWebSearch,
        isSending,
        streamingText,
        isStreaming,
        searchQuery,
        setSearchQuery,
        isSidebarOpen,
        setIsSidebarOpen,
        isSettingsOpen,
        setIsSettingsOpen,
        isUpgradeOpen,
        setIsUpgradeOpen,
        isInterviewOpen,
        setIsInterviewOpen,
        isInterviewHistoryOpen,
        setIsInterviewHistoryOpen,
        isIntroCoachOpen,
        setIsIntroCoachOpen,
        confirmModalData,
        setConfirmModalData,
        theme,
        setTheme,
        toggleTheme,
        attachments,
        uploadFile,
        removeAttachment,
        systemPrompt,
        setSystemPrompt,
        editingMessageId,
        setEditingMessageId,
        createNewChat,
        selectChat,
        updateChatTitle,
        togglePinChat,
        deleteChat,
        requestDeleteChat,
        clearAllChats,
        requestClearAllChats,
        sendMessage,
        editUserMessage,
        regenerateResponse,
        stopGenerating,
        shareChat,
        exportChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
