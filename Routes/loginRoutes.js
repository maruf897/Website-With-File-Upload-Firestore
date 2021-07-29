const express = require("express");
const router = express.Router();
const User = require("../Schema/userSchema");

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
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    res.json(createdUser);
  } catch (error) {
    res.json(error.errors);
  }
});
module.exports = router;
