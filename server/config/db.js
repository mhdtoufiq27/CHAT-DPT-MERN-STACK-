const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chatdpt");
    console.log(`[MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`[MongoDB Warning] Database connection deferred/failed: ${error.message}`);
    console.warn("[MongoDB Info] ChatDPT will run with graceful in-memory storage fallback for unsaved chats if MongoDB service is offline.");
  }
};

module.exports = connectDB;
