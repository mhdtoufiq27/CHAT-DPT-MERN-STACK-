import React, { useState } from "react";
import {
  X,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Zap,
  Target,
  Layers,
  Search,
  Code2,
  ShieldAlert
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

const SAMPLE_JD = `Role: Full Stack Engineer (React / Node / Cloud)
About the Job:
We are seeking a talented Software Engineer to build scalable web applications.
Required Qualifications:
- 2+ years of experience with JavaScript / TypeScript and React.js
- Strong proficiency in Node.js, Express, and REST API development
- Hands-on experience with SQL databases (PostgreSQL or MySQL)
- Solid understanding of Git, GitHub workflows, and CI/CD pipelines
Preferred Qualifications:
- Experience with Docker, Kubernetes, and AWS cloud deployment
- Knowledge of Redis caching and microservice architectures`;

export default function JobDescriptionAnalyzerModal({
  isOpen,
  onClose,
  userProfile,
  onExploreRole
}) {
  const [jdText, setJdText] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!jdText || jdText.trim().length < 20) {
      toast.error("Please paste a realistic job description (at least 20 characters).");
      return;
    }

    setIsLoading(true);
    try {
      const res = await api.post("/careers/analyze-jd", {
        jobDescriptionText: jdText,
        userProfile: userProfile || {}
      });

      if (res.data && res.data.data) {
        setAnalysisResult(res.data.data);
      }
    } catch (err) {
      console.error("Error analyzing JD:", err);
      toast.error("Failed to analyze job description. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100">
        
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 bg-zinc-900/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-bold shadow-md shadow-cyan-500/20">
              <FileText className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Job Description (JD) Skill Gap Analyzer
              </h3>
              <p className="text-xs text-zinc-400">
                Paste any real job posting to extract requirements and compare against your skills
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          
          {!analysisResult ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-300">
                  Paste Target Job Posting / Description:
                </label>
                <button
                  type="button"
                  onClick={() => setJdText(SAMPLE_JD)}
                  className="text-[11px] text-cyan-400 hover:underline font-medium"
                >
                  Paste Sample Full Stack JD
                </button>
              </div>

              <textarea
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
                placeholder="Paste the full job description here (responsibilities, required skills, tools)..."
                rows={9}
                className="w-full p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 font-mono leading-relaxed"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={isLoading || !jdText.trim()}
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black rounded-xl text-xs font-bold shadow-md shadow-cyan-500/20 disabled:opacity-40"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Extracting Skills & Comparing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Analyze Job Match</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              
              {/* Match Header Score */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-zinc-900 to-zinc-950 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">
                    ANALYSIS RESULT • {analysisResult.matchStatus}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    You meet {analysisResult.matchPercentage}% of the extracted requirements
                  </h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {analysisResult.disclaimer}
                  </p>
                </div>

                <div className="text-2xl font-black text-cyan-400 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                  {analysisResult.matchPercentage}%
                </div>
              </div>

              {/* Matches vs Gaps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Strong Matches */}
                <div className="p-3.5 bg-zinc-900/50 border border-emerald-500/30 rounded-xl space-y-2">
                  <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Strong Matches ({analysisResult.strongMatches?.length || 0})
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {(analysisResult.strongMatches || []).length > 0 ? (
                      analysisResult.strongMatches.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded text-[11px] font-medium"
                        >
                          ✓ {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-zinc-500">No strong matches identified yet.</span>
                    )}
                  </div>
                </div>

                {/* Skill Gaps */}
                <div className="p-3.5 bg-zinc-900/50 border border-rose-500/30 rounded-xl space-y-2">
                  <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" /> Missing Skill Gaps ({analysisResult.skillGaps?.length || 0})
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {(analysisResult.skillGaps || []).length > 0 ? (
                      analysisResult.skillGaps.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-rose-950/40 border border-rose-500/30 text-rose-300 rounded text-[11px] font-medium"
                        >
                          ✕ {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-emerald-400">All key extracted skills are present in your profile!</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Priority Action Items */}
              {analysisResult.priorityLearning?.length > 0 && (
                <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2">
                  <h5 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400" /> Priority Steps to Qualify for this Role:
                  </h5>
                  <div className="space-y-1.5">
                    {analysisResult.priorityLearning.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 bg-zinc-950/60 rounded border border-zinc-800 text-xs text-zinc-300"
                      >
                        <span className="w-4 h-4 rounded bg-amber-500/20 text-amber-300 font-black text-[10px] flex items-center justify-center shrink-0">
                          {item.step}
                        </span>
                        <span>
                          <strong className="text-white">{item.skill}:</strong> {item.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setAnalysisResult(null)}
                  className="text-xs text-zinc-400 hover:text-white underline"
                >
                  Analyze Another Job Description
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (onExploreRole) {
                      onExploreRole(analysisResult.recommendedRoleRoadmap);
                      onClose();
                    }
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl text-xs font-bold transition-colors"
                >
                  <span>Open Roadmap for this Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
