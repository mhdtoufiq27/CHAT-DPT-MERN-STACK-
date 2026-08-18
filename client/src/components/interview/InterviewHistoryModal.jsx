import React, { useState, useEffect } from "react";
import {
  X,
  TrendingUp,
  Award,
  Calendar,
  ChevronRight,
  Download,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Layers,
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function InterviewHistoryModal({ isOpen, onClose, onSelectSession }) {
  const [sessions, setSessions] = useState([]);
  const [progressData, setProgressData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [compareIds, setCompareIds] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const [resList, resProgress] = await Promise.all([
            api.get("/interviews"),
            api.get("/interviews/progress"),
          ]);
          setSessions(resList.data || []);
          setProgressData(resProgress.data || null);
        } catch (err) {
          toast.error("Failed to load interview history");
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [isOpen]);

  const toggleCompareSelect = (id) => {
    if (compareIds.includes(id)) {
      setCompareIds(compareIds.filter((item) => item !== id));
    } else {
      if (compareIds.length >= 2) {
        setCompareIds([compareIds[1], id]);
      } else {
        setCompareIds([...compareIds, id]);
      }
    }
  };

  const handleDeleteSession = async (sessionId) => {
    try {
      await api.delete(`/interviews/${sessionId}`);
      setSessions((prev) => prev.filter((s) => s._id !== sessionId));
      toast.success("Interview session deleted");
    } catch (err) {
      toast.error("Failed to delete interview");
    }
  };

  const handleClearHistory = async () => {
    if (!window.confirm("Are you sure you want to clear all interview history?")) return;
    try {
      await api.delete("/interviews/history/clear");
      setSessions([]);
      setProgressData(null);
      toast.success("All interview history cleared");
    } catch (err) {
      toast.error("Failed to clear interview history");
    }
  };

  if (!isOpen) return null;

  const handleExportReport = async (sessionId, role) => {
    try {
      const res = await api.get(`/interviews/${sessionId}/export`, { responseType: "blob" });
      const blob = new Blob([res.data], { type: "text/markdown" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Mock_Interview_${role.replace(/\s+/g, "_")}.md`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      toast.success("Interview report exported!");
    } catch (err) {
      toast.error("Failed to export report.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] theme-transition">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] shrink-0 bg-[#212121]/60 dark:bg-[#212121]/60 light:bg-[#f7f7f8]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400">
              <TrendingUp size={20} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
                Interview History & Progress Analytics
              </h2>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                Track role readiness scores, past reports & weakness trends
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black p-1.5 rounded-xl hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-200 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          
          {/* Progress Trend Chart Header */}
          {progressData && progressData.scoreTrend && progressData.scoreTrend.length > 0 && (
            <div className="p-5 rounded-3xl bg-[#212121] dark:bg-[#212121] light:bg-[#f7f7f8] border border-emerald-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Award size={15} />
                  Performance Score Trend Over Time
                </span>
                <span className="text-xs text-zinc-400">
                  {progressData.totalCompleted} Completed Sessions
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-2">
                {progressData.scoreTrend.map((st, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-16 font-mono text-[11px] text-zinc-400">{st.date}</span>
                    <span className="w-32 font-semibold truncate text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{st.role}</span>
                    <div className="flex-1 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full transition-all duration-300"
                        style={{ width: `${st.overallScore}%` }}
                      />
                    </div>
                    <span className="font-bold text-emerald-400 font-mono w-10 text-right">{st.overallScore}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INTERVIEW COMPARISON WIDGET */}
          {compareIds.length === 2 && sess1 && sess2 && (
            <div className="p-5 rounded-3xl bg-[#1e1e1e] border border-cyan-500/40 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Layers size={16} /> INTERVIEW COMPARISON: {sess1.role} vs {sess2.role}
                </h3>
                <button
                  onClick={() => setCompareIds([])}
                  className="text-xs text-zinc-400 hover:text-white underline"
                >
                  Close Comparison
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="font-bold text-emerald-400 truncate">Interview 1 ({sess1.role})</div>
                  <div className="text-2xl font-black font-mono text-white">
                    {sess1.finalEvaluation?.overallScore || 70} / 100
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Date: {new Date(sess1.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <div className="font-bold text-cyan-400 truncate">Interview 2 ({sess2.role})</div>
                  <div className="text-2xl font-black font-mono text-white flex items-center gap-2">
                    <span>{sess2.finalEvaluation?.overallScore || 80} / 100</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      (
                      {(sess2.finalEvaluation?.overallScore || 80) -
                        (sess1.finalEvaluation?.overallScore || 70) >=
                      0
                        ? `+${
                            (sess2.finalEvaluation?.overallScore || 80) -
                            (sess1.finalEvaluation?.overallScore || 70)
                          }`
                        : (sess2.finalEvaluation?.overallScore || 80) -
                          (sess1.finalEvaluation?.overallScore || 70)}
                      )
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Date: {new Date(sess2.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Past Sessions List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                MY INTERVIEWS ({sessions.length})
              </h3>
              <p className="text-[11px] text-zinc-500">
                Select 2 interviews to view comparison
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-8 text-xs text-zinc-500 italic">Loading history...</div>
            ) : sessions.length === 0 ? (
              <div className="text-center py-8 text-xs text-zinc-500 italic">
                No past interview sessions found. Start a mock interview to track progress!
              </div>
            ) : (
              <div className="space-y-2.5">
                {sessions.map((sess) => {
                  const score = sess.finalEvaluation?.overallScore || (sess.status === "completed" ? 75 : 0);
                  const isCompleted = sess.status === "completed";
                  const isSelected = compareIds.includes(sess._id);

                  return (
                    <div
                      key={sess._id}
                      className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 text-xs transition ${
                        isSelected
                          ? "bg-cyan-950/20 border-cyan-500/50"
                          : "bg-[#212121] border-zinc-700/60 hover:border-emerald-500/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleCompareSelect(sess._id)}
                          className="w-4 h-4 rounded accent-cyan-500"
                          title="Select for comparison"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm">
                              {sess.role}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20 font-semibold">
                              {sess.experience}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-zinc-400 text-[11px]">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(sess.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span>•</span>
                            <span>{sess.transcript?.length || 0} Questions</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-base font-extrabold text-emerald-400 font-mono">
                            {isCompleted ? `${score}%` : "In Progress"}
                          </div>
                          <div className="text-[10px] text-zinc-400">
                            {sess.finalEvaluation?.hiringRecommendation || "Session"}
                          </div>
                        </div>

                        {isCompleted && (
                          <button
                            onClick={() => handleExportReport(sess._id, sess.role)}
                            className="p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white transition"
                            title="Download Report (.md)"
                          >
                            <Download size={15} />
                          </button>
                        )}

                        <button
                          onClick={() => handleDeleteSession(sess._id)}
                          className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
                          title="Delete Interview"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
