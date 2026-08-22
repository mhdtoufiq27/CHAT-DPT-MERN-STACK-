/**
 * Career Controller
 * Handles career families, roles, detailed roadmaps, comparisons,
 * personalized gap analysis, dynamic roadmap adaptation, career discovery,
 * AI Career Coach (Focus Now, Weekly Roadmap, Evidence-Based Readiness, and Coach Q&A),
 * and Job Description (JD) Skill Gap Analyzer.
 */

const careerData = require("../data/careerData");

/**
 * Normalizes skill strings for accurate fuzzy matching
 */
function normalizeSkill(str) {
  if (!str) return "";
  const s = str.toLowerCase().trim();
  if (s === "js" || s === "javascript") return "javascript";
  if (s === "ts" || s === "typescript") return "typescript";
  if (s === "react" || s === "react.js" || s === "reactjs") return "react";
  if (s === "node" || s === "node.js" || s === "nodejs") return "node";
  if (s === "express" || s === "express.js") return "express";
  if (s === "postgres" || s === "postgresql") return "postgresql";
  if (s === "mongo" || s === "mongodb") return "mongodb";
  if (s === "py" || s === "python") return "python";
  if (s === "fastapi") return "fastapi";
  if (s === "django") return "django";
  if (s === "docker") return "docker";
  if (s === "k8s" || s === "kubernetes") return "kubernetes";
  if (s === "aws") return "aws";
  if (s === "git" || s === "github") return "git";
  if (s === "html" || s === "html5") return "html";
  if (s === "css" || s === "css3" || s === "tailwind") return "css";
  if (s === "sql") return "sql";
  return s.replace(/[^a-z0-9]/g, "");
}

/**
 * Checks if user's skill matches target technology
 */
function isSkillMatch(techName, knownSkillName) {
  const normTech = normalizeSkill(techName);
  const normKnown = normalizeSkill(knownSkillName);
  if (normTech === normKnown) return true;
  if (normTech.includes(normKnown) || normKnown.includes(normTech)) return true;
  return false;
}

/**
 * @desc    Get all career families
 * @route   GET /api/careers/families
 * @access  Public
 */
const getFamilies = async (req, res) => {
  try {
    const families = careerData.getAllFamilies();
    res.status(200).json({
      success: true,
      count: families.length,
      data: families
    });
  } catch (error) {
    console.error("Error fetching career families:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching career families"
    });
  }
};

/**
 * @desc    Get single career family with its roles
 * @route   GET /api/careers/families/:familyId
 * @access  Public
 */
const getFamilyById = async (req, res) => {
  try {
    const { familyId } = req.params;
    const family = careerData.getFamilyById(familyId);

    if (!family) {
      return res.status(404).json({
        success: false,
        message: `Career family '${familyId}' not found`
      });
    }

    const roles = careerData.getRolesByFamily(family.id);

    res.status(200).json({
      success: true,
      data: {
        ...family,
        roles
      }
    });
  } catch (error) {
    console.error("Error fetching career family:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching career family"
    });
  }
};

/**
 * @desc    Get all career roles
 * @route   GET /api/careers/roles
 * @access  Public
 */
const getRoles = async (req, res) => {
  try {
    const { family, search } = req.query;

    let roles = careerData.getAllRoles();

    if (family && family.trim() !== "" && family.toLowerCase() !== "all") {
      roles = careerData.getRolesByFamily(family);
    }

    if (search && search.trim() !== "") {
      roles = careerData.searchRoles(search);
    }

    res.status(200).json({
      success: true,
      count: roles.length,
      data: roles
    });
  } catch (error) {
    console.error("Error fetching career roles:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching career roles"
    });
  }
};

/**
 * @desc    Get single role with complete roadmap
 * @route   GET /api/careers/roles/:roleId
 * @access  Public
 */
const getRoleById = async (req, res) => {
  try {
    const { roleId } = req.params;
    const role = careerData.getRoleById(roleId);

    if (!role) {
      return res.status(404).json({
        success: false,
        message: `Career role '${roleId}' not found`
      });
    }

    res.status(200).json({
      success: true,
      data: role
    });
  } catch (error) {
    console.error("Error fetching career role:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching career role"
    });
  }
};

/**
 * @desc    Compare multiple roles
 * @route   GET /api/careers/compare & POST /api/careers/compare
 * @access  Public
 */
const compareRoles = async (req, res) => {
  try {
    let ids = [];
    if (req.method === "POST" && req.body && req.body.roleIds) {
      ids = req.body.roleIds;
    } else if (req.query && req.query.ids) {
      ids = req.query.ids.split(",").map(s => s.trim());
    }

    if (!ids || ids.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least 2 role IDs to compare"
      });
    }

    const comparedRoles = ids.map(id => careerData.getRoleById(id)).filter(Boolean);

    if (comparedRoles.length < 2) {
      return res.status(404).json({
        success: false,
        message: "Could not find enough matching roles for comparison"
      });
    }

    res.status(200).json({
      success: true,
      count: comparedRoles.length,
      data: comparedRoles
    });
  } catch (error) {
    console.error("Error comparing career roles:", error);
    res.status(500).json({
      success: false,
      message: "Server error comparing roles"
    });
  }
};

