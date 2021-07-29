const express = require("express");
const router = express.Router();
const User = require("../Schema/userSchema");
const bcrypt = require("bcrypt");

// user get
router.get("/", async function (req, res) {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.json(error.errors);
  }
});
router.post("/", async (req, res) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      const newUser = new User({ ...req.body, password: hashedPass });
      const createdUser = await newUser.save();
      res.json(createdUser);
    }
    res.json({ message: "user Exists" });
  } catch (error) {
    res.json(error.errors);
  }
});
module.exports = router;
