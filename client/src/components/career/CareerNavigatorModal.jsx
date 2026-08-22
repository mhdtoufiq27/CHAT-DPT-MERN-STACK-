import React, { useState, useEffect, useMemo } from "react";
import {
  X,
  Compass,
  Search,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Target,
  Code2,
  Database,
  Cloud,
  Shield,
  Server,
  BarChart3,
  CheckSquare,
  Layout,
  Cpu,
  HelpCircle,
  Zap,
  ArrowRight,
  TrendingUp,
  SlidersHorizontal,
  FolderGit2,
  FileCheck,
  Scale,
  GitBranch,
  ShieldAlert,
  ListTodo,
  BookOpen,
  MessageSquare,
  Flame,
  Check,
  RotateCcw,
  Lightbulb,
  FileText,
  Workflow,
  UserCheck,
  User,
  Calendar,
  PlayCircle,
  CalendarDays,
  Video,
  ShieldCheck,
  CircleDot
} from "lucide-react";
import { useChat } from "../../context/ChatContext";
import api from "../../services/api";
import toast from "react-hot-toast";
import PersonalizedProfileModal from "./PersonalizedProfileModal";
import CareerDiscoveryModal from "./CareerDiscoveryModal";
import CareerCoachChatDrawer from "./CareerCoachChatDrawer";
import JobDescriptionAnalyzerModal from "./JobDescriptionAnalyzerModal";
import FocusNowBanner from "./FocusNowBanner";

// Icon mapping for families
const familyIconMap = {
  "software-development": Code2,
  "data-and-ai": BarChart3,
  "cloud-and-devops": Cloud,
  "cybersecurity": Shield,
  "database-and-systems": Database,
  "business-and-technology": Briefcase,
  "testing-and-quality": CheckSquare,
  "web-and-ui": Layout,
  "specialized": Cpu,
};

// Technology Priority Color & Badges
const priorityStyles = {
  "MUST LEARN": {
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    dot: "bg-emerald-400",
    label: "Must Learn"
  },
  "HIGH PRIORITY": {
    badge: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    dot: "bg-blue-400",
    label: "High Priority"
  },
  "GOOD TO KNOW": {
    badge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    dot: "bg-amber-400",
    label: "Good To Know"
  },
  "OPTIONAL / LATER": {
    badge: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
    dot: "bg-zinc-400",
    label: "Optional / Later"
  }
};

// Project Tier Colors
const projectTierStyles = {
  "Beginner": "border-blue-500/40 bg-blue-500/10 text-blue-400",
  "Intermediate": "border-amber-500/40 bg-amber-500/10 text-amber-400",
  "Advanced": "border-purple-500/40 bg-purple-500/10 text-purple-400",
  "Production / Capstone": "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
};