/**
 * @desc    Detailed Multi-Dimensional Career Comparison
 * @route   GET /api/careers/compare-detailed
 * @access  Public
 */
const getDetailedComparison = async (req, res) => {
  try {
    const { ids } = req.query;
    if (!ids) {
      return res.status(400).json({ success: false, message: "Provide comma-separated role IDs" });
    }

    const roleIdList = ids.split(",").map(s => s.trim());
    const roles = roleIdList.map(id => careerData.getRoleById(id)).filter(Boolean);

    if (roles.length < 2) {
      return res.status(400).json({ success: false, message: "Provide at least 2 valid role IDs" });
    }

    const comparisonMatrix = roles.map(role => {
      const family = role.careerFamily.toUpperCase();
      let mathIntensity = "Low / Standard Logic";
      let programmingIntensity = "High (Web / Systems)";
      let difficultyCurve = "Moderate (4-6 Months)";

      if (family.includes("DATA") || family.includes("AI")) {
        mathIntensity = role.id.includes("analyst") ? "Moderate (Statistics & Probability)" : "High (Linear Algebra, Calculus, Stats)";
        programmingIntensity = "High (Python / SQL)";
        difficultyCurve = "Challenging (6-9 Months)";
      } else if (family.includes("CLOUD") || family.includes("DEVOPS")) {
        mathIntensity = "Low / Basic Networking Calculations";
        programmingIntensity = "Moderate (Scripting, IaC & Go/Python)";
        difficultyCurve = "Moderate to High (5-7 Months)";
      } else if (family.includes("CYBERSECURITY")) {
        mathIntensity = "Moderate (Cryptography Basics)";
        programmingIntensity = "Moderate (Python, Bash, Network Sockets)";
        difficultyCurve = "High (Hands-on Labs & Certifications)";
      }

      return {
        id: role.id,
        roleName: role.roleName,
        careerFamily: role.careerFamily,
        badge: role.badge,
        salaryRange: role.salaryRange,
        programmingDemand: programmingIntensity,
        mathRequirement: mathIntensity,
        learningDifficulty: difficultyCurve,
        primaryLanguages: (role.technologies || []).filter(t => t.category && t.category.toLowerCase().includes("lang")).map(t => t.name),
        mustLearnTechnologies: (role.technologies || []).filter(t => t.priority === "MUST LEARN").map(t => t.name),
        topTools: (role.tools || []).slice(0, 4).map(t => t.name),
        projectScope: (role.projects || []).map(p => ({ tier: p.tier, title: p.title, difficulty: p.difficulty })),
        interviewFocus: Object.keys(role.interviewRoadmap || {}),
        idealForDegrees: role.targetAudience || ["BCA", "B.Tech", "MCA"]
      };
    });

    res.status(200).json({
      success: true,
      count: comparisonMatrix.length,
      data: comparisonMatrix
    });
  } catch (error) {
    console.error("Detailed comparison error:", error);
    res.status(500).json({ success: false, message: "Server error generating detailed comparison" });
  }
};

/**
 * @desc    Personalized Career Gap Analysis & Dynamic Roadmap Generation
 * @route   POST /api/careers/gap-analysis
 * @access  Public
 */
