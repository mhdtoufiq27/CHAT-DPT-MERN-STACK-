import React, { useState } from "react";
import {
  SquarePen,
  Search,
  MessageSquare,
  Trash2,
  Edit2,
  Check,
  X,
  Settings,
  Sparkles,
  Zap,
  LogOut,
  LogIn,
  PanelLeftClose,
  Pin,
  PinOff,
  Sun,
  Moon,
  HelpCircle,
  MoreHorizontal,
  Download,
  Share2,
  Target,
  TrendingUp,
  Volume2,
} from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const {
    chats,
    activeChatId,
    selectChat,
    createNewChat,
    updateChatTitle,
    togglePinChat,
    requestDeleteChat,
    searchQuery,
    setSearchQuery,
    isSidebarOpen,
    setIsSidebarOpen,
    setIsSettingsOpen,
    setIsUpgradeOpen,
    setIsInterviewOpen,
    setIsInterviewHistoryOpen,
    setIsIntroCoachOpen,
    theme,
    toggleTheme,
    exportChat,
    shareChat,
  } = useChat();

  const { user, openAuth, logout } = useAuth();

  const [editingChatId, setEditingChatId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeMenuChatId, setActiveMenuChatId] = useState(null);

  const filteredChats = chats.filter((c) =>
    (c.title || "New chat").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupChats = (chatList) => {
    const pinned = [];
    const today = [];
    const yesterday = [];
    const past7Days = [];
    const older = [];

    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    chatList.forEach((chat) => {
      if (chat.isPinned) {
        pinned.push(chat);
        return;
      }

      const date = new Date(chat.createdAt || Date.now());
      const diffDays = Math.floor((now - date) / oneDay);

      if (diffDays === 0) today.push(chat);
      else if (diffDays === 1) yesterday.push(chat);
      else if (diffDays <= 7) past7Days.push(chat);
      else older.push(chat);
    });

    return { pinned, today, yesterday, past7Days, older };
  };

  const grouped = groupChats(filteredChats);

  const startEdit = (e, chat) => {
    e.stopPropagation();
    setActiveMenuChatId(null);
    setEditingChatId(chat._id);
    setEditTitle(chat.title || "New chat");
  };

  const saveEdit = (e, chatId) => {
    e.stopPropagation();
    if (editTitle.trim()) {
      updateChatTitle(chatId, editTitle.trim());
    }
    setEditingChatId(null);
  };

  const cancelEdit = (e) => {
    e.stopPropagation();
    setEditingChatId(null);
  };

  const handleTogglePin = (e, chatId) => {
    e.stopPropagation();
    setActiveMenuChatId(null);
    togglePinChat(chatId);
  };

  const handleDelete = (e, chatId) => {
    e.stopPropagation();
    setActiveMenuChatId(null);
    requestDeleteChat(chatId);
  };

  if (!isSidebarOpen) return null;

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 md:hidden animate-in fade-in duration-200"
      />

      <aside className="fixed md:static inset-y-0 left-0 w-[270px] h-screen bg-[#171717] dark:bg-[#171717] light:bg-[#f7f7f8] text-zinc-200 dark:text-zinc-200 light:text-zinc-800 flex flex-col justify-between border-r border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] shrink-0 select-none z-40 transition-all duration-200 shadow-2xl md:shadow-none">
        {/* Top Header */}
        <div className="p-3 flex items-center justify-between gap-2 border-b border-[#2f2f2f]/60 dark:border-[#2f2f2f]/60 light:border-[#e5e5e5]">
          <button
            onClick={() => createNewChat()}
            className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-[#212121] dark:bg-[#212121] light:bg-white border border-transparent dark:border-transparent light:border-[#e5e5e5] hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-sm font-medium transition group shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                <Sparkles size={14} />
              </div>
              <span className="font-bold text-white dark:text-white light:text-zinc-900 tracking-tight text-sm flex flex-col leading-tight">
                <span>VEXIS PRO</span>
                <span className="text-[9px] text-emerald-400 font-mono tracking-wider uppercase font-semibold">AI Assistant</span>
              </span>
            </div>
            <SquarePen size={17} className="text-zinc-400 dark:text-zinc-400 light:text-zinc-500 group-hover:text-emerald-400" />
          </button>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#212121] dark:hover:bg-[#212121] light:hover:bg-zinc-200 rounded-xl transition"
            title="Close sidebar"
          >
            <PanelLeftClose size={18} />
          </button>
        </div>

        {/* Search Input & AI Mock Interview Buttons */}
        <div className="px-3 pt-3 space-y-1.5">
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setIsInterviewOpen(true)}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-gradient-to-r from-emerald-950/80 to-[#212121] border border-emerald-500/30 hover:border-emerald-500/60 text-xs font-bold text-emerald-400 transition shadow-xs"
            >
              <Target size={14} />
              <span>Interview</span>
            </button>

            <button
              onClick={() => setIsIntroCoachOpen(true)}
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-gradient-to-r from-purple-950/80 to-[#212121] border border-purple-500/30 hover:border-purple-500/60 text-xs font-bold text-purple-400 transition shadow-xs"
            >
              <Volume2 size={14} />
              <span>Intro Coach</span>
            </button>
          </div>

          <div className="relative flex items-center">
            <Search size={14} className="absolute left-3 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search conversations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#212121] dark:bg-[#212121] light:bg-white text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800 placeholder-zinc-500 rounded-xl pl-8 pr-3 py-2 outline-none border border-transparent dark:border-transparent light:border-[#e5e5e5] focus:border-emerald-500/50 transition"
            />
          </div>
        </div>

        {/* Chat History List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4 custom-scrollbar">
          {Object.entries(grouped).map(([key, list]) => {
            if (list.length === 0) return null;
            const titles = {
              pinned: "Pinned",
              today: "Today",
              yesterday: "Yesterday",
              past7Days: "Previous 7 Days",
              older: "Older",
            };

            return (
              <div key={key} className="space-y-1">
                <div className="px-2 text-[10px] font-bold text-zinc-500 dark:text-zinc-500 light:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  {key === "pinned" && <Pin size={11} className="text-emerald-400" />}
                  {titles[key]}
                </div>

                {list.map((chat) => {
                  const isActive = activeChatId === chat._id;
                  const isEditing = editingChatId === chat._id;
                  const showMenu = activeMenuChatId === chat._id;

                  return (
                    <div
                      key={chat._id}
                      onClick={() => selectChat(chat._id)}
                      className={`group relative flex items-center justify-between px-2.5 py-2 rounded-xl text-xs cursor-pointer transition ${
                        isActive
                          ? "bg-[#212121] dark:bg-[#212121] light:bg-white text-white dark:text-white light:text-zinc-900 font-medium shadow-xs border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5]"
                          : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:bg-[#212121]/70 dark:hover:bg-[#212121]/70 light:hover:bg-zinc-200/60 hover:text-zinc-200 dark:hover:text-zinc-100 light:hover:text-zinc-900"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden flex-1">
                        <MessageSquare size={14} className="shrink-0 text-zinc-500" />
                        {isEditing ? (
                          <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") saveEdit(e, chat._id);
                              if (e.key === "Escape") cancelEdit(e);
                            }}
                            onClick={(e) => e.stopPropagation()}
                            autoFocus
                            className="bg-[#171717] dark:bg-[#171717] light:bg-white text-white dark:text-white light:text-zinc-900 text-xs px-2 py-0.5 rounded-lg outline-none w-full border border-emerald-500"
                          />
                        ) : (
                          <span className="truncate">{chat.title || "New chat"}</span>
                        )}
                      </div>

                      {/* Item Actions */}
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition shrink-0 ml-1">
                        {isEditing ? (
                          <>
                            <button
                              onClick={(e) => saveEdit(e, chat._id)}
                              className="p-1 hover:text-emerald-400 text-zinc-400"
                            >
                              <Check size={13} />
                            </button>
                            <button onClick={cancelEdit} className="p-1 hover:text-red-400 text-zinc-400">
                              <X size={13} />
                            </button>
                          </>
                        ) : (
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuChatId(showMenu ? null : chat._id);
                              }}
                              className="p-1 hover:text-white dark:hover:text-white light:hover:text-black text-zinc-400 rounded-md hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-200"
                            >
                              <MoreHorizontal size={14} />
                            </button>

                              {showMenu && (
                                <div
                                  onClick={(e) => e.stopPropagation()}
                                  className="absolute right-0 top-6 w-40 bg-[#212121] dark:bg-[#212121] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] rounded-xl shadow-2xl py-1 z-50 text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800 animate-in fade-in zoom-in-95 duration-150"
                                >
                                  <button
                                    onClick={(e) => handleTogglePin(e, chat._id)}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                                  >
                                    {chat.isPinned ? <PinOff size={13} /> : <Pin size={13} />}
                                    {chat.isPinned ? "Unpin" : "Pin"}
                                  </button>
                                  <button
                                    onClick={(e) => startEdit(e, chat)}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                                  >
                                    <Edit2 size={13} />
                                    Rename
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveMenuChatId(null);
                                      exportChat(chat._id, "markdown");
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                                  >
                                    <Download size={13} />
                                    Export (.md)
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveMenuChatId(null);
                                      shareChat(chat._id);
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                                  >
                                    <Share2 size={13} />
                                    Share link
                                  </button>
                                  <div className="h-px bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-[#e5e5e5] my-0.5" />
                                  <button
                                    onClick={(e) => handleDelete(e, chat._id)}
                                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-red-500/10 text-red-400 text-left transition"
                                  >
                                    <Trash2 size={13} />
                                    Delete
                                  </button>
                                </div>
                              )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {filteredChats.length === 0 && (
            <div className="text-center py-10 text-xs text-zinc-500">No conversations found</div>
          )}
        </div>

        {/* Upgrade / Plus Banner */}
        <div className="p-3 border-t border-[#2f2f2f]/60 dark:border-[#2f2f2f]/60 light:border-[#e5e5e5]">
          <button
            onClick={() => setIsUpgradeOpen(true)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-emerald-900/30 via-teal-900/20 to-emerald-900/10 border border-emerald-500/30 hover:border-emerald-500/60 transition group text-left shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <Zap size={16} className="text-emerald-400" />
              <div>
                <div className="text-xs font-semibold text-white dark:text-white light:text-zinc-900">
                  Upgrade plan
                </div>
                <div className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                  Access VEXIS PRO Pro & reasoning
                </div>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
              Plus
            </span>
          </button>
        </div>

        {/* Bottom Profile Footer */}
        <div className="p-3 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] relative">
          {showProfileMenu && (
            <div className="absolute bottom-16 left-3 right-3 bg-[#212121] dark:bg-[#212121] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] rounded-2xl shadow-2xl py-1.5 z-50 text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800 animate-in fade-in slide-in-from-bottom-2 duration-150">
              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  setIsSettingsOpen(true);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
              >
                <Settings size={14} className="text-zinc-400" />
                Settings
              </button>

              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  toggleTheme();
                }}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
              >
                <div className="flex items-center gap-2.5">
                  {theme === "dark" ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-indigo-400" />}
                  Theme
                </div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono">{theme}</span>
              </button>

              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  setIsUpgradeOpen(true);
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
              >
                <Sparkles size={14} className="text-emerald-400" />
                My Plan (VEXIS PRO Plus)
              </button>

              <div className="h-px bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-[#e5e5e5] my-1" />

              {user ? (
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-red-500/10 text-red-400 text-left transition font-medium"
                >
                  <LogOut size={14} />
                  Log out
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    openAuth("login");
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-emerald-400 font-semibold text-left transition"
                >
                  <LogIn size={14} />
                  Log in / Sign up
                </button>
              )}
            </div>
          )}

          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#212121] dark:hover:bg-[#212121] light:hover:bg-zinc-200/60 transition text-left"
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-xs text-white shrink-0 shadow-xs">
                {user ? user.name.charAt(0).toUpperCase() : "C"}
              </div>
              <div className="truncate">
                <div className="text-xs font-semibold text-white dark:text-white light:text-zinc-900 truncate">
                  {user ? user.name : "Guest User"}
                </div>
                <div className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
                  {user ? user.plan : "Free Plan"}
                </div>
              </div>
            </div>
            <MoreHorizontal size={15} className="text-zinc-500" />
          </button>
        </div>
      </aside>
    </>
  );
}
