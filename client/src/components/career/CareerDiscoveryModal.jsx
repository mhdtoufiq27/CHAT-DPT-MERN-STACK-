import React, { useState } from "react";
import {
  X,
  Compass,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Award,
  Layers,
  ChevronRight,
  RefreshCw
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

const DISCOVERY_QUESTIONS = [
  {
    id: "problemPreference",
    question: "1. What type of technical work gives you the biggest rush when solved?",
    subtitle: "Select the domain you find naturally engaging.",
    options: [
      {
        value: "visual_ui",
        label: "Visual UIs & Interactive Web/Mobile Apps",
        desc: "Designing responsive frontend layouts, animations, and intuitive digital interfaces."
      },
      {
        value: "backend_apis",
        label: "Server Architecture, APIs & Databases",
        desc: "Building scalable backend endpoints, database models, business logic, and security."
      },
      {
        value: "data_ai",
        label: "Data Intelligence, Analytics & Machine Learning",
        desc: "Extracting insights from datasets, statistical forecasting, and training AI models."
      },
      {
        value: "cloud_devops",
        label: "Cloud Infrastructure, Containers & Automation",
        desc: "Orchestrating AWS/Azure infrastructure, CI/CD pipelines, and high-availability servers."
      },
      {
        value: "security",
        label: "Cybersecurity, Ethical Hacking & Defense",
        desc: "Auditing vulnerabilities, protecting network perimeters, and incident forensics."
      },
      {
        value: "systems_embedded",
        label: "Hardware Microcontrollers & Low-Level Systems",
        desc: "Programming microcontrollers (STM32), C/C++, IoT sensors, and RTOS firmware."
      }
    ]
  },
  {
    id: "mathComfort",
    question: "2. How comfortable are you with advanced mathematics and statistics?",
    subtitle: "Different careers have very different mathematical demands.",
    options: [
      {
        value: "high_math",
        label: "Very Comfortable (Linear Algebra, Calculus, Statistics)",
        desc: "Enjoys mathematical modeling, probability distributions, and algorithm complexity."
      },
      {
        value: "standard_logic",
        label: "Moderate (Standard Business Logic, Discrete Math & Algebra)",
        desc: "Comfortable with logical operations, Boolean algebra, and standard problem solving."
      },
      {
        value: "minimal_math",
        label: "Minimal Math (Focus on Coding, Design & Architecture)",
        desc: "Prefers building software systems, UIs, and workflows with minimal advanced math."
      }
    ]
  },
  {
    id: "workStyle",
    question: "3. What is your preferred day-to-day engineering work style?",
    subtitle: "How you like to spend your time during a work sprint.",
    options: [
      {
        value: "product_building",
        label: "Full Product Engineering",
        desc: "Shipping complete end-to-end features directly into users' hands."
      },
      {
        value: "data_investigation",
        label: "Data Investigation & Experimentation",
        desc: "Analyzing trends, testing statistical hypotheses, and visualizing key metrics."
      },
      {
        value: "system_architecture",
        label: "Infrastructure, Reliability & Systems Scaling",
        desc: "Ensuring 99.99% system uptime, containerizing workloads, and automating deployments."
      },
      {
        value: "quality_audit",
        label: "Security Defense, Auditing & Quality Verification",
        desc: "Finding software bugs, penetration testing, and hardening system attack surfaces."
      }
    ]
  },
  {
    id: "programmingExperience",
    question: "4. What is your current programming confidence level?",
    subtitle: "Helps tailor the ramp-up difficulty for your starting point.",
    options: [
      {
        value: "beginner",
        label: "Beginner / Just Starting",
        desc: "Learning fundamental syntax, loops, functions, and basic logic."
      },
      {
        value: "intermediate",
        label: "Intermediate / Building Small Projects",
        desc: "Familiar with 1-2 languages (e.g. JS/Python/Java) and building small apps."
      },
      {
        value: "advanced",
        label: "Comfortable / Ready for Production Systems",
        desc: "Solid command over data structures, frameworks, databases, and Git."
      }
    ]
  },
  {
    id: "degree",
    question: "5. What is your target degree or educational background?",
    subtitle: "Aligns role recommendations with current recruitment patterns in India.",
    options: [
      { value: "BCA", label: "BCA", desc: "Bachelor of Computer Applications" },
      { value: "B.Tech", label: "B.Tech / B.E.", desc: "Computer Science, IT, ECE, or allied engineering" },
      { value: "MCA", label: "MCA", desc: "Master of Computer Applications" },
      { value: "M.Tech", label: "M.Tech / M.S.", desc: "Advanced Masters in CS/Data/Systems" },
      { value: "B.Sc", label: "B.Sc (CS / IT / Math)", desc: "Bachelor of Science" },
      { value: "Other", label: "Other / Self-Taught", desc: "Non-traditional or career transitioner" }
    ]
  }
];

export default function CareerDiscoveryModal({ isOpen, onClose, onSelectRole }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState({
    problemPreference: "visual_ui",
    mathComfort: "standard_logic",
    workStyle: "product_building",
    programmingExperience: "intermediate",
    degree: "B.Tech"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [discoveryResults, setDiscoveryResults] = useState(null);

  const currentQ = DISCOVERY_QUESTIONS[currentStepIndex];

  const handleSelectOption = (field, value) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleNext = () => {
    if (currentStepIndex < DISCOVERY_QUESTIONS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      runDiscoveryAnalysis();
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const runDiscoveryAnalysis = async () => {
    setIsSubmitting(true);
    try {
      const res = await api.post("/careers/discover", answers);
      if (res.data && res.data.data) {
        setDiscoveryResults(res.data.data);
      }
    } catch (err) {
      console.error("Discovery error:", err);
      toast.error("Could not run career discovery. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setDiscoveryResults(null);
    setCurrentStepIndex(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-zinc-100 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-600 flex items-center justify-center text-white shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                Tech Career Discovery Diagnostic
              </h2>
              <p className="text-xs text-zinc-400">
                Answer 5 questions to identify matching technical career paths
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 p-5 sm:p-6 overflow-y-auto">
          
          {/* Step Questionnaire State */}
          {!discoveryResults && !isSubmitting && (
            <div className="space-y-5 max-w-2xl mx-auto">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-3">
                <span>Question {currentStepIndex + 1} of {DISCOVERY_QUESTIONS.length}</span>
                <div className="flex gap-1">
                  {DISCOVERY_QUESTIONS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentStepIndex
                          ? "w-6 bg-cyan-400"
                          : idx < currentStepIndex
                          ? "w-3 bg-zinc-600"
                          : "w-2 bg-zinc-800"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Title */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options Radio List */}
              <div className="space-y-2.5 pt-1">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.value;
                  return (
                    <div
                      key={opt.value}
                      onClick={() => handleSelectOption(currentQ.id, opt.value)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? "bg-cyan-950/30 border-cyan-500/60 shadow-md shadow-cyan-500/5 text-white"
                          : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 text-zinc-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "border-cyan-400 bg-cyan-500"
                            : "border-zinc-600 bg-zinc-900"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold">{opt.label}</h4>
                        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Loading Submitting State */}
          {isSubmitting && (
            <div className="flex flex-col items-center justify-center h-64 gap-3">
              <div className="w-10 h-10 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-zinc-400 font-medium">
                Evaluating 59 technical careers against your preferences...
              </p>
            </div>
          )}

          {/* Results State */}
          {discoveryResults && (
            <div className="space-y-6 max-w-2xl mx-auto animate-fade-in">
              
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-purple-950/20 to-zinc-950 border border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm font-bold text-white">Your Best Matched Career Paths</h3>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Based on your interest in {answers.problemPreference.replace(/_/g, " ")}, mathematical comfort, and work preferences:
                </p>
              </div>

              {/* Top 3 Matched Roles */}
              <div className="space-y-3">
                {(discoveryResults.topMatches || []).map((match, idx) => (
                  <div
                    key={match.id}
                    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/40 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                            Rank #{idx + 1} Match
                          </span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-[10px] text-zinc-400 uppercase">
                            {match.careerFamily}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mt-0.5">
                          {match.roleName}
                        </h4>
                      </div>

                      <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-right">
                        <span className="text-[10px] text-zinc-400 block font-medium">Fit Score</span>
                        <span className="text-sm font-black text-emerald-400">{match.fitScore}%</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {match.shortDescription}
                    </p>

                    {/* Fit Reasons */}
                    <div className="p-2.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg space-y-1">
                      <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider block">
                        Why this fits your profile:
                      </span>
                      {(match.fitReasons || []).map((reason, rIdx) => (
                        <p key={rIdx} className="text-xs text-zinc-400 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </p>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-xs text-zinc-400 font-medium">
                        Entry Compensation: <strong className="text-emerald-400">{match.salaryRange?.entry || "Competitive"}</strong>
                      </span>

                      <button
                        onClick={() => {
                          onClose();
                          if (onSelectRole) onSelectRole(match.id);
                        }}
                        className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-lg flex items-center gap-1 transition-colors"
                      >
                        <span>Explore Roadmap</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ethical Disclaimer */}
              <div className="p-3 bg-zinc-900/30 border border-zinc-800/60 rounded-xl text-[11px] text-zinc-500 leading-relaxed">
                <strong className="text-zinc-400">Note:</strong> {discoveryResults.disclaimer}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="px-5 py-3.5 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between shrink-0">
          {!discoveryResults ? (
            <>
              <button
                onClick={handleBack}
                disabled={currentStepIndex === 0}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                  currentStepIndex === 0
                    ? "opacity-40 cursor-not-allowed border-zinc-800 text-zinc-600"
                    : "border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black text-xs font-bold rounded-lg shadow-md shadow-cyan-500/20"
              >
                <span>{currentStepIndex === DISCOVERY_QUESTIONS.length - 1 ? "Get Matches" : "Next"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <div className="flex items-center justify-between w-full">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Retake Diagnostic
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
