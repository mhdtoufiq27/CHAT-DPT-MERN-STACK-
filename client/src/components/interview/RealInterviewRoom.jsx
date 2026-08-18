import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Square,
  Play,
  RotateCcw,
  Send,
  Volume2,
  VolumeX,
  Clock,
  Flame,
  Award,
  AlertCircle,
  Code2,
  Database,
  Sparkles,
  ArrowRight,
  Pause,
  SkipForward,
  LogOut,
  HelpCircle,
  Layers,
} from "lucide-react";
import InterviewerAvatar from "./InterviewerAvatar";
import CandidateCamera from "./CandidateCamera";
import { useInterviewerVoice } from "../../hooks/useInterviewerVoice";
import toast from "react-hot-toast";

export default function RealInterviewRoom({
  session,
  onSubmitAnswer,
  onEndInterview,
  onGenerateAssessment,
  isSubmitting,
}) {
  const {
    speak,
    pause,
    resume,
    stop: stopVoice,
    isSpeaking: isTtsSpeaking,
    isPaused: isTtsPaused,
    hasVoiceEnabled,
    setHasVoiceEnabled,
  } = useInterviewerVoice();

  // Completion State
  const [isFinished, setIsFinished] = useState(false);

  // Avatar & Camera State
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [avatarState, setAvatarState] = useState("Idle"); // 'Idle' | 'Listening' | 'Speaking' | 'Thinking'

  // Answer & STT State
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [sttErrorMessage, setSttErrorMessage] = useState("");
  const recognitionRef = useRef(null);

  // Timers & Silence Prompt State
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [questionSeconds, setQuestionSeconds] = useState(0);
  const [showSilencePrompt, setShowSilencePrompt] = useState(false);

  const currentQIndex = session?.currentQuestionIndex || 0;
  const currentQObj = session?.questions?.[currentQIndex] || {
    question: "Welcome! Please introduce yourself and your technical background.",
    category: "Technical",
    roundName: "HR & Introduction",
  };

  const totalQuestions = session?.numQuestions || 15;
  const currentRoundName = currentQObj.roundName || "Technical Round";
  const sessionRole = session?.role || "Associate Consultant";
  const sessionPersonality = session?.personality || "Professional";
  const sessionMode = session?.mode || (session?.pressureMode ? "Pressure" : "Standard");
  const latestAnalysis = session?.transcript?.[session.transcript.length - 1]?.analysis;
  const interviewerReaction = latestAnalysis?.interviewerReaction || session?.interviewerGreeting;
  const decisionAction = latestAnalysis?.decisionAction || "Follow-up";
  const jdChecklist = session?.jdSkillsChecklist || [];

  // Overall & Question Timer Intervals
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
      setQuestionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 30-Second Silence Detection Effect
  useEffect(() => {
    if (questionSeconds === 30 && !currentAnswer.trim() && !isRecording && !isSubmitting) {
      setShowSilencePrompt(true);
      setAvatarState("Speaking");
      speak("Take your time. Would you like me to repeat the question?", () => {
        setAvatarState("Idle");
      });
    }
  }, [questionSeconds, currentAnswer, isRecording, isSubmitting]);

  // Reset Question Timer on Question Change
  useEffect(() => {
    setQuestionSeconds(0);
    setCurrentAnswer("");
    setSttErrorMessage("");
    setShowSilencePrompt(false);

    // Automatically speak Question via TTS when a new question arrives
    const promptToRead = currentQObj.question;
    setAvatarState("Speaking");
    speak(promptToRead, () => {
      setAvatarState("Idle");
    });
  }, [currentQIndex, currentQObj.question]);

  // STT Recording Duration Timer
  useEffect(() => {
    let recTimer;
    if (isRecording) {
      recTimer = setInterval(() => setRecordingSeconds((prev) => prev + 1), 1000);
    } else {
      setRecordingSeconds(0);
    }
    return () => clearInterval(recTimer);
  }, [isRecording]);

  // Handle Speech Recognition (Microphone)
  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Speech recognition is not supported in this browser. Please use the text input below.");
      return;
    }

    if (isMicMuted) {
      toast.error("Microphone is muted. Please unmute mic before recording.");
      return;
    }

    setSttErrorMessage("");
    stopVoice(); // Pause AI speech when candidate starts speaking

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsRecording(true);
        setAvatarState("Listening");
        toast.success("Listening... Speak your answer now 🎤");
      };

      recognition.onresult = (event) => {
        let transcriptText = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcriptText += event.results[i][0].transcript;
        }
        if (transcriptText) {
          setCurrentAnswer((prev) => (prev ? prev + " " + transcriptText : transcriptText));
        }
      };

      recognition.onerror = (event) => {
        console.warn("[STT Error]:", event.error);
        setIsRecording(false);
        setAvatarState("Idle");
        if (event.error !== "no-speech") {
          setSttErrorMessage("Unable to understand the recording. Please try again.");
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
        setAvatarState("Idle");
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error("[STT Start Error]:", err);
      setIsRecording(false);
      setAvatarState("Idle");
      setSttErrorMessage("Unable to understand the recording. Please try again.");
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    setAvatarState("Idle");
  };

  const handleReRecord = () => {
    stopRecording();
    setCurrentAnswer("");
    setSttErrorMessage("");
  };

  const handleSubmit = (skipped = false) => {
    stopRecording();
    stopVoice();
    setAvatarState("Thinking");
    onSubmitAnswer(currentAnswer, skipped, questionSeconds);
  };

  const formatTimer = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEndEarlyClick = async () => {
    setIsFinished(true);
    if (onEndInterview) onEndInterview();
  };

  if (isFinished || (session && session.status === "completed" && !session.showingReport)) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#141414] rounded-2xl space-y-6 animate-in fade-in duration-300">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-2xl">
          <Award size={40} />
        </div>

        <div className="space-y-2 max-w-md">
          <h2 className="text-2xl font-black text-white uppercase tracking-wide">
            INTERVIEW COMPLETE
          </h2>
          <p className="text-sm text-zinc-300">
            "Thank you. Your interview has been completed."
          </p>
        </div>

        <button
          onClick={onGenerateAssessment}
          className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg shadow-emerald-600/30 flex items-center gap-2"
        >
          <Sparkles size={18} />
          <span>[ Generate Assessment ]</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#121212] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-white rounded-2xl overflow-hidden">
      {/* 1. ROOM TOP HEADER BAR */}
      <div className="px-4 sm:px-6 py-3 bg-[#1a1a1a] border-b border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3 shrink-0">
        {/* Left: Role & Round Info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-sm shadow-md">
            Q{currentQIndex + 1}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                VEXIS PRO Interview Arena • {sessionRole}
              </h2>
              <span
                className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${
                  sessionMode === "Pressure"
                    ? "bg-red-500/20 text-red-400 border-red-500/40"
                    : sessionMode === "Practice"
                    ? "bg-purple-500/20 text-purple-400 border-purple-500/40"
                    : "bg-blue-500/20 text-blue-400 border-blue-500/40"
                }`}
              >
                {sessionMode === "Pressure" ? "🔥 Pressure Mode" : sessionMode === "Practice" ? "🎓 Practice Mode" : "Standard Mode"}
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Action: {decisionAction}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 flex items-center gap-2 mt-0.5">
              <span>Round: <strong className="text-zinc-200">{currentRoundName}</strong></span>
              <span>•</span>
              <span>Question: <strong className="text-emerald-400">{currentQIndex + 1} / {totalQuestions}</strong></span>
            </p>
          </div>
        </div>

        {/* Right: Timers & End Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-[#242424] border border-[#333333] px-3.5 py-1.5 rounded-2xl text-xs">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Clock size={13} className="text-emerald-400" />
              <span className="font-mono font-semibold">{formatTimer(totalSeconds)}</span>
              <span className="text-[10px] text-zinc-500">Total</span>
            </div>
            <span className="text-zinc-700">|</span>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span className="font-mono font-semibold text-amber-400">{formatTimer(questionSeconds)}</span>
              <span className="text-[10px] text-zinc-500">Question</span>
            </div>
          </div>

          <button
            onClick={onEndInterview}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold transition"
          >
            <LogOut size={13} />
            <span>End Interview</span>
          </button>
        </div>
      </div>

      {/* 2. MAIN INTERVIEW ROOM CONTENT GRID */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 custom-scrollbar">
        {/* LEFT COLUMN: AI Avatar & Spoken Reactions (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <InterviewerAvatar
            state={avatarState}
            role={sessionRole}
            personality={sessionPersonality}
            spokenText={interviewerReaction || currentQObj.question}
            hasVoiceEnabled={hasVoiceEnabled}
            onReplayVoice={() => {
              setAvatarState("Speaking");
              speak(currentQObj.question, () => setAvatarState("Idle"));
            }}
          />

          {/* Voice Speech Audio Controls */}
          <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-2xl p-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHasVoiceEnabled(!hasVoiceEnabled)}
                className={`p-2 rounded-xl transition ${
                  hasVoiceEnabled ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-500"
                }`}
                title={hasVoiceEnabled ? "Mute AI Voice" : "Enable AI Voice"}
              >
                {hasVoiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <span className="text-zinc-300 font-medium text-xs">
                {hasVoiceEnabled ? "AI Voice Audio Active" : "AI Voice Muted"}
              </span>
            </div>

            {hasVoiceEnabled && (
              <div className="flex items-center gap-1">
                {isTtsSpeaking && !isTtsPaused && (
                  <button
                    onClick={pause}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-[11px] font-medium flex items-center gap-1"
                  >
                    <Pause size={12} /> Pause
                  </button>
                )}
                {isTtsPaused && (
                  <button
                    onClick={resume}
                    className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-medium flex items-center gap-1"
                  >
                    <Play size={12} /> Resume
                  </button>
                )}
                <button
                  onClick={stopVoice}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 text-[11px] font-medium flex items-center gap-1"
                >
                  <SkipForward size={12} /> Skip Voice
                </button>
              </div>
            )}
          </div>

          {/* Candidate Optional Camera Video Stream Container */}
          <CandidateCamera isCameraOn={isCameraOn} onToggleCamera={setIsCameraOn} />

          {/* Job Description Skill Requirement Coverage Checklist */}
          {jdChecklist && jdChecklist.length > 0 && (
            <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-2xl p-3.5 space-y-2 text-xs shadow-xl">
              <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                <span>JD Requirement Coverage</span>
                <span className="text-emerald-400 font-mono">
                  {jdChecklist.filter((i) => i.covered).length} / {jdChecklist.length} Assessed
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {jdChecklist.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-medium border flex items-center gap-1 transition ${
                      item.covered
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                        : "bg-zinc-900 text-zinc-500 border-zinc-800"
                    }`}
                  >
                    <span>{item.skill}</span>
                    <span className="font-bold">{item.covered ? "✓" : "○"}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Question Display & Answer Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* CURRENT QUESTION PROMINENT DISPLAY */}
          <div className="bg-[#1e1e1e] border border-[#2f2f2f] rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles size={14} /> Current Question #{currentQIndex + 1}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 font-mono">
                Category: {currentQObj.category || "Technical"}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white leading-relaxed mb-4">
              "{currentQObj.question}"
            </h3>

            {/* Optional Coding / SQL Starter Template view if applicable */}
            {currentQObj.codeProblem && (
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-xs font-mono text-emerald-300 space-y-2 mb-2">
                <div className="flex items-center justify-between text-zinc-400 text-[11px] font-sans pb-1 border-b border-zinc-800">
                  <span className="flex items-center gap-1 font-bold">
                    <Code2 size={13} /> {currentQObj.codeProblem.title}
                  </span>
                  <button
                    onClick={() => {
                      if (currentQObj.codeProblem.initialCode) {
                        setCurrentAnswer(currentQObj.codeProblem.initialCode);
                        toast.success("Starter code loaded into text editor!");
                      }
                    }}
                    className="text-emerald-400 hover:underline font-medium text-[10px]"
                  >
                    Load Starter Template
                  </button>
                </div>
                <p className="text-zinc-300 font-sans text-xs">{currentQObj.codeProblem.description}</p>
                {currentQObj.codeProblem.initialCode && (
                  <pre className="p-2 rounded bg-black/60 overflow-x-auto text-[11px] text-zinc-200">
                    {currentQObj.codeProblem.initialCode}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* CANDIDATE ANSWER INPUT & SPEECH CONTROLS */}
          <div className="flex-1 bg-[#1e1e1e] border border-[#2f2f2f] rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-4">
            <div>
              {/* Silence / No-Answer Inactivity Prompt Banner */}
              {showSilencePrompt && (
                <div className="mb-3 bg-amber-950/40 border border-amber-500/40 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-200 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <HelpCircle size={16} className="text-amber-400 shrink-0 animate-pulse" />
                    <span>Take your time. Would you like me to repeat the question?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setAvatarState("Speaking");
                        speak(currentQObj.question, () => setAvatarState("Idle"));
                      }}
                      className="px-2.5 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-semibold border border-amber-500/30 text-[11px] transition"
                    >
                      Repeat Question
                    </button>
                    <button
                      onClick={() => handleSubmit(true)}
                      className="px-2.5 py-1 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold border border-zinc-700 text-[11px] transition"
                    >
                      Skip Question
                    </button>
                    <button
                      onClick={() => setShowSilencePrompt(false)}
                      className="px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] transition shadow-xs"
                    >
                      Continue Answering
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <span>Your Spoken Answer / Transcript</span>
                  {isRecording && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 font-normal">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      Recording ({formatTimer(recordingSeconds)})
                    </span>
                  )}
                </label>

                {/* Mic Mute Toggle */}
                <button
                  onClick={() => setIsMicMuted(!isMicMuted)}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-xl border flex items-center gap-1 transition ${
                    isMicMuted
                      ? "bg-red-500/20 text-red-400 border-red-500/40"
                      : "bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-white"
                  }`}
                >
                  {isMicMuted ? <MicOff size={13} /> : <Mic size={13} />}
                  <span>{isMicMuted ? "Mic Muted" : "Mic Unmuted"}</span>
                </button>
              </div>

              {/* Text Fallback & Live Transcript Box */}
              <div className="relative">
                <textarea
                  value={currentAnswer}
                  onChange={(e) => {
                    setCurrentAnswer(e.target.value);
                    if (sttErrorMessage) setSttErrorMessage("");
                  }}
                  placeholder={
                    isRecording
                      ? "Listening to your voice... Speak your response clearly."
                      : "Click 'Start Answer 🎤' to speak your answer or type manually here..."
                  }
                  rows={5}
                  className="w-full bg-[#181818] border border-[#333333] rounded-2xl p-4 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-emerald-500 transition font-sans resize-none custom-scrollbar"
                />
              </div>

              {/* Speech Recognition Error Feedback */}
              {sttErrorMessage && (
                <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-950/30 border border-amber-500/30 px-3.5 py-2 rounded-xl mt-2">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{sttErrorMessage}</span>
                </div>
              )}
            </div>

            {/* ACTION CONTROLS TOOLBAR */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#2e2e2e]">
              <div className="flex items-center gap-2">
                {!isRecording ? (
                  <button
                    onClick={startRecording}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition shadow-lg shadow-cyan-600/20 disabled:opacity-50"
                  >
                    <Mic size={16} />
                    <span>Start Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition shadow-lg shadow-red-600/20 animate-pulse"
                  >
                    <Square size={15} />
                    <span>Stop Answer ({formatTimer(recordingSeconds)})</span>
                  </button>
                )}

                {currentAnswer && (
                  <button
                    onClick={handleReRecord}
                    disabled={isSubmitting}
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition border border-zinc-700"
                  >
                    <RotateCcw size={14} />
                    <span>Re-record</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSubmit(true)}
                  disabled={isSubmitting}
                  className="px-3.5 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white text-xs font-semibold transition border border-zinc-700"
                >
                  Skip Question
                </button>

                <button
                  onClick={() => handleSubmit(false)}
                  disabled={isSubmitting || (!currentAnswer.trim() && !isRecording)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Evaluating...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Answer</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
