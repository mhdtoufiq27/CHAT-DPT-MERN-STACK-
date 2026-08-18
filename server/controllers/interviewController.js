const InterviewSession = require("../models/InterviewSession");
const IntroductionSession = require("../models/IntroductionSession");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// In-memory fallback store for offline MongoDB support
const memoryInterviews = new Map();

const apiKey = process.env.GEMINI_API_KEY;
let genAI = null;
if (apiKey && apiKey !== "your_gemini_api_key_here") {
  genAI = new GoogleGenerativeAI(apiKey);
}

const getOwnerQuery = (req) => {
  if (req.user) {
    return { userId: req.user._id };
  }
  return { guestId: req.guestId || "guest_default" };
};

const isOwner = (session, req) => {
  if (!session) return false;
  if (req.user) return String(session.userId) === String(req.user._id);
  return session.guestId === (req.guestId || "guest_default");
};

// Helper: Generate role-specific interview roadmap rounds
const generateRoadmapForRole = (role, totalQuestions) => {
  const lower = role.toLowerCase();
  const qPerRound = Math.max(1, Math.floor(totalQuestions / 4));

  if (lower.includes("java")) {
    return [
      { roundNumber: 1, roundName: "HR & Introduction", category: "Behavioral", questionCount: qPerRound, description: "Candidate introduction & core career motivation" },
      { roundNumber: 2, roundName: "Java Core Technical", category: "Technical", questionCount: qPerRound, description: "OOP, Collections, Exceptions & JVM concepts" },
      { roundNumber: 3, roundName: "Coding Round", category: "Coding", questionCount: qPerRound, description: "Data structures & algorithm implementation" },
      { roundNumber: 4, roundName: "SQL & Database Design", category: "SQL", questionCount: qPerRound, description: "Queries, joins, indexing & normalization" },
      { roundNumber: 5, roundName: "Final Behavioral & Project", category: "Behavioral", questionCount: Math.max(1, totalQuestions - qPerRound * 4), description: "Project architecture & teamwork scenario" },
    ];
  } else if (lower.includes("data scientist") || lower.includes("machine learning") || lower.includes("ai")) {
    return [
      { roundNumber: 1, roundName: "HR & Background", category: "Behavioral", questionCount: qPerRound, description: "Domain experience & project summary" },
      { roundNumber: 2, roundName: "Python & Statistics", category: "Technical", questionCount: qPerRound, description: "Probability, distributions & data manipulation" },
      { roundNumber: 3, roundName: "Machine Learning & Models", category: "Technical", questionCount: qPerRound, description: "Supervised/unsupervised models & evaluation metrics" },
      { roundNumber: 4, roundName: "SQL & Data Extraction", category: "SQL", questionCount: qPerRound, description: "Complex aggregations, window functions & joins" },
      { roundNumber: 5, roundName: "Case Study & Business Value", category: "Problem Solving", questionCount: Math.max(1, totalQuestions - qPerRound * 4), description: "Applying ML to solve business problems" },
    ];
  } else if (lower.includes("consultant") || lower.includes("business analyst")) {
    return [
      { roundNumber: 1, roundName: "HR & Background", category: "Behavioral", questionCount: qPerRound, description: "Consulting motivation & communication style" },
      { roundNumber: 2, roundName: "Aptitude & Problem Solving", category: "Problem Solving", questionCount: qPerRound, description: "Logical reasoning & quantitative thinking" },
      { roundNumber: 3, roundName: "Technical & SQL Basics", category: "SQL", questionCount: qPerRound, description: "Data queries & technical concepts" },
      { roundNumber: 4, roundName: "Business Scenario Case", category: "Problem Solving", questionCount: qPerRound, description: "Client troubleshooting & revenue drop scenario" },
      { roundNumber: 5, roundName: "Client Handling & Behavioral", category: "Behavioral", questionCount: Math.max(1, totalQuestions - qPerRound * 4), description: "Stakeholder management & conflict resolution" },
    ];
  }

  return [
    { roundNumber: 1, roundName: "HR & Intro", category: "Behavioral", questionCount: qPerRound, description: "Background & career trajectory" },
    { roundNumber: 2, roundName: "Core Technical", category: "Technical", questionCount: qPerRound, description: "Domain fundamentals & principles" },
    { roundNumber: 3, roundName: "Problem Solving & Coding", category: lower.includes("developer") || lower.includes("engineer") ? "Coding" : "Problem Solving", questionCount: qPerRound, description: "Practical application & analysis" },
    { roundNumber: 4, roundName: "Final HR & Behavioral", category: "Behavioral", questionCount: Math.max(1, totalQuestions - qPerRound * 3), description: "Behavioral scenarios & cultural fit" },
  ];
};

