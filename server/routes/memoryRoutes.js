const express = require("express");
const router = express.Router();
const {
  getMemories,
  addMemory,
  deleteMemory,
  clearMemories,
} = require("../controllers/memoryController");
const { protect } = require("../middleware/authMiddleware");

router.use(protect);

router.route("/").get(getMemories).post(addMemory).delete(clearMemories);
router.delete("/:id", deleteMemory);

module.exports = router;
