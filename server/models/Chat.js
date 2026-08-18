const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    guestId: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      default: "New chat",
      trim: true,
    },
    model: {
      type: String,
      default: "chatdpt-4o",
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
    systemPrompt: {
      type: String,
      default: "",
    },
    isShared: {
      type: Boolean,
      default: false,
    },
    shareId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true }
);

chatSchema.index({ userId: 1, updatedAt: -1 });
chatSchema.index({ guestId: 1, updatedAt: -1 });

module.exports = mongoose.model("Chat", chatSchema);