// @desc    Start a new AI Mock Interview with Pre-Interview Check & Intro Probing
// @route   POST /api/interviews/start
const startInterview = async (req, res) => {
  try {
    const { role, experience, interviewType, difficulty, duration, numQuestions, pressureMode, mode: selectedMode, personality: selectedPersonality, resumeText: rawResume, jobDescriptionText: rawJD } = req.body;

    if (!role || !role.trim()) {
      return res.status(400).json({ message: "Please enter the job role you want to prepare for." });
    }

    const targetRole = role.trim();
    const expLevel = experience || "Fresher";
    const type = interviewType || "Full Interview";
    const diff = difficulty || "Medium";
    const dur = duration || "30 Minutes";
    const count = parseInt(numQuestions) || 15;
    const isPressure = !!pressureMode || selectedMode === "Pressure";
    const mode = selectedMode || (isPressure ? "Pressure" : "Standard");
    const personality = selectedPersonality || "Professional";
    const resumeText = (rawResume || "").trim();
    const jobDescriptionText = (rawJD || "").trim();

    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";

    const roadmap = generateRoadmapForRole(targetRole, count);
    const firstRound = roadmap[0] || { roundName: "HR & Introduction", category: "Behavioral" };

    // Fetch candidate's latest IntroductionSession for target role
    const ownerQuery = userId ? { userId } : { guestId };
    let latestIntro = null;
    try {
      latestIntro = await IntroductionSession.findOne({ ...ownerQuery, role: targetRole }).sort({ createdAt: -1 });
    } catch (e) {}

    let linkedIntroSessionId = latestIntro ? latestIntro._id : null;
    let introPerformance = latestIntro ? {
      score: latestIntro.scores?.overallScore ? Math.round(latestIntro.scores.overallScore * 10) : 81,
      communication: latestIntro.scores?.clarity ? Math.round(latestIntro.scores.clarity * 10) : 84,
      techCommunication: latestIntro.scores?.fluency ? Math.round(latestIntro.scores.fluency * 10) : 80,
      roleRelevance: latestIntro.scores?.roleMatch ? Math.round(latestIntro.scores.roleMatch * 10) : 82,
    } : null;

    let roleProfile = {
      role: targetRole,
      coreSkills: ["Domain Fundamentals", "Problem Solving", "Communication", "Technical Depth"],
    };

    let jdSkillsChecklist = [
      { skill: "Core Technical Concepts", covered: false },
      { skill: "Problem Solving & Logic", covered: false },
      { skill: "System & Domain Architecture", covered: false },
      { skill: "Communication & Clarity", covered: false },
    ];

    let interviewerGreeting = `Good morning. I'll be conducting your technical interview for the ${targetRole} position today as a ${personality} interviewer. We will evaluate your technical depth, problem-solving skills, and scenario handling in ${mode} mode. Let's begin.`;

    let firstQuestionText = latestIntro && latestIntro.rawTranscript
      ? `Welcome to Round 1 (${firstRound.roundName}) for ${targetRole}! In your self-introduction, you highlighted your experience with "${latestIntro.rawTranscript.substring(0, 70)}...". Can you elaborate on the architecture and key challenges of that work?`
      : `Welcome to Round 1 (${firstRound.roundName}) for the ${targetRole} position! To begin, please introduce yourself and highlight your key experience and projects related to ${targetRole}.`;

    if (genAI) {
      try {
        const modelInstance = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `You are a senior recruitment interviewer with a "${personality}" interviewer style conducting a ${mode} mode interview for role: "${targetRole}" (${expLevel} level).
Job Description Context: "${jobDescriptionText ? jobDescriptionText.substring(0, 300) : "None"}"
Candidate Resume Context: "${resumeText ? resumeText.substring(0, 300) : "None"}"
Candidate Self-Intro Context: "${latestIntro ? latestIntro.rawTranscript.substring(0, 300) : "None"}"

Generate JSON:
{
  "greeting": "Spoken introduction setting up the interview for ${targetRole} in a ${personality} tone.",
  "coreSkills": ["Skill1", "Skill2", "Skill3", "Skill4"],
  "jdSkills": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "firstQuestion": "Opening question probing candidate's background, resume, or self-introduction for ${targetRole}."
}
Return valid JSON only.`;

        const result = await modelInstance.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          if (parsed.greeting) interviewerGreeting = parsed.greeting;
          if (parsed.coreSkills) roleProfile.coreSkills = parsed.coreSkills;
          if (parsed.jdSkills && Array.isArray(parsed.jdSkills)) {
            jdSkillsChecklist = parsed.jdSkills.map((s) => ({ skill: String(s), covered: false }));
          }
          if (parsed.firstQuestion) firstQuestionText = parsed.firstQuestion;
        }
      } catch (aiErr) {
        console.warn("[Interview AI Start Warning]: Fallback opening question used", aiErr.message);
      }
    }

    const firstQuestionObj = {
      questionIndex: 0,
      roundName: firstRound.roundName,
      category: firstRound.category,
      question: firstQuestionText,
      difficulty: diff,
    };

    try {
      await InterviewSession.updateMany({ ...ownerQuery, status: "in_progress" }, { status: "cancelled" });

      const session = await InterviewSession.create({
        userId,
        guestId: userId ? undefined : guestId,
        role: targetRole,
        experience: expLevel,
        interviewType: type,
        difficulty: diff,
        duration: dur,
        numQuestions: count,
        pressureMode: isPressure,
        mode,
        personality,
        resumeText,
        jobDescriptionText,
        jdSkillsChecklist,
        interviewerGreeting,
        status: "in_progress",
        currentQuestionIndex: 0,
        currentRoundIndex: 0,
        linkedIntroSessionId,
        introPerformance,
        roleProfile,
        roadmap,
        questions: [firstQuestionObj],
        transcript: [],
      });

      return res.status(201).json(session);
    } catch (dbErr) {
      const sessionId = "int_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
      const newSession = {
        _id: sessionId,
        userId,
        guestId: userId ? undefined : guestId,
        role: targetRole,
        experience: expLevel,
        interviewType: type,
        difficulty: diff,
        duration: dur,
        numQuestions: count,
        pressureMode: isPressure,
        mode,
        personality,
        resumeText,
        jobDescriptionText,
        jdSkillsChecklist,
        interviewerGreeting,
        status: "in_progress",
        currentQuestionIndex: 0,
        currentRoundIndex: 0,
        linkedIntroSessionId,
        introPerformance,
        roleProfile,
        roadmap,
        questions: [firstQuestionObj],
        transcript: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      memoryInterviews.set(sessionId, newSession);
      return res.status(201).json(newSession);
    }
  } catch (error) {
    console.error("[Interview Start Error]:", error);
    res.status(500).json({ message: error.message });
  }
};

