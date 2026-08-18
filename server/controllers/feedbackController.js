const Feedback = require("../models/Feedback");

const feedbackStore = new Map();

// @desc    Submit response feedback (Like / Dislike)
// @route   POST /api/feedback
const submitFeedback = async (req, res) => {
  try {
    const { chatId, messageId, type } = req.body;
    if (!chatId || !messageId || !type) {
      return res.status(400).json({ message: "chatId, messageId, and type are required" });
    }

    const userId = req.user ? req.user._id : null;
    const guestId = req.guestId || "guest_default";

    try {
      const feedback = await Feedback.create({
        chatId,
        messageId,
        userId,
        guestId,
        type,
      });
      return res.status(201).json(feedback);
    } catch (dbErr) {
      const feedback = {
        _id: "fb_" + Date.now(),
        chatId,
        messageId,
        userId,
        guestId,
        type,
        createdAt: new Date().toISOString(),
      };
      feedbackStore.set(messageId, feedback);
      return res.status(201).json(feedback);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to record feedback" });
  }
};

module.exports = { submitFeedback, feedbackStore };
