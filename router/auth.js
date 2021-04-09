const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const Joi = require("@hapi/joi");

const User = require("../model/user");

const router = express.Router();

// const schema = {
//   name: Joi.string().min(6).required(),
//   email: Joi.string().min(6).email().required(),
//   password: Joi.string().min(6).required(),
// };
// router.get("/get", (req, res) => {
//   console.log(req.header("auth-token"));
//   res.send("authenticated");
// });
router.post("/login", async (req, res) => {
  const { email, password } = req.body || {};
  const checkUser = await User.findOne({ email: email });
  if (!checkUser) return res.status(400).send("Email not found");
  const validPassword = await bcryptjs.compare(password, checkUser.password);
  if (!validPassword) return res.sendStatus(400).send("Invalid password");
  const token = jwt.sign({ _id: checkUser._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  res.send(token);
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body || {};
  const checkUser = await User.findOne({ email: email });
  if (checkUser) return res.status(400).send("user already exist");
  const salt = await bcryptjs.genSalt(10);
  const hashPassword = await bcryptjs.hash(password, salt);
  const user = new User({
    name,
    email,
    password: hashPassword,
  });
  try {
    const userSaved = await user.save();
    res.send({ user_id: userSaved._id });
  } catch (error) {
    res.status(400).send(error);
  }
  res.send("/register");
});

module.exports = router;