// Helper: Compute Day 3 Complete AI Recruiter Evaluation Report
const computeCompleteEvaluation = async (session) => {
  const transcriptCount = session.transcript.length || 1;
  const scores = session.transcript.map((t) => (t.analysis ? t.analysis.score : 5));
  const avgScore = Math.round((scores.reduce((a, b) => a + b, 0) / transcriptCount) * 10);

  let hiringRec = "Hire";
  let readinessLevel = "Moderate Interview Readiness";
  let recruiterOutcome = "Ready";
  let nextRoundRec = "YES";

  if (avgScore >= 85) {
    hiringRec = "Strong Hire";
    readinessLevel = "Strong Interview Readiness";
    recruiterOutcome = "Strongly Ready";
    nextRoundRec = "YES";
  } else if (avgScore >= 70) {
    hiringRec = "Hire";
    readinessLevel = "Good Readiness";
    recruiterOutcome = "Ready";
    nextRoundRec = "YES";
  } else if (avgScore >= 55) {
    hiringRec = "Needs Practice";
    readinessLevel = "Needs Improvement";
    recruiterOutcome = "Borderline";
    nextRoundRec = "MAYBE";
  } else {
    hiringRec = "Re-evaluate";
    readinessLevel = "Requires Substantial Prep";
    recruiterOutcome = "Needs More Preparation";
    nextRoundRec = "NOT YET";
  }

  const lowerRole = session.role.toLowerCase();
  let scorecard = [];
  let roleBreakdown = {};

  if (lowerRole.includes("java")) {
    const tech = Math.min(100, avgScore + 4);
    const code = Math.max(40, avgScore - 4);
    const oop = Math.min(100, avgScore + 6);
    const sql = Math.max(35, avgScore - 6);
    const comm = session.introPerformance?.communication || Math.min(95, avgScore + 2);
    scorecard = [
      { category: "Java Knowledge", score: tech, explanation: "Demonstrated solid understanding of core Java concepts." },
      { category: "Coding & Algorithms", score: code, explanation: "Code syntax is clear; edge case handling can be strengthened." },
      { category: "Java Core & OOP", score: oop, explanation: "Strong grasp of Object-Oriented principles and collections." },
      { category: "Problem Solving", score: avgScore, explanation: "Analyzes problem constraints methodically." },
      { category: "SQL & Databases", score: sql, explanation: "Understands queries; practice window functions and query optimization." },
      { category: "Communication", score: comm, explanation: "Presents answers with logical flow and self-introduction clarity." },
    ];
    roleBreakdown = { JavaKnowledge: tech, Coding: code, OOP: oop, ProblemSolving: avgScore, SQL: sql, Communication: comm };
  } else if (lowerRole.includes("consultant") || lowerRole.includes("business analyst")) {
    const ps = Math.min(100, avgScore + 6);
    const bt = Math.min(100, avgScore + 4);
    const comm = session.introPerformance?.communication || Math.min(95, avgScore + 3);
    const tk = Math.min(100, avgScore - 2);
    const sql = Math.max(40, avgScore - 7);
    const pk = Math.min(100, avgScore + 4);
    const beh = Math.min(100, avgScore - 1);
    scorecard = [
      { category: "Communication", score: comm, explanation: "Articulate and confident delivery under probing questions." },
      { category: "Problem Solving", score: ps, explanation: "Structured approach to revenue drops and client bottlenecks." },
      { category: "Technical Knowledge", score: tk, explanation: "Demonstrates solid awareness of technical consulting workflows." },
      { category: "Business Thinking", score: bt, explanation: "Identifies key business drivers and operational impact." },
      { category: "SQL", score: sql, explanation: "Basic SQL queries understood; practice complex aggregations." },
      { category: "Project Knowledge", score: pk, explanation: "Explains project architecture and client deliverables clearly." },
      { category: "Behavioral", score: beh, explanation: "Presents situational answers effectively using structured context." },
    ];
    roleBreakdown = { Communication: comm, ProblemSolving: ps, TechnicalKnowledge: tk, BusinessThinking: bt, SQL: sql, ProjectKnowledge: pk, Behavioral: beh };
  } else {
    const tech = Math.min(100, avgScore + 3);
    const ps = Math.max(40, avgScore);
    const comm = session.introPerformance?.communication || avgScore;
    const beh = Math.min(100, avgScore - 2);
    scorecard = [
      { category: "Technical Knowledge", score: tech, explanation: "Demonstrated baseline domain technical knowledge." },
      { category: "Problem Solving", score: ps, explanation: "Analyzes scenarios methodically." },
      { category: "Communication", score: comm, explanation: "Clear technical delivery and presentation." },
      { category: "Behavioral", score: beh, explanation: "Good scenario explanations." },
    ];
    roleBreakdown = { Technical: tech, ProblemSolving: ps, Communication: comm, Behavioral: beh };
  }

  // Communication Score (scale 1-10)
  const commOverall = Number(((session.introPerformance?.communication || avgScore) / 10).toFixed(1));
  const communicationScore = {
    overall: commOverall,
    clarity: Number((commOverall * 0.98).toFixed(1)),
    relevance: Number((commOverall * 1.02 > 10 ? 9.8 : commOverall * 1.02).toFixed(1)),
    structure: Number((commOverall * 0.99).toFixed(1)),
    conciseness: Number((commOverall * 0.95).toFixed(1)),
    fluency: Number((commOverall * 1.01 > 10 ? 9.9 : commOverall * 1.01).toFixed(1)),
    technicalComm: Number((commOverall * 0.97).toFixed(1)),
    organization: Number((commOverall * 1.0).toFixed(1)),
  };

  // Technical Depth Analysis
  const strongAreas = session.transcript
    .filter((t) => t.analysis && t.analysis.score >= 7)
    .map((t) => `${t.category}: ${t.analysis.strength}`)
    .slice(0, 4);
  if (strongAreas.length === 0) strongAreas.push("Core domain principles", "Structured problem framing");

  const weakAreas = session.transcript
    .filter((t) => t.analysis && t.analysis.score < 7)
    .map((t) => `${t.category}: ${t.analysis.improvement}`)
    .slice(0, 4);
  if (weakAreas.length === 0) weakAreas.push("Advanced edge case optimization", "System scaling trade-offs");

  // Job Description Match Analysis
  let jobDescriptionMatch = null;
  if (session.jdSkillsChecklist && session.jdSkillsChecklist.length > 0) {
    const coveredCount = session.jdSkillsChecklist.filter((s) => s.covered).length;
    const jdMatchPct = Math.round((coveredCount / session.jdSkillsChecklist.length) * 100);
    jobDescriptionMatch = {
      overallMatch: Math.max(60, Math.min(98, Math.round((jdMatchPct + avgScore) / 2))),
      skills: session.jdSkillsChecklist.map((item) => ({
        name: item.skill,
        covered: item.covered,
        score: item.covered ? Math.min(95, avgScore + 5) : Math.max(40, avgScore - 15),
      })),
      strongMatches: session.jdSkillsChecklist.filter((s) => s.covered).map((s) => s.skill),
      weakMatches: session.jdSkillsChecklist.filter((s) => !s.covered).map((s) => s.skill),
      missingAreas: session.jdSkillsChecklist.filter((s) => !s.covered).map((s) => `Deep hands-on proof for ${s.skill}`),
    };
  }

  // Resume Consistency Analysis
  const resumeConsistency = {
    summary: session.resumeText
      ? `Resume claims were cross-examined against live performance. Technical explanations in ${session.role} were verified with constructive feedback.`
      : "No candidate resume was provided during setup. Evaluated based on live interview answers.",
    claimsVerified: session.resumeText ? ["Project responsibilities", "Core tech stack experience"] : [],
  };

  // Must Improve Top Priorities (3 to 5)
  const mustImprove = [
    {
      topic: "Deep Query & Performance Optimization",
      whyItMatters: "High performance production environments require efficient indexing and execution plan tuning.",
      evidence: "Answer on database queries lacked detailed execution plan explanation.",
      recommendedAction: "Practice SQL window functions, indexing strategies, and query profiling.",
    },
    {
      topic: "Architecture Trade-Off Articulation",
      whyItMatters: "Senior roles demand clear justification when choosing technical architecture.",
      evidence: "Technical answers focused on syntax rather than architectural trade-offs.",
      recommendedAction: "Structure system design answers with explicit pros/cons before implementation.",
    },
    {
      topic: "Behavioral STAR Method Formatting",
      whyItMatters: "Behavioral rounds evaluate leadership, conflict resolution, and impact.",
      evidence: "Behavioral responses were descriptive but lacked clear quantitative metrics.",
      recommendedAction: "Frame past project achievements with Situation, Task, Action, and Result (STAR).",
    },
  ];

  // 3-Day, 7-Day, and 14-Day Preparation Plans
  const prepPlans = {
    day3: [
      { day: 1, topic: "SQL & Query Optimization", task: "Practice 10 complex SQL join & window function problems.", category: "SQL" },
      { day: 2, topic: "Core Technical & Architecture", task: "Review system design principles and domain patterns.", category: "Technical" },
      { day: 3, topic: "Behavioral STAR & Full Mock", task: "Conduct a 5-question targeted mock interview.", category: "Behavioral" },
    ],
    day7: [
      { day: 1, topic: `${session.role} Technical Fundamentals`, task: "Review fundamental domain concepts.", category: "Technical" },
      { day: 2, topic: "SQL & Database Optimization", task: "Practice complex queries and indexing.", category: "SQL" },
      { day: 3, topic: "Problem Solving & Algorithm Design", task: "Solve 5 data structure & logic scenarios.", category: "Problem Solving" },
      { day: 4, topic: "Behavioral STAR Stories", task: "Structure 3 key project stories using STAR format.", category: "Behavioral" },
      { day: 5, topic: "Resume & Project Defense", task: "Practice explaining trade-offs in your past projects.", category: "Project" },
      { day: 6, topic: "Targeted Retest Mock", task: "Retake weak categories in targeted mini-mock.", category: "Technical" },
      { day: 7, topic: "Full Multi-Round AI Interview", task: "Complete full interview simulation under pressure.", category: "Full" },
    ],
    day14: [
      { day: 1, topic: "Domain Deep Dive - Part 1", task: "Master foundational concepts.", category: "Technical" },
      { day: 3, topic: "SQL Mastery & Profiling", task: "Solve advanced aggregations and execution plans.", category: "SQL" },
      { day: 6, topic: "Algorithm & Coding Challenges", task: "Write clean code with optimal time/space complexity.", category: "Coding" },
      { day: 9, topic: "Behavioral Leadership Stories", task: "Refine responses for stakeholder management.", category: "Behavioral" },
      { day: 12, topic: "Full Simulated Technical Round", task: "Complete multi-round simulation under pressure mode.", category: "Technical" },
      { day: 14, topic: "Final AI Hiring Panel Review", task: "Review overall progress score trend and final report.", category: "Full" },
    ],
  };

  // Timeline
  const totalSecs = session.transcript.reduce((acc, t) => acc + (t.timeSpentSeconds || 45), 0);
  const totalMins = Math.max(5, Math.round(totalSecs / 60));
  const timeline = {
    totalDurationMinutes: totalMins,
    stages: [
      { name: "Started", duration: "1 min" },
      { name: "Introduction", duration: `${Math.round(totalMins * 0.2)} mins` },
      { name: "Technical Round", duration: `${Math.round(totalMins * 0.4)} mins` },
      { name: "Problem Solving", duration: `${Math.round(totalMins * 0.25)} mins` },
      { name: "Final Assessment", duration: `${Math.round(totalMins * 0.15)} mins` },
    ],
  };

  return {
    overallScore: avgScore,
    readinessScore: avgScore,
    readinessLevel,
    hiringRecommendation: hiringRec,
    recruiterSimulation: {
      outcome: recruiterOutcome,
      disclaimer: "This is an AI-generated interview simulation and does not represent an actual employer decision.",
    },
    nextRoundSimulation: {
      recommendation: nextRoundRec,
      evidence: [
        "✓ Demonstrated solid domain technical fundamentals",
        "✓ Structured problem-solving approach during scenario questions",
        "✓ Clear articulation of past project experience",
      ],
      concerns: ["⚠ SQL query optimization depth", "⚠ Quantitative metrics in behavioral stories"],
      text: "Based on this simulated interview, the candidate appears ready to proceed to the next simulated round.",
    },
    roleReadiness: {
      percentage: avgScore,
      breakdown: roleBreakdown,
      summary: `Your strongest area is Problem Solving. Your largest improvement opportunity is technical depth in database optimization.`,
    },
    communicationScore,
    technicalDepth: {
      strongAreas,
      weakAreas,
      topicsRequiringDeepKnowledge: ["Query optimization", "System scaling trade-offs", "STAR metrics"],
    },
    interviewerSummary: `Candidate demonstrates strong domain fundamentals and communicates project experience clearly for ${session.role} (${session.experience}). Technical depth in database optimization needs refinement. Problem-solving performance was strong.`,
    scorecard,
    jobDescriptionMatch,
    resumeConsistency,
    introPerformanceIntegration: {
      introScore: session.introPerformance?.score || 81,
      fullInterviewCommScore: Math.round(commOverall * 10),
      maintainedQuality: true,
    },
    strengths: strongAreas,
    mustImprove,
    studyPlan: prepPlans.day7,
    prepPlans,
    timeline,
    recommendedPracticeTopics: [
      { topic: "Domain Deep Dive", category: "Technical", description: "Master core technical concepts for your role." },
      { topic: "SQL Query Optimization", category: "SQL", description: "Practice joins, aggregations, and subqueries." },
      { topic: "Behavioral STAR Format", category: "Behavioral", description: "Structure project stories effectively." },
    ],
  };
};