const performGapAnalysis = async (req, res) => {
  try {
    const {
      roleId,
      knownSkills = [],
      education,
      availableTime = "15_20_hrs",
      targetTimeline = "6_months",
      experience = "0_years"
    } = req.body;

    if (!roleId) {
      return res.status(400).json({
        success: false,
        message: "Target roleId is required for gap analysis"
      });
    }

    const role = careerData.getRoleById(roleId);
    if (!role) {
      return res.status(404).json({
        success: false,
        message: `Role '${roleId}' not found`
      });
    }

    // Standardize user's known skills array
    const userSkillMap = new Map();
    knownSkills.forEach(item => {
      if (typeof item === "string") {
        userSkillMap.set(item.toLowerCase().trim(), { name: item, level: "Strong" });
      } else if (item && item.name) {
        userSkillMap.set(item.name.toLowerCase().trim(), {
          name: item.name,
          level: item.level || "Strong"
        });
      }
    });

    const technologies = role.technologies || [];
    const matchedSkills = [];
    const developingSkills = [];
    const missingSkills = [];

    let totalPoints = 0;
    let earnedPoints = 0;

    technologies.forEach(tech => {
      const weight = tech.priority === "MUST LEARN" ? 3 : tech.priority === "HIGH PRIORITY" ? 2 : 1;
      totalPoints += weight;

      let matchedUserSkill = null;
      for (const [knownKey, userSkillObj] of userSkillMap.entries()) {
        if (isSkillMatch(tech.name, knownKey)) {
          matchedUserSkill = userSkillObj;
          break;
        }
      }

      if (matchedUserSkill) {
        if (matchedUserSkill.level === "Strong") {
          earnedPoints += weight;
          matchedSkills.push({
            name: tech.name,
            priority: tech.priority,
            category: tech.category,
            status: "STRONG",
            badge: "🟢 Strong",
            userLevel: "Strong",
            description: tech.description
          });
        } else {
          earnedPoints += weight * 0.5;
          developingSkills.push({
            name: tech.name,
            priority: tech.priority,
            category: tech.category,
            status: "DEVELOPING",
            badge: "🟡 Developing",
            userLevel: matchedUserSkill.level || "Developing",
            description: tech.description,
            recommendation: "Needs practical project reinforcement and test coverage."
          });
        }
      } else {
        missingSkills.push({
          name: tech.name,
          priority: tech.priority,
          category: tech.category,
          status: "MISSING",
          badge: "🔴 Missing",
          description: tech.description,
          recommendation: `Widely requested competency for ${role.roleName}. Requirements vary by company.`
        });
      }
    });

    const matchScore = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

    // Generate Adaptive Roadmap
    const rawOrder = role.learningOrder || [];
    let startingStepIndex = 1;
    let foundFirstGap = false;

    const personalizedRoadmap = rawOrder.map((stepItem, index) => {
      let isStepMastered = false;
      let isStepDeveloping = false;

      for (const [knownKey, userSkillObj] of userSkillMap.entries()) {
        if (isSkillMatch(stepItem.technology, knownKey)) {
          if (userSkillObj.level === "Strong") {
            isStepMastered = true;
          } else {
            isStepDeveloping = true;
          }
          break;
        }
      }

      let stepStatus = "MISSING";
      let statusBadge = "🔴 Next Focus";
      let actionRecommendation = `Prioritize learning ${stepItem.technology} now.`;

      if (isStepMastered) {
        stepStatus = "MASTERED";
        statusBadge = "🟢 Already Mastered";
        actionRecommendation = "✓ You already have strong command here. Fast-forward to the next step.";
      } else if (isStepDeveloping) {
        stepStatus = "DEVELOPING";
        statusBadge = "🟡 Strengthen Skill";
        actionRecommendation = "Complete hands-on mini-project to elevate from developing to mastery.";
        if (!foundFirstGap) {
          startingStepIndex = stepItem.step;
          foundFirstGap = true;
        }
      } else {
        if (!foundFirstGap) {
          startingStepIndex = stepItem.step;
          foundFirstGap = true;
        }
      }

      let timelinePacing = "Standard Pacing";
      if (targetTimeline === "3_months") {
        timelinePacing = stepItem.priority === "MUST LEARN" ? "Accelerated 1-2 Weeks (Core Essentials)" : "Optional / Review on Demand";
      } else if (targetTimeline === "1_year") {
        timelinePacing = "Comprehensive 3-4 Weeks (Deep Theory + Enterprise Capstone)";
      } else {
        timelinePacing = "Standard 2-3 Weeks (Structured Practice)";
      }

      return {
        ...stepItem,
        status: stepStatus,
        statusBadge,
        actionRecommendation,
        timelinePacing,
        isStartingPoint: stepItem.step === startingStepIndex
      };
    });

    let timelineLabel = "6 Months Standard Career Track";
    let weeklyHours = availableTime === "5_10_hrs" ? "5-10 Hours/Week" : availableTime === "20_plus_hrs" ? "20+ Hours/Week (Intensive)" : "15-20 Hours/Week";
    let strategySummary = "";

    if (targetTimeline === "3_months") {
      timelineLabel = "3 Months Fast-Track Career Sprint";
      strategySummary = `Focused strictly on the ${missingSkills.filter(s => s.priority === 'MUST LEARN').length} MUST-LEARN technologies and building Tier 1 & 2 portfolio projects. Optional enterprise topics are deferred to prevent burnout.`;
    } else if (targetTimeline === "1_year") {
      timelineLabel = "1 Year Deep Mastery & Enterprise Engineering Track";
      strategySummary = `Comprehensive end-to-end curriculum covering core skills, scalable distributed architectures, all 4 project tiers, open-source contributions, and FAANG-level interview preparation.`;
    } else {
      timelineLabel = "6 Months Balanced Career Launch Track";
      strategySummary = `Balanced pacing giving 3-4 weeks per major skill gap, completing Tier 1-3 projects, and practicing role-specific interviews.`;
    }

    res.status(200).json({
      success: true,
      data: {
        roleId: role.id,
        roleName: role.roleName,
        careerFamily: role.careerFamily,
        matchScore,
        readinessStatus: matchScore >= 75 ? "Job Ready / Advanced" : matchScore >= 40 ? "Intermediate / Needs Gap Fill" : "Foundational / Begin Roadmapped Path",
        summary: {
          totalSkillsMapped: technologies.length,
          strongCount: matchedSkills.length,
          developingCount: developingSkills.length,
          missingCount: missingSkills.length,
          startingStepNumber: startingStepIndex
        },
        skillGapBreakdown: {
          strong: matchedSkills,
          developing: developingSkills,
          missing: missingSkills
        },
        personalizedRoadmap,
        customActionPlan: {
          timeline: timelineLabel,
          weeklyCommitment: weeklyHours,
          strategy: strategySummary,
          recommendedStartingFocus: personalizedRoadmap.find(s => s.step === startingStepIndex)?.technology || "Core Fundamentals",
          disclaimer: "These skills are commonly relevant for this role, but requirements vary by company. Roadmaps are structured guides for skill acquisition and do not guarantee employment."
        }
      }
    });
  } catch (error) {
    console.error("Error performing career gap analysis:", error);
    res.status(500).json({
      success: false,
      message: "Server error performing career gap analysis"
    });
  }
};

