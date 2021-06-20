const router = require("express").Router();
const User = require("../models/User");
const bycrypt = require("bcrypt");

// Register
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bycrypt.genSalt(10);
      req.body.password = await bycrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...others } = updateUser._doc;
      res.status(200).json(others);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(401).json("You are not allowed to update.");
  }
});

module.exports = router;
