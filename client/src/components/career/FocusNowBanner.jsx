import React from "react";
import {
  Flame,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  ChevronRight,
  BookOpen,
  Terminal,
  FolderGit2,
  SearchCheck,
  Award
} from "lucide-react";

export default function FocusNowBanner({
  focusData,
  currentStatus = "Learning",
  onStatusChange,
  onOpenCoach,
  onNavigateTab
}) {
  if (!focusData) return null;

  const statusColors = {
    "Not Started": "bg-zinc-800 text-zinc-400 border-zinc-700",
    "Learning": "bg-blue-500/15 text-blue-400 border-blue-500/30",
    "Practicing": "bg-amber-500/15 text-amber-400 border-amber-500/30",
    "Completed": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
  };

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-blue-950/30 border border-cyan-500/40 shadow-lg shadow-cyan-500/5 space-y-3.5 animate-fade-in">
      
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-black shadow-md shadow-cyan-500/20 shrink-0">
            <Flame className="w-5 h-5 fill-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                FOCUS NOW • THIS WEEK'S ACTION SPRINT
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[10px] font-bold text-zinc-300">
                Step #{focusData.stepNumber}: {focusData.activeTopic}
              </span>
            </div>
            <p className="text-xs text-zinc-300 font-semibold mt-0.5">
              {focusData.whyItMatters}
            </p>
          </div>
        </div>

        {/* 4-Stage Progress State Toggle */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-zinc-950/80 p-1 rounded-xl border border-zinc-800">
          {["Not Started", "Learning", "Practicing", "Completed"].map((st) => {
            const isSelected = currentStatus === st;
            return (
              <button
                key={st}
                onClick={() => onStatusChange(st)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  isSelected
                    ? st === "Completed"
                      ? "bg-emerald-500 text-black shadow-sm"
                      : st === "Practicing"
                      ? "bg-amber-500 text-black shadow-sm"
                      : st === "Learning"
                      ? "bg-cyan-500 text-black shadow-sm"
                      : "bg-zinc-700 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {st === "Completed" ? "✓ Done" : st}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5 Concrete Sprint Action Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {(focusData.tasks || []).map((task) => {
          const typeIcons = {
            LEARN: BookOpen,
            PRACTICE: Terminal,
            BUILD: FolderGit2,
            REVIEW: SearchCheck,
            INTERVIEW: Award
          };
          const Icon = typeIcons[task.type] || BookOpen;

          return (
            <div
              key={task.id}
              className="p-2.5 bg-zinc-950/70 border border-zinc-800/80 rounded-xl flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[9px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  <Icon className="w-3 h-3 text-cyan-400" />
                  <span>{task.type}</span>
                </div>
                <h5 className="text-[11px] font-bold text-white line-clamp-2 leading-tight">
                  {task.label}
                </h5>
              </div>
              <p className="text-[10px] text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                {task.detail}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Sub-Action Footer */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateTab("weekly")}
            className="text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>View Full 16-Week Schedule</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={onOpenCoach}
          className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg text-xs font-semibold transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ask AI Coach About This Step</span>
        </button>
      </div>
    </div>
  );
}
