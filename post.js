const express = require("express");
const validate = require("./router/authRouter");

const router = express.Router();

router.get("/post", validate, (req, res) => {
  console.log(res.user);
  res.json({ name: "akram", age: 25 });
});

module.exports = router;
