const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
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
    key: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      default: "preference",
    },
  },
  { timestamps: true }
);

memorySchema.index({ userId: 1 });
memorySchema.index({ guestId: 1 });

module.exports = mongoose.model("Memory", memorySchema);


