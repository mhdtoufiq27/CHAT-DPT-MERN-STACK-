const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat",
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "assistant", "system"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachments: [
      {
        url: String,
        name: String,
        fileType: String,
      },
    ],
    modelUsed: {
      type: String,
      default: "chatdpt-4o",
    },
    webSearchUsed: {
      type: Boolean,
      default: false,
    },
    toolsUsed: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

messageSchema.index({ chatId: 1, createdAt: 1 });

module.exports = mongoose.model("Message", messageSchema);



