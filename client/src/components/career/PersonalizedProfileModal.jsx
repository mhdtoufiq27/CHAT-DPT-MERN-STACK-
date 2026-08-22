import React, { useState, useEffect } from "react";
import {
  X,
  User,
  GraduationCap,
  Briefcase,
  Clock,
  Calendar,
  Sparkles,
  Plus,
  Trash2,
  CheckCircle2,
  Check,
  AlertCircle
} from "lucide-react";
import toast from "react-hot-toast";

const COMMON_TECH_SUGGESTIONS = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Express.js",
  "Python", "SQL", "PostgreSQL", "MongoDB", "Git", "Docker", "Java", "C++",
  "Tailwind CSS", "FastAPI", "Spring Boot", "AWS", "Linux", "Power BI", "Pandas"
];

export default function PersonalizedProfileModal({ isOpen, onClose, onProfileUpdated }) {
  const [education, setEducation] = useState("B.Tech");
  const [currentRole, setCurrentRole] = useState("Student / Fresher");
  const [knownSkills, setKnownSkills] = useState([
    { name: "HTML5", level: "Strong" },
    { name: "CSS3", level: "Strong" },
    { name: "JavaScript", level: "Strong" }
  ]);
  const [skillInput, setSkillInput] = useState("");
  const [skillLevelInput, setSkillLevelInput] = useState("Strong");
  const [availableTime, setAvailableTime] = useState("15_20_hrs");
  const [targetTimeline, setTargetTimeline] = useState("6_months");
  const [projectsExperience, setProjectsExperience] = useState("1_2_projects");

  // Load saved profile on mount or open
  useEffect(() => {
    if (!isOpen) return;
    const saved = localStorage.getItem("vexis_user_career_profile");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.education) setEducation(parsed.education);
        if (parsed.currentRole) setCurrentRole(parsed.currentRole);
        if (parsed.knownSkills) setKnownSkills(parsed.knownSkills);
        if (parsed.availableTime) setAvailableTime(parsed.availableTime);
        if (parsed.targetTimeline) setTargetTimeline(parsed.targetTimeline);
        if (parsed.projectsExperience) setProjectsExperience(parsed.projectsExperience);
      } catch (e) {
        console.error("Error parsing saved user profile:", e);
      }
    }
  }, [isOpen]);

  const addSkill = (skillName, level = "Strong") => {
    if (!skillName || skillName.trim() === "") return;
    const clean = skillName.trim();
    if (knownSkills.some((s) => s.name.toLowerCase() === clean.toLowerCase())) {
      toast.error(`"${clean}" is already in your skills list.`);
      return;
    }
    setKnownSkills([...knownSkills, { name: clean, level }]);
    setSkillInput("");
  };

  const removeSkill = (index) => {
    setKnownSkills(knownSkills.filter((_, idx) => idx !== index));
  };

  const toggleSkillLevel = (index) => {
    setKnownSkills(
      knownSkills.map((s, idx) => {
        if (idx !== index) return s;
        return {
          ...s,
          level: s.level === "Strong" ? "Developing" : "Strong"
        };
      })
    );
  };

  const handleSaveProfile = () => {
    const profile = {
      education,
      currentRole,
      knownSkills,
      availableTime,
      targetTimeline,
      projectsExperience,
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem("vexis_user_career_profile", JSON.stringify(profile));
    toast.success("Career profile saved successfully!");
    if (onProfileUpdated) onProfileUpdated(profile);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-zinc-100 font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-md">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                My Career Profile & Known Skills
              </h2>
              <p className="text-xs text-zinc-400">
                Personalize your gap analysis and dynamic roadmaps
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

        {/* Body Form */}
        <div className="flex-1 p-5 overflow-y-auto space-y-5">
          
          {/* Education & Current Role Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" /> Current Education / Degree
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="BCA">BCA (Bachelor of Computer Applications)</option>
                <option value="B.Tech">B.Tech / B.E. (Computer Science / IT)</option>
                <option value="MCA">MCA (Master of Computer Applications)</option>
                <option value="M.Tech">M.Tech / M.S. (CS / AI / Systems)</option>
                <option value="B.Sc">B.Sc (Computer Science / IT / Data)</option>
                <option value="Other">Other / Self-Taught / Bootcamp</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-cyan-400" /> Current Status / Role
              </label>
              <select
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="Student / Fresher">College Student / Fresher</option>
                <option value="Frontend Developer">Frontend Developer (Junior/Intern)</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="QA / Tester">QA / Test Engineer</option>
                <option value="IT Support">IT Support / SysAdmin</option>
                <option value="Career Switcher">Career Switcher from Non-Tech</option>
              </select>
            </div>
          </div>

          {/* Known Technologies with Skill Levels */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-300 block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" /> Technologies You Currently Know
              </label>
              <span className="text-[11px] text-zinc-500">
                Click a badge to toggle 🟢 Strong / 🟡 Developing
              </span>
            </div>

            {/* Current Added Skills List */}
            <div className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl min-h-[70px] flex flex-wrap gap-2 items-center">
              {knownSkills.length === 0 ? (
                <span className="text-xs text-zinc-500 italic">
                  No skills added yet. Add your current technologies below.
                </span>
              ) : (
                knownSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                      skill.level === "Strong"
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSkillLevel(idx)}
                      className="flex items-center gap-1 hover:opacity-80"
                      title="Click to toggle skill level"
                    >
                      <span>{skill.level === "Strong" ? "🟢" : "🟡"}</span>
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-zinc-400">({skill.level})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => removeSkill(idx)}
                      className="ml-1 text-zinc-500 hover:text-red-400"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Add Custom Skill Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill(skillInput, skillLevelInput);
                  }
                }}
                placeholder="Type a skill (e.g. React, PostgreSQL, Docker)..."
                className="flex-1 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
              />

              <select
                value={skillLevelInput}
                onChange={(e) => setSkillLevelInput(e.target.value)}
                className="px-2.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-cyan-500"
              >
                <option value="Strong">🟢 Strong</option>
                <option value="Developing">🟡 Developing</option>
              </select>

              <button
                type="button"
                onClick={() => addSkill(skillInput, skillLevelInput)}
                className="px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-cyan-300 text-xs font-semibold rounded-xl flex items-center gap-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>

            {/* Quick Suggestions */}
            <div>
              <span className="text-[11px] text-zinc-500 font-medium block mb-1.5">
                Quick Suggestions (Click to Add):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COMMON_TECH_SUGGESTIONS.map((sug) => {
                  const isAdded = knownSkills.some(
                    (s) => s.name.toLowerCase() === sug.toLowerCase()
                  );
                  return (
                    <button
                      key={sug}
                      type="button"
                      disabled={isAdded}
                      onClick={() => addSkill(sug, "Strong")}
                      className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                        isAdded
                          ? "bg-zinc-900 text-zinc-600 border-zinc-800 cursor-not-allowed"
                          : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-cyan-500/40 hover:text-zinc-200"
                      }`}
                    >
                      + {sug}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Time & Timeline Settings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" /> Weekly Time Available
              </label>
              <select
                value={availableTime}
                onChange={(e) => setAvailableTime(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="5_10_hrs">5-10 Hours / Week (Light / Busy Schedule)</option>
                <option value="15_20_hrs">15-20 Hours / Week (Standard Dedicated)</option>
                <option value="20_plus_hrs">20+ Hours / Week (Intensive Full-Time)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" /> Target Timeline Goal
              </label>
              <select
                value={targetTimeline}
                onChange={(e) => setTargetTimeline(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="3_months">3 Months — Fast-Track Essentials Sprint</option>
                <option value="6_months">6 Months — Balanced Full-Cycle Track</option>
                <option value="1_year">1 Year — Deep Mastery & Enterprise Capstones</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 border-t border-zinc-800 bg-zinc-900/60 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-zinc-500">
            Saved securely in your browser session.
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-semibold rounded-lg border border-zinc-800"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveProfile}
              className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black text-xs font-bold rounded-lg shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" /> Save Profile & Run Gap Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
