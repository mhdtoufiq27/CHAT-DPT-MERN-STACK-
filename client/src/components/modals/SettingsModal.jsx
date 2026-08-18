import React, { useState } from "react";
import {
  X,
  Moon,
  Sun,
  Trash2,
  Sliders,
  ShieldCheck,
  MessageSquare,
  Volume2,
  Monitor,
  Brain,
} from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function SettingsModal() {
  const {
    isSettingsOpen,
    setIsSettingsOpen,
    theme,
    toggleTheme,
    requestClearAllChats,
    systemPrompt,
    setSystemPrompt,
    exportChat,
    memories,
    deleteMemory,
    clearMemories,
  } = useChat();



  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("general");
  const [tempPrompt, setTempPrompt] = useState(systemPrompt);
  const [enterToSend, setEnterToSend] = useState(true);
  const [density, setDensity] = useState("comfortable");
  const [voiceSpeed, setVoiceSpeed] = useState("1.0");

  if (!isSettingsOpen) return null;

  const handleSaveInstructions = () => {
    setSystemPrompt(tempPrompt);
    toast.success("Custom instructions saved!");
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[460px]">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-52 bg-[#212121] dark:bg-[#212121] light:bg-[#f7f7f8] p-3 border-r border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] shrink-0 space-y-1">
          <div className="text-xs font-bold text-white dark:text-white light:text-zinc-900 px-3 py-2">
            Settings
          </div>
          <button
            onClick={() => setActiveTab("general")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-left transition ${
              activeTab === "general"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f]/50 dark:hover:bg-[#2f2f2f]/50 light:hover:bg-zinc-200/50"
            }`}
          >
            <Sliders size={14} />
            General
          </button>
          <button
            onClick={() => setActiveTab("chat")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-left transition ${
              activeTab === "chat"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f]/50 dark:hover:bg-[#2f2f2f]/50 light:hover:bg-zinc-200/50"
            }`}
          >
            <MessageSquare size={14} />
            Chat Preferences
          </button>
          <button
            onClick={() => setActiveTab("instructions")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-left transition ${
              activeTab === "instructions"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f]/50 dark:hover:bg-[#2f2f2f]/50 light:hover:bg-zinc-200/50"
            }`}
          >
            <ShieldCheck size={14} />
            Custom Instructions
          </button>
          <button
            onClick={() => setActiveTab("memory")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-left transition ${
              activeTab === "memory"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f]/50 dark:hover:bg-[#2f2f2f]/50 light:hover:bg-zinc-200/50"
            }`}
          >
            <Brain size={14} className="text-cyan-400" />
            Memory Management
          </button>
          <button
            onClick={() => setActiveTab("voice")}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-left transition ${
              activeTab === "voice"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f]/50 dark:hover:bg-[#2f2f2f]/50 light:hover:bg-zinc-200/50"
            }`}
          >
            <Volume2 size={14} />
            Voice & Speech
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] mb-4">
              <h2 className="text-base font-semibold text-white dark:text-white light:text-zinc-900">
                {activeTab === "general" && "General Settings"}
                {activeTab === "chat" && "Chat Preferences"}
                {activeTab === "instructions" && "Custom Instructions"}
                {activeTab === "memory" && "Memory Management"}
                {activeTab === "voice" && "Voice Controls"}
              </h2>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black p-1 rounded-lg hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100"
              >
                <X size={18} />
              </button>
            </div>


            {/* General Tab */}
            {activeTab === "general" && (
              <div className="space-y-5 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Appearance Theme
                    </div>
                    <div className="text-zinc-500">Switch between dark and light aesthetics</div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-200 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 text-white dark:text-white light:text-zinc-900 font-medium transition"
                  >
                    {theme === "dark" ? <Moon size={14} className="text-indigo-400" /> : <Sun size={14} className="text-amber-400" />}
                    <span className="capitalize">{theme}</span>
                  </button>
                </div>

                {/* Export Data */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5]">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Export active conversation
                    </div>
                    <div className="text-zinc-500">Download current chat history as Markdown or JSON</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => exportChat(null, "markdown")}
                      className="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-[11px] font-medium transition"
                    >
                      Markdown (.md)
                    </button>
                    <button
                      onClick={() => exportChat(null, "json")}
                      className="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-[11px] font-medium transition"
                    >
                      JSON (.json)
                    </button>
                  </div>
                </div>

                {/* Clear All History */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5]">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Clear conversation history
                    </div>
                    <div className="text-zinc-500">Delete all stored chats for this account</div>
                  </div>
                  <button
                    onClick={() => {
                      setIsSettingsOpen(false);
                      requestClearAllChats();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 font-semibold transition"
                  >
                    <Trash2 size={14} />
                    Clear all
                  </button>
                </div>

                {/* User Info */}
                <div className="pt-4 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5]">
                  <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                    User Account
                  </div>
                  <div className="text-zinc-400 mt-1">
                    Logged in as: <span className="text-emerald-400 font-semibold">{user ? user.email : "Guest User"}</span>
                  </div>
                </div>
              </div>

            )}

            {/* Chat Tab */}
            {activeTab === "chat" && (
              <div className="space-y-5 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Enter to send
                    </div>
                    <div className="text-zinc-500">Press Enter to send message, Shift+Enter for newline</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={enterToSend}
                    onChange={(e) => setEnterToSend(e.target.checked)}
                    className="accent-emerald-500 w-4 h-4 rounded"
                  />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5]">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Layout Density
                    </div>
                    <div className="text-zinc-500">Adjust content spacing comfortable for reading</div>
                  </div>
                  <select
                    value={density}
                    onChange={(e) => setDensity(e.target.value)}
                    className="bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 text-white dark:text-white light:text-zinc-900 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-2.5 py-1.5 outline-none"
                  >
                    <option value="compact">Compact</option>
                    <option value="comfortable">Comfortable</option>
                    <option value="spacious">Spacious</option>
                  </select>
                </div>
              </div>
            )}

            {/* Memory Management Tab */}
            {activeTab === "memory" && (
              <div className="space-y-4 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Saved User Memories ({memories ? memories.length : 0})
                    </div>
                    <div className="text-zinc-500">Non-sensitive facts & preferences automatically remembered for context</div>
                  </div>
                  {memories && memories.length > 0 && (
                    <button
                      onClick={clearMemories}
                      className="px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-[11px] font-semibold transition"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto custom-scrollbar pr-1">
                  {memories && memories.length > 0 ? (
                    memories.map((mem) => (
                      <div
                        key={mem._id}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 text-xs"
                      >
                        <div>
                          <span className="font-semibold text-emerald-400">{mem.key}:</span>{" "}
                          <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{mem.value}</span>
                        </div>
                        <button
                          onClick={() => deleteMemory(mem._id)}
                          className="p-1 text-zinc-400 hover:text-red-400 rounded transition"
                          title="Delete memory"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-zinc-500 italic">
                      No memories stored yet. Mention preferences like "My preferred language is Java" in chat to try!
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Custom Instructions Tab */}
            {activeTab === "instructions" && (
              <div className="space-y-3 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <div>
                  <label className="block font-semibold text-white dark:text-white light:text-zinc-900 mb-1">
                    What would you like VEXIS PRO to know about you?
                  </label>
                  <textarea
                    value={tempPrompt}
                    onChange={(e) => setTempPrompt(e.target.value)}
                    placeholder="e.g. I am a full-stack developer working with React and Node. Please provide clean, modern code snippets with minimal fluff."
                    rows={6}
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl p-3 text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder-zinc-500 outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <button
                  onClick={handleSaveInstructions}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition shadow-md"
                >
                  Save custom instructions
                </button>
              </div>
            )}


            {/* Voice Tab */}
            {activeTab === "voice" && (
              <div className="space-y-4 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white dark:text-white light:text-zinc-900">
                      Voice Speed Rate
                    </div>
                    <div className="text-zinc-500">Speech synthesis speed for text reading</div>
                  </div>
                  <select
                    value={voiceSpeed}
                    onChange={(e) => setVoiceSpeed(e.target.value)}
                    className="bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 text-white dark:text-white light:text-zinc-900 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-2.5 py-1.5 outline-none"
                  >
                    <option value="0.8">0.8x (Slower)</option>
                    <option value="1.0">1.0x (Normal)</option>
                    <option value="1.2">1.2x (Faster)</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] text-[11px] text-zinc-500 text-center font-mono">
            VEXIS PRO v2.5 • Premium Adaptive AI Workspace
          </div>
        </div>
      </div>
    </div>
  );
}
