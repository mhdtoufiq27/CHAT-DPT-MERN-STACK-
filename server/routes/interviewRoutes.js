const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/interviewController");
const { protect } = require("../middleware/authMiddleware");

// All interview routes protected with optional auth / guest middleware
router.use(protect);

router.post("/start", startInterview);
router.get("/active", getActiveInterview);
router.get("/progress", getInterviewProgress);
router.get("/", getInterviews);
router.delete("/history/clear", clearInterviewHistory);
router.get("/:id", getInterviewById);
router.delete("/:id", deleteInterview);
router.get("/:id/export", exportInterviewReport);
router.post("/:id/answer", submitAnswer);
router.post("/:id/end", endInterview);

module.exports = router;
