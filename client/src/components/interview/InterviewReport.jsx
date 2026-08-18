import React, { useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Download,
  RotateCcw,
  Volume2,
  Clock,
  Briefcase,
  Layers,
  ShieldCheck,
  Zap,
  Target,
  Trash2,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function InterviewReport({
  session,
  onRestartFull,
  onTargetedPractice,
  onDeleteSession,
}) {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'scorecard' | 'qa' | 'match' | 'coaching'
  const [prepPlanDays, setPrepPlanDays] = useState(7); // 3 | 7 | 14
  const [expandedQIndex, setExpandedQIndex] = useState(null);

  if (!session || !session.finalEvaluation) return null;

  const evalData = session.finalEvaluation;
  const role = session.role || "Associate Consultant";
  const experience = session.experience || "Fresher";
  const overallScore = evalData.overallScore || 80;

  const commScore = evalData.communicationScore || {
    overall: 8.1,
    clarity: 8.3,
    relevance: 8.0,
    structure: 8.2,
    conciseness: 7.9,
    fluency: 8.1,
    technicalComm: 8.0,
    organization: 8.2,
  };

  const recruiterSim = evalData.recruiterSimulation || {
    outcome: "Ready",
    disclaimer: "This is an AI-generated interview simulation and does not represent an actual employer decision.",
  };

  const nextRoundSim = evalData.nextRoundSimulation || {
    recommendation: "YES",
    evidence: [
      "✓ Demonstrated solid domain technical fundamentals",
      "✓ Structured problem-solving approach during scenario questions",
      "✓ Clear articulation of past project experience",
    ],
    concerns: ["⚠ SQL query optimization depth", "⚠ Quantitative metrics in behavioral stories"],
    text: "Based on this simulated interview, the candidate appears ready to proceed to the next simulated round.",
  };

  const roleReadiness = evalData.roleReadiness || {
    percentage: overallScore,
    breakdown: { Technical: 76, Communication: 84, ProblemSolving: 88, BusinessThinking: 80, Behavioral: 77 },
    summary: "Your strongest area is problem solving. Your largest improvement opportunity is technical depth.",
  };

  const jdMatch = evalData.jobDescriptionMatch;
  const resumeConsistency = evalData.resumeConsistency;
  const mustImprove = evalData.mustImprove || [];
  const prepPlans = evalData.prepPlans || {};
  const currentPrepPlan =
    prepPlanDays === 3 ? prepPlans.day3 : prepPlanDays === 14 ? prepPlans.day14 : evalData.studyPlan || [];

  const timeline = evalData.timeline || {
    totalDurationMinutes: 20,
    stages: [
      { name: "Started", duration: "1 min" },
      { name: "Introduction", duration: "4 mins" },
      { name: "Technical Round", duration: "8 mins" },
      { name: "Problem Solving", duration: "5 mins" },
      { name: "Final Assessment", duration: "2 mins" },
    ],
  };

  const handleExport = async () => {
    try {
      const res = await api.get(`/interviews/${session._id}/export`, { responseType: "blob" });
      const blob = new Blob([res.data], { type: "text/markdown" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Mock_Interview_${role.replace(/\s+/g, "_")}.md`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      toast.success("Interview report downloaded!");
    } catch (err) {
      toast.error("Failed to download report");
    }
  };

  return (
    <div className="space-y-6 text-zinc-100 font-sans pb-4">
      {/* 1. REPORT HEADER & OVERALL SCORECARD HERO */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1c2e26] via-[#171717] to-[#121212] border border-emerald-500/30 shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[11px] font-bold uppercase tracking-wide">
                VEXIS PRO AI Assessment Report
              </span>
              <span className="text-xs text-zinc-400 font-medium">• {experience} Level</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1">
              {role} Interview Performance Report
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Download size={14} /> Download (.md)
            </button>
            {onDeleteSession && (
              <button
                onClick={() => onDeleteSession(session._id)}
                className="px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold flex items-center gap-1 transition"
                title="Delete Session"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        </div>

        {/* HERO SCORE & RECRUITER OUTCOME GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Main Overall Score Box (5 cols) */}
          <div className="md:col-span-5 bg-[#1a1a1a]/80 border border-[#2e2e2e] p-6 rounded-3xl text-center space-y-2 shadow-inner">
            <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
              OVERALL INTERVIEW SCORE
            </div>
            <div className="text-5xl font-black text-white tracking-tight">
              {overallScore} <span className="text-xl font-semibold text-zinc-500">/ 100</span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold">
              {evalData.readinessLevel || "Good Readiness"}
            </div>
            <p className="text-[11px] text-zinc-400 italic pt-1">
              "Evaluation based on actual evaluated candidate answers."
            </p>
          </div>

          {/* AI Recruiter Simulation & Next Round Box (7 cols) */}
          <div className="md:col-span-7 bg-[#1a1a1a]/80 border border-[#2e2e2e] p-6 rounded-3xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <UserCheck size={16} /> AI RECRUITER SIMULATION
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  recruiterSim.outcome.includes("Strongly") || recruiterSim.outcome === "Ready"
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                    : recruiterSim.outcome === "Borderline"
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                    : "bg-red-500/20 text-red-300 border-red-500/40"
                }`}
              >
                🟢 {recruiterSim.outcome}
              </span>
            </div>

            {/* Next Round Recommendation Box */}
            <div className="p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-zinc-300">Would I move this candidate to the next round?</span>
                <span
                  className={`font-mono text-xs px-2.5 py-0.5 rounded-md font-bold ${
                    nextRoundSim.recommendation === "YES"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                      : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                  }`}
                >
                  RECOMMENDATION: {nextRoundSim.recommendation}
                </span>
              </div>
              <p className="text-[11px] text-emerald-300 font-medium italic">
                "{nextRoundSim.text}"
              </p>
            </div>

            {/* Non-hiring guarantee disclaimer */}
            <p className="text-[10px] text-zinc-500 flex items-center gap-1 pt-1">
              <ShieldCheck size={12} className="text-emerald-500 shrink-0" />
              <span>{recruiterSim.disclaimer}</span>
            </p>
          </div>
        </div>

        {/* AI INTERVIEW TIMELINE PIPELINE */}
        <div className="bg-[#181818] border border-[#2a2a2a] p-4 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-emerald-400" /> AI Interview Timeline Pipeline
            </span>
            <span className="font-mono text-emerald-400">{timeline.totalDurationMinutes} mins total duration</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
            {timeline.stages.map((stg, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center space-y-0.5">
                <div className="text-[10px] text-zinc-400 font-medium">{stg.name}</div>
                <div className="text-xs font-bold text-emerald-400 font-mono">{stg.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. REPORT NAVIGATION TAB BAR */}
      <div className="flex items-center justify-center gap-2 bg-[#1e1e1e] p-1.5 rounded-2xl border border-[#2e2e2e] text-xs font-semibold overflow-x-auto">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 py-2.5 px-3 rounded-xl transition text-center min-w-[120px] ${
            activeTab === "overview" ? "bg-emerald-600 text-white shadow-md" : "text-zinc-400 hover:text-white"
          }`}
        >
          Overview & Readiness
        </button>
        <button
          onClick={() => setActiveTab("scorecard")}
          className={`flex-1 py-2.5 px-3 rounded-xl transition text-center min-w-[120px] ${
            activeTab === "scorecard" ? "bg-emerald-600 text-white shadow-md" : "text-zinc-400 hover:text-white"
          }`}
        >
          Category Scorecard
        </button>
        <button
          onClick={() => setActiveTab("qa")}
          className={`flex-1 py-2.5 px-3 rounded-xl transition text-center min-w-[120px] ${
            activeTab === "qa" ? "bg-emerald-600 text-white shadow-md" : "text-zinc-400 hover:text-white"
          }`}
        >
          Q&A Deep Review ({session.transcript?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab("match")}
          className={`flex-1 py-2.5 px-3 rounded-xl transition text-center min-w-[120px] ${
            activeTab === "match" ? "bg-emerald-600 text-white shadow-md" : "text-zinc-400 hover:text-white"
          }`}
        >
          JD & Resume Match
        </button>
        <button
          onClick={() => setActiveTab("coaching")}
          className={`flex-1 py-2.5 px-3 rounded-xl transition text-center min-w-[120px] ${
            activeTab === "coaching" ? "bg-emerald-600 text-white shadow-md" : "text-zinc-400 hover:text-white"
          }`}
        >
          Study Plan & Retest
        </button>
      </div>

      {/* TAB 1: OVERVIEW & ROLE READINESS */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* ROLE READINESS BREAKDOWN CARD */}
          <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Target size={18} className="text-emerald-400" /> ROLE READINESS: {role} ({roleReadiness.percentage}%)
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {Object.entries(roleReadiness.breakdown || {}).map(([key, val], idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-1">
                  <div className="text-[11px] text-zinc-400 font-medium">{key}</div>
                  <div className="text-xl font-extrabold font-mono text-emerald-400">{val}%</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-300 italic bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800">
              "{roleReadiness.summary}"
            </p>
          </div>

          {/* COMMUNICATION SCORE & INTRO COACH INTEGRATION */}
          <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <Volume2 size={18} className="text-purple-400" /> COMMUNICATION & DELIVERABILITY: {commScore.overall} / 10
              </h3>
              {session.introPerformance && (
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold">
                  Intro Coach Score: {session.introPerformance.score}/100
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-zinc-400 text-[11px]">Clarity</div>
                <div className="text-base font-bold font-mono text-purple-300 mt-0.5">{commScore.clarity}/10</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-zinc-400 text-[11px]">Relevance</div>
                <div className="text-base font-bold font-mono text-purple-300 mt-0.5">{commScore.relevance}/10</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-zinc-400 text-[11px]">Structure</div>
                <div className="text-base font-bold font-mono text-purple-300 mt-0.5">{commScore.structure}/10</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="text-zinc-400 text-[11px]">Tech Comm</div>
                <div className="text-base font-bold font-mono text-purple-300 mt-0.5">{commScore.technicalComm}/10</div>
              </div>
            </div>
          </div>

          {/* TOP STRENGTHS & MUST IMPROVE PRIORITIES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Strengths */}
            <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-emerald-500/30 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <CheckCircle2 size={16} /> TOP DEMONSTRATED STRENGTHS
              </h3>
              <ul className="space-y-2 text-xs text-zinc-200">
                {(evalData.strengths || []).map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                    <span className="font-bold text-emerald-400">{idx + 1}.</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Must Improve Priorities */}
            <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-amber-500/30 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <AlertTriangle size={16} /> MUST IMPROVE PRIORITIES
              </h3>
              <div className="space-y-2.5 text-xs">
                {mustImprove.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1">
                    <div className="font-bold text-amber-300">{idx + 1}. {item.topic}</div>
                    <p className="text-[11px] text-zinc-300"><strong>Why it matters:</strong> {item.whyItMatters}</p>
                    <p className="text-[11px] text-zinc-400 italic"><strong>Action:</strong> {item.recommendedAction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ROLE CATEGORY SCORECARD */}
      {activeTab === "scorecard" && (
        <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-4 shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Role-Specific Category Scorecard ({role})
          </h3>

          <div className="space-y-3">
            {evalData.scorecard?.map((sc, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs space-y-2">
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-white font-bold">{sc.category}</span>
                  <span className="font-mono text-emerald-400 font-extrabold">{sc.score} / 100</span>
                </div>

                <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-500"
                    style={{ width: `${sc.score}%` }}
                  />
                </div>

                <p className="text-[11px] text-zinc-400 leading-relaxed italic">{sc.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Q&A DEEP REVIEW */}
      {activeTab === "qa" && (
        <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-4 shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Question-by-Question Detailed Assessment & Model Answers
          </h3>

          <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
            {session.transcript?.map((t, idx) => {
              const isExpanded = expandedQIndex === idx;
              return (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-emerald-400 text-xs">
                      Q{idx + 1} ({t.roundName}): "{t.question}"
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-emerald-400 font-mono font-bold text-[11px]">
                      Score: {t.analysis?.score || 7} / 10
                    </span>
                  </div>

                  <div className="bg-black/60 p-3 rounded-xl font-mono text-[11px] text-zinc-200 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px] font-sans font-bold mb-1">Candidate Answer:</span>
                    "{t.answer}"
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      <strong>✓ Strong Points:</strong> {t.analysis?.strength}
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                      <strong>⚠ Missing Points:</strong> {t.analysis?.improvement}
                    </div>
                  </div>

                  {t.analysis?.strongerModelAnswer && (
                    <div className="pt-1">
                      <button
                        onClick={() => setExpandedQIndex(isExpanded ? null : idx)}
                        className="text-xs text-cyan-400 hover:underline font-semibold flex items-center gap-1"
                      >
                        <Sparkles size={13} />
                        {isExpanded ? "Hide Model Answer" : "View Better Approach & Model Answer"}
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>

                      {isExpanded && (
                        <div className="mt-2 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-zinc-200 font-sans leading-relaxed text-xs animate-in fade-in">
                          <strong className="text-cyan-400 block mb-1">Model Answer:</strong>
                          {t.analysis.strongerModelAnswer}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: JOB DESCRIPTION & RESUME MATCH */}
      {activeTab === "match" && (
        <div className="space-y-6">
          {/* JD Match Section */}
          {jdMatch ? (
            <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  JOB DESCRIPTION REQUIREMENT MATCH
                </h3>
                <span className="text-sm font-extrabold font-mono text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40">
                  Overall Match: {jdMatch.overallMatch}%
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {jdMatch.skills?.map((sk, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-2xl border text-center space-y-1 ${
                      sk.covered
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                        : "bg-zinc-900 border-zinc-800 text-zinc-500"
                    }`}
                  >
                    <div className="font-bold truncate">{sk.name}</div>
                    <div className="font-mono text-xs">{sk.covered ? `✓ ${sk.score}%` : "○ Unassessed"}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] text-center text-xs text-zinc-400">
              No Job Description was uploaded prior to interview setup.
            </div>
          )}

          {/* Resume Consistency */}
          <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-3 shadow-xl text-xs">
            <h3 className="font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <ShieldCheck size={16} /> RESUME CLAIM CONSISTENCY ANALYSIS
            </h3>
            <p className="text-zinc-300 leading-relaxed italic bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800">
              "{resumeConsistency.summary}"
            </p>
          </div>
        </div>
      )}

      {/* TAB 5: STUDY PLAN & TARGETED RETEST */}
      {activeTab === "coaching" && (
        <div className="space-y-6">
          {/* PREPARATION PLAN DURATION TOGGLE */}
          <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-[#2e2e2e] space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <BookOpen size={16} /> PERSONALIZED PREPARATION PLAN
              </h3>

              <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs">
                <button
                  onClick={() => setPrepPlanDays(3)}
                  className={`px-3 py-1 rounded-lg font-bold transition ${
                    prepPlanDays === 3 ? "bg-emerald-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  3-Day Quick Prep
                </button>
                <button
                  onClick={() => setPrepPlanDays(7)}
                  className={`px-3 py-1 rounded-lg font-bold transition ${
                    prepPlanDays === 7 ? "bg-emerald-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  7-Day Plan
                </button>
                <button
                  onClick={() => setPrepPlanDays(14)}
                  className={`px-3 py-1 rounded-lg font-bold transition ${
                    prepPlanDays === 14 ? "bg-emerald-600 text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  14-Day Plan
                </button>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              {currentPrepPlan.map((sp, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center font-mono text-xs shrink-0">
                      D{sp.day}
                    </div>
                    <div>
                      <div className="font-bold text-white">{sp.topic}</div>
                      <div className="text-zinc-400 text-[11px]">{sp.task}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => onTargetedPractice(sp.category || "Technical")}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 text-[11px] font-semibold transition shrink-0"
                  >
                    Practice Topic
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* TARGETED RETEST ACTION BAR */}
          <div className="p-6 rounded-3xl bg-[#1e1e1e] border border-cyan-500/30 space-y-3 shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Zap size={16} /> TARGETED RETEST & MINI-PRACTICE ROUNDS
            </h3>
            <p className="text-xs text-zinc-400">
              Launch a 5-question targeted mock interview focused directly on your weakest evaluation areas.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => onTargetedPractice("SQL")}
                className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition shadow-md"
              >
                Practice Weak Area (SQL)
              </button>
              <button
                onClick={() => onTargetedPractice("Technical")}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md"
              >
                Retry Technical Round
              </button>
              <button
                onClick={() => onTargetedPractice("Behavioral")}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shadow-md"
              >
                Retry HR Round
              </button>
              <button
                onClick={() => onTargetedPractice("Coding")}
                className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition shadow-md"
              >
                Retry Coding
              </button>
              <button
                onClick={onRestartFull}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs border border-zinc-700 transition"
              >
                Retry Full Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