export default function CareerNavigatorModal({ isOpen, onClose, initialRoleId }) {
  const { sendMessage, setIsInterviewOpen, setIsIntroCoachOpen } = useChat();

  // Navigation & Catalog States
  const [families, setFamilies] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedFamilyId, setSelectedFamilyId] = useState("all");
  const [selectedRoleId, setSelectedRoleId] = useState(initialRoleId || null);
  const [activeRoleDetails, setActiveRoleDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Day 3 & 4 AI Coach States
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isDiscoveryModalOpen, setIsDiscoveryModalOpen] = useState(false);
  const [isCoachDrawerOpen, setIsCoachDrawerOpen] = useState(false);
  const [isJdModalOpen, setIsJdModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [gapAnalysisData, setGapAnalysisData] = useState(null);
  const [coachPlanData, setCoachPlanData] = useState(null);
  const [selectedTimeline, setSelectedTimeline] = useState("6_months");

  // 4-Stage Progress Tracker (Persisted per role in localStorage)
  const [skillProgressMap, setSkillProgressMap] = useState({});

  // Day 2 & 3 & 4 Tab States
  // 'learningOrder' | 'weekly' | 'gapAnalysis' | 'skills' | 'projects' | 'interview' | 'readiness'
  const [activeTab, setActiveTab] = useState("learningOrder");
  const [expandedOrderStep, setExpandedOrderStep] = useState(1);
  const [expandedInterviewPillar, setExpandedInterviewPillar] = useState("technicalFundamentals");
  const [selectedDegreeFilter, setSelectedDegreeFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isRoleLoading, setIsRoleLoading] = useState(false);

  // Student Readiness Checklist (Persisted in localStorage per role)
  const [checkedItems, setCheckedItems] = useState({});

  // Compare Mode
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [compareRoleIds, setCompareRoleIds] = useState([]);
  const [detailedComparisonData, setDetailedComparisonData] = useState([]);

  // Load User Profile from localStorage
  const loadSavedProfile = () => {
    const saved = localStorage.getItem("vexis_user_career_profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserProfile(parsed);
        if (parsed.targetTimeline) setSelectedTimeline(parsed.targetTimeline);
      } catch {
        setUserProfile(null);
      }
    } else {
      const defaultProfile = {
        education: "B.Tech",
        currentRole: "Student / Fresher",
        knownSkills: [
          { name: "HTML5", level: "Strong" },
          { name: "CSS3", level: "Strong" },
          { name: "JavaScript", level: "Strong" }
        ],
        availableTime: "15_20_hrs",
        targetTimeline: "6_months"
      };
      setUserProfile(defaultProfile);
      localStorage.setItem("vexis_user_career_profile", JSON.stringify(defaultProfile));
    }
  };

  // Fetch all families and roles on open
  useEffect(() => {
    if (!isOpen) return;

    loadSavedProfile();

    const fetchNavigatorData = async () => {
      setIsLoading(true);
      try {
        const [famRes, rolesRes] = await Promise.all([
          api.get("/careers/families"),
          api.get("/careers/roles")
        ]);

        if (famRes.data && famRes.data.data) {
          setFamilies(famRes.data.data);
        }
        if (rolesRes.data && rolesRes.data.data) {
          setRoles(rolesRes.data.data);
        }
      } catch (err) {
        console.error("Error loading career data:", err);
        toast.error("Failed to load career data. Please check connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavigatorData();
  }, [isOpen]);

  // Handle Initial Role ID
  useEffect(() => {
    if (initialRoleId) {
      setSelectedRoleId(initialRoleId);
    }
  }, [initialRoleId]);

  // Fetch detailed role and run personalized gap analysis + Coach plan
  useEffect(() => {
    if (!selectedRoleId) {
      setActiveRoleDetails(null);
      setGapAnalysisData(null);
      setCoachPlanData(null);
      return;
    }

    const fetchRoleAndCoach = async () => {
      setIsRoleLoading(true);
      try {
        // Load saved progress map from localStorage
        const progressKey = `vexis_progress_${selectedRoleId}`;
        const savedProgress = localStorage.getItem(progressKey);
        let parsedProgress = {};
        if (savedProgress) {
          try {
            parsedProgress = JSON.parse(savedProgress);
          } catch {}
        }
        setSkillProgressMap(parsedProgress);

        // Load saved readiness checklist
        const storageKey = `vexis_readiness_${selectedRoleId}`;
        const savedChecklist = localStorage.getItem(storageKey);
        let parsedChecklist = {};
        if (savedChecklist) {
          try {
            parsedChecklist = JSON.parse(savedChecklist);
            setCheckedItems(parsedChecklist);
          } catch {
            setCheckedItems({});
          }
        } else {
          setCheckedItems({});
        }

        const [roleRes, gapRes, coachRes] = await Promise.all([
          api.get(`/careers/roles/${selectedRoleId}`),
          api.post("/careers/gap-analysis", {
            roleId: selectedRoleId,
            knownSkills: userProfile?.knownSkills || [],
            education: userProfile?.education || "B.Tech",
            availableTime: userProfile?.availableTime || "15_20_hrs",
            targetTimeline: selectedTimeline
          }),
          api.post("/careers/coach-plan", {
            roleId: selectedRoleId,
            knownSkills: userProfile?.knownSkills || [],
            skillProgress: parsedProgress,
            targetTimeline: selectedTimeline,
            weeklyHours: userProfile?.availableTime || "15-20 Hours/Week",
            verifiedChecklist: parsedChecklist
          })
        ]);

        if (roleRes.data && roleRes.data.data) {
          setActiveRoleDetails(roleRes.data.data);
        }

        if (gapRes.data && gapRes.data.data) {
          setGapAnalysisData(gapRes.data.data);
          if (gapRes.data.data.summary?.startingStepNumber) {
            setExpandedOrderStep(gapRes.data.data.summary.startingStepNumber);
          }
        }

        if (coachRes.data && coachRes.data.data) {
          setCoachPlanData(coachRes.data.data);
        }
      } catch (err) {
        console.error("Error loading role and coach plan:", err);
        toast.error("Could not fetch detailed roadmap for this role.");
      } finally {
        setIsRoleLoading(false);
      }
    };

    fetchRoleAndCoach();
  }, [selectedRoleId, userProfile, selectedTimeline]);

  // Update 4-Stage Progress for a skill
  const handleUpdateSkillProgress = async (techName, newStatus) => {
    if (!selectedRoleId) return;
    const progressKey = `vexis_progress_${selectedRoleId}`;
    const nextProgress = {
      ...skillProgressMap,
      [techName]: newStatus
    };
    setSkillProgressMap(nextProgress);
    localStorage.setItem(progressKey, JSON.stringify(nextProgress));

    if (newStatus === "Completed") {
      toast.success(`Marked "${techName}" as Completed! 🚀`);
    }

    // Refresh Coach Plan
    try {
      const res = await api.post("/careers/coach-plan", {
        roleId: selectedRoleId,
        knownSkills: userProfile?.knownSkills || [],
        skillProgress: nextProgress,
        targetTimeline: selectedTimeline,
        verifiedChecklist: checkedItems
      });
      if (res.data && res.data.data) {
        setCoachPlanData(res.data.data);
      }
    } catch (err) {
      console.error("Error updating coach plan:", err);
    }
  };

  // Toggle Checklist item with localStorage persistence
  const toggleChecklistItem = (itemKey) => {
    if (!activeRoleDetails) return;
    const storageKey = `vexis_readiness_${activeRoleDetails.id}`;
    const nextState = {
      ...checkedItems,
      [itemKey]: !checkedItems[itemKey]
    };
    setCheckedItems(nextState);
    localStorage.setItem(storageKey, JSON.stringify(nextState));
  };

  // Reset checklist for current role
  const resetChecklist = () => {
    if (!activeRoleDetails) return;
    const storageKey = `vexis_readiness_${activeRoleDetails.id}`;
    localStorage.removeItem(storageKey);
    setCheckedItems({});
    toast.success("Readiness checklist reset.");
  };

  // Launch existing VEXIS PRO feature bridges without duplicating code
  const handleLaunchFeature = (type, customPayload = null) => {
    onClose();
    if (type === "intro") {
      if (setIsIntroCoachOpen) setIsIntroCoachOpen(true);
    } else if (type === "interview") {
      if (setIsInterviewOpen) setIsInterviewOpen(true);
    } else if (type === "chat") {
      if (sendMessage) {
        sendMessage(
          customPayload ||
            `I am working on the ${activeRoleDetails?.roleName} roadmap. Can you give me a coding practice challenge?`
        );
      }
    }
  };

  // Filtered Roles catalog
  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const matchesFamily =
        selectedFamilyId === "all" ||
        role.careerFamily.toLowerCase().replace(/[^a-z0-9]/g, "-") ===
          selectedFamilyId.toLowerCase() ||
        role.careerFamily.toLowerCase().includes(selectedFamilyId.replace(/-/g, " "));

      const matchesSearch =
        !searchQuery ||
        role.roleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (role.technologies &&
          role.technologies.some((t) =>
            t.name.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      const matchesDegree =
        selectedDegreeFilter === "all" ||
        (role.targetAudience &&
          role.targetAudience.some(
            (deg) => deg.toLowerCase() === selectedDegreeFilter.toLowerCase()
          ));

      return matchesFamily && matchesSearch && matchesDegree;
    });
  }, [roles, selectedFamilyId, searchQuery, selectedDegreeFilter]);

  // Handle Compare Mode Toggle
  const toggleRoleComparison = (roleId) => {
    if (compareRoleIds.includes(roleId)) {
      setCompareRoleIds(compareRoleIds.filter((id) => id !== roleId));
    } else {
      if (compareRoleIds.length >= 3) {
        toast.error("You can compare up to 3 roles at a time.");
        return;
      }
      setCompareRoleIds([...compareRoleIds, roleId]);
    }
  };

  // Fetch Detailed Multi-Dimensional Comparison Data
  useEffect(() => {
    if (!isCompareMode || compareRoleIds.length === 0) {
      setDetailedComparisonData([]);
      return;
    }

    const fetchDetailedCompare = async () => {
      try {
        const res = await api.get(`/careers/compare-detailed?ids=${compareRoleIds.join(",")}`);
        if (res.data && res.data.data) {
          setDetailedComparisonData(res.data.data);
        }
      } catch (err) {
        console.error("Comparison error:", err);
      }
    };

    fetchDetailedCompare();
  }, [isCompareMode, compareRoleIds]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-7xl h-[94vh] bg-zinc-950 border border-zinc-800/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-100 font-sans">
        
        {/* ================= MODAL HEADER ================= */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  VEXIS PRO <span className="text-cyan-400 font-normal">| AI Career Coach & Navigator</span>
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                  Day 4 AI Coach
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Actionable weekly roadmaps, FOCUS NOW sprints, evidence readiness & ongoing AI career coaching
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Job Description Skill Gap Analyzer Button */}
            <button
              onClick={() => setIsJdModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-950/40 hover:bg-blue-900/50 text-blue-300 border border-blue-500/40 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Analyze Job Post</span>
            </button>

            {/* Career Discovery Diagnostic Button */}
            <button
              onClick={() => setIsDiscoveryModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 border border-purple-500/40 transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Career Discovery Quiz</span>
            </button>

            {/* User Profile Button */}
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-cyan-500/50 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>My Skills ({userProfile?.knownSkills?.length || 0})</span>
            </button>

            {/* Compare Mode Button */}
            <button
              onClick={() => setIsCompareMode(!isCompareMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isCompareMode
                  ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                  : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500"
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare {compareRoleIds.length > 0 ? `(${compareRoleIds.length})` : ""}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= MODAL MAIN CONTENT ================= */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* ================= LEFT / TOP: ROLE BROWSER & CATALOG ================= */}
          {(!selectedRoleId || isCompareMode) && (
            <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
              
              {/* Filter Toolbar */}
              <div className="p-4 border-b border-zinc-800/80 bg-zinc-900/40 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 52+ roles, skills, tools, or technologies..."
                    className="w-full pl-9 pr-4 py-2 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Degree Target Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <span className="text-[11px] text-zinc-400 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-400" /> Degree:
                  </span>
                  {["all", "BCA", "B.Tech", "MCA", "M.Tech"].map((deg) => (
                    <button
                      key={deg}
                      onClick={() => setSelectedDegreeFilter(deg)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                        selectedDegreeFilter === deg
                          ? "bg-cyan-500 text-black font-semibold shadow-sm shadow-cyan-500/30"
                          : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                      }`}
                    >
                      {deg === "all" ? "All Tech Degrees" : deg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Family Selector Chips (9 Families) */}
              <div className="px-4 py-2.5 border-b border-zinc-800/80 bg-zinc-900/20 flex gap-2 overflow-x-auto scrollbar-thin">
                <button
                  onClick={() => setSelectedFamilyId("all")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all ${
                    selectedFamilyId === "all"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md shadow-cyan-500/20"
                      : "bg-zinc-900/70 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>All Families ({roles.length})</span>
                </button>

                {families.map((fam) => {
                  const Icon = familyIconMap[fam.id] || Layers;
                  const isSelected = selectedFamilyId === fam.id;
                  return (
                    <button
                      key={fam.id}
                      onClick={() => setSelectedFamilyId(fam.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all ${
                        isSelected
                          ? "bg-zinc-800 text-cyan-300 border border-cyan-500/40 shadow-sm"
                          : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{fam.name}</span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-zinc-800 text-zinc-400 rounded-full">
                        {fam.roleCount || 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Role Grid Catalog */}
              <div className="flex-1 p-4 overflow-y-auto">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center h-64 gap-3">
                    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs text-zinc-400">Loading Career Roles & Engine...</p>
                  </div>
                ) : filteredRoles.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 gap-2 text-center">
                    <AlertCircle className="w-8 h-8 text-zinc-500" />
                    <p className="text-sm font-semibold text-zinc-300">No career roles found</p>
                    <p className="text-xs text-zinc-500 max-w-sm">
                      Try adjusting your search query or selecting "All Tech Degrees".
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {filteredRoles.map((role) => {
                      const isCompared = compareRoleIds.includes(role.id);
                      return (
                        <div
                          key={role.id}
                          className="group relative flex flex-col justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/80 transition-all cursor-pointer shadow-sm hover:shadow-cyan-500/5"
                          onClick={() => {
                            if (isCompareMode) {
                              toggleRoleComparison(role.id);
                            } else {
                              setSelectedRoleId(role.id);
                            }
                          }}
                        >
                          <div>
                            {/* Role Header */}
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400/90 mb-0.5 block">
                                  {role.careerFamily}
                                </span>
                                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                                  {role.roleName}
                                </h3>
                              </div>

                              <span className="px-2 py-0.5 text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md whitespace-nowrap">
                                {role.badge || "In Demand"}
                              </span>
                            </div>

                            {/* Short Description */}
                            <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                              {role.shortDescription}
                            </p>

                            {/* Target Degrees */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {(role.targetAudience || []).slice(0, 3).map((deg) => (
                                <span
                                  key={deg}
                                  className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded border border-zinc-700/50"
                                >
                                  {deg}
                                </span>
                              ))}
                              {(role.targetAudience || []).length > 3 && (
                                <span className="text-[10px] px-1.5 py-0.5 bg-zinc-800 text-zinc-500 rounded">
                                  +{(role.targetAudience || []).length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Role Footer */}
                          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                              <span>{role.salaryRange?.entry || "Competitive"}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              {isCompareMode && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleRoleComparison(role.id);
                                  }}
                                  className={`px-2 py-1 text-[10px] font-medium rounded ${
                                    isCompared
                                      ? "bg-cyan-500 text-black font-bold"
                                      : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                                  }`}
                                >
                                  {isCompared ? "Selected" : "+ Compare"}
                                </button>
                              )}

                              <span className="flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                                Explore <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= RIGHT / DEEP-DIVE: SELECTED ROLE ROADMAP VIEW ================= */}
          {selectedRoleId && !isCompareMode && (
            <div className="w-full h-full flex flex-col bg-zinc-950 overflow-hidden">
              
              {isRoleLoading || !activeRoleDetails ? (
                <div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="w-10 h-10 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs text-zinc-400">Loading AI Career Coach & Plan...</p>
                </div>
              ) : (
                <div className="flex-1 flex flex-col overflow-hidden">
                  
                  {/* Deep-Dive Header Bar */}
                  <div className="px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/40 flex flex-col gap-3 shrink-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedRoleId(null)}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 rounded-lg text-xs font-medium transition-colors"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>All Roles</span>
                        </button>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                              {activeRoleDetails.careerFamily}
                            </span>
                            <span className="text-zinc-600">•</span>
                            <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                              {activeRoleDetails.badge || "High Demand"}
                            </span>
                          </div>
                          <h1 className="text-xl font-black text-white tracking-tight">
                            {activeRoleDetails.roleName}
                          </h1>
                        </div>
                      </div>

                      {/* Top Action Quick Buttons */}
                      <div className="flex items-center gap-2">
                        {/* Open Coach Chat Drawer */}
                        <button
                          onClick={() => setIsCoachDrawerOpen(true)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-md shadow-cyan-500/20 transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Ask AI Coach</span>
                        </button>

                        <button
                          onClick={() => setIsProfileModalOpen(true)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors"
                        >
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Skills Profile</span>
                        </button>

                        <button
                          onClick={() => handleLaunchFeature("interview")}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 transition-colors"
                        >
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Mock Interview</span>
                        </button>
                      </div>
                    </div>

                    {/* Day 4 PROMINENT FOCUS NOW SPRINT BANNER */}
                    {coachPlanData?.focusNow && (
                      <FocusNowBanner
                        focusData={coachPlanData.focusNow}
                        currentStatus={skillProgressMap[coachPlanData.focusNow.activeTopic] || "Learning"}
                        onStatusChange={(newStatus) =>
                          handleUpdateSkillProgress(coachPlanData.focusNow.activeTopic, newStatus)
                        }
                        onOpenCoach={() => setIsCoachDrawerOpen(true)}
                        onNavigateTab={(tabName) => setActiveTab(tabName)}
                      />
                    )}

                    {/* Day 4 Navigation Tabs */}
                    <div className="flex gap-1.5 border-t border-zinc-800/80 pt-2.5 overflow-x-auto scrollbar-thin">
                      {[
                        { id: "learningOrder", label: "1. Adaptive Roadmap", icon: Workflow },
                        { id: "weekly", label: `2. Weekly Plan (${coachPlanData?.weeklyRoadmap?.length || 16} Wks)`, icon: CalendarDays },
                        { id: "gapAnalysis", label: "3. Current vs Target Gap", icon: UserCheck },
                        { id: "skills", label: "4. Skills & Priorities", icon: Zap },
                        { id: "projects", label: "5. 4-Tier Projects", icon: FolderGit2 },
                        { id: "interview", label: "6. 7-Pillar Interview", icon: Award },
                        { id: "readiness", label: `7. Evidence Readiness (${coachPlanData?.evidenceReadiness?.overallScore || 0}%)`, icon: ListTodo }
                      ].map((tab) => {
                        const Icon = tab.icon;
                        const isTabActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                              isTabActive
                                ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-bold"
                                : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deep-Dive Tab Content Container */}
                  <div className="flex-1 p-5 overflow-y-auto">
                    
                    {/* ================= TAB 1: ADAPTIVE ROADMAP WITH 4-STAGE PROGRESS ================= */}
                    {activeTab === "learningOrder" && (
                      <div className="space-y-4 max-w-4xl mx-auto">
                        
                        <div className="flex items-center justify-between text-xs text-zinc-400 bg-zinc-900/40 p-3 rounded-xl border border-zinc-800">
                          <span>
                            Set your status on each step (⚪ Not Started, 🔵 Learning, 🟡 Practicing, 🟢 Completed)
                          </span>
                          <span className="text-cyan-400 font-semibold">
                            Pacing: {gapAnalysisData?.customActionPlan?.timeline || "Standard"}
                          </span>
                        </div>

                        {/* Sequential Step Chain with 4-Stage Progress State */}
                        <div className="space-y-3">
                          {((gapAnalysisData?.personalizedRoadmap || activeRoleDetails.learningOrder) || []).map((stepItem, idx) => {
                            const isExpanded = expandedOrderStep === stepItem.step;
                            const priorityStyle =
                              priorityStyles[stepItem.priority] || priorityStyles["HIGH PRIORITY"];
                            const isLast = idx === ((gapAnalysisData?.personalizedRoadmap || activeRoleDetails.learningOrder) || []).length - 1;
                            
                            // 4-Stage Progress status
                            const currentProgress =
                              skillProgressMap[stepItem.technology] ||
                              (stepItem.status === "MASTERED" ? "Completed" : "Not Started");

                            const isCompleted = currentProgress === "Completed";
                            const isLearning = currentProgress === "Learning";
                            const isPracticing = currentProgress === "Practicing";

                            return (
                              <div key={stepItem.step} className="relative">
                                <div
                                  className={`p-4 rounded-xl border transition-all ${
                                    isCompleted
                                      ? "bg-zinc-900/30 border-emerald-500/30 opacity-90"
                                      : isLearning
                                      ? "bg-zinc-900/90 border-cyan-400 ring-2 ring-cyan-500/20 shadow-md shadow-cyan-500/10"
                                      : isPracticing
                                      ? "bg-zinc-900/90 border-amber-400 ring-2 ring-amber-500/20"
                                      : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60"
                                  }`}
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div
                                      onClick={() =>
                                        setExpandedOrderStep(isExpanded ? null : stepItem.step)
                                      }
                                      className="flex items-center gap-3 flex-1 cursor-pointer"
                                    >
                                      <div
                                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                                          isCompleted
                                            ? "bg-emerald-500 text-black"
                                            : isLearning
                                            ? "bg-cyan-500 text-black font-black animate-pulse"
                                            : isPracticing
                                            ? "bg-amber-500 text-black font-black"
                                            : "bg-zinc-800 border border-zinc-700 text-cyan-400"
                                        }`}
                                      >
                                        {isCompleted ? "✓" : `#${stepItem.step}`}
                                      </div>

                                      <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                          <h3 className={`text-sm font-bold ${isCompleted ? "text-zinc-300" : "text-white"}`}>
                                            {stepItem.technology}
                                          </h3>

                                          <span
                                            className={`px-2 py-0.5 text-[10px] font-semibold rounded-md border ${priorityStyle.badge}`}
                                          >
                                            {stepItem.priority}
                                          </span>
                                        </div>

                                        <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                                          {stepItem.actionRecommendation || stepItem.whyYouNeedIt}
                                        </p>
                                      </div>
                                    </div>

                                    {/* 4-Stage Status Pill Buttons */}
                                    <div className="flex items-center gap-1 bg-zinc-950/80 p-1 rounded-xl border border-zinc-800 self-start sm:self-auto">
                                      {["Not Started", "Learning", "Practicing", "Completed"].map((st) => {
                                        const isSelected = currentProgress === st;
                                        return (
                                          <button
                                            key={st}
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleUpdateSkillProgress(stepItem.technology, st);
                                            }}
                                            className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                                              isSelected
                                                ? st === "Completed"
                                                  ? "bg-emerald-500 text-black"
                                                  : st === "Practicing"
                                                  ? "bg-amber-500 text-black"
                                                  : st === "Learning"
                                                  ? "bg-cyan-500 text-black"
                                                  : "bg-zinc-700 text-white"
                                                : "text-zinc-500 hover:text-zinc-300"
                                            }`}
                                          >
                                            {st === "Completed" ? "✓" : st.split(" ")[0]}
                                          </button>
                                        );
                                      })}

                                      <button
                                        onClick={() =>
                                          setExpandedOrderStep(isExpanded ? null : stepItem.step)
                                        }
                                        className="p-1 text-zinc-400 hover:text-white ml-1"
                                      >
                                        <ChevronDown
                                          className={`w-4 h-4 transition-transform ${
                                            isExpanded ? "rotate-180 text-cyan-400" : ""
                                          }`}
                                        />
                                      </button>
                                    </div>
                                  </div>

                                  {/* Expanded Step Deep Dive Details */}
                                  {isExpanded && (
                                    <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-3 animate-fade-in">
                                      <div className="p-3 bg-zinc-950/70 border border-zinc-800/80 rounded-lg">
                                        <h5 className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                                          <Lightbulb className="w-3.5 h-3.5 text-cyan-400" /> Why You Need It
                                        </h5>
                                        <p className="text-xs text-zinc-300 leading-relaxed">
                                          {stepItem.whyYouNeedIt}
                                        </p>
                                        <div className="mt-2 text-[11px] text-zinc-400">
                                          <strong className="text-zinc-300">Prerequisite to start:</strong>{" "}
                                          <span className="text-cyan-400">{stepItem.prerequisite}</span>
                                        </div>
                                      </div>

                                      {/* Core Topics & Subtopics */}
                                      <div>
                                        <h5 className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                                          <BookOpen className="w-3.5 h-3.5 text-zinc-400" /> Topics to Master
                                        </h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                          {(stepItem.topics || []).map((topic, tIdx) => (
                                            <div
                                              key={tIdx}
                                              className="flex items-start gap-2 p-2 bg-zinc-950/40 rounded border border-zinc-800/60 text-xs text-zinc-300"
                                            >
                                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                              <span>{topic}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>

                                      {/* Practical Exercises & Mini Project Deliverables */}
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                        <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                                          <h5 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                                            <Terminal className="w-3.5 h-3.5" /> Hands-On Practice Task
                                          </h5>
                                          <p className="text-xs text-zinc-300 leading-relaxed">
                                            {stepItem.practice}
                                          </p>
                                        </div>

                                        <div className="p-3 bg-blue-950/20 border border-blue-500/30 rounded-lg">
                                          <h5 className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                                            <Sparkles className="w-3.5 h-3.5" /> Mini Project Deliverable
                                          </h5>
                                          <p className="text-xs text-zinc-300 leading-relaxed">
                                            {stepItem.miniProject}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {!isLast && (
                                  <div className="flex justify-center py-1">
                                    <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-600">
                                      <span className="h-3 w-0.5 bg-zinc-800" />
                                      <ArrowRight className="w-3 h-3 rotate-90 text-cyan-500/60" />
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ================= TAB 2: WEEKLY ROADMAP (DAY 4 NEW DEDICATED) ================= */}
                    {activeTab === "weekly" && (
                      <div className="space-y-4 max-w-4xl mx-auto">
                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                              <CalendarDays className="w-4 h-4 text-cyan-400" /> Structured Weekly Action Schedule
                            </h3>
                            <p className="text-xs text-zinc-400 mt-0.5">
                              Every week specifies what to Learn, Practice, Build, Review, and Interview Prep.
                            </p>
                          </div>

                          <span className="px-2.5 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg">
                            {coachPlanData?.weeklyRoadmap?.length || 16} Weeks Total
                          </span>
                        </div>

                        <div className="space-y-3">
                          {(coachPlanData?.weeklyRoadmap || []).map((week) => (
                            <div
                              key={week.weekNumber}
                              className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all space-y-3"
                            >
                              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                                <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-lg bg-zinc-800 text-cyan-400 flex items-center justify-center text-xs font-black">
                                    {week.weekNumber}
                                  </span>
                                  <span>{week.focusTitle}</span>
                                </h4>
                                <span className="text-[10px] font-semibold px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">
                                  {week.phase}
                                </span>
                              </div>

                              {/* 5 Weekly Action Blocks */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
                                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-800/60">
                                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                                    📖 Learn
                                  </span>
                                  <p className="text-[11px] text-zinc-300 leading-snug">{week.learn}</p>
                                </div>

                                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-800/60">
                                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                                    💻 Practice
                                  </span>
                                  <p className="text-[11px] text-zinc-300 leading-snug">{week.practice}</p>
                                </div>

                                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-800/60">
                                  <span className="text-[9px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                                    🔨 Build
                                  </span>
                                  <p className="text-[11px] text-zinc-300 leading-snug">{week.build}</p>
                                </div>

                                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-800/60">
                                  <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                                    🔍 Review
                                  </span>
                                  <p className="text-[11px] text-zinc-300 leading-snug">{week.review}</p>
                                </div>

                                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-800/60">
                                  <span className="text-[9px] font-bold text-rose-400 uppercase tracking-wider block mb-1">
                                    🎯 Interview Prep
                                  </span>
                                  <p className="text-[11px] text-zinc-300 leading-snug">{week.interviewPrep}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ================= TAB 3: CURRENT VS TARGET GAP ================= */}
                    {activeTab === "gapAnalysis" && (
                      <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                              <UserCheck className="w-4 h-4 text-cyan-400" /> Current Skills vs. Role Requirements Gap
                            </h3>
                            <p className="text-xs text-zinc-400 mt-1">
                              Comparing your known technologies against {activeRoleDetails.roleName} requirements.
                            </p>
                          </div>

                          <button
                            onClick={() => setIsProfileModalOpen(true)}
                            className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-cyan-300 text-xs font-semibold rounded-lg shrink-0 border border-zinc-700"
                          >
                            Update My Profile
                          </button>
                        </div>

                        {gapAnalysisData && (
                          <div className="space-y-5">
                            <div>
                              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                                🔴 Missing Competencies ({gapAnalysisData.skillGapBreakdown?.missing?.length || 0})
                              </h4>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {(gapAnalysisData.skillGapBreakdown?.missing || []).map((skill, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 bg-rose-950/10 border border-rose-500/20 rounded-xl space-y-1"
                                  >
                                    <div className="flex items-center justify-between">
                                      <h5 className="text-xs font-bold text-white">{skill.name}</h5>
                                      <span className="text-[9px] px-1.5 py-0.5 bg-rose-500/20 text-rose-400 rounded">
                                        {skill.priority}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-zinc-400">{skill.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {gapAnalysisData.skillGapBreakdown?.developing?.length > 0 && (
                              <div>
                                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                                  🟡 Developing Skills ({gapAnalysisData.skillGapBreakdown.developing.length})
                                </h4>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {gapAnalysisData.skillGapBreakdown.developing.map((skill, idx) => (
                                    <div
                                      key={idx}
                                      className="p-3 bg-amber-950/10 border border-amber-500/20 rounded-xl space-y-1"
                                    >
                                      <div className="flex items-center justify-between">
                                        <h5 className="text-xs font-bold text-white">{skill.name}</h5>
                                        <span className="text-[9px] px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded">
                                          Reinforce
                                        </span>
                                      </div>
                                      <p className="text-[11px] text-zinc-400">{skill.recommendation}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div>
                              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                                🟢 Already Mastered ({gapAnalysisData.skillGapBreakdown?.strong?.length || 0})
                              </h4>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {(gapAnalysisData.skillGapBreakdown?.strong || []).map((skill, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 bg-emerald-950/10 border border-emerald-500/20 rounded-xl flex items-center justify-between"
                                  >
                                    <div>
                                      <h5 className="text-xs font-bold text-white">{skill.name}</h5>
                                      <span className="text-[10px] text-emerald-400 font-medium">
                                        ✓ Verified in your profile
                                      </span>
                                    </div>
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ================= TAB 4: SKILLS & PRIORITIES ================= */}
                    {activeTab === "skills" && (
                      <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 via-zinc-900 to-zinc-950 border border-amber-500/40 space-y-3">
                          <div className="flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-amber-400" />
                            <h3 className="text-sm font-bold text-amber-300">
                              WHAT NOT TO FOCUS ON YET (Learn Later)
                            </h3>
                          </div>
                          <p className="text-xs text-zinc-300 leading-relaxed">
                            To avoid cognitive overload, do NOT try to learn everything at once. The following advanced concepts are useful in senior enterprise environments, but should be deferred until you master core fundamentals.
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                            {(activeRoleDetails.learnLater || []).map((later, lIdx) => (
                              <div
                                key={lIdx}
                                className="p-3 bg-zinc-950/80 border border-amber-500/20 rounded-lg flex flex-col justify-between"
                              >
                                <div>
                                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                                    {later.technology}
                                  </span>
                                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                                    {later.reason}
                                  </p>
                                </div>
                                <div className="mt-2 pt-2 border-t border-zinc-800 text-[10px] text-zinc-500">
                                  <strong className="text-zinc-400">When to learn:</strong> {later.whenToLearn}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                              <Zap className="w-4 h-4 text-cyan-400" /> Core Technologies & Priority Matrix
                            </h3>
                            <span className="text-xs text-zinc-400">
                              {(activeRoleDetails.technologies || []).length} technologies mapped
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {(activeRoleDetails.technologies || []).map((tech, tIdx) => {
                              const style =
                                priorityStyles[tech.priority] || priorityStyles["HIGH PRIORITY"];
                              return (
                                <div
                                  key={tIdx}
                                  className="p-3.5 bg-zinc-900/40 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition-colors flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                      <h4 className="text-xs font-bold text-white">{tech.name}</h4>
                                      <span
                                        className={`px-2 py-0.5 text-[9px] font-semibold rounded border ${style.badge}`}
                                      >
                                        {tech.priority}
                                      </span>
                                    </div>
                                    <span className="text-[10px] font-medium text-cyan-400/90 block mb-1">
                                      Category: {tech.category}
                                    </span>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                      {tech.description}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ================= TAB 5: 4-TIER PROJECTS ================= */}
                    {activeTab === "projects" && (
                      <div className="space-y-4 max-w-4xl mx-auto">
                        <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start gap-3">
                          <FolderGit2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs font-bold text-purple-200">
                              4-Tier Progressive Project Roadmap
                            </h4>
                            <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                              Build these 4 distinct projects in order. Each tier increases in complexity and proves different competencies to technical recruiters.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3.5">
                          {(activeRoleDetails.projects || []).map((proj, pIdx) => {
                            const tierBadgeClass =
                              projectTierStyles[proj.tier] || "border-cyan-500/40 bg-cyan-500/10 text-cyan-400";
                            return (
                              <div
                                key={pIdx}
                                className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all space-y-3"
                              >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <span
                                        className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border ${tierBadgeClass}`}
                                      >
                                        Tier {pIdx + 1}: {proj.tier}
                                      </span>
                                      <span className="text-[11px] text-zinc-500">
                                        Difficulty: {proj.difficulty}
                                      </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-white mt-1">
                                      {proj.title}
                                    </h3>
                                  </div>
                                </div>

                                <div className="p-3 bg-zinc-950/70 border border-zinc-800/60 rounded-lg">
                                  <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                                    Expected Architecture & Outcome
                                  </h5>
                                  <p className="text-xs text-zinc-300 leading-relaxed">
                                    {proj.expectedOutcome}
                                  </p>
                                </div>

                                <div className="p-2.5 bg-purple-950/20 border border-purple-500/20 rounded-lg text-xs text-purple-200">
                                  <strong className="text-purple-300">Recruiter Impact:</strong>{" "}
                                  {proj.portfolioValue}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ================= TAB 6: 7-PILLAR INTERVIEW ================= */}
                    {activeTab === "interview" && (
                      <div className="space-y-4 max-w-4xl mx-auto">
                        <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-emerald-200">
                                7-Pillar Comprehensive Interview Preparation
                              </h4>
                              <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">
                                Master Technical fundamentals, DSA, Core CS, Project Defense, HR, and Behavioral STAR scenarios.
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleLaunchFeature("interview")}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shrink-0 shadow-md"
                          >
                            Launch Mock Interview
                          </button>
                        </div>

                        {/* Pillar Selector Tabs */}
                        <div className="flex gap-1.5 overflow-x-auto pb-1">
                          {[
                            { id: "technicalFundamentals", label: "1. Tech Fundamentals" },
                            { id: "codingProblems", label: "2. Coding & DSA" },
                            { id: "coreCSSubjects", label: "3. Core CS Subjects" },
                            { id: "roleSpecificQuestions", label: "4. Role-Specific Q&A" },
                            { id: "projectQuestions", label: "5. Project Defense" },
                            { id: "hrPreparation", label: "6. HR Preparation" },
                            { id: "behavioralPreparation", label: "7. Behavioral STAR" }
                          ].map((pillar) => (
                            <button
                              key={pillar.id}
                              onClick={() => setExpandedInterviewPillar(pillar.id)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                                expandedInterviewPillar === pillar.id
                                  ? "bg-zinc-800 text-cyan-300 border border-cyan-500/40"
                                  : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200"
                              }`}
                            >
                              {pillar.label}
                            </button>
                          ))}
                        </div>

                        {activeRoleDetails.interviewRoadmap && (
                          <div className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-3">
                            {expandedInterviewPillar === "technicalFundamentals" && (
                              <div className="space-y-3">
                                {(activeRoleDetails.interviewRoadmap.technicalFundamentals || []).map((item, idx) => (
                                  <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 space-y-1.5">
                                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{item.topic}</span>
                                    <p className="text-xs font-semibold text-white">{item.question}</p>
                                    {item.tip && (
                                      <p className="text-[11px] text-zinc-400 pt-1 border-t border-zinc-800/60">
                                        <strong className="text-emerald-400">Interview Tip:</strong> {item.tip}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {expandedInterviewPillar === "codingProblems" && (
                              <div className="space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {(activeRoleDetails.interviewRoadmap.codingProblems || []).map((item, idx) => (
                                    <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 flex flex-col justify-between">
                                      <div>
                                        <div className="flex items-center justify-between mb-1">
                                          <h5 className="text-xs font-bold text-white">{item.title}</h5>
                                          <span className="text-[9px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">
                                            {item.difficulty}
                                          </span>
                                        </div>
                                        <p className="text-[11px] text-cyan-400/90 font-medium">Pattern: {item.pattern}</p>
                                      </div>
                                      <p className="text-[11px] text-zinc-400 mt-2">{item.focus}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {expandedInterviewPillar === "coreCSSubjects" && (
                              <div className="space-y-3">
                                {(activeRoleDetails.interviewRoadmap.coreCSSubjects || []).map((item, idx) => (
                                  <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 space-y-1">
                                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">{item.subject} • {item.topic}</span>
                                    <p className="text-xs text-zinc-200">{item.keyQuestion}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {expandedInterviewPillar === "roleSpecificQuestions" && (
                              <div className="space-y-3">
                                {(activeRoleDetails.interviewRoadmap.roleSpecificQuestions || []).map((item, idx) => (
                                  <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 space-y-1.5">
                                    <p className="text-xs font-bold text-white">{item.question}</p>
                                    <div className="p-2 bg-zinc-900/80 rounded text-[11px] text-emerald-300">
                                      <strong className="text-emerald-400">Answer Key:</strong> {item.answerKey}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {expandedInterviewPillar === "projectQuestions" && (
                              <div className="space-y-3">
                                {(activeRoleDetails.interviewRoadmap.projectQuestions || []).map((item, idx) => (
                                  <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 space-y-1.5">
                                    <p className="text-xs font-bold text-white">{item.question}</p>
                                    <p className="text-[11px] text-zinc-400"><strong className="text-cyan-400">Strategy:</strong> {item.tip}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {expandedInterviewPillar === "hrPreparation" && (
                              <div className="space-y-3">
                                {(activeRoleDetails.interviewRoadmap.hrPreparation || []).map((item, idx) => (
                                  <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 space-y-1.5">
                                    <p className="text-xs font-bold text-white">{item.question}</p>
                                    <p className="text-[11px] text-zinc-400"><strong className="text-cyan-400">Suggested Pitch:</strong> {item.strategy}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {expandedInterviewPillar === "behavioralPreparation" && (
                              <div className="space-y-3">
                                {(activeRoleDetails.interviewRoadmap.behavioralPreparation || []).map((item, idx) => (
                                  <div key={idx} className="p-3 bg-zinc-950/60 rounded-lg border border-zinc-800/60 space-y-1.5">
                                    <p className="text-xs font-bold text-white">{item.scenario}</p>
                                    <div className="p-2 bg-zinc-900/80 rounded text-[11px] text-zinc-300">
                                      <strong className="text-purple-400">STAR Structure:</strong> {item.framework}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* ================= TAB 7: EVIDENCE-BASED READINESS (DAY 4 ENHANCED) ================= */}
                    {activeTab === "readiness" && (
                      <div className="space-y-6 max-w-4xl mx-auto">
                        
                        {/* Overall Evidence Header */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-zinc-950 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-cyan-400" />
                              <h3 className="text-sm font-bold text-white">
                                Evidence-Based Career Readiness Score
                              </h3>
                            </div>
                            <p className="text-xs text-zinc-400 mt-1">
                              Calculated strictly based on verified evidence from your completed skills, deployed projects, and interview checklist.
                            </p>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-xs text-zinc-400 block font-medium">Overall Verified Score:</span>
                            <span className="text-2xl font-black text-cyan-400">
                              {coachPlanData?.evidenceReadiness?.overallScore || 0}%
                            </span>
                          </div>
                        </div>

                        {/* 7 Evidence Categories */}
                        <div className="space-y-3">
                          {(coachPlanData?.evidenceReadiness?.categories || []).map((cat, idx) => {
                            const isStrong = cat.score >= 70;
                            const isDeveloping = cat.score >= 40 && cat.score < 70;

                            return (
                              <div
                                key={idx}
                                className="p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-xl space-y-2.5"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <CircleDot
                                      className={`w-3.5 h-3.5 ${
                                        isStrong
                                          ? "text-emerald-400"
                                          : isDeveloping
                                          ? "text-amber-400"
                                          : "text-zinc-500"
                                      }`}
                                    />
                                    <h4 className="text-xs font-bold text-white">{cat.name}</h4>
                                  </div>
                                  <span
                                    className={`text-xs font-black ${
                                      isStrong
                                        ? "text-emerald-400"
                                        : isDeveloping
                                        ? "text-amber-400"
                                        : "text-zinc-400"
                                    }`}
                                  >
                                    {cat.score}%
                                  </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full transition-all duration-500 ${
                                      isStrong
                                        ? "bg-emerald-400"
                                        : isDeveloping
                                        ? "bg-amber-400"
                                        : "bg-cyan-500"
                                    }`}
                                    style={{ width: `${cat.score}%` }}
                                  />
                                </div>

                                {/* Evidence & Gap Details */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                                  <div className="p-2 bg-zinc-950/60 rounded border border-zinc-800/60 text-zinc-300">
                                    <strong className="text-cyan-400 block mb-0.5">Evidence Verified:</strong>
                                    {cat.evidence}
                                  </div>
                                  <div className="p-2 bg-zinc-950/60 rounded border border-zinc-800/60 text-zinc-400">
                                    <strong className="text-amber-400 block mb-0.5">Gap to Bridge:</strong>
                                    {cat.gap}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================= COMPARE MODE: MULTI-DIMENSIONAL DEEP MATRIX ================= */}
          {isCompareMode && compareRoleIds.length > 0 && (
            <div className="w-full h-full flex flex-col bg-zinc-950 p-5 overflow-y-auto">
              <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Scale className="w-4 h-4 text-cyan-400" /> Deep Multi-Dimensional Career Comparison
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Comparing programming intensity, mathematical depth, learning difficulty, projects & interview focus
                  </p>
                </div>
                <button
                  onClick={() => setIsCompareMode(false)}
                  className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold rounded-lg"
                >
                  Exit Comparison
                </button>
              </div>

              {detailedComparisonData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {detailedComparisonData.map((role) => (
                    <div
                      key={role.id}
                      className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between space-y-4 shadow-sm"
                    >
                      <div className="space-y-3">
                        <div>
                          <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                            {role.careerFamily}
                          </span>
                          <h4 className="text-base font-bold text-white">{role.roleName}</h4>
                          <span className="text-xs font-bold text-emerald-400">
                            Entry: {role.salaryRange?.entry || "Competitive"}
                          </span>
                        </div>

                        {/* Comparison Matrix Attributes */}
                        <div className="space-y-2 text-xs border-t border-zinc-800 pt-3">
                          <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/60">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase block">Programming Demand:</span>
                            <span className="text-zinc-200 font-semibold">{role.programmingDemand}</span>
                          </div>

                          <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/60">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase block">Math & Statistics:</span>
                            <span className="text-zinc-200 font-semibold">{role.mathRequirement}</span>
                          </div>

                          <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/60">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase block">Ramp-up Difficulty:</span>
                            <span className="text-amber-400 font-semibold">{role.learningDifficulty}</span>
                          </div>

                          <div className="bg-zinc-950/60 p-2 rounded border border-zinc-800/60">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase block">Primary Tools:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(role.topTools || []).map((t, idx) => (
                                <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-zinc-800 text-zinc-300 rounded">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsCompareMode(false);
                          setSelectedRoleId(role.id);
                        }}
                        className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-lg transition-colors"
                      >
                        View Full Adaptive Roadmap
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 text-zinc-500 text-xs">
                  Loading multi-dimensional comparison matrix...
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= MODAL SUB-COMPONENTS ================= */}
        {isProfileModalOpen && (
          <PersonalizedProfileModal
            isOpen={isProfileModalOpen}
            onClose={() => setIsProfileModalOpen(false)}
            onProfileUpdated={(updatedProfile) => {
              setUserProfile(updatedProfile);
              if (updatedProfile.targetTimeline) setSelectedTimeline(updatedProfile.targetTimeline);
            }}
          />
        )}

        {isDiscoveryModalOpen && (
          <CareerDiscoveryModal
            isOpen={isDiscoveryModalOpen}
            onClose={() => setIsDiscoveryModalOpen(false)}
            onSelectRole={(roleId) => {
              setSelectedRoleId(roleId);
            }}
          />
        )}

        {isCoachDrawerOpen && (
          <CareerCoachChatDrawer
            isOpen={isCoachDrawerOpen}
            onClose={() => setIsCoachDrawerOpen(false)}
            activeRole={activeRoleDetails}
            currentStep={expandedOrderStep}
            userProfile={userProfile}
            onNavigateTab={(tabName) => setActiveTab(tabName)}
            onLaunchFeature={handleLaunchFeature}
          />
        )}

        {isJdModalOpen && (
          <JobDescriptionAnalyzerModal
            isOpen={isJdModalOpen}
            onClose={() => setIsJdModalOpen(false)}
            userProfile={userProfile}
            onExploreRole={(roleId) => {
              setSelectedRoleId(roleId);
            }}
          />
        )}
      </div>
    </div>
  );
}
