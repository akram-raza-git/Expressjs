const Express = require("express");
const User = require("../model/user");
const validate = require("./authRouter");

const router = Express();

router.get("/:id", validate, (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((resp) => {
      const user = { ...resp._doc };
      delete user.password;
      res.json(user);
    })
    .catch(() => {
      res.status(400).json({ errorMessage: "something went wrong" });
    });
});

router.put("/", (req, res) => {
  const id = req.body._id;
  const { name, email, Bio, image, address, mobile } = req.body;
  User.findByIdAndUpdate(id, { name, email, Bio, image, address, mobile })
    .then((resp) => {
      resp.json({ message: "Profile updated successful" });
    })
    .catch(() => {
      res.status(400).json({ errorMessage: "something went wrong" });
    });
});

module.exports = router;