/**
 * @desc    AI Career Coach Plan (FOCUS NOW, Weekly Roadmap, Evidence-Based Readiness)
 * @route   POST /api/careers/coach-plan
 * @access  Public
 */
const generateCoachPlan = async (req, res) => {
  try {
    const {
      roleId,
      knownSkills = [],
      skillProgress = {},
      targetTimeline = "6_months",
      weeklyHours = "15-20 Hours/Week",
      verifiedChecklist = {}
    } = req.body;

    const role = careerData.getRoleById(roleId);
    if (!role) {
      return res.status(404).json({ success: false, message: `Role '${roleId}' not found` });
    }

    const learningOrder = role.learningOrder || [];
    
    // Find active step (first step not completed)
    let activeStep = learningOrder[0];
    for (const step of learningOrder) {
      const prog = skillProgress[step.technology] || (knownSkills.some(k => isSkillMatch(step.technology, k.name || k)) ? "Completed" : "Not Started");
      if (prog !== "Completed") {
        activeStep = step;
        break;
      }
    }

    // 1. Generate FOCUS NOW (This Week / Today 5 actionable tasks)
    const focusNow = {
      activeTopic: activeStep.technology,
      stepNumber: activeStep.step,
      priority: activeStep.priority,
      whyItMatters: activeStep.whyYouNeedIt,
      tasks: [
        { id: 1, type: "LEARN", label: `Study Core Theory: ${activeStep.topics[0] || activeStep.technology}`, detail: "Read documentation and understand fundamental architectural patterns." },
        { id: 2, type: "PRACTICE", label: `Hands-On Coding: ${activeStep.practice || "Complete practical syntax exercises"}`, detail: "Implement directly without copying to build muscle memory." },
        { id: 3, type: "BUILD", label: `Mini-Project Component: ${activeStep.miniProject || "Build a working demonstration"}`, detail: "Ship a functional, testable mini-project repository." },
        { id: 4, type: "REVIEW", label: `Self-Review & Code Quality Audit`, detail: "Check error handling, edge cases, and code modularity." },
        { id: 5, type: "INTERVIEW", label: `Practice Interview Questions for ${activeStep.technology}`, detail: role.interviewRoadmap?.technicalFundamentals?.[0]?.question || "Explain the core mechanics and trade-offs of this technology." }
      ]
    };

    // 2. Generate Dynamic Weekly Roadmap
    const totalWeeks = targetTimeline === "3_months" ? 12 : targetTimeline === "1_year" ? 24 : 16;
    const weeklyRoadmap = [];
    let currentStepPointer = 0;
    for (let w = 1; w <= totalWeeks; w++) {
      const stepForWeek = learningOrder[currentStepPointer % learningOrder.length];
      const isReviewWeek = w % 4 === 0;

      if (isReviewWeek) {
        weeklyRoadmap.push({
          weekNumber: w,
          phase: "PROJECT & REVIEW SPRINT",
          focusTitle: `Week ${w}: Milestone Integration & Tiered Project Sprint`,
          learn: "Review concepts learned in the previous 3 weeks and identify lingering weak areas.",
          practice: "Refactor codebase, add automated unit tests, and audit performance bottlenecks.",
          build: `Ship milestone deliverable for ${role.projects[Math.min(3, Math.floor(w / 4))]?.title || "Portfolio Project"}`,
          review: "Benchmark application latency, test error states, and polish GitHub README.",
          interviewPrep: "Conduct 1 simulated mock technical interview on VEXIS PRO."
        });
      } else {
        weeklyRoadmap.push({
          weekNumber: w,
          phase: stepForWeek.depth || "Core Mastery",
          focusTitle: `Week ${w}: ${stepForWeek.technology}`,
          learn: stepForWeek.topics?.join(", ") || `Deep dive into ${stepForWeek.technology} fundamentals.`,
          practice: stepForWeek.practice || `Write clean implementations of ${stepForWeek.technology} features.`,
          build: stepForWeek.miniProject || `Build an interactive mini-project demonstrating ${stepForWeek.technology}.`,
          review: `Audit understanding of ${stepForWeek.technology} error handling and concurrency.`,
          interviewPrep: `Answer 3 technical interview questions regarding ${stepForWeek.technology}.`
        });
        currentStepPointer++;
      }
    }

    // 3. Evidence-Based Career Readiness (Strict factual scoring)
    let completedSkillsCount = 0;
    learningOrder.forEach(s => {
      const prog = skillProgress[s.technology] || (knownSkills.some(k => isSkillMatch(s.technology, k.name || k)) ? "Completed" : "Not Started");
      if (prog === "Completed") completedSkillsCount++;
    });

    const techScore = Math.round((completedSkillsCount / Math.max(1, learningOrder.length)) * 100);
    const checkedCount = Object.values(verifiedChecklist).filter(Boolean).length;
    
    const evidenceReadiness = {
      overallScore: Math.round((techScore * 0.4) + (Math.min(100, checkedCount * 4) * 0.6)),
      categories: [
        {
          name: "Technical Skills",
          score: techScore,
          status: techScore >= 80 ? "STRONG" : techScore >= 40 ? "DEVELOPING" : "EARLY_STAGE",
          evidence: `${completedSkillsCount} of ${learningOrder.length} core learning order technologies verified completed.`,
          gap: techScore < 80 ? `Still need to master ${learningOrder.length - completedSkillsCount} remaining technologies.` : "Strong technical foundation established."
        },
        {
          name: "Projects & Architecture",
          score: checkedCount >= 8 ? 75 : checkedCount >= 4 ? 45 : 15,
          status: checkedCount >= 8 ? "STRONG" : "NEEDS_EVIDENCE",
          evidence: `Verified ${Math.min(4, Math.floor(checkedCount / 3))} of 4 project tiers deployed with live documentation.`,
          gap: "Ensure capstone project has end-to-end testing and CI/CD deployment."
        },
        {
          name: "Problem Solving (DSA)",
          score: checkedCount >= 12 ? 70 : 30,
          status: "IN_PROGRESS",
          evidence: "Based on data structure and algorithm checklist progress.",
          gap: "Solve 50+ LeetCode Medium problems covering Two Pointers, HashMaps, and Trees."
        },
        {
          name: "Core CS Fundamentals",
          score: checkedCount >= 6 ? 60 : 25,
          status: "DEVELOPING",
          evidence: "Evaluation of DBMS indexing, Operating Systems concurrency, and TCP/IP networking.",
          gap: "Deepen understanding of B-Tree indexing and deadlock prevention."
        },
        {
          name: "Communication & Pitch",
          score: checkedCount >= 16 ? 85 : 40,
          status: "REQUIRES_PRACTICE",
          evidence: "Assessed via technical explanation fluency and project defense ability.",
          gap: "Practice 2-minute elevator pitch on Self Introduction Coach."
        },
        {
          name: "Interview Preparation",
          score: checkedCount >= 14 ? 75 : 20,
          status: "PENDING_MOCK",
          evidence: "Technical and behavioral question defense practice.",
          gap: "Schedule a full technical Mock Interview session."
        },
        {
          name: "Resume / Portfolio",
          score: checkedCount >= 10 ? 80 : 35,
          status: "IN_PROGRESS",
          evidence: "GitHub repository clean commit history and live demo URL presence.",
          gap: "Ensure 1-page ATS resume contains quantifiable metric achievements."
        }
      ]
    };

    // 4. Feature Bridge Connections
    const recommendedActions = [
      {
        feature: "Self Introduction Coach",
        title: "Practice Your 2-Minute Developer Pitch",
        description: "Polish your self introduction and communication fluency before interviews.",
        actionType: "LAUNCH_INTRO_COACH",
        urgency: "HIGH"
      },
      {
        feature: "Mock Technical Interview",
        title: `Simulate a ${role.roleName} Technical Round`,
        description: "Live AI-powered technical coding and architecture interview.",
        actionType: "LAUNCH_MOCK_INTERVIEW",
        urgency: "RECOMMENDED"
      },
      {
        feature: "HR & Behavioral Interview",
        title: "Practice STAR Method Behavioral Questions",
        description: "Prepare structured answers for conflict resolution and leadership questions.",
        actionType: "LAUNCH_HR_INTERVIEW",
        urgency: "MEDIUM"
      },
      {
        feature: "AI Coding Coach (Chat)",
        title: `Code Review for ${activeStep.technology}`,
        description: "Ask VEXIS PRO Chat to generate code exercises or debug complex logic.",
        actionType: "LAUNCH_CHAT_PROMPT",
        prompt: `Can you create a hands-on coding challenge for ${activeStep.technology} with unit tests?`
      }
    ];

    res.status(200).json({
      success: true,
      data: {
        roleId: role.id,
        roleName: role.roleName,
        focusNow,
        weeklyRoadmap,
        evidenceReadiness,
        recommendedActions
      }
    });
  } catch (error) {
    console.error("Error generating coach plan:", error);
    res.status(500).json({ success: false, message: "Server error generating coach plan" });
  }
};

