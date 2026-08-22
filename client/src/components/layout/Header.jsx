import React, { useState } from "react";
import {
  PanelLeftOpen,
  ChevronDown,
  Zap,
  Brain,
  Sparkles,
  Share2,
  SquarePen,
  UserCheck,
  Check,
  Sun,
  Moon,
  Target,
  Volume2,
  Compass,
} from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function Header() {
  const {
    selectedModel,
    setSelectedModel,
    availableModels,
    isSidebarOpen,
    setIsSidebarOpen,
    createNewChat,
    activeChatId,
    chats,
    theme,
    toggleTheme,
    shareChat,
    setIsInterviewOpen,
    setIsIntroCoachOpen,
    openCareerNavigator,
  } = useChat();


  const { user, openAuth } = useAuth();
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const activeChat = chats.find((c) => c._id === activeChatId);

  const fallbackModels = [
    {
      id: "chatdpt-4o",
      name: "VEXIS PRO Pro",
      badge: "Smartest",
      desc: "High intelligence for complex coding, analysis & creative tasks",
      icon: Sparkles,
      iconColor: "text-emerald-400",
    },
    {
      id: "chatdpt-4o-mini",
      name: "VEXIS PRO Fast",
      badge: "Fastest",
      desc: "Lightweight, ultra-fast model for quick Q&A and writing",
      icon: Zap,
      iconColor: "text-amber-400",
    },
    {
      id: "chatdpt-o1",
      name: "VEXIS PRO Reasoning",
      badge: "Reasoning",
      desc: "Advanced step-by-step reasoning for math, logic & deep technical problems",
      icon: Brain,
      iconColor: "text-cyan-400",
    },
  ];

  const modelsList = (availableModels && availableModels.length > 0)
    ? availableModels.map((m) => ({
        ...m,
        icon: m.id.includes("mini") ? Zap : m.id.includes("o1") ? Brain : Sparkles,
        iconColor: m.id.includes("mini") ? "text-amber-400" : m.id.includes("o1") ? "text-cyan-400" : "text-emerald-400",
      }))
    : fallbackModels;

  const activeModelObj = modelsList.find((m) => m.id === selectedModel) || modelsList[0];

  const handleShare = async () => {
    if (!activeChatId) {
      toast.error("Start a conversation first to share!");
      return;
    }
    await shareChat(activeChatId);
  };


  return (
    <header className="h-14 bg-[#212121] dark:bg-[#212121] light:bg-white text-zinc-200 dark:text-zinc-200 light:text-zinc-800 flex items-center justify-between px-4 border-b border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] shrink-0 select-none z-20 transition-colors duration-200">
      {/* Left section: Sidebar toggle & Title */}
      <div className="flex items-center gap-2 overflow-hidden">
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-xl transition shrink-0"
            title="Open sidebar"
          >
            <PanelLeftOpen size={18} />
          </button>
        )}

        {!isSidebarOpen && (
          <button
            onClick={() => createNewChat()}
            className="p-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-xl transition md:hidden shrink-0"
            title="New chat"
          >
            <SquarePen size={18} />
          </button>
        )}

        {/* Model Selector Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowModelDropdown(!showModelDropdown)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 transition text-sm font-semibold text-white dark:text-white light:text-zinc-900"
          >
            <span className="flex items-center gap-1.5">
              <activeModelObj.icon size={16} className={activeModelObj.iconColor} />
              {activeModelObj.name}
            </span>
            <span className="text-[10px] bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 px-1.5 py-0.5 rounded font-medium">
              {activeModelObj.badge}
            </span>
            <ChevronDown size={14} className="text-zinc-400 ml-0.5" />
          </button>

          {showModelDropdown && (
            <div className="absolute top-11 left-0 w-80 bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider px-3 py-1.5">
                Model Architecture
              </div>
              <div className="space-y-1">
                {modelsList.map((m) => {
                  const isSelected = selectedModel === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => {
                        setSelectedModel(m.id);
                        setShowModelDropdown(false);
                      }}
                      className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition ${
                        isSelected
                          ? "bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-emerald-500/30"
                          : "hover:bg-[#212121]/60 dark:hover:bg-[#212121]/60 light:hover:bg-zinc-100/70"
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-200 mt-0.5 shrink-0">
                        <m.icon size={16} className={m.iconColor} />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white dark:text-white light:text-zinc-900">
                            {m.name}
                          </span>
                          {isSelected && <Check size={14} className="text-emerald-400" />}
                        </div>
                        <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-0.5 leading-snug">
                          {m.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          )}
        </div>

        {/* Current Conversation Title (Desktop) */}
        {activeChat && (
          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-zinc-700/50 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 truncate">
            <span className="truncate">{activeChat.title}</span>
          </div>
        )}
      </div>

      {/* Right section: Theme Toggle, Share & Auth */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={toggleTheme}
          className="p-2 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black bg-[#2f2f2f]/60 dark:bg-[#2f2f2f]/60 light:bg-zinc-100 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-200 rounded-xl transition flex items-center justify-center"
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun size={15} className="text-amber-400" />
          ) : (
            <Moon size={15} className="text-indigo-400" />
          )}
        </button>

        <button
          onClick={() => openCareerNavigator()}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-teal-400 font-bold bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl transition shadow-xs"
          title="Open Tech Career Navigator"
        >
          <Compass size={14} />
          <span className="hidden md:inline">Career Navigator</span>
        </button>

        <button
          onClick={() => setIsIntroCoachOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-purple-400 font-bold bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl transition shadow-xs"
          title="Start AI Introduction Coach"
        >
          <Volume2 size={14} />
          <span className="hidden sm:inline">Intro Coach</span>
        </button>

        <button
          onClick={() => setIsInterviewOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition shadow-xs"
          title="Start AI Mock Interview"
        >
          <Target size={14} />
          <span className="hidden sm:inline">Mock Interview</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black bg-[#2f2f2f]/60 dark:bg-[#2f2f2f]/60 light:bg-zinc-100 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-200 rounded-xl transition"
        >
          <Share2 size={14} />
          <span className="hidden sm:inline font-medium">Share</span>
        </button>


        {user ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-xl">
            <UserCheck size={14} />
            <span className="hidden sm:inline">{user.name}</span>
          </div>
        ) : (
          <button
            onClick={() => openAuth("login")}
            className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition shadow-md shadow-emerald-600/20"
          >
            Log in
          </button>
        )}
      </div>
    </header>
  );
}
