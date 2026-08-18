const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  sendMessage,
  streamMessage,
  regenerateMessage,
  editUserMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

router.use(protect);

router.post("/", sendMessage);
router.post("/stream", streamMessage);
router.post("/regenerate", regenerateMessage);
router.post("/edit", editUserMessage);
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({
    url: fileUrl,
    name: req.file.originalname,
    fileType: req.file.mimetype,
  });
});

module.exports = router;

