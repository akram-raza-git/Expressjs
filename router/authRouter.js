const express = require("express");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token)
    return res
      .status(400)
      .json({ errorCode: 14013, errorMessage: "Your are unauthorised" });
  try {
    const verify = jwt.verify(token, process.env.TOKEN_SECRET);
    res.user = verify;
  } catch (error) {
    res.send(error);
  }
  next();
};
