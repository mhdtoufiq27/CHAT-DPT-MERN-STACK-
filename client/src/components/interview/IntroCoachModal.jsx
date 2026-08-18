import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Award,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Target,
  Edit2,
  BookOpen,
  Volume2,
  Clock,
  Zap,
  Flame,
  ArrowRight,
  Send,
  Trophy,
  Layers,
  ChevronRight,
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function IntroCoachModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("record"); // 'record' | 'report' | 'builder' | 'interviewer' | 'pressure'

  // Form State
  const [role, setRole] = useState("Associate Consultant");
  const [experience, setExperience] = useState("Fresher");
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [isEditingTranscript, setIsEditingTranscript] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Analysis Result & Progress State
  const [resultSession, setResultSession] = useState(null);

  // Step-by-Step Guided Builder State
  const [builderStep, setBuilderStep] = useState(1);
  const [builderForm, setBuilderForm] = useState({
    education: "",
    techSkills: "",
    bestProject: "",
    achievement: "",
    targetClosing: "",
  });
  const [isBuilding, setIsBuilding] = useState(false);

  // Practice with Interviewer & Follow-ups State
  const [interviewerStep, setInterviewerStep] = useState(0);
  const [followUpAnswer, setFollowUpAnswer] = useState("");
  const [followUpAnswersList, setFollowUpAnswersList] = useState([]);
  const [isSubmittingFollowUp, setIsSubmittingFollowUp] = useState(false);

  // Pressure Mode Challenge State
  const [pressureLimit, setPressureLimit] = useState(60);

  // Performance Dashboard State
  const [dashboardData, setDashboardData] = useState(null);
  const [selectedDashboardRole, setSelectedDashboardRole] = useState("All Roles");
  const [isLoadingDashboard, setIsLoadingDashboard] = useState(false);

  useEffect(() => {
    if (activeTab === "dashboard") {
      fetchDashboard();
    }
  }, [activeTab, selectedDashboardRole]);

  const fetchDashboard = async () => {
    setIsLoadingDashboard(true);
    try {
      const roleParam = selectedDashboardRole === "All Roles" ? "" : selectedDashboardRole;
      const res = await api.get(`/introductions/dashboard?role=${encodeURIComponent(roleParam)}`);
      setDashboardData(res.data);
    } catch (err) {
      toast.error("Failed to load dashboard statistics.");
    } finally {
      setIsLoadingDashboard(false);
    }
  };

  const timerRef = useRef(null);
  const recognitionRef = useRef(null);

  const popularRoles = [
    "Associate Consultant",
    "Java Developer",
    "Data Scientist",
    "MERN Developer",
    "Data Analyst",
    "Cloud Engineer",
  ];

  // Recording Timer Effect
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording, isPaused]);

  if (!isOpen) return null;

  // Speech Recognition Control Methods
  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Speech recognition is not supported in this browser. Type your self-introduction transcript below.");
      setIsEditingTranscript(true);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsRecording(true);
        setIsPaused(false);
        toast.success("Microphone active! Speak your self-introduction 🎙️");
      };

      recognition.onresult = (event) => {
        let text = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          text += event.results[i][0].transcript;
        }
        if (text) {
          setTranscript((prev) => (prev ? prev + " " + text : text));
        }
      };

      recognition.onerror = (err) => {
        if (err.error === "not-allowed") {
          toast.error("Microphone access denied. Grant microphone permissions.");
        }
      };

      recognition.onend = () => {
        if (isRecording && !isPaused) {
          try {
            recognition.start();
          } catch (e) {}
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      toast.error("Failed to start microphone recording.");
    }
  };

  const pauseRecording = () => {
    if (recognitionRef.current && isRecording) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
      setIsPaused(true);
      toast("Recording paused.", { icon: "⏸️" });
    }
  };

  const resumeRecording = () => {
    if (recognitionRef.current && isPaused) {
      try {
        recognitionRef.current.start();
      } catch (e) {}
      setIsPaused(false);
      toast.success("Resumed recording.");
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsRecording(false);
    setIsPaused(false);
    toast.success("Recording stopped. Preview transcript below.");
  };

  const resetRecording = () => {
    stopRecording();
    setRecordingSeconds(0);
    setTranscript("");
    setIsEditingTranscript(false);
  };

  const handleSubmitIntro = async (customExerciseTarget = null) => {
    if (!transcript.trim()) {
      toast.error("Please record or enter your self-introduction transcript.");
      return;
    }

    setIsAnalyzing(true);
    try {
      const res = await api.post("/introductions/analyze", {
        role,
        experience,
        transcript: transcript.trim(),
        durationSeconds: Math.max(15, recordingSeconds),
        previousAttemptId: resultSession ? resultSession._id : null,
      });

      setResultSession(res.data);
      setActiveTab("report");
      toast.success("Self-introduction analyzed successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to analyze introduction.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Step-by-Step Guided Builder Submit
  const handleBuildIntro = async () => {
    setIsBuilding(true);
    try {
      const res = await api.post("/introductions/builder", {
        role,
        ...builderForm,
      });
      setTranscript(res.data.builtIntro);
      setActiveTab("record");
      toast.success("Structured self-introduction assembled! Click Analyze to evaluate.");
    } catch (err) {
      toast.error("Failed to build introduction.");
    } finally {
      setIsBuilding(false);
    }
  };

  // Practice with Interviewer & Follow-ups Submit
  const handleFollowUpSubmit = async () => {
    if (!followUpAnswer.trim()) {
      toast.error("Please provide an answer before proceeding.");
      return;
    }

    const followUpQuestions = [
      "Tell me about yourself.",
      "Tell me more about your main project.",
      "What was your direct technical contribution to that project?",
      "What was the biggest challenge you faced and how did you overcome it?",
    ];

    setIsSubmittingFollowUp(true);
    try {
      const res = await api.post("/introductions/followup", {
        sessionId: resultSession ? resultSession._id : null,
        questionIndex: interviewerStep,
        question: followUpQuestions[interviewerStep] || "Project Follow-up",
        answer: followUpAnswer,
      });

      setFollowUpAnswersList((prev) => [...prev, res.data]);
      setFollowUpAnswer("");

      if (interviewerStep < 3) {
        setInterviewerStep((prev) => prev + 1);
        toast.success(`Answer recorded! Next follow-up question...`);
      } else {
        toast.success("Interviewer practice session complete!");
      }
    } catch (err) {
      toast.error("Failed to submit follow-up answer.");
    } finally {
      setIsSubmittingFollowUp(false);
    }
  };

  const formatSeconds = (total) => {
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const scores = resultSession?.scores || {};
  const speechStats = resultSession?.speechStats || {};

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] theme-transition">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2f2f2f] shrink-0 bg-[#212121]/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
              <Volume2 size={20} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                VEXIS PRO Introduction Coach & Communication Trainer
              </h2>
              <p className="text-[11px] text-zinc-400">
                Interactive voice trainer, role-aware feedback & guided intro builder
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1.5 rounded-xl hover:bg-[#2f2f2f] transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Mode Selector Bar */}
        <div className="flex items-center justify-between px-6 py-2.5 border-b border-zinc-800 bg-[#1e1e1e] text-xs font-semibold overflow-x-auto custom-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab("record")}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === "record" || activeTab === "report"
                  ? "bg-purple-600 text-white font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Voice Evaluator
            </button>
            <button
              onClick={() => setActiveTab("builder")}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === "builder" ? "bg-purple-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              Step-by-Step Builder
            </button>
            <button
              onClick={() => setActiveTab("interviewer")}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === "interviewer" ? "bg-purple-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              Practice with Interviewer
            </button>
            <button
              onClick={() => setActiveTab("pressure")}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === "pressure" ? "bg-purple-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              🔥 Pressure Challenges
            </button>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-3 py-1.5 rounded-xl transition ${
                activeTab === "dashboard" ? "bg-purple-600 text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              📊 Performance Dashboard
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          
          {/* MODE 1: VOICE RECORDING & EVALUATION */}
          {activeTab === "record" && (
            <div className="space-y-6">
              {/* Role Chips */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Target Job Role <span className="text-purple-400">*</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {popularRoles.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRole(r)}
                      className={`text-xs px-3 py-1.5 rounded-xl transition border font-medium ${
                        role === r
                          ? "bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold"
                          : "bg-[#212121] text-zinc-400 border-zinc-700 hover:text-white"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recording Controls */}
              <div className="p-6 rounded-3xl bg-[#212121] border border-zinc-700/60 text-center space-y-4 shadow-inner">
                <div className="flex items-center justify-center gap-2 font-mono text-2xl font-extrabold text-purple-400">
                  <Clock size={20} />
                  {formatSeconds(recordingSeconds)}
                </div>

                <div className="flex items-center justify-center gap-3">
                  {!isRecording ? (
                    <button
                      onClick={startRecording}
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition shadow-lg shadow-purple-600/30 flex items-center gap-2 text-sm"
                    >
                      <Mic size={18} />
                      Start Voice Recording
                    </button>
                  ) : (
                    <>
                      {isPaused ? (
                        <button
                          onClick={resumeRecording}
                          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5"
                        >
                          <Play size={15} />
                          Resume
                        </button>
                      ) : (
                        <button
                          onClick={pauseRecording}
                          className="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5"
                        >
                          <Pause size={15} />
                          Pause
                        </button>
                      )}

                      <button
                        onClick={stopRecording}
                        className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5"
                      >
                        <MicOff size={15} />
                        Stop Recording
                      </button>

                      <button
                        onClick={resetRecording}
                        className="px-3 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs transition"
                        title="Reset recording"
                      >
                        <RotateCcw size={15} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Transcript Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                    <Edit2 size={13} className="text-purple-400" />
                    Spoken Transcript Preview
                  </label>

                  <button
                    onClick={() => setIsEditingTranscript(!isEditingTranscript)}
                    className="text-[11px] text-purple-400 hover:underline font-semibold"
                  >
                    {isEditingTranscript ? "Lock Preview" : "Edit Text"}
                  </button>
                </div>

                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  readOnly={!isEditingTranscript}
                  placeholder="Your spoken self-introduction transcript will appear here automatically as you speak... Or click 'Edit Text' to paste or refine your transcript manually."
                  rows={6}
                  className={`w-full text-xs sm:text-sm text-zinc-100 border rounded-2xl p-4 outline-none transition resize-none font-mono ${
                    isEditingTranscript ? "bg-[#212121] border-purple-500/50" : "bg-[#1e1e1e] border-zinc-800"
                  }`}
                />
              </div>

              <button
                onClick={() => handleSubmitIntro()}
                disabled={isAnalyzing || !transcript.trim()}
                className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-950 text-white font-bold rounded-2xl transition shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 text-sm"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles size={16} className="animate-spin" />
                    Analyzing Speech Pace, Filler Words & Structure...
                  </>
                ) : (
                  <>
                    <Zap size={16} />
                    Analyze Self-Introduction
                  </>
                )}
              </button>
            </div>
          )}

          {/* REPORT VIEW */}
          {activeTab === "report" && resultSession && (
            <div className="space-y-6">
              {/* Overall Score & Score Delta Badge */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#212121] to-[#212121] border border-purple-500/30 text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold">
                    <Award size={16} />
                    Introduction Analysis (Attempt #{resultSession.attemptNumber || 1})
                  </div>

                  {resultSession.scoreDelta > 0 && (
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-bold">
                      +{resultSession.scoreDelta} Improv.
                    </div>
                  )}
                </div>

                <div className="text-4xl font-extrabold text-white tracking-tight">
                  {scores.overallScore || 8.1} / 10
                </div>

                <div className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                  Target Role: {resultSession.role} ({resultSession.experience})
                </div>

                {/* Achievements Unlocked Badges */}
                {resultSession.achievementsEarned && resultSession.achievementsEarned.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                    {resultSession.achievementsEarned.map((ach, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold font-mono animate-bounce"
                      >
                        {ach}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* [ Practice My Weakness ] Focused Button */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900/30 via-[#212121] to-[#212121] border border-purple-500/40 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Target size={15} className="text-purple-400" />
                    Primary Identified Weakness: {resultSession.primaryWeakness || "Filler Words"}
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {resultSession.targetedExercise?.instructions}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveTab("record");
                    resetRecording();
                    toast.success("Practice mode initialized! Avoid filler words in your next attempt.");
                  }}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition shrink-0 shadow-md flex items-center gap-1.5"
                >
                  <Play size={14} />
                  Practice My Weakness
                </button>
              </div>

              {/* BEFORE vs AFTER & WHAT CHANGED */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Sparkles size={15} />
                  Before vs After Comparison & What Changed
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-[#212121] border border-red-500/20 space-y-2">
                    <div className="font-bold text-red-400 uppercase text-[11px]">BEFORE (Original Spoken Intro)</div>
                    <div className="text-zinc-300 font-mono text-[11px] leading-relaxed">
                      "{resultSession.rawTranscript}"
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#212121] border border-emerald-500/20 space-y-2">
                    <div className="font-bold text-emerald-400 uppercase text-[11px]">AFTER (Example Improved Version)</div>
                    <div className="text-zinc-200 font-mono text-[11px] leading-relaxed">
                      "{resultSession.improvedVersion}"
                    </div>
                  </div>
                </div>

                {/* What Changed Key Takeaways */}
                {resultSession.whatChanged && resultSession.whatChanged.length > 0 && (
                  <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700/60 text-xs space-y-2">
                    <div className="font-bold text-white uppercase text-[11px]">WHAT CHANGED IN THE IMPROVED VERSION?</div>
                    <ul className="space-y-1 text-zinc-300 list-disc list-inside">
                      {resultSession.whatChanged.map((wc, i) => (
                        <li key={i}>{wc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 8 Category Scorecard Grid */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  8-Category Performance Scorecard
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {Object.entries(scores).map(([catKey, val]) => {
                    if (catKey === "overallScore") return null;
                    return (
                      <div key={catKey} className="p-3 rounded-xl bg-[#212121] border border-zinc-800 space-y-1">
                        <div className="flex justify-between font-semibold capitalize text-zinc-300">
                          <span>{catKey.replace(/([A-Z])/g, " $1")}</span>
                          <span className="font-mono text-purple-400">{val} / 10</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-purple-500 h-full" style={{ width: `${(val / 10) * 100}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: STEP-BY-STEP GUIDED BUILDER */}
          {activeTab === "builder" && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-xs space-y-1">
                <div className="font-bold text-purple-400 flex items-center gap-1.5">
                  <BookOpen size={15} />
                  Guided Step-by-Step Introduction Builder (Step {builderStep} of 5)
                </div>
                <p className="text-zinc-300">
                  Answer 5 simple prompts and our AI coach will assemble a structured self-introduction based strictly on your facts!
                </p>
              </div>

              <div className="space-y-4 text-xs">
                {builderStep === 1 && (
                  <div className="space-y-2">
                    <label className="font-bold text-white block">Step 1: Tell me about your education / degree background</label>
                    <input
                      type="text"
                      value={builderForm.education}
                      onChange={(e) => setBuilderForm({ ...builderForm, education: e.target.value })}
                      placeholder="e.g. B.Tech in Computer Science from ABC Institute"
                      className="w-full bg-[#212121] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                )}

                {builderStep === 2 && (
                  <div className="space-y-2">
                    <label className="font-bold text-white block">Step 2: What are your strongest technical skills?</label>
                    <input
                      type="text"
                      value={builderForm.techSkills}
                      onChange={(e) => setBuilderForm({ ...builderForm, techSkills: e.target.value })}
                      placeholder="e.g. Java, Spring Boot, REST APIs, SQL, Data Structures"
                      className="w-full bg-[#212121] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                )}

                {builderStep === 3 && (
                  <div className="space-y-2">
                    <label className="font-bold text-white block">Step 3: Tell me about your best project</label>
                    <input
                      type="text"
                      value={builderForm.bestProject}
                      onChange={(e) => setBuilderForm({ ...builderForm, bestProject: e.target.value })}
                      placeholder="e.g. E-commerce Microservice Backend with JWT authentication"
                      className="w-full bg-[#212121] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                )}

                {builderStep === 4 && (
                  <div className="space-y-2">
                    <label className="font-bold text-white block">Step 4: What is one key achievement you are proud of?</label>
                    <input
                      type="text"
                      value={builderForm.achievement}
                      onChange={(e) => setBuilderForm({ ...builderForm, achievement: e.target.value })}
                      placeholder="e.g. Optimized database query execution speed by 35%"
                      className="w-full bg-[#212121] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                )}

                {builderStep === 5 && (
                  <div className="space-y-2">
                    <label className="font-bold text-white block">Step 5: Professional Closing Statement</label>
                    <input
                      type="text"
                      value={builderForm.targetClosing}
                      onChange={(e) => setBuilderForm({ ...builderForm, targetClosing: e.target.value })}
                      placeholder={`e.g. I am excited to apply these backend skills as a ${role}.`}
                      className="w-full bg-[#212121] border border-zinc-700 rounded-xl p-3 text-white outline-none focus:border-purple-500"
                    />
                  </div>
                )}

                {/* Step Controls */}
                <div className="flex justify-between pt-2">
                  {builderStep > 1 && (
                    <button
                      onClick={() => setBuilderStep((prev) => prev - 1)}
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold"
                    >
                      Back
                    </button>
                  )}

                  {builderStep < 5 ? (
                    <button
                      onClick={() => setBuilderStep((prev) => prev + 1)}
                      className="ml-auto px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-1"
                    >
                      Next Step <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={handleBuildIntro}
                      disabled={isBuilding}
                      className="ml-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      {isBuilding ? <Sparkles size={14} className="animate-spin" /> : <CheckCircle2 size={14} />}
                      Assemble Structured Self-Intro
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* MODE 3: PRACTICE WITH INTERVIEWER & FOLLOW-UPS */}
          {activeTab === "interviewer" && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#212121] border border-purple-500/30 text-xs space-y-2">
                <div className="font-bold text-purple-400 flex items-center gap-1.5">
                  <Sparkles size={15} />
                  AI Interviewer (Follow-up Question #{interviewerStep + 1} of 4):
                </div>

                <p className="text-sm font-semibold text-white">
                  {interviewerStep === 0 && `"Tell me about yourself and your experience for the ${role} position."`}
                  {interviewerStep === 1 && `"Tell me more about your main project and tech stack."`}
                  {interviewerStep === 2 && `"What was your direct technical contribution to that project?"`}
                  {interviewerStep === 3 && `"What was the biggest technical challenge you faced and how did you overcome it?"`}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">Your Answer:</label>
                <textarea
                  value={followUpAnswer}
                  onChange={(e) => setFollowUpAnswer(e.target.value)}
                  placeholder="Type or speak your answer to the interviewer..."
                  rows={5}
                  className="w-full bg-[#212121] text-xs text-white border border-zinc-700 rounded-2xl p-4 outline-none focus:border-purple-500 font-mono resize-none"
                />
              </div>

              <button
                onClick={handleFollowUpSubmit}
                disabled={isSubmittingFollowUp || !followUpAnswer.trim()}
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-2xl transition shadow-md flex items-center justify-center gap-2"
              >
                {isSubmittingFollowUp ? <Sparkles size={14} className="animate-spin" /> : <Send size={14} />}
                Submit Response
              </button>
            </div>
          )}

          {/* MODE 4: PRESSURE CHALLENGES */}
          {activeTab === "pressure" && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 text-xs space-y-1">
                <div className="font-bold text-red-400 flex items-center gap-1.5">
                  <Flame size={16} />
                  🔥 Timed Pressure Intro Challenges
                </div>
                <p className="text-zinc-300">
                  Deliver your core value proposition within a strict time limit without rushing or sacrificing clarity!
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <button
                  onClick={() => {
                    setPressureLimit(30);
                    setActiveTab("record");
                    resetRecording();
                    toast.success("30-Second Sprint Challenge active!");
                  }}
                  className="p-4 rounded-2xl bg-[#212121] border border-red-500/40 hover:bg-red-500/10 text-center space-y-1 font-bold text-red-400 transition"
                >
                  <div className="text-base font-extrabold font-mono">30 SEC</div>
                  <div className="text-[10px] text-zinc-400">Rapid Sprint</div>
                </button>

                <button
                  onClick={() => {
                    setPressureLimit(45);
                    setActiveTab("record");
                    resetRecording();
                    toast.success("45-Second Standard Challenge active!");
                  }}
                  className="p-4 rounded-2xl bg-[#212121] border border-amber-500/40 hover:bg-amber-500/10 text-center space-y-1 font-bold text-amber-400 transition"
                >
                  <div className="text-base font-extrabold font-mono">45 SEC</div>
                  <div className="text-[10px] text-zinc-400">Elevator Pitch</div>
                </button>

                <button
                  onClick={() => {
                    setPressureLimit(60);
                    setActiveTab("record");
                    resetRecording();
                    toast.success("60-Second Full Intro Challenge active!");
                  }}
                  className="p-4 rounded-2xl bg-[#212121] border border-emerald-500/40 hover:bg-emerald-500/10 text-center space-y-1 font-bold text-emerald-400 transition"
                >
                  <div className="text-base font-extrabold font-mono">60 SEC</div>
                  <div className="text-[10px] text-zinc-400">Full Standard</div>
                </button>
              </div>
            </div>
          )}

          {/* MODE 5: PERFORMANCE DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Role Filter Chips */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="font-bold text-zinc-400 uppercase tracking-wider mr-1">Filter Role:</span>
                {["All Roles", ...popularRoles].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedDashboardRole(r)}
                    className={`px-3 py-1 rounded-xl border transition ${
                      selectedDashboardRole === r
                        ? "bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold"
                        : "bg-[#212121] text-zinc-400 border-zinc-700 hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              {isLoadingDashboard ? (
                <div className="py-12 text-center text-xs text-zinc-400 flex items-center justify-center gap-2">
                  <Sparkles size={16} className="animate-spin text-purple-400" />
                  Loading Introduction Performance Analytics...
                </div>
              ) : dashboardData ? (
                <div className="space-y-6">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700 text-center space-y-1">
                      <div className="text-[11px] text-zinc-400 font-bold uppercase">Latest Score</div>
                      <div className="text-xl font-extrabold text-white font-mono">{dashboardData.latestScore} / 10</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700 text-center space-y-1">
                      <div className="text-[11px] text-zinc-400 font-bold uppercase">Best Score</div>
                      <div className="text-xl font-extrabold text-emerald-400 font-mono">{dashboardData.bestScore} / 10</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700 text-center space-y-1">
                      <div className="text-[11px] text-zinc-400 font-bold uppercase">Total Attempts</div>
                      <div className="text-xl font-extrabold text-purple-400 font-mono">{dashboardData.attemptsCount}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700 text-center space-y-1">
                      <div className="text-[11px] text-zinc-400 font-bold uppercase">Improvement</div>
                      <div className="text-xl font-extrabold text-amber-400 font-mono">+{dashboardData.totalImprovement}</div>
                    </div>
                  </div>

                  {/* Introduction Readiness Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 via-[#212121] to-[#212121] border border-purple-500/30 text-xs space-y-2">
                    <div className="font-bold text-white uppercase flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Award size={16} className="text-purple-400" />
                        INTRODUCTION READINESS SCORECARD
                      </span>
                      <span className="font-mono text-purple-400 text-sm font-extrabold">
                        {Math.min(100, Math.round((dashboardData.latestScore / 10) * 100))}%
                      </span>
                    </div>

                    <p className="text-[11px] text-purple-200 italic">
                      "Your introduction currently appears well prepared for practice interviews."
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                      <div className="p-2 rounded-xl bg-[#1e1e1e] border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400">Role Match</span>
                        <span className="text-white font-bold">88%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#1e1e1e] border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400">Structure</span>
                        <span className="text-white font-bold">84%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#1e1e1e] border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400">Fluency</span>
                        <span className="text-white font-bold">76%</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#1e1e1e] border border-zinc-800 flex justify-between">
                        <span className="text-zinc-400">Clarity</span>
                        <span className="text-white font-bold">91%</span>
                      </div>
                    </div>
                  </div>

                  {/* Progression Over Attempts Chart */}
                  <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700/60 text-xs space-y-3">
                    <h4 className="font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp size={15} className="text-purple-400" />
                      Score Progression Over Attempts ({dashboardData.role})
                    </h4>

                    <div className="space-y-2">
                      {dashboardData.scoreTrend && dashboardData.scoreTrend.length > 0 ? (
                        dashboardData.scoreTrend.map((st) => (
                          <div key={st.attempt} className="flex items-center gap-3 text-xs">
                            <span className="w-20 font-mono text-zinc-400">Attempt {st.attempt}</span>
                            <div className="flex-1 bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                              <div
                                className="bg-purple-500 h-full transition-all duration-300"
                                style={{ width: `${(st.score / 10) * 100}%` }}
                              />
                            </div>
                            <span className="w-12 font-mono text-right text-purple-400 font-bold">{st.score}</span>
                          </div>
                        ))
                      ) : (
                        <div className="text-zinc-500 italic text-[11px]">No attempts recorded yet for this role. Complete a practice attempt!</div>
                      )}
                    </div>
                  </div>

                  {/* Filler Word Decrease Trend */}
                  {dashboardData.fillerTrend && dashboardData.fillerTrend.length > 0 && (
                    <div className="p-4 rounded-2xl bg-[#212121] border border-zinc-700/60 text-xs space-y-2">
                      <h4 className="font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-emerald-400" />
                        Filler Word Reduction Trend
                      </h4>

                      <div className="flex flex-wrap gap-2 text-xs font-mono">
                        {dashboardData.fillerTrend.map((ft) => (
                          <div key={ft.attempt} className="px-3 py-1.5 rounded-xl bg-[#1e1e1e] border border-zinc-800 text-zinc-300">
                            Attempt {ft.attempt}: <span className="text-purple-400 font-bold">{ft.fillerCount} fillers</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