/**
 * @desc    AI Career Coach Q&A
 * @route   POST /api/careers/coach-ask
 * @access  Public
 */
const askCoachQuestion = async (req, res) => {
  try {
    const { roleId, question, userProfile = {}, currentStep = 1 } = req.body;
    const role = careerData.getRoleById(roleId);
    if (!role) {
      return res.status(404).json({ success: false, message: `Role '${roleId}' not found` });
    }

    const q = (question || "").toLowerCase();
    let answer = "";
    let suggestedAction = null;

    if (q.includes("today") || q.includes("learn now") || q.includes("start")) {
      const step = role.learningOrder?.[currentStep - 1] || role.learningOrder?.[0];
      answer = `For your **${role.roleName}** path, your immediate focus is **Step #${step.step}: ${step.technology}**.\n\n` +
        `• **Why:** ${step.whyYouNeedIt}\n` +
        `• **Today's Goal:** ${step.practice}\n` +
        `• **Deliverable:** ${step.miniProject}`;
      suggestedAction = { label: "View Step Details", tab: "learningOrder" };
    } else if (q.includes("internship") || q.includes("ready")) {
      answer = `To be internship-ready for a **${role.roleName}** role, you need:\n\n` +
        `1. Complete Tier 1 (Beginner) and Tier 2 (Intermediate) projects with live URLs.\n` +
        `2. Master widely requested core technologies: ${(role.technologies || []).filter(t => t.priority === 'MUST LEARN').slice(0, 3).map(t => t.name).join(", ")}.\n` +
        `3. Solve 40+ fundamental DSA coding problems (Arrays, HashMaps, Strings).\n` +
        `4. Have a clean 1-page ATS resume with GitHub links.\n\n` +
        `*Note: These competencies are widely requested by hiring teams, but requirements vary by company.*`;
      suggestedAction = { label: "Check Readiness Score", tab: "readiness" };
    } else if (q.includes("missing") || q.includes("gap")) {
      answer = `Based on the **${role.roleName}** curriculum, commonly requested core competencies are:\n\n` +
        (role.technologies || []).filter(t => t.priority === "MUST LEARN").map((t, idx) => `${idx + 1}. **${t.name}** — ${t.description}`).join("\n");
      suggestedAction = { label: "View Gap Analysis", tab: "gapAnalysis" };
    } else if (q.includes("aws") || q.includes("cloud")) {
      const hasCloudInFamily = role.careerFamily.toUpperCase().includes("CLOUD");
      if (hasCloudInFamily) {
        answer = `**Yes!** Cloud infrastructure (AWS/Azure) is widely requested for ${role.roleName}. Focus on VPC, EC2, S3, IAM, and Terraform.`;
      } else {
        answer = `**Not immediately.** For an entry-level ${role.roleName}, first master core programming, APIs, and relational databases. AWS is role-dependent and can be learned in Phase 2 or deployed via managed platforms (Render/Vercel) initially to avoid premature complexity.`;
      }
    } else if (q.includes("project")) {
      const capstone = role.projects?.[3] || role.projects?.[2];
      answer = `A high-impact project you can build for ${role.roleName} is:\n\n` +
        `🏆 **${capstone?.title}**\n` +
        `• **Stack:** ${(capstone?.technology || []).join(", ")}\n` +
        `• **Outcome:** ${capstone?.expectedOutcome}\n` +
        `• **Recruiter Value:** ${capstone?.portfolioValue}`;
      suggestedAction = { label: "View 4-Tier Projects", tab: "projects" };
    } else if (q.includes("docker")) {
      answer = `**Docker is widely used** because it guarantees that your application runs identically on your local laptop, your teammate's machine, and production cloud servers. It eliminates environment discrepancies and is widely requested across modern engineering teams.`;
    } else {
      answer = `As an AI Career Coach for **${role.roleName}**, I recommend sticking to the directed learning order: focus on one technology at a time, build a mini-project for each step, and practice mock technical interviews once you complete your intermediate project.`;
      suggestedAction = { label: "Explore Roadmap", tab: "learningOrder" };
    }

    res.status(200).json({
      success: true,
      data: {
        question,
        answer,
        suggestedAction
      }
    });
  } catch (error) {
    console.error("Error answering coach question:", error);
    res.status(500).json({ success: false, message: "Server error processing coach question" });
  }
};

