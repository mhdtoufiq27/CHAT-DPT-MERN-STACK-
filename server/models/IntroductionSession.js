const mongoose = require("mongoose");

const introductionSessionSchema = new mongoose.Schema(
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
    durationSeconds: {
      type: Number,
      default: 0,
    },
    rawTranscript: {
      type: String,
      required: true,
    },
    editedTranscript: {
      type: String,
    },
    speechStats: {
      wordCount: Number,
      speakingPaceWpm: Number,
      fillerCount: Number,
      topFillers: [
        {
          word: String,
          count: Number,
        },
      ],
      repeatedPhrasesCount: Number,
    },
    scores: {
      overallScore: Number, // 0.0 to 10.0
      content: Number,
      structure: Number,
      clarity: Number,
      fluency: Number,
      conciseness: Number,
      grammar: Number,
      roleMatch: Number,
      impact: Number,
    },
    primaryWeakness: {
      type: String,
      default: "Filler Reduction",
    },
    targetedExercise: {
      title: String,
      instructions: String,
      timeLimitSeconds: Number,
      targetFocus: String,
    },
    whatChanged: [String],
    achievementsEarned: [String],
    attemptNumber: {
      type: Number,
      default: 1,
    },
    previousAttemptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "IntroductionSession",
    },
    scoreDelta: {
      type: Number,
      default: 0,
    },
    followUpAnswers: [
      {
        questionIndex: Number,
        question: String,
        answer: String,
        score: Number,
        feedback: String,
      },
    ],
    contentChecklist: {
      hasNameIntro: Boolean,
      hasEducation: Boolean,
      hasTechSkills: Boolean,
      hasExperienceProjects: Boolean,
      hasAchievements: Boolean,
      hasRoleRelevance: Boolean,
      hasClosing: Boolean,
    },
    top3Improvements: [
      {
        problem: String,
        whyItMatters: String,
        example: String,
        howToPractice: String,
      },
    ],
    strengths: [String],
    improvedVersion: String,
    sentenceFeedback: [
      {
        original: String,
        improved: String,
        reason: String,
      },
    ],
  },
  { timestamps: true }
);

introductionSessionSchema.index({ userId: 1, createdAt: -1 });
introductionSessionSchema.index({ guestId: 1, createdAt: -1 });

module.exports = mongoose.model("IntroductionSession", introductionSessionSchema);
