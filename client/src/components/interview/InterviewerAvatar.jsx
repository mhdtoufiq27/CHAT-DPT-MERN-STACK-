import React from "react";
import { User, Volume2, Mic, Sparkles, Radio, Loader2 } from "lucide-react";

export default function InterviewerAvatar({
  state = "Idle", // 'Idle' | 'Listening' | 'Speaking' | 'Thinking'
  role = "Associate Consultant",
  personality = "Professional",
  spokenText = "",
  hasVoiceEnabled = true,
  onReplayVoice,
}) {
  const getBadgeStyle = () => {
    switch (state) {
      case "Speaking":
        return {
          bg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
          icon: <Volume2 size={12} className="animate-bounce" />,
          label: "Speaking",
        };
      case "Listening":
        return {
          bg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
          icon: <Mic size={12} className="animate-pulse" />,
          label: "Listening",
        };
      case "Thinking":
        return {
          bg: "bg-amber-500/20 text-amber-400 border-amber-500/40",
          icon: <Loader2 size={12} className="animate-spin" />,
          label: "Thinking...",
        };
      case "Idle":
      default:
        return {
          bg: "bg-zinc-800 text-zinc-400 border-zinc-700",
          icon: <Radio size={12} />,
          label: "Idle",
        };
    }
  };

  const badge = getBadgeStyle();

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-3xl bg-[#1e1e1e] border border-[#2f2f2f] relative overflow-hidden shadow-xl text-center">
      {/* Background Ambient Glow matching Avatar State */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none opacity-20 ${
          state === "Speaking"
            ? "bg-gradient-to-b from-emerald-600/30 to-transparent"
            : state === "Listening"
            ? "bg-gradient-to-b from-cyan-600/30 to-transparent"
            : state === "Thinking"
            ? "bg-gradient-to-b from-amber-600/30 to-transparent"
            : "bg-transparent"
        }`}
      />

      {/* Avatar Visual Container */}
      <div className="relative mb-4 flex items-center justify-center">
        {/* Animated Rings around Avatar based on State */}
        {state === "Speaking" && (
          <>
            <span className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
            <span className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-emerald-400/30 animate-pulse pointer-events-none" />
          </>
        )}

        {state === "Listening" && (
          <>
            <span className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-cyan-500/20 animate-pulse pointer-events-none" />
            <span className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-cyan-400/40 pointer-events-none" />
          </>
        )}

        {state === "Thinking" && (
          <span className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-amber-400/50 animate-spin pointer-events-none" />
        )}

        {/* Central Core Avatar Frame */}
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center relative z-10 border-2 transition-all duration-300 shadow-2xl ${
            state === "Speaking"
              ? "bg-gradient-to-br from-emerald-900/90 to-zinc-900 border-emerald-400 shadow-emerald-500/20 scale-105"
              : state === "Listening"
              ? "bg-gradient-to-br from-cyan-900/90 to-zinc-900 border-cyan-400 shadow-cyan-500/20 scale-105"
              : state === "Thinking"
              ? "bg-gradient-to-br from-amber-900/90 to-zinc-900 border-amber-400 shadow-amber-500/20"
              : "bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700"
          }`}
        >
          {/* Avatar Icon */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
              <Sparkles size={22} className={state === "Speaking" ? "animate-pulse" : ""} />
            </div>
          </div>
        </div>

        {/* Animated Speech Equalizer Wave Bars for Speaking State */}
        {state === "Speaking" && (
          <div className="absolute -bottom-2 z-20 flex items-end gap-1 bg-[#18181b] border border-emerald-500/30 px-2 py-1 rounded-full shadow-md">
            <span className="w-1 bg-emerald-400 rounded-full h-3 animate-[bounce_0.6s_infinite]" />
            <span className="w-1 bg-emerald-400 rounded-full h-5 animate-[bounce_0.8s_infinite]" />
            <span className="w-1 bg-emerald-400 rounded-full h-2 animate-[bounce_0.5s_infinite]" />
            <span className="w-1 bg-emerald-400 rounded-full h-4 animate-[bounce_0.7s_infinite]" />
          </div>
        )}
      </div>

      {/* Interviewer Metadata */}
      <div className="z-10 space-y-1">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            AI Interviewer
          </h3>
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.bg}`}
          >
            {badge.icon}
            {badge.label}
          </span>
        </div>
        <p className="text-[11px] text-zinc-400 font-medium flex items-center justify-center gap-1.5 flex-wrap">
          <span>Simulating for <strong className="text-emerald-400 font-semibold">{role}</strong></span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono">
            {personality} Style
          </span>
        </p>
      </div>

      {/* Current AI Spoken Message / Dialogue Box */}
      {spokenText && (
        <div className="mt-4 w-full z-10 bg-[#262626] border border-[#3f3f46] rounded-2xl p-3.5 text-xs text-zinc-200 leading-relaxed text-left relative shadow-inner">
          <p className="italic font-sans text-zinc-300">"{spokenText}"</p>
          {onReplayVoice && hasVoiceEnabled && (
            <button
              onClick={onReplayVoice}
              className="mt-2 text-[10px] font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition"
            >
              <Volume2 size={12} />
              Replay Question Voice
            </button>
          )}
        </div>
      )}
    </div>
  );
}
