const dotenv = require("dotenv");
dotenv.config();

const dns = require("dns");
try {
  dns.setDefaultResultOrder("ipv4first");
} catch (e) {
  // Ignored if unsupported
}

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

const server = app.listen(PORT, () => {
  const hasKey = !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0);
  console.log(`\n[SERVER] Backend started on port ${PORT}`);
  console.log(`[SERVER] Gemini key loaded: ${hasKey ? "YES" : "NO"}`);
  console.log(`[SERVER] Chat routes registered: POST /api/messages, POST /api/messages/stream`);
  console.log(`🚀 VEXIS PRO Backend Server running at http://localhost:${PORT}`);
  console.log(`💬 API ready at http://localhost:${PORT}/api/health\n`);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
});
