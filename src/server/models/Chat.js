// ===== 📁 src/models/Chat.js =====
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const chatSchema = new mongoose.Schema(
  {
    tenderId: { type: mongoose.Schema.Types.ObjectId, ref: "Tender" },
    bidId: { type: mongoose.Schema.Types.ObjectId, ref: "Bid" },
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    messages: [messageSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Chat", chatSchema);
