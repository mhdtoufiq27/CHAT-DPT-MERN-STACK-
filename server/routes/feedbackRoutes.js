const express = require("express");
const router = express.Router();
const { submitFeedback } = require("../controllers/feedbackController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect);

router.post("/", submitFeedback);

module.exports = router;
