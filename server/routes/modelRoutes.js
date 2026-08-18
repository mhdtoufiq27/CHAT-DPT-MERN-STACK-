const express = require("express");
const router = express.Router();

// Dynamic Model Architecture Configuration
const availableModels = [
  {
    id: "chatdpt-4o",
    name: "VEXIS PRO Pro",
    badge: "Smartest",
    provider: "Cerebras Llama 3.3 70B",
    desc: "Ultra-fast high intelligence for complex coding, document analysis & creative tasks",
    icon: "Sparkles",
    iconColor: "text-emerald-400",
    supportsVision: true,
    supportsTools: true,
  },
  {
    id: "chatdpt-4o-mini",
    name: "VEXIS PRO Fast",
    badge: "Fastest",
    provider: "Cerebras Llama 3.1 8B",
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
    provider: "Cerebras Reasoning 70B",
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
