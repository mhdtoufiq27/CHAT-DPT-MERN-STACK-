import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Target,
  Sparkles,
  Play,
  Clock,
  Award,
  AlertCircle,
  Mic,
  MicOff,
  Send,
  FastForward,
  CheckCircle2,
  TrendingUp,
  Brain,
  RotateCcw,
  Flame,
  Code2,
  Database,
  Layers,
  ChevronRight,
  Download,
  BookOpen,
  Calendar,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Volume2,
} from "lucide-react";
import { useChat } from "../../context/ChatContext";
import api from "../../services/api";
import toast from "react-hot-toast";
import RealInterviewRoom from "./RealInterviewRoom";
import InterviewReport from "./InterviewReport";

export default function InterviewModal({ isOpen, onClose, onStartPracticeCategory }) {
  const { setIsIntroCoachOpen } = useChat();
  const [stage, setStage] = useState("setup"); // 'setup' | 'live' | 'report'
  const [reportTab, setReportTab] = useState("scorecard"); // 'scorecard' | 'qa' | 'coach'

  // Setup Form State
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("Fresher");
  const [interviewType, setInterviewType] = useState("Full Interview");
  const [difficulty, setDifficulty] = useState("Medium");
  const [duration, setDuration] = useState("30 Minutes");
  const [numQuestions, setNumQuestions] = useState(15);
  const [pressureMode, setPressureMode] = useState(false);
  const [selectedMode, setSelectedMode] = useState("Standard"); // 'Standard' | 'Pressure' | 'Practice'
  const [personality, setPersonality] = useState("Professional"); // 'Professional' | 'Friendly' | 'Strict' | 'Technical Expert' | 'Consulting Interviewer'
  const [resumeText, setResumeText] = useState("");
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [showContextInputs, setShowContextInputs] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [isStarting, setIsStarting] = useState(false);

  // Active Session State
  const [session, setSession] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [expandedQIndex, setExpandedQIndex] = useState(null);

  // Timer State
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const timerRef = useRef(null);

  // Suggested Role Chips
  const popularRoles = [
    "Associate Consultant",
    "Java Developer",
    "Data Scientist",
    "MERN Developer",
    "Business Analyst",
    "Cloud Engineer",
    "Cybersecurity Analyst",
    "DevOps Engineer",
  ];

  // Check for active in-progress interview on mount/open
  useEffect(() => {
    if (isOpen) {
      const checkActive = async () => {
        try {
          const res = await api.get("/interviews/active");
          if (res.data && res.data.status === "in_progress") {
            setSession(res.data);
            setRole(res.data.role);
            setStage("live");
          }
        } catch (err) {
          // No active interview
        }
      };
      checkActive();
    }
  }, [isOpen]);

  // Live Timer Effect
  useEffect(() => {
    if (stage === "live") {
      timerRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stage]);

  if (!isOpen) return null;

  const handleStartInterview = async (customCategory = null) => {
    if (!role.trim()) {
      setValidationError("Please enter the job role you want to prepare for.");
      return;
    }
    setValidationError("");
    setIsStarting(true);

    try {
      const res = await api.post("/interviews/start", {
        role: role.trim(),
        experience,
        interviewType: customCategory ? `${customCategory} Practice` : interviewType,
        difficulty,
        duration,
        numQuestions: customCategory ? 5 : numQuestions,
        pressureMode: pressureMode || selectedMode === "Pressure",
        mode: selectedMode,
        personality,
        resumeText,
        jobDescriptionText,
      });

      setSession(res.data);
      setSecondsElapsed(0);
      setStage("live");
      toast.success(`Real Interview Simulator started for ${role}!`);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to start mock interview.");
    } finally {
      setIsStarting(false);
    }
  };

  const handleSubmitAnswer = async (answerText = "", skipped = false, timeSpent = 0) => {
    if (!session) return;
    const finalAnswer = (answerText || currentAnswer || "").trim();
    if (!skipped && !finalAnswer) {
      toast.error("Please type or speak your answer before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.post(`/interviews/${session._id}/answer`, {
        answer: finalAnswer,
        skipped,
        timeSpentSeconds: timeSpent || secondsElapsed,
      });

      setSession(res.data.session);
      setCurrentAnswer("");

      if (res.data.completed) {
        setStage("report");
        toast.success("Interview completed! Generating evaluation report...");
      } else {
        toast.success("Answer recorded!");
      }
    } catch (err) {
      toast.error("Failed to submit answer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEndEarly = async () => {
    if (!session) return;
    try {
      const res = await api.post(`/interviews/${session._id}/end`);
      setSession(res.data);
      setStage("report");
      toast("Interview ended early.", { icon: "⏱️" });
    } catch (err) {
      toast.error("Failed to end interview.");
    }
  };

  const handleDeleteSession = async (sessionId) => {
    try {
      await api.delete(`/interviews/${sessionId}`);
      toast.success("Interview session and report deleted");
      setSession(null);
      setStage("setup");
    } catch (err) {
      toast.error("Failed to delete interview session");
    }
  };

  const handleExportMarkdown = async () => {
    if (!session) return;
    try {
      const res = await api.get(`/interviews/${session._id}/export`, { responseType: "blob" });
      const blob = new Blob([res.data], { type: "text/markdown" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Mock_Interview_${session.role.replace(/\s+/g, "_")}.md`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      toast.success("Report downloaded as Markdown (.md)!");
    } catch (err) {
      toast.error("Failed to download report.");
    }
  };

  // Speech-to-Text Voice Handler
  const toggleSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Voice speech recognition is not supported in this browser.");
      return;
    }

    if (isRecording) {
      setIsRecording(false);
    } else {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsRecording(true);
          toast.success("Listening... Speak your answer now 🎙️");
        };

        recognition.onresult = (event) => {
          let transcript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          if (transcript) {
            setCurrentAnswer((prev) => (prev ? prev + " " + transcript : transcript));
          }
        };

        recognition.onerror = () => setIsRecording(false);
        recognition.onend = () => setIsRecording(false);

        recognition.start();
      } catch (err) {
        setIsRecording(false);
      }
    }
  };

  const formatTimer = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const currentQObj = session?.questions?.[session?.currentQuestionIndex] || {
    question: "Welcome! To start off, please introduce yourself and your background.",
    category: "Technical",
    roundName: "HR & Introduction",
  };

  const handleLoadStarterCode = () => {
    if (currentQObj.codeProblem?.initialCode) {
      setCurrentAnswer(currentQObj.codeProblem.initialCode);
      toast.success("Starter template code loaded!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 z-50 animate-in fade-in duration-200">
      <div className={`bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col theme-transition ${stage === "live" ? "max-w-6xl h-[92vh]" : "max-w-3xl max-h-[92vh]"}`}>
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] shrink-0 bg-[#212121]/60 dark:bg-[#212121]/60 light:bg-[#f7f7f8]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400">
              <Brain size={20} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-zinc-900 tracking-tight flex items-center gap-2">
                VEXIS PRO AI Interview & Career Coach
                {stage === "live" && session?.pressureMode && (
                  <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/40 px-2 py-0.5 rounded-full font-mono uppercase font-bold flex items-center gap-1">
                    <Flame size={11} /> Pressure Mode
                  </span>
                )}
              </h2>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                {stage === "setup" && "Configure target role & multi-round parameters"}
                {stage === "live" && `Target Role: ${session?.role} | ${session?.experience} Level`}
                {stage === "report" && `Comprehensive Evaluation Report for ${session?.role}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {stage === "report" && (
              <button
                onClick={handleExportMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition"
                title="Download Report (.md)"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Export (.md)</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black p-1.5 rounded-xl hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-200 transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          
          {/* STAGE 1: SETUP SCREEN */}
          {stage === "setup" && (
            <div className="space-y-6">
              {/* Mandatory Role Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
                  Target Job Role <span className="text-emerald-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                      if (e.target.value.trim()) setValidationError("");
                    }}
                    placeholder="e.g. Associate Consultant, Java Developer, Data Scientist..."
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-2xl px-4 py-3 text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder-zinc-500 outline-none focus:border-emerald-500 transition font-medium"
                  />
                  <Target size={18} className="absolute right-4 top-3.5 text-zinc-500" />
                </div>

                {validationError && (
                  <div className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1">
                    <AlertCircle size={14} />
                    {validationError}
                  </div>
                )}

                {/* Role Suggestion Chips */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className="text-[11px] text-zinc-500 self-center mr-1">Popular:</span>
                  {popularRoles.map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r);
                        setValidationError("");
                      }}
                      className={`text-xs px-2.5 py-1 rounded-xl transition border ${
                        role === r
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-semibold"
                          : "bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 text-zinc-400 dark:text-zinc-400 light:text-zinc-700 border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-300 hover:text-white dark:hover:text-white light:hover:text-black"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Setup Configuration Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Experience Level */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
                    Experience Level
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3 py-2.5 text-zinc-200 dark:text-zinc-200 light:text-zinc-900 outline-none"
                  >
                    <option value="Fresher">Fresher / Entry Level</option>
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years (Senior)</option>
                  </select>
                </div>

                {/* Initial Difficulty */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
                    Initial Difficulty
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3 py-2.5 text-zinc-200 dark:text-zinc-200 light:text-zinc-900 outline-none"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium (Adaptive)</option>
                    <option value="Hard">Hard / Challenging</option>
                    <option value="Advanced">Advanced (FAANG Level)</option>
                  </select>
                </div>

                {/* Number of Questions */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800">
                    Questions & Duration
                  </label>
                  <select
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(e.target.value)}
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3 py-2.5 text-zinc-200 dark:text-zinc-200 light:text-zinc-900 outline-none"
                  >
                    <option value={5}>5 Questions (Quick Check)</option>
                    <option value={10}>10 Questions (Standard)</option>
                    <option value={15}>15 Questions (Full Multi-Round)</option>
                    <option value={20}>20 Questions (Deep Assessment)</option>
                  </select>
                </div>

                {/* Interview Mode Selector */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800 flex items-center gap-1.5">
                    <Brain size={14} className="text-emerald-400" /> Interview Simulator Mode
                  </label>
                  <select
                    value={selectedMode}
                    onChange={(e) => {
                      setSelectedMode(e.target.value);
                      if (e.target.value === "Pressure") setPressureMode(true);
                      else setPressureMode(false);
                    }}
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3 py-2.5 text-zinc-200 dark:text-zinc-200 light:text-zinc-900 outline-none font-semibold"
                  >
                    <option value="Standard">Standard Mode (Realistic Interview)</option>
                    <option value="Pressure">Pressure Mode (Strict Probing & Time Pressure)</option>
                    <option value="Practice">Practice Mode (Forgiving & Coaching Hints)</option>
                  </select>
                </div>

                {/* Interviewer Personality Selector */}
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-cyan-400" /> Interviewer Personality Style
                  </label>
                  <select
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3 py-2.5 text-zinc-200 dark:text-zinc-200 light:text-zinc-900 outline-none font-medium"
                  >
                    <option value="Professional">Professional (Balanced, Objective & Direct)</option>
                    <option value="Friendly">Friendly (Encouraging, Conversational & Supportive)</option>
                    <option value="Strict">Strict (Challenging Probing & Zero Ambiguity)</option>
                    <option value="Technical Expert">Technical Expert (Deep Architecture & Code Focus)</option>
                    <option value="Consulting Interviewer">Consulting Interviewer (Structured Framework & Case Probing)</option>
                  </select>
                </div>
              </div>

              {/* EXPANDABLE RESUME & JOB DESCRIPTION CONTEXT PANEL */}
              <div className="border border-zinc-800 rounded-2xl bg-[#1e1e1e] overflow-hidden text-xs">
                <button
                  type="button"
                  onClick={() => setShowContextInputs(!showContextInputs)}
                  className="w-full px-4 py-3 bg-[#242424] hover:bg-[#2a2a2a] text-zinc-300 font-semibold flex items-center justify-between transition"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen size={15} className="text-emerald-400" />
                    <span>Optional: Provide Resume & Job Description Context</span>
                  </span>
                  <span className="text-emerald-400 text-xs font-bold">
                    {showContextInputs ? "Collapse ▲" : "Expand +"}
                  </span>
                </button>

                {showContextInputs && (
                  <div className="p-4 space-y-4 border-t border-zinc-800 animate-in fade-in">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-zinc-300">
                        Paste Resume Text / Key Highlights
                      </label>
                      <textarea
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        placeholder="e.g. Developed REST APIs using Spring Boot and PostgreSQL. Optimized query performance by 40%..."
                        rows={3}
                        className="w-full bg-[#141414] border border-zinc-700 rounded-xl p-3 text-zinc-200 placeholder-zinc-500 outline-none focus:border-emerald-500 transition text-xs custom-scrollbar"
                      />
                      <p className="text-[10px] text-zinc-500">
                        The interviewer will cross-examine technologies, projects, and claims in your resume.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-zinc-300">
                        Paste Job Description (JD) Requirements
                      </label>
                      <textarea
                        value={jobDescriptionText}
                        onChange={(e) => setJobDescriptionText(e.target.value)}
                        placeholder="e.g. Required Skills: Java 17, Spring Boot, Microservices, SQL, System Design, REST APIs..."
                        rows={3}
                        className="w-full bg-[#141414] border border-zinc-700 rounded-xl p-3 text-zinc-200 placeholder-zinc-500 outline-none focus:border-emerald-500 transition text-xs custom-scrollbar"
                      />
                      <p className="text-[10px] text-zinc-500">
                        The AI interviewer will create a live requirement checklist and ensure key skills are assessed.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* PRE-INTERVIEW CHECK BANNER */}
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-purple-300 flex items-center gap-1.5">
                    <Volume2 size={15} />
                    PRE-INTERVIEW CHECK: Introduction Coach Status
                  </div>
                  <p className="text-zinc-300 text-[11px]">
                    Your spoken self-introduction will be used to calibrate your Round 1 interview opening.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsIntroCoachOpen(true)}
                  className="px-3.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition text-xs shrink-0 flex items-center gap-1 shadow-xs"
                >
                  <Volume2 size={14} />
                  Practice Intro
                </button>
              </div>

              {/* Start Interview Action Button */}
              <button
                onClick={handleStartInterview}
                disabled={isStarting}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-950 text-white font-bold rounded-2xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 text-sm"
              >
                {isStarting ? (
                  <>
                    <Sparkles size={16} className="animate-spin" />
                    Generating Dynamic Multi-Round Roadmap for {role}...
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    Start Multi-Round AI Interview
                  </>
                )}
              </button>
            </div>
          )}

          {/* STAGE 2: REAL INTERVIEW SIMULATOR ROOM */}
          {stage === "live" && session && (
            <div className="-m-6 h-[88vh]">
              <RealInterviewRoom
                session={session}
                onSubmitAnswer={handleSubmitAnswer}
                onEndInterview={handleEndEarly}
                onGenerateAssessment={() => setStage("report")}
                isSubmitting={isSubmitting}
              />
            </div>
          )}

          {/* STAGE 3: COMPREHENSIVE FINAL EVALUATION REPORT */}
          {stage === "report" && session && (
            <InterviewReport
              session={session}
              onRestartFull={() => {
                setSession(null);
                setStage("setup");
              }}
              onTargetedPractice={(customCat) => handleStartInterview(customCat)}
              onDeleteSession={handleDeleteSession}
            />
          )}
        </div>
      </div>
    </div>
  );
}
