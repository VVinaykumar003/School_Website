const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  image: String,
});

module.exports = mongoose.model("Achievement", achievementSchema);
