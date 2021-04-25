const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  image: {
    type: String,
    default: null,
  },
  mobile: {
    type: Number,
    default: null,
  },
  Bio: {
    type: String,
    default: null,
    min: 10,
  },
  address: {
    type: Object,
    default: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = new mongoose.model("User", userSchema);
