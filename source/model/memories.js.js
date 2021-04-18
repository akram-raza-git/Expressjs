const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
    min: 6,
  },
  title: {
    type: String,
    required: true,
    default: "N/A",
  },
  author: {
    type: String,
    required: true,
    min: 6,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new mongoose.model("Memory", memorySchema);
