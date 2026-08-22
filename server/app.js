const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const fs = require("fs");

const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const modelRoutes = require("./routes/modelRoutes");
const memoryRoutes = require("./routes/memoryRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const introRoutes = require("./routes/introRoutes");
const careerRoutes = require("./routes/careerRoutes");
const rateLimiter = require("./middleware/rateLimitMiddleware");

const app = express();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));
app.use(cookieParser());

// Static uploads serving
app.use("/uploads", express.static(uploadsDir));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", rateLimiter({ windowMs: 60 * 1000, max: 30 }), messageRoutes);
app.use("/api/models", modelRoutes);
app.use("/api/memories", memoryRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/interviews", interviewRoutes);
app.use("/api/introductions", introRoutes);
app.use("/api/careers", careerRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", app: "VEXIS PRO API Server", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("[VEXIS PRO Server Error]:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
