/**
 * Career Navigator Routes
 */

const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/careerController");

// Catalog & Hierarchy
router.get("/families", getFamilies);
router.get("/families/:familyId", getFamilyById);
router.get("/roles", getRoles);
router.get("/roles/:roleId", getRoleById);

// Day 3 Personalized Features
router.post("/gap-analysis", performGapAnalysis);
router.post("/discover", discoverCareers);
router.get("/compare-detailed", getDetailedComparison);
router.route("/compare").get(compareRoles).post(compareRoles);

// Day 4 AI Career Coach Features
router.post("/coach-plan", generateCoachPlan);
router.post("/coach-ask", askCoachQuestion);

// Day 5 Job Description (JD) Skill Gap Analyzer
router.post("/analyze-jd", analyzeJobDescription);

// Statistics
router.get("/stats", getStats);

module.exports = router;
