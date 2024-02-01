const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel"); // Import your user model


// User Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password ,branchcode} = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // If the user does not exist, return an error
    if (!user) {
      return res
        .status(401)
        .json({ error: "Invalid user username" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Generate a JWT token for user authentication
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

      return res.status(200).json({ authenticated: true, token });
    } else {
      return res
        .status(401)
        .json({ error: "Invalid user username or password" });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;