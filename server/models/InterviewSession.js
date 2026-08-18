const mongoose = require("mongoose");

const interviewSessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    guestId: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      default: "Fresher",
    },
    interviewType: {
      type: String,
      default: "Full Interview",
    },
    difficulty: {
      type: String,
      default: "Medium",
    },
    duration: {
      type: String,
      default: "30 Minutes",
    },
    numQuestions: {
      type: Number,
      default: 15,
    },
    pressureMode: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      enum: ["Standard", "Pressure", "Practice"],
      default: "Standard",
    },
    interviewerGreeting: {
      type: String,
      default: "",
    },
    personality: {
      type: String,
      enum: ["Professional", "Friendly", "Strict", "Technical Expert", "Consulting Interviewer"],
      default: "Professional",
    },
    resumeText: {
      type: String,
      default: "",
    },
    jobDescriptionText: {
      type: String,
      default: "",
    },
    jdSkillsChecklist: [
      {
        skill: String,
        covered: {
          type: Boolean,
          default: false,
        },
        assessedAtQuestion: Number,
      },
    ],
    status: {
      type: String,
      enum: ["in_progress", "completed", "cancelled"],
      default: "in_progress",
    },
    currentQuestionIndex: {
      type: Number,
      default: 0,
    },
    currentRoundIndex: {
      type: Number,
      default: 0,
    },
    linkedIntroSessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "IntroductionSession",
    },
    introPerformance: {
      score: Number,
      communication: Number,
      techCommunication: Number,
      roleRelevance: Number,
    },
    introConsistencyFeedback: {
      hasGap: Boolean,
      claimedSkill: String,
      observation: String,
    },
    roleProfile: {
      type: Object,
      default: {},
    },
    roadmap: [
      {
        roundNumber: Number,
        roundName: String,
        category: String,
        questionCount: Number,
        description: String,
      },
    ],
    topicCoverage: {
      type: Map,
      of: String,
      default: {},
    },
    questions: [
      {
        questionIndex: Number,
        roundName: String,
        category: String,
        question: String,
        difficulty: String,
        codeProblem: {
          title: String,
          description: String,
          initialCode: String,
          schemaInfo: String,
        },
      },
    ],
    transcript: [
      {
        questionIndex: Number,
        roundName: String,
        question: String,
        category: String,
        answer: String,
        skipped: Boolean,
        difficultyAtQuestion: String,
        timeSpentSeconds: Number,
        analysis: {
          score: Number,
          correctness: Number,
          technicalDepth: Number,
          clarity: Number,
          problemSolving: Number,
          strength: String,
          improvement: String,
          feedback: String,
          interviewerReaction: String,
          decisionAction: String,
          communicationBehavior: {
            direct: Boolean,
            offTopic: Boolean,
            shortOrLong: String,
          },
          strongerModelAnswer: String,
        },
        askedAt: {
          type: Date,
          default: Date.now,
        },
        answeredAt: Date,
      },
    ],
    finalEvaluation: {
      overallScore: Number,
      readinessScore: Number,
      readinessLevel: String,
      hiringRecommendation: String,
      summary: String,
      recruiterSummary: String,
      timeEfficiency: String,
      strengths: [String],
      areasForImprovement: [String],
      redFlags: [String],
      scorecard: [
        {
          category: String,
          score: Number,
          explanation: String,
        },
      ],
      studyPlan: [
        {
          day: Number,
          topic: String,
          task: String,
          recommendedCategory: String,
        },
      ],
      recommendedPracticeTopics: [
        {
          topic: String,
          category: String,
          description: String,
        },
      ],
    },
  },
  { timestamps: true }
);

interviewSessionSchema.index({ userId: 1, createdAt: -1 });
interviewSessionSchema.index({ guestId: 1, createdAt: -1 });

module.exports = mongoose.model("InterviewSession", interviewSessionSchema);