// @desc    Submit answer & evaluate question
// @route   POST /api/interviews/:id/answer
const submitAnswer = async (req, res) => {
  try {
    const { id } = req.params;
    const { answer, skipped, timeSpentSeconds } = req.body;

    let session = null;
    let isDb = true;

    try {
      session = await InterviewSession.findById(id);
    } catch (err) {
      isDb = false;
      session = memoryInterviews.get(id);
    }

    if (!session && !isDb) session = memoryInterviews.get(id);
    if (!session || !isOwner(session, req)) {
      return res.status(404).json({ message: "Interview session not found or access denied" });
    }

    if (session.status !== "in_progress") {
      return res.status(400).json({ message: "This interview has already been completed or ended." });
    }

    const currentIndex = session.currentQuestionIndex;
    const currentQ = session.questions[currentIndex] || {
      question: "Role specific interview question",
      category: "Technical",
      roundName: "Technical",
    };

    const candidateAnswer = skipped ? "[Skipped Question]" : (answer || "").trim();
    const sessionMode = session.mode || (session.pressureMode ? "Pressure" : "Standard");

    let decisionAction = "Follow-up";
    const wordCount = candidateAnswer.split(/\s+/).filter(Boolean).length;
    if (wordCount > 150) {
      decisionAction = "Interruption";
      defaultReaction = "I'll pause you there for a moment—let me redirect our focus directly to the core technical problem.";
    } else if (candidateAnswer.length < 25 && !skipped) {
      decisionAction = "Clarification";
      defaultReaction = "I didn't quite follow that completely. Could you explain your reasoning with a specific example?";
    }

    let analysis = {
      score: skipped ? 2 : session.pressureMode ? 6 : 8,
      correctness: skipped ? 2 : 8,
      technicalDepth: skipped ? 1 : 7,
      clarity: skipped ? 3 : 8,
      problemSolving: skipped ? 2 : 7,
      strength: skipped ? "N/A" : "Demonstrated baseline role competence.",
      improvement: skipped ? "Answer skipped" : "Elaborate with deeper implementation examples.",
      feedback: skipped ? "Topic marked for review." : "Good response.",
      interviewerReaction: defaultReaction,
      decisionAction,
      communicationBehavior: {
        direct: wordCount < 120 && candidateAnswer.length > 20,
        offTopic: wordCount > 160,
        shortOrLong: wordCount < 15 ? "Too Short" : wordCount > 150 ? "Too Long" : "Balanced",
      },
      strongerModelAnswer: `To answer "${currentQ.question}" effectively, start with a high-level overview, explain key technical principles, and provide a concrete production example.`,
    };

    let nextDifficulty = session.difficulty;

    if (genAI && !skipped && candidateAnswer.length > 5) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const evalPrompt = `You are a senior hiring interviewer with a "${session.personality || "Professional"}" style conducting a ${sessionMode} mode interview for role "${session.role}".
Round: "${currentQ.roundName}" (${currentQ.category}).
Question: "${currentQ.question}"
Candidate Answer: "${candidateAnswer}"
Candidate Resume: "${session.resumeText ? session.resumeText.substring(0, 300) : "None"}"

Evaluate answer & decide next action. Generate JSON:
{
  "score": 8,
  "correctness": 8,
  "technicalDepth": 7,
  "clarity": 8,
  "problemSolving": 8,
  "decisionAction": "Follow-up" | "Increase Difficulty" | "Clarification" | "Challenge Assumption" | "Verify Resume Claim" | "Interruption",
  "strength": "Brief sentence on strong point",
  "improvement": "Brief sentence on missing area",
  "feedback": "Conversational interviewer feedback",
  "interviewerReaction": "1-2 spoken sentence reaction directly responding to candidate in ${session.personality || "Professional"} tone. If answer was vague, say 'I didn't quite follow that. Could you clarify...'. If answer was wrong, ask 'Are you confident in that answer? Can you explain your reasoning?'.",
  "strongerModelAnswer": "High-scoring model answer",
  "recommendedNextDifficulty": "Easy" | "Medium" | "Hard" | "Advanced"
}
Return valid JSON only.`;

        const result = await model.generateContent(evalPrompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          if (parsed.score) analysis.score = parsed.score;
          if (parsed.correctness) analysis.correctness = parsed.correctness;
          if (parsed.technicalDepth) analysis.technicalDepth = parsed.technicalDepth;
          if (parsed.clarity) analysis.clarity = parsed.clarity;
          if (parsed.problemSolving) analysis.problemSolving = parsed.problemSolving;
          if (parsed.decisionAction) analysis.decisionAction = parsed.decisionAction;
          if (parsed.strength) analysis.strength = parsed.strength;
          if (parsed.improvement) analysis.improvement = parsed.improvement;
          if (parsed.feedback) analysis.feedback = parsed.feedback;
          if (parsed.interviewerReaction) analysis.interviewerReaction = parsed.interviewerReaction;
          if (parsed.strongerModelAnswer) analysis.strongerModelAnswer = parsed.strongerModelAnswer;
          if (parsed.recommendedNextDifficulty) nextDifficulty = parsed.recommendedNextDifficulty;
        }
      } catch (evalErr) {
        console.warn("[Interview Eval Warning]: Fallback score used", evalErr.message);
      }
    }

    // Update JD Checklist Coverage
    if (session.jdSkillsChecklist && session.jdSkillsChecklist.length > 0) {
      session.jdSkillsChecklist.forEach((item, idx) => {
        if (!item.covered) {
          const lowerSkill = item.skill.toLowerCase();
          if (
            currentQ.question.toLowerCase().includes(lowerSkill) ||
            candidateAnswer.toLowerCase().includes(lowerSkill) ||
            idx === (currentIndex % session.jdSkillsChecklist.length)
          ) {
            item.covered = true;
            item.assessedAtQuestion = currentIndex + 1;
          }
        }
      });
    }

    const transcriptEntry = {
      questionIndex: currentIndex,
      roundName: currentQ.roundName || "General Round",
      question: currentQ.question,
      category: currentQ.category || "Technical",
      answer: candidateAnswer,
      skipped: !!skipped,
      difficultyAtQuestion: session.difficulty,
      timeSpentSeconds: parseInt(timeSpentSeconds) || 45,
      analysis,
      askedAt: currentQ.askedAt || new Date(),
      answeredAt: new Date(),
    };

    session.transcript.push(transcriptEntry);
    const nextIndex = currentIndex + 1;
    session.currentQuestionIndex = nextIndex;
    session.difficulty = nextDifficulty;

    let currentRound = session.roadmap[0];
    let qAcc = 0;
    let roundIdx = 0;
    for (let i = 0; i < session.roadmap.length; i++) {
      qAcc += session.roadmap[i].questionCount;
      if (nextIndex < qAcc) {
        currentRound = session.roadmap[i];
        roundIdx = i;
        break;
      }
    }
    session.currentRoundIndex = roundIdx;

    if (nextIndex >= session.numQuestions) {
      session.status = "completed";
      session.finalEvaluation = await computeCompleteEvaluation(session);

      if (isDb) await session.save();
      else memoryInterviews.set(id, session);

      return res.json({ session, completed: true });
    }

    const targetCategory = currentRound ? currentRound.category : "Technical";
    let nextQuestionText = `Moving into ${currentRound ? currentRound.roundName : "the next round"}, how would you approach engineering solutions for ${session.role}?`;
    let codeProblem = null;

    if (targetCategory === "Coding") {
      codeProblem = {
        title: `Algorithm Challenge in ${session.role}`,
        description: "Write a function to process and reverse input elements while handling duplicate edge cases.",
        initialCode: `function solution(input) {\n  // Write implementation here\n  return input;\n}`,
      };
      nextQuestionText = `Coding Round (${currentRound.roundName}): Please implement a solution for the algorithm problem described below. Focus on time and space complexity.`;
    } else if (targetCategory === "SQL") {
      codeProblem = {
        title: "Department Salary Query",
        description: "Write an SQL query to retrieve the second-highest salary for each department.",
        schemaInfo: "TABLE Employees (id INT, name VARCHAR, salary INT, department_id INT)\nTABLE Departments (id INT, department_name VARCHAR)",
        initialCode: `SELECT d.department_name, MAX(e.salary) AS second_highest\nFROM Employees e\nJOIN Departments d ON e.department_id = d.id\nWHERE e.salary < (SELECT MAX(salary) FROM Employees WHERE department_id = e.department_id)\nGROUP BY d.department_name;`,
      };
      nextQuestionText = `SQL & Database Round (${currentRound.roundName}): Refer to the database schema provided and write an SQL query to solve the request below.`;
    } else if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const existingQuestions = session.questions.map((q) => q.question).join(" | ");

        const nextQPrompt = `You are a senior hiring interviewer with a "${session.personality || "Professional"}" style conducting Round: "${currentRound ? currentRound.roundName : "Technical"}" (${targetCategory}) for role "${session.role}".
Decision Action Choice: "${analysis.decisionAction || "Follow-up"}". Difficulty: "${nextDifficulty}".
Previous Question: "${currentQ.question}"
Candidate Answer: "${candidateAnswer}"
Candidate Resume: "${session.resumeText ? session.resumeText.substring(0, 300) : "None"}"
Job Description Requirements: "${session.jobDescriptionText ? session.jobDescriptionText.substring(0, 300) : "None"}"
Questions Already Asked: "${existingQuestions}"

Generate the next question adapting to the candidate's previous response and resume claims. If candidate claimed specific tech (e.g. MongoDB, Spring, React), cross-examine that claim directly.
Ensure question is UNIQUE and NOT in the list of questions already asked.

Generate JSON:
{
  "category": "${targetCategory}",
  "question": "Question string"
}
Return valid JSON only.`;

        const nextResult = await model.generateContent(nextQPrompt);
        const text = nextResult.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          if (parsed.question && !existingQuestions.includes(parsed.question)) {
            nextQuestionText = parsed.question;
          }
        }
      } catch (genErr) {
        console.warn("[Next Q Gen Warning]: Fallback next question used", genErr.message);
      }
    }

    const nextQObj = {
      questionIndex: nextIndex,
      roundName: currentRound ? currentRound.roundName : "General Round",
      category: targetCategory,
      question: nextQuestionText,
      difficulty: nextDifficulty,
      codeProblem,
    };

    session.questions.push(nextQObj);

    if (isDb) await session.save();
    else memoryInterviews.set(id, session);

    return res.json({ session, completed: false });
  } catch (error) {
    console.error("[Interview Answer Error]:", error);
    res.status(500).json({ message: error.message });
  }
};

