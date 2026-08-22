import React, { useState } from "react";
import {
  X,
  Sparkles,
  Send,
  MessageSquare,
  Bot,
  User,
  ArrowRight,
  Award,
  Video,
  Code2,
  CheckCircle2,
  Lightbulb,
  ExternalLink,
  Flame,
  HelpCircle
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

const QUICK_COACH_PROMPTS = [
  "What should I learn today?",
  "Am I ready for internships?",
  "What skill am I missing?",
  "Should I learn AWS now?",
  "Which project should I build?",
  "Why do I need Docker?",
  "What should I focus on for this job?"
];

export default function CareerCoachChatDrawer({
  isOpen,
  onClose,
  activeRole,
  currentStep = 1,
  userProfile,
  onNavigateTab,
  onLaunchFeature
}) {
  const [messages, setMessages] = useState([
    {
      sender: "coach",
      text: `Hello! I am your **VEXIS PRO AI Career Coach** for the **${activeRole?.roleName || "Tech"}** track. Ask me anything about your roadmap, skill gaps, readiness, or daily study priorities!`,
      action: null
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (questionText) => {
    const q = questionText || inputText;
    if (!q || q.trim() === "") return;

    const userMsg = { sender: "user", text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const res = await api.post("/careers/coach-ask", {
        roleId: activeRole?.id,
        question: q,
        userProfile,
        currentStep
      });

      if (res.data && res.data.data) {
        const coachMsg = {
          sender: "coach",
          text: res.data.data.answer,
          action: res.data.data.suggestedAction
        };
        setMessages((prev) => [...prev, coachMsg]);
      }
    } catch (err) {
      console.error("Error asking coach:", err);
      toast.error("Could not reach AI Career Coach. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-zinc-950 border-l border-zinc-800/80 shadow-2xl flex flex-col font-sans text-zinc-100 animate-slide-left">
      
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 bg-zinc-900/60 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              AI Career Coach <span className="text-zinc-500">•</span>{" "}
              <span className="text-cyan-400 font-semibold">{activeRole?.roleName}</span>
            </h3>
            <p className="text-[10px] text-zinc-400">Context-aware advice from your active roadmap</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Feature Bridge Quick Action Bar */}
      <div className="px-4 py-2 bg-zinc-900/30 border-b border-zinc-800/60 flex items-center gap-1.5 overflow-x-auto scrollbar-thin">
        <span className="text-[10px] text-zinc-500 font-bold uppercase whitespace-nowrap">Practice:</span>
        
        <button
          onClick={() => onLaunchFeature("intro")}
          className="flex items-center gap-1 px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors"
        >
          <Video className="w-3 h-3 text-cyan-400" />
          <span>Self Intro</span>
        </button>

        <button
          onClick={() => onLaunchFeature("interview")}
          className="flex items-center gap-1 px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors"
        >
          <Award className="w-3 h-3 text-emerald-400" />
          <span>Mock Interview</span>
        </button>

        <button
          onClick={() => onLaunchFeature("chat", `Can you give me a coding challenge and solution review for ${activeRole?.roleName}?`)}
          className="flex items-center gap-1 px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors"
        >
          <Code2 className="w-3 h-3 text-purple-400" />
          <span>Code Assistant</span>
        </button>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              msg.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[88%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-black font-medium rounded-br-none"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-none shadow-sm space-y-2"
              }`}
            >
              {msg.sender === "coach" ? (
                <div>
                  <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                  {msg.action && (
                    <div className="pt-2 mt-2 border-t border-zinc-800 flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (onNavigateTab && msg.action.tab) {
                            onNavigateTab(msg.action.tab);
                            onClose();
                          }
                        }}
                        className="flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:underline"
                      >
                        <span>{msg.action.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <span>{msg.text}</span>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl rounded-bl-none text-xs text-zinc-400 w-fit">
            <div className="w-3.5 h-3.5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            <span>Coach is analyzing your roadmap...</span>
          </div>
        )}
      </div>

      {/* Quick Question Chips */}
      <div className="p-3 border-t border-zinc-800/80 bg-zinc-950/80 space-y-2 shrink-0">
        <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-semibold uppercase">
          <Lightbulb className="w-3 h-3 text-amber-400" /> Quick Questions:
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {QUICK_COACH_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-[11px] px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-cyan-500/40 rounded-lg whitespace-nowrap transition-colors shrink-0"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="relative flex items-center gap-2 pt-1">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={`Ask AI Coach about ${activeRole?.roleName}...`}
            className="flex-1 pl-3 pr-9 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
          />

          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim() || isLoading}
            className="p-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 text-black rounded-xl transition-colors shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
