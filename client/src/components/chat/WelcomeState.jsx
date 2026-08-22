import React from "react";
import { Code, BookOpen, Sparkles, FileSearch, Layers, Compass, ArrowRight } from "lucide-react";
import { useChat } from "../../context/ChatContext";

export default function WelcomeState() {
  const { sendMessage, openCareerNavigator } = useChat();

  const suggestionCards = [
    {
      category: "Learn",
      icon: BookOpen,
      title: "Explain a concept",
      subtitle: "Quantum computing in simple terms",
      prompt: "Explain quantum computing simply with clear analogies and a breakdown table.",
    },
    {
      category: "Code",
      icon: Code,
      title: "Help me code",
      subtitle: "Help me debug Java / MERN code",
      prompt: "Show me a clean Java code example for reversing a string with recursion and explanation.",
    },
    {
      category: "Create",
      icon: Layers,
      title: "Create REST API",
      subtitle: "Build a REST API using Node.js & Express",
      prompt: "Create a production-ready REST API using Node.js, Express, and MongoDB with authentication.",
    },
    {
      category: "Analyze",
      icon: FileSearch,
      title: "Analyze data",
      subtitle: "Analyze document or code files",
      prompt: "How can I upload a PDF or source file to summarize key points and find errors?",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-3xl mx-auto w-full select-none animate-in fade-in duration-300">
      {/* Brand Icon Header */}
      <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-600/20 mb-4">
        <Sparkles size={28} />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
        VEXIS PRO
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2 tracking-tight">
        What can I help with today?
      </h1>
      <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-6 max-w-md leading-relaxed">
        Your adaptive AI workspace. Ask questions, write code, analyze data, or explore technical IT careers.
      </p>

      {/* Featured Career Navigator Banner */}
      <div className="w-full mb-4">
        <button
          onClick={() => openCareerNavigator()}
          className="w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#18231c] to-[#1e1e1e] border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-200 group flex items-center justify-between gap-4 text-left shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0 group-hover:scale-105 transition">
              <Compass size={20} className="animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition">
                  Technical IT Career Navigator
                </span>
                <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  52+ Roles & Roadmaps
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">
                Explore 9 career families, 9-stage learning roadmaps, prerequisites & tiered projects for CS/IT students.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 shrink-0 group-hover:translate-x-1 transition-transform">
            <span className="hidden sm:inline">Explore</span>
            <ArrowRight size={14} />
          </div>
        </button>
      </div>

      {/* Suggestion Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
        {suggestionCards.map((card, idx) => (
          <button
            key={idx}
            onClick={() => sendMessage(card.prompt)}
            className="flex flex-col items-start text-left p-4 rounded-2xl bg-[#212121] dark:bg-[#212121] light:bg-white hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100/90 border border-[#3a3a3a] dark:border-[#3a3a3a] light:border-[#e5e5e5] transition-all duration-200 group shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between w-full mb-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition duration-200">
                  <card.icon size={16} />
                </div>
                <span className="text-xs font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-emerald-400 transition">
                  {card.title}
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono font-bold text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                {card.category}
              </span>
            </div>
            <div className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 line-clamp-1 font-normal">
              "{card.subtitle}"
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}


