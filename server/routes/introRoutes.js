const express = require("express");
const router = express.Router();
const {
  analyzeIntroduction,
  buildGuidedIntroduction,
  evaluateFollowUpAnswer,
  getIntroductionHistory,
  getIntroductionDashboard,
} = require("../controllers/introController");
const { protect } = require("../middleware/authMiddleware");

// Protected routes with optional auth / guest fallback
router.use(protect);

router.post("/analyze", analyzeIntroduction);
router.post("/builder", buildGuidedIntroduction);
router.post("/followup", evaluateFollowUpAnswer);
router.get("/history", getIntroductionHistory);
router.get("/dashboard", getIntroductionDashboard);

module.exports = router;