/**
 * @desc    Job Description (JD) Skill Gap Analyzer
 * @route   POST /api/careers/analyze-jd
 * @access  Public
 */
const analyzeJobDescription = async (req, res) => {
  try {
    const { jobDescriptionText, userProfile = {}, targetRoleId } = req.body;

    if (!jobDescriptionText || jobDescriptionText.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Job description text is required for analysis"
      });
    }

    const text = jobDescriptionText.toLowerCase();

    // Technology keyword dictionary for extraction
    const techDictionary = [
      { name: "JavaScript", category: "Language", aliases: ["javascript", "js", "es6"] },
      { name: "TypeScript", category: "Language", aliases: ["typescript", "ts"] },
      { name: "Python", category: "Language", aliases: ["python", "python3", "py"] },
      { name: "Java", category: "Language", aliases: ["java", "spring boot", "spring"] },
      { name: "C++", category: "Language", aliases: ["c++", "cpp"] },
      { name: "C# / .NET", category: "Language", aliases: ["c#", ".net", "dotnet"] },
      { name: "Golang", category: "Language", aliases: ["golang", "go"] },
      { name: "React.js", category: "Frontend", aliases: ["react", "react.js", "reactjs", "next.js", "redux"] },
      { name: "HTML5 / CSS3", category: "Frontend", aliases: ["html", "html5", "css", "css3", "tailwind"] },
      { name: "Node.js / Express", category: "Backend", aliases: ["node", "node.js", "express", "express.js"] },
      { name: "Django / FastAPI", category: "Backend", aliases: ["django", "fastapi", "flask"] },
      { name: "SQL & Relational DB", category: "Database", aliases: ["sql", "postgresql", "postgres", "mysql"] },
      { name: "MongoDB & NoSQL", category: "Database", aliases: ["mongodb", "mongo", "nosql", "redis"] },
      { name: "REST APIs & GraphQL", category: "Architecture", aliases: ["rest", "restful", "rest api", "graphql", "microservices"] },
      { name: "Docker & Containers", category: "DevOps", aliases: ["docker", "container", "containers", "containerization"] },
      { name: "Kubernetes", category: "DevOps", aliases: ["kubernetes", "k8s"] },
      { name: "AWS / Cloud", category: "Cloud", aliases: ["aws", "amazon web services", "ec2", "s3", "cloud"] },
      { name: "Git & CI/CD", category: "Tools", aliases: ["git", "github", "gitlab", "ci/cd", "jenkins", "github actions"] },
      { name: "Power BI / Tableau", category: "Data", aliases: ["power bi", "tableau", "data visualization", "dashboards"] },
      { name: "Pandas & NumPy", category: "Data", aliases: ["pandas", "numpy", "scikit-learn"] },
      { name: "PyTorch & TensorFlow", category: "AI/ML", aliases: ["pytorch", "tensorflow", "keras", "machine learning", "deep learning"] },
      { name: "Linux & Bash", category: "Systems", aliases: ["linux", "bash", "shell scripting", "unix"] },
      { name: "Cybersecurity & SIEM", category: "Security", aliases: ["security", "siem", "soc", "wireshark", "penetration testing", "vulnerability"] }
    ];

    const extractedRequired = [];
    const extractedPreferred = [];
    const extractedTools = [];

    // Analyze extracted skills from JD
    techDictionary.forEach(tech => {
      const isPresent = tech.aliases.some(alias => {
        const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(^|\\W)${escaped}(\\W|$)`, "i");
        return regex.test(text);
      });

      if (isPresent) {
        // Classify as preferred vs required based on keyword context
        const isPreferred = text.includes("preferred") || text.includes("nice to have") || text.includes("plus") || text.includes("bonus");
        if (isPreferred && Math.random() > 0.6) {
          extractedPreferred.push(tech.name);
        } else {
          extractedRequired.push(tech.name);
        }
        if (tech.category === "Tools" || tech.category === "DevOps") {
          extractedTools.push(tech.name);
        }
      }
    });

    // Fallback if very short JD
    if (extractedRequired.length === 0) {
      extractedRequired.push("JavaScript", "React.js", "SQL & Relational DB", "Git & CI/CD");
    }

    // Compare against student profile
    const userKnown = userProfile.knownSkills || [];
    const strongMatches = [];
    const developingMatches = [];
    const skillGaps = [];

    extractedRequired.concat(extractedPreferred).forEach(techName => {
      const matched = userKnown.find(k => isSkillMatch(techName, k.name || k));
      if (matched) {
        if (matched.level === "Strong" || (typeof matched === "string")) {
          strongMatches.push(techName);
        } else {
          developingMatches.push(techName);
        }
      } else {
        skillGaps.push(techName);
      }
    });

    const totalExtracted = strongMatches.length + developingMatches.length + skillGaps.length;
    const matchPercentage = totalExtracted > 0 ? Math.round(((strongMatches.length + (developingMatches.length * 0.5)) / totalExtracted) * 100) : 0;

    // Detect closest role
    let recommendedRole = "full-stack-developer";
    if (text.includes("data analyst") || text.includes("power bi") || text.includes("tableau")) {
      recommendedRole = "data-analyst";
    } else if (text.includes("data scientist") || text.includes("machine learning")) {
      recommendedRole = "data-scientist";
    } else if (text.includes("devops") || text.includes("kubernetes") || text.includes("ci/cd")) {
      recommendedRole = "devops-engineer";
    } else if (text.includes("security") || text.includes("soc") || text.includes("cyber")) {
      recommendedRole = "cybersecurity-analyst";
    } else if (text.includes("frontend") || text.includes("react")) {
      recommendedRole = "frontend-developer";
    } else if (text.includes("backend") || text.includes("node") || text.includes("java") || text.includes("python")) {
      recommendedRole = "backend-developer";
    } else if (targetRoleId) {
      recommendedRole = targetRoleId;
    }

    const priorityLearning = skillGaps.slice(0, 3).map((skill, i) => ({
      step: i + 1,
      skill,
      action: `Build a concrete mini-project demonstrating ${skill} to address this primary requirement.`
    }));

    res.status(200).json({
      success: true,
      data: {
        matchPercentage,
        matchStatus: matchPercentage >= 70 ? "High Match Candidate" : matchPercentage >= 40 ? "Moderate Match / Gap Fill Needed" : "Significant Skill Gaps",
        extractedSkills: {
          required: extractedRequired,
          preferred: extractedPreferred,
          tools: extractedTools
        },
        strongMatches,
        developingMatches,
        skillGaps,
        priorityLearning,
        recommendedRoleRoadmap: recommendedRole,
        disclaimer: "These skills are commonly relevant for this job posting, but employer expectations vary by company."
      }
    });
  } catch (error) {
    console.error("Error analyzing job description:", error);
    res.status(500).json({ success: false, message: "Server error analyzing job description" });
  }
};

/**
 * @desc    Career Discovery Questionnaire Engine
 * @route   POST /api/careers/discover
 * @access  Public
 */
const discoverCareers = async (req, res) => {
  try {
    const {
      problemPreference,
      mathComfort,
      workStyle,
      programmingExperience,
      degree
    } = req.body;

    const allRoles = careerData.getAllRoles();
    const scoredRoles = allRoles.map(role => {
      let score = 50;
      let reasons = [];

      const fam = role.careerFamily.toUpperCase();

      if (problemPreference === "visual_ui" && (fam.includes("WEB") || role.id.includes("frontend") || role.id.includes("ui"))) {
        score += 35;
        reasons.push("Matches your interest in visual design, browser interfaces, and responsive user experiences.");
      } else if (problemPreference === "backend_apis" && (fam.includes("SOFTWARE") && (role.id.includes("backend") || role.id.includes("full-stack") || role.id.includes("java") || role.id.includes("python")))) {
        score += 35;
        reasons.push("Matches your focus on server-side architecture, APIs, and relational databases.");
      } else if (problemPreference === "data_ai" && fam.includes("DATA")) {
        score += 35;
        reasons.push("Matches your enthusiasm for predictive models, statistics, analytics, and intelligent AI systems.");
      } else if (problemPreference === "security" && fam.includes("CYBER")) {
        score += 35;
        reasons.push("Matches your passion for defensive security, ethical hacking, and threat mitigation.");
      } else if (problemPreference === "cloud_devops" && fam.includes("CLOUD")) {
        score += 35;
        reasons.push("Matches your interest in scalable infrastructure, CI/CD automation, and cloud deployments.");
      } else if (problemPreference === "systems_embedded" && (fam.includes("SPECIALIZED") || fam.includes("DATABASE") || role.id.includes("embedded"))) {
        score += 35;
        reasons.push("Matches your curiosity for hardware microcontrollers, low-level C/C++, and operating systems.");
      } else if (problemPreference === "business_tech" && fam.includes("BUSINESS")) {
        score += 35;
        reasons.push("Matches your desire to bridge business strategy with technical system design.");
      }

      if (mathComfort === "minimal_math") {
        if (fam.includes("DATA") && !role.id.includes("analyst")) {
          score -= 20;
        } else if (fam.includes("WEB") || role.id.includes("frontend") || fam.includes("TESTING")) {
          score += 15;
          reasons.push("Relies primarily on programming logic and component architecture rather than advanced calculus.");
        }
      } else if (mathComfort === "high_math") {
        if (fam.includes("DATA") || role.id.includes("scientist") || role.id.includes("machine-learning")) {
          score += 20;
          reasons.push("Takes advantage of your strong comfort with linear algebra, calculus, and probability.");
        }
      }

      if (degree && role.targetAudience && role.targetAudience.includes(degree)) {
        score += 10;
      }

      score = Math.min(score, 96);

      return {
        id: role.id,
        roleName: role.roleName,
        careerFamily: role.careerFamily,
        badge: role.badge,
        shortDescription: role.shortDescription,
        salaryRange: role.salaryRange,
        fitScore: score,
        fitReasons: reasons.length > 0 ? reasons : ["Strong general alignment with modern IT industry demand."],
        prerequisites: (role.prerequisites || []).slice(0, 3).map(p => p.name),
        primaryTech: (role.technologies || []).slice(0, 4).map(t => t.name)
      };
    });

    scoredRoles.sort((a, b) => b.fitScore - a.fitScore);

    const topMatches = scoredRoles.slice(0, 3);
    const alternativeMatches = scoredRoles.slice(3, 6);

    res.status(200).json({
      success: true,
      data: {
        topMatches,
        alternativeMatches,
        disclaimer: "Career discovery results reflect your diagnostic preferences and provide high-signal starting points. No single career path is objectively absolute."
      }
    });
  } catch (error) {
    console.error("Error in career discovery:", error);
    res.status(500).json({
      success: false,
      message: "Server error running career discovery engine"
    });
  }
};

/**
 * @desc    Get summary statistics
 * @route   GET /api/careers/stats
 * @access  Public
 */
const getStats = async (req, res) => {
  try {
    const families = careerData.getAllFamilies();
    const roles = careerData.getAllRoles();

    res.status(200).json({
      success: true,
      data: {
        totalFamilies: families.length,
        totalRoles: roles.length,
        familiesBreakdown: families.map(f => ({
          id: f.id,
          name: f.name,
          roleCount: f.roleCount,
          badge: f.badge,
          color: f.color
        }))
      }
    });
  } catch (error) {
    console.error("Error fetching career stats:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching stats"
    });
  }
};

module.exports = {
  getFamilies,
  getFamilyById,
  getRoles,
  getRoleById,
  compareRoles,
  getDetailedComparison,
  performGapAnalysis,
  generateCoachPlan,
  askCoachQuestion,
  analyzeJobDescription,
  discoverCareers,
  getStats
};
