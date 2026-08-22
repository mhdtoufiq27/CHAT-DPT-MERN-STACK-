const IntroductionSession = require("../models/IntroductionSession");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// In-memory fallback store for offline MongoDB support
const memoryIntros = new Map();

const isOwner = (session, req) => {
  if (!session) return false;
  if (req.user) return String(session.userId) === String(req.user._id);
  return session.guestId === (req.guestId || "guest_default");
};

// Helper: Deterministic Filler Word, Repeated Phrase & Pace Analysis
const analyzeSpeechMetrics = (text, durationSeconds = 60) => {
  if (!text || !text.trim()) {
    return {
      wordCount: 0,
      speakingPaceWpm: 0,
      fillerCount: 0,
      topFillers: [],
      repeatedPhrasesCount: 0,
    };
  }

  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const mins = Math.max(0.1, (Number(durationSeconds) || 60) / 60);
  const speakingPaceWpm = Math.round(wordCount / mins);

  const fillerPatterns = [
    { word: "actually", regex: /\bactually\b/gi },
    { word: "basically", regex: /\bbasically\b/gi },
    { word: "like", regex: /\blike\b/gi },
    { word: "you know", regex: /\byou know\b/gi },
    { word: "so", regex: /\bso\b/gi },
    { word: "um", regex: /\bum\b/gi },
    { word: "uh", regex: /\buh\b/gi },
    { word: "i mean", regex: /\bi mean\b/gi },
  ];

  let totalFillerCount = 0;
  const fillerCountsMap = [];

  fillerPatterns.forEach(({ word, regex }) => {
    const matches = text.match(regex);
    if (matches && matches.length > 0) {
      totalFillerCount += matches.length;
      fillerCountsMap.push({ word, count: matches.length });
    }
  });

  fillerCountsMap.sort((a, b) => b.count - a.count);

  const repeatedRegex = /\b(\w+)\s+\1\b/gi;
  const repeatedMatches = text.match(repeatedRegex);
  const repeatedPhrasesCount = repeatedMatches ? repeatedMatches.length : 0;

  return {
    wordCount,
    speakingPaceWpm,
    fillerCount: totalFillerCount,
    topFillers: fillerCountsMap.slice(0, 5),
    repeatedPhrasesCount,
  };
};

