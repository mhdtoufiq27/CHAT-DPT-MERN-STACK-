const express = require("express");
const router = express.Router();
const {
  getChats,
  getChatById,
  createChat,
  updateChat,
  deleteChat,
  clearAllChats,
  shareChat,
  getSharedChat,
} = require("../controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

// Public shared chat view
router.get("/share/:shareId", getSharedChat);

router.use(protect);

router.route("/").get(getChats).post(createChat).delete(clearAllChats);
router.route("/:id").get(getChatById).patch(updateChat).delete(deleteChat);
router.post("/:id/share", shareChat);

module.exports = router;

