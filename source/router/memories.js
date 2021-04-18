const express = require("express");
const validate = require("./authRouter");
const Memories = require("../model/memories.js");

const router = express.Router();

router.post("/post", validate, (req, res) => {
  console.log(res.user);
  const { post, author, image, title } = req.body || {};
  const memory = new Memories({
    post,
    author,
    image,
    title,
  });
  memory
    .save()
    .then((resp) => res.send({ memory: resp, message: "memory saved" }))
    .catch(() =>
      res.status(400).send({ errorMessage: "something went wrong" })
    );
});

router.get("/posts", validate, (req, res) => {
  Memories.find()
    .then((resp) => {
      res.send(resp);
    })
    .catch(() =>
      res.status(400).send({ errorMessage: "Something went wrong" })
    );
});

module.exports = router;