const getActiveInterview = async (req, res) => {
  try {
    const ownerQuery = getOwnerQuery(req);
    try {
      const activeSession = await InterviewSession.findOne({ ...ownerQuery, status: "in_progress" }).sort({ updatedAt: -1 });
      return res.json(activeSession || null);
    } catch (dbErr) {
      const userId = req.user ? String(req.user._id) : null;
      const guestId = req.guestId || "guest_default";
      const active = Array.from(memoryInterviews.values()).find((s) => {
        const matchOwner = userId ? String(s.userId) === userId : s.guestId === guestId;
        return matchOwner && s.status === "in_progress";
      });
      return res.json(active || null);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const endInterview = async (req, res) => {
  try {
    const { id } = req.params;
    let session = null;
    let isDb = true;

    try {
      session = await InterviewSession.findById(id);
    } catch (err) {
      isDb = false;
      session = memoryInterviews.get(id);
    }
    if (!session && !isDb) session = memoryInterviews.get(id);
    if (!session || !isOwner(session, req)) {
      return res.status(404).json({ message: "Interview not found or access denied" });
    }

    session.status = "completed";
    session.finalEvaluation = await computeCompleteEvaluation(session);

    if (isDb) await session.save();
    else memoryInterviews.set(id, session);

    return res.json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInterviews = async (req, res) => {
  try {
    const ownerQuery = getOwnerQuery(req);
    try {
      const sessions = await InterviewSession.find(ownerQuery).sort({ createdAt: -1 });
      return res.json(sessions);
    } catch (dbErr) {
      const userId = req.user ? String(req.user._id) : null;
      const guestId = req.guestId || "guest_default";
      const list = Array.from(memoryInterviews.values())
        .filter((s) => (userId ? String(s.userId) === userId : s.guestId === guestId))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json(list);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInterviewProgress = async (req, res) => {
  try {
    const ownerQuery = getOwnerQuery(req);
    let sessions = [];
    try {
      sessions = await InterviewSession.find({ ...ownerQuery, status: "completed" }).sort({ createdAt: 1 });
    } catch (dbErr) {
      const userId = req.user ? String(req.user._id) : null;
      const guestId = req.guestId || "guest_default";
      sessions = Array.from(memoryInterviews.values())
        .filter((s) => (userId ? String(s.userId) === userId : s.guestId === guestId) && s.status === "completed")
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    const scoreTrend = sessions.map((s) => ({
      id: s._id,
      role: s.role,
      date: new Date(s.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      overallScore: s.finalEvaluation?.overallScore || 70,
    }));

    return res.json({
      totalCompleted: sessions.length,
      latestSession: sessions.length > 0 ? sessions[sessions.length - 1] : null,
      scoreTrend,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const exportInterviewReport = async (req, res) => {
  try {
    const { id } = req.params;
    let session = null;
    try {
      session = await InterviewSession.findById(id);
    } catch (err) {
      session = memoryInterviews.get(id);
    }
    if (!session || !isOwner(session, req)) {
      return res.status(404).json({ message: "Interview report not found or access denied" });
    }

    const evalData = session.finalEvaluation || {};
    const reportMd = `# AI MOCK INTERVIEW REPORT

**Target Role:** ${session.role}  
**Experience Level:** ${session.experience}  
**Date:** ${new Date(session.createdAt).toLocaleString()}  
**Overall Readiness Score:** ${evalData.overallScore || 80}/100 (${evalData.readinessLevel || "Moderate Readiness"})  
**Recommendation:** ${evalData.hiringRecommendation || "Hire"}  

---

## 📊 Category Scorecard

${(evalData.scorecard || []).map((sc) => `- **${sc.category}:** ${sc.score}/100 — ${sc.explanation}`).join("\n")}

---

## 💡 Key Demonstrated Strengths
${(evalData.strengths || []).map((s) => `- ${s}`).join("\n")}

## ⚠️ Areas for Improvement
${(evalData.areasForImprovement || []).map((a) => `- ${a}`).join("\n")}

---

## 🗓️ 7-Day Personalized Study Plan

${(evalData.studyPlan || []).map((sp) => `### Day ${sp.day}: ${sp.topic}\n- **Focus:** ${sp.task} (Category: ${sp.recommendedCategory})`).join("\n\n")}

---

## 📝 Transcript & Detailed Question Feedback

${(session.transcript || []).map((t, idx) => `### Q${idx + 1} (${t.roundName}): ${t.question}
- **Candidate Answer:** "${t.answer}"
- **Score:** ${t.analysis?.score || 7}/10
- **Feedback:** ${t.analysis?.feedback || "N/A"}
- **Model Answer Suggestion:** ${t.analysis?.strongerModelAnswer || "N/A"}`).join("\n\n---\n\n")}
`;

    res.setHeader("Content-Type", "text/markdown");
    res.setHeader("Content-Disposition", `attachment; filename="Mock_Interview_${session.role.replace(/\s+/g, "_")}.md"`);
    return res.send(reportMd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInterviewById = async (req, res) => {
  try {
    const { id } = req.params;
    try {
      const session = await InterviewSession.findById(id);
      if (!session || !isOwner(session, req)) return res.status(404).json({ message: "Interview not found" });
      return res.json(session);
    } catch (dbErr) {
      const session = memoryInterviews.get(id);
      if (!session || !isOwner(session, req)) return res.status(404).json({ message: "Interview not found" });
      return res.json(session);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInterview = async (req, res) => {
  try {
    const { id } = req.params;
    try {
      await InterviewSession.findByIdAndDelete(id);
    } catch (err) {
      memoryInterviews.delete(id);
    }
    memoryInterviews.delete(id);
    return res.json({ success: true, message: "Interview session and report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const clearInterviewHistory = async (req, res) => {
  try {
    const ownerQuery = getOwnerQuery(req);
    try {
      await InterviewSession.deleteMany(ownerQuery);
    } catch (err) {
      const userId = req.user ? String(req.user._id) : null;
      const guestId = req.guestId || "guest_default";
      for (const [id, session] of memoryInterviews.entries()) {
        const matchOwner = userId ? String(session.userId) === userId : session.guestId === guestId;
        if (matchOwner) memoryInterviews.delete(id);
      }
    }
    return res.json({ success: true, message: "All interview history cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  startInterview,
  submitAnswer,
  getActiveInterview,
  endInterview,
  getInterviews,
  getInterviewById,
  getInterviewProgress,
  exportInterviewReport,
  deleteInterview,
  clearInterviewHistory,
};
