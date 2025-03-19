const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeadSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  status: {
    type: String,
    enum: ["New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost"],
    default: "New",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lead", LeadSchema);