// Helper: Deterministic Evidence-Based Rubric Evaluator (Ground Truth)
const evaluateIntroductionDeterministically = (text, targetRole, expLevel, speechStats) => {
  const lower = (text || "").toLowerCase();
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // 1. Structure (0 to 1.0)
  const hasGreeting = /\b(hi|hello|hey|good morning|good afternoon|good evening|myself|i am|my name is|this is)\b/i.test(text);
  const hasClosing = /\b(thank you|thanks|excited to|looking forward|eager to|contribute|that is all|that's all)\b/i.test(text);
  let structureScore = 0.0;
  let structureEvidence = "Not demonstrated — lacking coherent introduction structure.";
  if (hasGreeting && hasClosing && wordCount >= 25) {
    structureScore = 1.0;
    structureEvidence = "Demonstrated clear opening greeting, body, and closing statement.";
  } else if (hasGreeting || wordCount >= 15) {
    structureScore = 0.5;
    structureEvidence = hasGreeting ? "Includes opening greeting/name, but lacks a formal professional closing." : "Contains body content but lacks structured greeting/closing.";
  }

  // 2. Clarity (0 to 1.0)
  let clarityScore = 0.0;
  let clarityEvidence = "Not demonstrated — insufficient or unclear phrasing.";
  if (wordCount >= 20 && speechStats.repeatedPhrasesCount <= 1) {
    clarityScore = 1.0;
    clarityEvidence = "Clear articulation and cohesive sentence structure.";
  } else if (wordCount >= 6) {
    clarityScore = 0.5;
    clarityEvidence = "Phrasing is understandable but brief or basic.";
  }

  // 3. Education / Academic Background (0 to 1.0)
  const eduRegex = /\b(mca|bca|b\.?tech|b\.?e\.?|m\.?tech|b\.?sc|m\.?sc|bba|mba|degree|pursuing|graduated|graduate|bachelor|master|engineering|computer science|university|college|school|cgpa|percentage)\b/i;
  const eduMatch = text.match(eduRegex);
  let eduScore = 0.0;
  let eduEvidence = "Not demonstrated — no educational qualification or degree mentioned.";
  if (eduMatch) {
    eduScore = 1.0;
    eduEvidence = `Mentioned academic background ("${eduMatch[0]}").`;
  }

  // 4. Technical / Academic Skills (0 to 1.0)
  const skillKeywords = [
    "javascript", "typescript", "python", "java", "c\\+\\+", "c#", "react", "node", "express",
    "mongodb", "sql", "mysql", "postgresql", "html", "css", "tailwind", "aws", "docker",
    "kubernetes", "git", "github", "data structures", "algorithms", "dsa", "rest api", "machine learning",
    "ai", "data analysis", "spring boot", "django", "flask", "next\\.js", "vue", "angular", "devops",
    "power bi", "tableau", "excel", "cloud", "consulting", "agile", "scrum"
  ];
  const skillRegex = new RegExp(`\\b(${skillKeywords.join("|")})\\b`, "gi");
  const skillMatches = text.match(skillRegex) || [];
  const uniqueSkills = [...new Set(skillMatches.map((s) => s.toLowerCase()))];
  let skillScore = 0.0;
  let skillEvidence = "Not demonstrated — no specific technical skills or tools mentioned.";
  if (uniqueSkills.length >= 2) {
    skillScore = 1.0;
    skillEvidence = `Mentioned specific technical skills: ${uniqueSkills.slice(0, 4).join(", ")}.`;
  } else if (uniqueSkills.length === 1) {
    skillScore = 0.5;
    skillEvidence = `Mentioned limited technical skill: ${uniqueSkills[0]}.`;
  }

  // 5. Projects / Practical Experience (0 to 1.0)
  const projectRegex = /\b(project|projects|built|developed|created|designed|engineered|implemented|application|app|website|system|internship|intern|worked at|experience|freelance|portfolio)\b/i;
  const projMatch = text.match(projectRegex);
  let projScore = 0.0;
  let projEvidence = "Not demonstrated — no concrete projects, implementations, or experience mentioned.";
  if (projMatch && wordCount >= 20) {
    projScore = 1.0;
    projEvidence = `Mentioned hands-on project/experience ("${projMatch[0]}").`;
  } else if (projMatch) {
    projScore = 0.5;
    projEvidence = `Briefly referenced a project ("${projMatch[0]}") without implementation details.`;
  }

  // 6. Strengths / Value Proposition (0 to 1.0)
  const strengthRegex = /\b(strength|strengths|passionate|problem solver|problem-solving|fast learner|quick learner|leadership|teamwork|analytical|optimized|reduced|improved|achieved|certification|certified|award)\b/i;
  const strMatch = text.match(strengthRegex);
  let strengthScore = 0.0;
  let strengthEvidence = "Not demonstrated — no specific personal strengths or achievements highlighted.";
  if (strMatch) {
    strengthScore = 1.0;
    strengthEvidence = `Highlighted key strengths/qualities ("${strMatch[0]}").`;
  }

  // 7. Career Goal / Professional Objective (0 to 1.0)
  const goalRegex = /\b(goal|career|aspire|aspiring|aim|passionate about|looking forward to|future|seeking|objective|long-term)\b/i;
  const goalMatch = text.match(goalRegex);
  let goalScore = 0.0;
  let goalEvidence = "Not demonstrated — no career direction or future goals mentioned.";
  if (goalMatch) {
    goalScore = 1.0;
    goalEvidence = `Mentioned professional career orientation ("${goalMatch[0]}").`;
  }

  // 8. Relevance to Target Role (0 to 1.0)
  const roleTerms = targetRole.toLowerCase().split(/\s+/).filter((w) => w.length > 2);
  const matchedRoleTerms = roleTerms.filter((term) => lower.includes(term));
  let roleScore = 0.0;
  let roleEvidence = `Not demonstrated — did not connect background to the ${targetRole} role.`;
  if (matchedRoleTerms.length > 0 || (targetRole.toLowerCase().includes("consultant") && lower.includes("consult"))) {
    roleScore = 1.0;
    roleEvidence = `Directly aligned background to the ${targetRole} position.`;
  } else if (skillScore > 0 && projScore > 0) {
    roleScore = 0.5;
    roleEvidence = `Technical background partially relates to ${targetRole}, but direct role mention is missing.`;
  }

  // 9. Communication Quality & Delivery (0 to 1.0)
  let commScore = 0.0;
  let commEvidence = "Not demonstrated — insufficient spoken words to assess delivery.";
  if (wordCount >= 20) {
    if (speechStats.fillerCount <= 2 && speechStats.repeatedPhrasesCount === 0) {
      commScore = 1.0;
      commEvidence = `Fluent delivery with minimal filler words (${speechStats.fillerCount} detected).`;
    } else if (speechStats.fillerCount <= 5) {
      commScore = 0.5;
      commEvidence = `Moderate delivery flow with ${speechStats.fillerCount} filler words detected.`;
    } else {
      commScore = 0.3;
      commEvidence = `High filler word density (${speechStats.fillerCount} detected) impacting executive presence.`;
    }
  } else if (wordCount >= 6) {
    commScore = 0.5;
    commEvidence = "Concise delivery for a very short statement.";
  }

  // 10. Overall Impact (0 to 1.0)
  let impactScore = 0.0;
  let impactEvidence = "Not demonstrated — response is incomplete or too brief for meaningful impact.";
  if (wordCount >= 40 && eduScore > 0 && skillScore > 0 && projScore > 0) {
    impactScore = 1.0;
    impactEvidence = "Comprehensive, professional self-introduction creating a solid first impression.";
  } else if (wordCount >= 20) {
    impactScore = 0.5;
    impactEvidence = "Partial introduction leaving several key interviewer expectations unaddressed.";
  }

  const rawSum =
    structureScore +
    clarityScore +
    eduScore +
    skillScore +
    projScore +
    strengthScore +
    goalScore +
    roleScore +
    commScore +
    impactScore;

  const overallScore = Math.round(Math.min(10.0, Math.max(0.0, rawSum)) * 10) / 10;

  // Scale 10-point categories for UI breakdown (0 to 10 scale)
  const contentTotal = ((eduScore + skillScore + projScore + strengthScore + goalScore + roleScore) / 6) * 10;
  const contentScore = Math.round(contentTotal * 10) / 10;

  const rubricBreakdown = {
    structure: { score: structureScore, evidence: structureEvidence, status: structureScore > 0 ? "Demonstrated" : "Not demonstrated" },
    clarity: { score: clarityScore, evidence: clarityEvidence, status: clarityScore > 0 ? "Demonstrated" : "Not demonstrated" },
    education: { score: eduScore, evidence: eduEvidence, status: eduScore > 0 ? "Demonstrated" : "Not demonstrated" },
    technicalSkills: { score: skillScore, evidence: skillEvidence, status: skillScore > 0 ? "Demonstrated" : "Not demonstrated" },
    projectsExperience: { score: projScore, evidence: projEvidence, status: projScore > 0 ? "Demonstrated" : "Not demonstrated" },
    strengthsValue: { score: strengthScore, evidence: strengthEvidence, status: strengthScore > 0 ? "Demonstrated" : "Not demonstrated" },
    careerGoal: { score: goalScore, evidence: goalEvidence, status: goalScore > 0 ? "Demonstrated" : "Not demonstrated" },
    roleMatch: { score: roleScore, evidence: roleEvidence, status: roleScore > 0 ? "Demonstrated" : "Not demonstrated" },
    communicationQuality: { score: commScore, evidence: commEvidence, status: commScore > 0 ? "Demonstrated" : "Not demonstrated" },
    overallImpact: { score: impactScore, evidence: impactEvidence, status: impactScore > 0 ? "Demonstrated" : "Not demonstrated" },
  };

  const whatWasGood = [];
  if (structureScore > 0) whatWasGood.push(structureEvidence);
  if (eduScore > 0) whatWasGood.push(eduEvidence);
  if (skillScore > 0) whatWasGood.push(skillEvidence);
  if (projScore > 0) whatWasGood.push(projEvidence);
  if (strengthScore > 0) whatWasGood.push(strengthEvidence);
  if (goalScore > 0) whatWasGood.push(goalEvidence);
  if (roleScore > 0) whatWasGood.push(roleEvidence);

  const whatIsMissing = [];
  if (eduScore === 0) whatIsMissing.push("Educational background / degree qualification");
  if (skillScore === 0) whatIsMissing.push("Core technical / academic skills and tools");
  if (projScore === 0) whatIsMissing.push("Concrete projects or hands-on implementation experience");
  if (strengthScore === 0) whatIsMissing.push("Key personal strengths, achievements, or problem-solving examples");
  if (goalScore === 0) whatIsMissing.push("Career objective and future aspirations");
  if (roleScore === 0) whatIsMissing.push(`Direct alignment / relevance to the ${targetRole} position`);
  if (structureScore < 1.0) whatIsMissing.push("Structured professional closing statement");

  const mustImprove = [];
  if (eduScore === 0) {
    mustImprove.push("Add your degree, specialization, and college/university in one clear sentence.");
  }
  if (skillScore === 0) {
    mustImprove.push(`List 2–3 specific technical tools or frameworks relevant to ${targetRole}.`);
  }
  if (projScore === 0) {
    mustImprove.push("Describe one major project: state the problem solved, tech stack used, and your contribution.");
  }
  if (roleScore === 0) {
    mustImprove.push(`Add a concluding sentence explaining why your background makes you a strong fit for ${targetRole}.`);
  }
  if (speechStats.fillerCount > 3) {
    mustImprove.push(`Reduce filler words (${speechStats.fillerCount} detected). Practice using brief silent pauses.`);
  }

  // Ensure at least 3 must improve points
  while (mustImprove.length < 3) {
    if (!mustImprove.includes("Quantify project impact with a metric (e.g. 'improved performance by 20%').")) {
      mustImprove.push("Quantify project impact with a metric (e.g. 'improved performance by 20%').");
    } else {
      mustImprove.push("Maintain a steady speaking pace between 120–150 words per minute.");
    }
  }

  const specificFeedback =
    whatWasGood.length > 0
      ? `You effectively demonstrated: ${whatWasGood.slice(0, 2).join("; ")}. However, your introduction is missing: ${whatIsMissing.slice(0, 3).join(", ")}. Connect your background directly to the ${targetRole} position.`
      : `Your introduction is very brief (${wordCount} words). An interviewer needs to hear about your education, technical skills, and projects to evaluate you for ${targetRole}.`;

  const suggestedStructure =
    "1. Greeting & Name: 'Hello, my name is [Your Name]...'\n" +
    "2. Education: 'I recently graduated / am pursuing [Degree] in [Field] at [Institution]...'\n" +
    "3. Technical Skills: 'My technical expertise includes [Key Skills]...'\n" +
    "4. Project Highlight: 'I engineered [Project Name], where I implemented [Key Feature] and solved [Challenge]...'\n" +
    `5. Role Fit & Closing: 'I am excited to bring these skills to the ${targetRole} role.'`;

  // Build improved version strictly using candidate facts + placeholders
  let candidateName = "[Your Name]";
  const nameMatch = text.match(/(?:i am|my name is|myself|this is)\s+([A-Za-z]+)/i);
  if (nameMatch && nameMatch[1]) candidateName = nameMatch[1];

  let improvedVersion = `Hello, my name is ${candidateName}.`;
  if (eduScore > 0 && eduMatch) {
    improvedVersion += ` I hold a background in ${eduMatch[0]} from [Your College/University].`;
  } else {
    improvedVersion += ` I hold a background in [Your Degree] from [Your College/University].`;
  }

  if (uniqueSkills.length > 0) {
    improvedVersion += ` My core technical skills include ${uniqueSkills.join(", ")}.`;
  } else {
    improvedVersion += ` My core technical skills include [Your 2-3 Core Skills].`;
  }

  if (projScore > 0) {
    improvedVersion += ` Recently, I developed a project where I designed the core architecture and delivered practical solutions.`;
  } else {
    improvedVersion += ` Recently, I developed [Your Key Project], focusing on solving practical user challenges.`;
  }

  improvedVersion += ` I am excited to apply my background and drive value as a ${targetRole}.`;

  return {
    overallScore,
    contentScore,
    rubricBreakdown,
    scores: {
      overallScore,
      content: contentScore,
      structure: Math.round(structureScore * 10 * 10) / 10,
      clarity: Math.round(clarityScore * 10 * 10) / 10,
      fluency: Math.round(commScore * 10 * 10) / 10,
      conciseness: wordCount > 180 ? 6.0 : wordCount < 20 ? 4.0 : 9.0,
      grammar: Math.round(clarityScore * 10 * 10) / 10,
      roleMatch: Math.round(roleScore * 10 * 10) / 10,
      impact: Math.round(impactScore * 10 * 10) / 10,
    },
    whatWasGood,
    whatIsMissing,
    mustImprove: mustImprove.slice(0, 3),
    specificFeedback,
    suggestedStructure,
    improvedVersion,
    whatChanged: [
      eduScore === 0 ? "Structured academic background with placeholder for your degree." : "Refined educational summary.",
      skillScore === 0 ? `Added placeholders for key ${targetRole} technical skills.` : "Organized technical skill highlights.",
      `Added a clear closing statement tailored directly to the ${targetRole} role.`,
    ],
    contentChecklist: {
      hasNameIntro: hasGreeting,
      hasEducation: eduScore > 0,
      hasTechSkills: skillScore > 0,
      hasExperienceProjects: projScore > 0,
      hasAchievements: strengthScore > 0,
      hasRoleRelevance: roleScore > 0,
      hasClosing: hasClosing,
    },
    top3Improvements: mustImprove.slice(0, 3).map((item, idx) => ({
      problem: `Key Focus Area #${idx + 1}`,
      whyItMatters: "Essential for complete recruiter evaluation.",
      example: item,
      howToPractice: "Integrate this point into your next spoken attempt.",
    })),
    strengths: whatWasGood.length > 0 ? whatWasGood : ["Spoke opening introduction."],
  };
};

// Helper: Select Targeted Exercise for Primary Weakness
const generateTargetedExercise = (weakness, role, speechStats) => {
  const lowerWeak = (weakness || "").toLowerCase();

  if (lowerWeak.includes("insufficient") || speechStats.wordCount < 10) {
    return {
      title: "Full 60-Second Introduction Sprint",
      instructions: `Deliver a complete introduction covering your name, degree, 2 technical skills, 1 project, and your interest in ${role}.`,
      timeLimitSeconds: 60,
      targetFocus: "Complete Self-Introduction",
    };
  } else if (lowerWeak.includes("filler") || speechStats.fillerCount > 3) {
    return {
      title: "Filler Word Elimination Challenge",
      instructions: `Give your introduction again, but avoid using 'actually', 'basically', and 'like'. Focus on brief silent pauses.`,
      timeLimitSeconds: 60,
      targetFocus: "Filler Reduction",
    };
  } else if (lowerWeak.includes("conciseness") || speechStats.wordCount > 180) {
    return {
      title: "60-Second Pressure Challenge",
      instructions: `Re-deliver your introduction in under 60 seconds. Keep the opening, 1 project highlight, and closing statement.`,
      timeLimitSeconds: 60,
      targetFocus: "Conciseness",
    };
  } else if (lowerWeak.includes("project")) {
    return {
      title: "20-Second Project Sprint",
      instructions: `Explain your strongest project for ${role} in 20 seconds. Mention the problem, tech stack, and your key result.`,
      timeLimitSeconds: 25,
      targetFocus: "Project Explanation",
    };
  }

  return {
    title: "Role Connection & Closing Exercise",
    instructions: `Practice connecting your background directly to ${role} in a 45-second summary ending with a strong closing.`,
    timeLimitSeconds: 45,
    targetFocus: "Role Relevance",
  };
};

// @desc    Analyze a candidate's self-introduction (Strict Evidence-Based)
// @route   POST /api/introductions/analyze
const analyzeIntroduction = async (req, res) => {
  try {
    const { role, experience, transcript, durationSeconds, previousAttemptId } = req.body;

    if (!role || !role.trim()) {
      return res.status(400).json({ message: "Please select your target job role." });
    }

    const targetRole = role.trim();
    const expLevel = experience || "Fresher";
    const dur = parseInt(durationSeconds) || 60;
    const cleanedText = (transcript || "").trim();

    const speechStats = analyzeSpeechMetrics(cleanedText, dur);
    const words = cleanedText.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // =========================================================================
    // MANDATORY RULE 2: EMPTY / INSUFFICIENT / SILENCE RESPONSE (TEST A)
    // =========================================================================
    if (wordCount < 4 || cleanedText.length === 0) {
      const emptyScores = {
        overallScore: 0.0,
        content: 0.0,
        structure: 0.0,
        clarity: 0.0,
        fluency: 0.0,
        conciseness: 0.0,
        grammar: 0.0,
        roleMatch: 0.0,
        impact: 0.0,
      };

      const emptyRubric = {
        structure: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        clarity: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        education: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        technicalSkills: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        projectsExperience: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        strengthsValue: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        careerGoal: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        roleMatch: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        communicationQuality: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
        overallImpact: { score: 0.0, evidence: "Not demonstrated — insufficient spoken content.", status: "Not demonstrated" },
      };

      const emptyResponse = {
        role: targetRole,
        experience: expLevel,
        durationSeconds: dur,
        rawTranscript: cleanedText || "(No spoken content detected)",
        editedTranscript: cleanedText || "(No spoken content detected)",
        speechStats,
        scores: emptyScores,
        rubricBreakdown: emptyRubric,
        evaluationStatus: "Not Attempted / Insufficient Response",
        evaluationNote: "The introduction could not be evaluated because there was insufficient spoken content.",
        primaryWeakness: "Insufficient Spoken Content",
        targetedExercise: generateTargetedExercise("insufficient", targetRole, speechStats),
        whatWasGood: [],
        whatIsMissing: [
          "Complete spoken self-introduction",
          "Educational background / degree qualification",
          "Technical / academic skills and tools",
          "Projects or hands-on experience",
          "Target career goals and role relevance",
        ],
        mustImprove: [
          "Deliver a spoken self-introduction of at least 30–60 seconds.",
          `State your educational background and core skills suited for ${targetRole}.`,
          "Highlight at least one project and connect your skills to the role.",
        ],
        specificFeedback: "The introduction could not be evaluated because there was insufficient spoken content. Please provide a spoken introduction containing your background, skills, and projects.",
        suggestedStructure:
          "1. Greeting & Name: 'Hello, my name is [Your Name]...'\n" +
          "2. Education: 'I hold a background in [Degree] from [Institution]...'\n" +
          "3. Skills & Projects: 'My core skills are [Skills], and I developed [Project Name]...'\n" +
          `4. Role Fit: 'I am excited to apply these capabilities as a ${targetRole}.'`,
        whatChanged: ["No spoken content was provided to evaluate."],
        achievementsEarned: [],
        attemptNumber: 1,
        contentChecklist: {
          hasNameIntro: false,
          hasEducation: false,
          hasTechSkills: false,
          hasExperienceProjects: false,
          hasAchievements: false,
          hasRoleRelevance: false,
          hasClosing: false,
        },
        top3Improvements: [
          {
            problem: "Insufficient Spoken Content",
            whyItMatters: "An interviewer needs to hear about your background, skills, and projects to evaluate your fit.",
            example: "No spoken content provided.",
            howToPractice: "Speak a complete 30–60 second introduction covering your name, education, skills, and project.",
          },
        ],
        strengths: [],
        improvedVersion: `Hello, my name is [Your Name], pursuing [Your Degree]. My technical expertise includes [Your Key Skills], and I have developed [Your Key Project]. I am excited to apply my skills as a ${targetRole}.`,
        sentenceFeedback: [],
      };

      const userId = req.user ? req.user._id : null;
      const guestId = req.guestId || "guest_default";
      try {
        const session = await IntroductionSession.create({
          userId,
          guestId: userId ? undefined : guestId,
          ...emptyResponse,
        });
        return res.status(201).json(session);
      } catch (dbErr) {
        const sessionId = "intro_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
        const memSession = { _id: sessionId, userId, guestId: userId ? undefined : guestId, ...emptyResponse, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        memoryIntros.set(sessionId, memSession);
        return res.status(201).json(memSession);
      }
    }

    // =========================================================================
    // DETERMINISTIC BASELINE EVALUATION (ALWAYS RUNS AS GROUND TRUTH)
    // =========================================================================
    const deterministicEval = evaluateIntroductionDeterministically(cleanedText, targetRole, expLevel, speechStats);

    let finalScores = deterministicEval.scores;
    let finalRubric = deterministicEval.rubricBreakdown;
    let whatWasGood = deterministicEval.whatWasGood;
    let whatIsMissing = deterministicEval.whatIsMissing;
    let mustImprove = deterministicEval.mustImprove;
    let specificFeedback = deterministicEval.specificFeedback;
    let suggestedStructure = deterministicEval.suggestedStructure;
    let improvedVersion = deterministicEval.improvedVersion;
    let whatChanged = deterministicEval.whatChanged;
    let contentChecklist = deterministicEval.contentChecklist;
    let top3Improvements = deterministicEval.top3Improvements;
    let strengths = deterministicEval.strengths;
    let sentenceFeedback = [];

    // =========================================================================
    // AI EVALUATION WITH GEMINI (WITH 4-SECOND TIMEOUT FALLBACK)
    // =========================================================================
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey.trim() !== "" && apiKey !== "your_gemini_api_key_here") {
      try {
        const genAI = new GoogleGenerativeAI(apiKey.trim());
        const candidateModels = ["gemini-3.6-flash", "gemini-3.5-flash"];

        const aiPrompt = `You are a strict, evidence-based Senior Recruitment Interview Coach evaluating a candidate's spoken self-introduction.

TARGET JOB ROLE: "${targetRole}" (${expLevel} level)
CANDIDATE TRANSCRIPT: "${cleanedText}"
DURATION: ${dur} seconds (Word count: ${wordCount}, Fillers detected: ${speechStats.fillerCount})

CRITICAL EVALUATION RULES:
1. Evaluate ONLY WHAT THE CANDIDATE ACTUALLY SPOKE in the transcript.
2. NEVER assume skills, degrees, projects, achievements, or goals that are not explicitly present.
3. If the candidate spoke a short or partial answer (e.g. "Hi, I am John" or "I am pursuing MCA"), ONLY award points for what was actually said. Missing elements MUST score 0.0 with evidence "Not demonstrated".
4. Evaluate strictly on the 10-point Rubric (each category 0.0 to 1.0):
   1. structure (0.0 to 1.0)
   2. clarity (0.0 to 1.0)
   3. education (0.0 to 1.0)
   4. technicalSkills (0.0 to 1.0)
   5. projectsExperience (0.0 to 1.0)
   6. strengthsValue (0.0 to 1.0)
   7. careerGoal (0.0 to 1.0)
   8. roleMatch (0.0 to 1.0)
   9. communicationQuality (0.0 to 1.0)
   10. overallImpact (0.0 to 1.0)
5. overallScore MUST EQUAL the exact sum of the 10 rubric points (0.0 to 10.0), rounded to 1 decimal place.
6. In "improvedVersion", construct an ideal response strictly grounded in candidate's facts. Use placeholders like [Your College], [Your Project] where facts are missing. NEVER invent fake personal achievements.

Return valid JSON:
{
  "scores": {
    "overallScore": 3.0,
    "content": 2.0,
    "structure": 5.0,
    "clarity": 6.0,
    "fluency": 6.0,
    "conciseness": 8.0,
    "grammar": 7.0,
    "roleMatch": 0.0,
    "impact": 2.0
  },
  "rubricBreakdown": {
    "structure": { "score": 0.5, "evidence": "Greeting provided", "status": "Demonstrated" },
    "clarity": { "score": 0.6, "evidence": "Clear articulation", "status": "Demonstrated" },
    "education": { "score": 0.0, "evidence": "Not demonstrated", "status": "Not demonstrated" },
    "technicalSkills": { "score": 0.0, "evidence": "Not demonstrated", "status": "Not demonstrated" },
    "projectsExperience": { "score": 0.0, "evidence": "Not demonstrated", "status": "Not demonstrated" },
    "strengthsValue": { "score": 0.0, "evidence": "Not demonstrated", "status": "Not demonstrated" },
    "careerGoal": { "score": 0.0, "evidence": "Not demonstrated", "status": "Not demonstrated" },
    "roleMatch": { "score": 0.0, "evidence": "Not demonstrated", "status": "Not demonstrated" },
    "communicationQuality": { "score": 0.6, "evidence": "Clean flow", "status": "Demonstrated" },
    "overallImpact": { "score": 0.3, "evidence": "Brief introduction", "status": "Demonstrated" }
  },
  "whatWasGood": ["Demonstrated point 1"],
  "whatIsMissing": ["Missing point 1"],
  "mustImprove": ["Action 1", "Action 2", "Action 3"],
  "specificFeedback": "Feedback referencing user transcript.",
  "suggestedStructure": "Outline",
  "whatChanged": ["Change 1", "Change 2"],
  "improvedVersion": "Polished text."
}`;

        for (const mName of candidateModels) {
          try {
            const aiModel = genAI.getGenerativeModel({
              model: mName,
              generationConfig: {
                temperature: 0.1,
                topP: 0.8,
                maxOutputTokens: 2048,
              },
            });

            // 4.5 second timeout promise
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("AI Timeout")), 4500));
            const genPromise = aiModel.generateContent(aiPrompt);
            const result = await Promise.race([genPromise, timeoutPromise]);
            const resText = (await result.response).text();
            const cleanStr = resText.replace(/```json/gi, "").replace(/```/g, "").trim();
            const jsonMatch = cleanStr.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              if (parsed.rubricBreakdown && parsed.scores) {
                let rubricSum = 0;
                Object.values(parsed.rubricBreakdown).forEach((item) => {
                  if (item && typeof item.score === "number") {
                    rubricSum += Math.max(0, Math.min(1.0, item.score));
                  }
                });

                const calculatedOverall = Math.round(Math.min(10.0, Math.max(0.0, rubricSum)) * 10) / 10;
                finalScores = {
                  ...parsed.scores,
                  overallScore: calculatedOverall,
                };
                finalRubric = parsed.rubricBreakdown;
                if (Array.isArray(parsed.whatWasGood)) whatWasGood = parsed.whatWasGood;
                if (Array.isArray(parsed.whatIsMissing)) whatIsMissing = parsed.whatIsMissing;
                if (Array.isArray(parsed.mustImprove)) mustImprove = parsed.mustImprove;
                if (parsed.specificFeedback) specificFeedback = parsed.specificFeedback;
                if (parsed.suggestedStructure) suggestedStructure = parsed.suggestedStructure;
                if (Array.isArray(parsed.whatChanged)) whatChanged = parsed.whatChanged;
                if (parsed.improvedVersion) improvedVersion = parsed.improvedVersion;
                break;
              }
            }
          } catch (modelErr) {
            // Continues to next candidate model or deterministic fallback
          }
        }
      } catch (aiGeneralErr) {
        // Fallback to deterministic evaluation
      }
    }

    const primaryWeakness =
      speechStats.fillerCount > 3
        ? "Filler Reduction"
        : finalScores.overallScore < 4.0
        ? "Content Completeness"
        : finalScores.roleMatch < 5.0
        ? "Role Relevance"
        : "Project Explanation";

    const targetedExercise = generateTargetedExercise(primaryWeakness, targetRole, speechStats);

    let attemptNumber = 1;
    let scoreDelta = 0;
    const achievementsEarned = [];

    if (previousAttemptId) {
      let prevSession = null;
      try {
        prevSession = await IntroductionSession.findById(previousAttemptId);
      } catch (e) {
        prevSession = memoryIntros.get(previousAttemptId);
      }
      if (prevSession && prevSession.scores) {
        attemptNumber = (prevSession.attemptNumber || 1) + 1;
        const prevScore = typeof prevSession.scores.overallScore === "number" ? prevSession.scores.overallScore : 0;
        scoreDelta = Math.round((finalScores.overallScore - prevScore) * 10) / 10;
        if (scoreDelta > 0) achievementsEarned.push(`📈 +${scoreDelta} Points Improvement`);
      }
    }

    if (finalScores.overallScore >= 8.5) achievementsEarned.push("🎯 Top Tier Intro (8.5+)");
    else if (finalScores.overallScore >= 7.0) achievementsEarned.push("🎯 Strong Structure (7.0+)");
    if (finalScores.fluency >= 8.0 && wordCount >= 30) achievementsEarned.push("🔥 Fluency Mastery");
    if (attemptNumber >= 3) achievementsEarned.push("🏆 3 Practice Attempts");

    const evaluationStatus = finalScores.overallScore >= 7.0 ? "Complete & Well Structured" : finalScores.overallScore >= 4.0 ? "Partial / Needs Detail" : "Incomplete / Missing Key Elements";

    const sessionPayload = {
      role: targetRole,
      experience: expLevel,
      durationSeconds: dur,
      rawTranscript: cleanedText,
      editedTranscript: cleanedText,
      speechStats,
      scores: finalScores,
      rubricBreakdown: finalRubric,
      evaluationStatus,
      evaluationNote: `Evaluated strictly from spoken content (${wordCount} words).`,
      primaryWeakness,
      targetedExercise,
      whatWasGood,
      whatIsMissing,
      mustImprove,
      specificFeedback,
      suggestedStructure,
      whatChanged,
      achievementsEarned,
      attemptNumber,
      previousAttemptId,
      scoreDelta,
      contentChecklist,
      top3Improvements,
      strengths,
      improvedVersion,
      sentenceFeedback,
    };

    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";

    try {
      const session = await IntroductionSession.create({
        userId,
        guestId: userId ? undefined : guestId,
        ...sessionPayload,
      });
      return res.status(201).json(session);
    } catch (dbErr) {
      const sessionId = "intro_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
      const newSession = {
        _id: sessionId,
        userId,
        guestId: userId ? undefined : guestId,
        ...sessionPayload,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      memoryIntros.set(sessionId, newSession);
      return res.status(201).json(newSession);
    }
  } catch (error) {
    console.error("[Intro Controller Error]:", error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Build a structured self-introduction step-by-step
// @route   POST /api/introductions/builder
const buildGuidedIntroduction = async (req, res) => {
  try {
    const { role, education, techSkills, bestProject, achievement, targetClosing } = req.body;

    if (!role || !role.trim()) {
      return res.status(400).json({ message: "Please provide target job role." });
    }

    const targetRole = role.trim();
    let builtIntro = `Hello, my name is a candidate preparing for the ${targetRole} position.`;

    if (education) builtIntro += ` I hold a background in ${education}.`;
    if (techSkills) builtIntro += ` My core technical skill set includes ${techSkills}.`;
    if (bestProject) builtIntro += ` Recently, I engineered a project focused on ${bestProject}.`;
    if (achievement) builtIntro += ` A key achievement I am proud of is ${achievement}.`;
    if (targetClosing) builtIntro += ` ${targetClosing}`;
    else builtIntro += ` I am excited to bring these skills and drive value as a ${targetRole}.`;

    return res.json({ builtIntro });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Evaluate interviewer follow-up project response
// @route   POST /api/introductions/followup
const evaluateFollowUpAnswer = async (req, res) => {
  try {
    const { sessionId, questionIndex, question, answer } = req.body;

    if (!answer || !answer.trim()) {
      return res.status(400).json({ message: "Please provide an answer to the interviewer question." });
    }

    const trimmedAnswer = answer.trim();
    const wordCount = trimmedAnswer.split(/\s+/).filter(Boolean).length;

    let score = 5.0;
    let feedback = "Answer is brief. Elaborate with specific technical tools and your direct contribution.";

    if (wordCount >= 30) {
      score = 8.5;
      feedback = "Solid project explanation with technical clarity and direct ownership.";
    } else if (wordCount >= 15) {
      score = 7.0;
      feedback = "Good response. Add a concrete performance metric or outcome to make it stronger.";
    }

    return res.json({
      questionIndex: questionIndex || 1,
      question: question || "Tell me more about your project.",
      answer: trimmedAnswer,
      score,
      feedback,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get past introduction evaluation history
// @route   GET /api/introductions/history
const getIntroductionHistory = async (req, res) => {
  try {
    const ownerQuery = req.user ? { userId: req.user._id } : { guestId: req.guestId || "guest_default" };
    try {
      const history = await IntroductionSession.find(ownerQuery).sort({ createdAt: -1 });
      return res.json(history);
    } catch (dbErr) {
      const userId = req.user ? String(req.user._id) : null;
      const guestId = req.guestId || "guest_default";
      const list = Array.from(memoryIntros.values())
        .filter((s) => (userId ? String(s.userId) === userId : s.guestId === guestId))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return res.json(list);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get Introduction Analytics Dashboard metrics per role
// @route   GET /api/introductions/dashboard
const getIntroductionDashboard = async (req, res) => {
  try {
    const { role } = req.query;
    const ownerQuery = req.user ? { userId: req.user._id } : { guestId: req.guestId || "guest_default" };
    if (role && role.trim()) {
      ownerQuery.role = role.trim();
    }

    let sessions = [];
    try {
      sessions = await IntroductionSession.find(ownerQuery).sort({ createdAt: 1 });
    } catch (dbErr) {
      const userId = req.user ? String(req.user._id) : null;
      const guestId = req.guestId || "guest_default";
      sessions = Array.from(memoryIntros.values())
        .filter((s) => (userId ? String(s.userId) === userId : s.guestId === guestId))
        .filter((s) => (role ? s.role === role.trim() : true))
        .sort((a, b) => new Date(a.createdAt) - new Date(a.createdAt));
    }

    const attemptsCount = sessions.length;
    const latestSession = attemptsCount > 0 ? sessions[attemptsCount - 1] : null;

    let bestScore = 0;
    sessions.forEach((s) => {
      const sc = typeof s.scores?.overallScore === "number" ? s.scores.overallScore : 0;
      if (sc > bestScore) bestScore = sc;
    });

    const firstScore = attemptsCount > 0 ? (typeof sessions[0].scores?.overallScore === "number" ? sessions[0].scores.overallScore : 0) : 0;
    const latestScore = latestSession ? (typeof latestSession.scores?.overallScore === "number" ? latestSession.scores.overallScore : 0) : 0;
    const totalImprovement = Math.max(0, Math.round((latestScore - firstScore) * 10) / 10);

    const scoreTrend = sessions.map((s, idx) => ({
      attempt: idx + 1,
      score: typeof s.scores?.overallScore === "number" ? s.scores.overallScore : 0,
      date: new Date(s.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    }));

    const fillerTrend = sessions.map((s, idx) => ({
      attempt: idx + 1,
      fillerCount: s.speechStats?.fillerCount || 0,
    }));

    return res.json({
      role: role || "All Roles",
      attemptsCount,
      latestScore,
      bestScore,
      totalImprovement,
      scoreTrend,
      fillerTrend,
      latestSession,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  analyzeIntroduction,
  buildGuidedIntroduction,
  evaluateFollowUpAnswer,
  getIntroductionHistory,
  getIntroductionDashboard,
};
