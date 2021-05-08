const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({
  post: {
    type: String,
    min: 6,
  },
  title: {
    type: String,
    default: "N/A",
  },
  author: {
    type: String,
    min: 6,
  },
  image: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Memory", memorySchema);
