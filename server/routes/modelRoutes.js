const express = require("express");
const router = express.Router();

// Dynamic Model Architecture Configuration
const availableModels = [
  {
    id: "chatdpt-4o",
    name: "VEXIS PRO Pro",
    badge: "Smartest",
    provider: "Gemini 2.5 Flash / Pro",
    desc: "High intelligence for complex coding, document analysis & creative tasks",
    icon: "Sparkles",
    iconColor: "text-emerald-400",
    supportsVision: true,
    supportsTools: true,
  },
  {
    id: "chatdpt-4o-mini",
    name: "VEXIS PRO Fast",
    badge: "Fastest",
    provider: "Gemini 2.5 Flash",
    desc: "Lightweight, ultra-fast model for quick Q&A, writing & summaries",
    icon: "Zap",
    iconColor: "text-amber-400",
    supportsVision: true,
    supportsTools: true,
  },
  {
    id: "chatdpt-o1",
    name: "VEXIS PRO Reasoning",
    badge: "Reasoning",
    provider: "Gemini 2.5 Pro",
    desc: "Advanced step-by-step reasoning for math, logic & deep technical problems",
    icon: "Brain",
    iconColor: "text-cyan-400",
    supportsVision: true,
    supportsTools: true,
  },
];

// @desc    Get dynamic configured AI model architectures
// @route   GET /api/models
router.get("/", (req, res) => {
  res.json(availableModels);
});

module.exports = router;
