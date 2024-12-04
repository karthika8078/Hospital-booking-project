const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Modules/Register"); // Ensure this path is correct

// Register a New User
router.post("/users/register", async (req, res) => {
  try {
    const { name, email, password, dateOfBirth, phoneNumber } = req.body;

    // Debug the incoming request
    console.log("Registration request body:", req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dateOfBirth,
      phoneNumber,
    });

    const savedUser = await newUser.save();

    // Log the saved user
    console.log("New user saved:", savedUser);

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Additional POST Route: Minimal Registration
router.post("/users/register/simple", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Simple registration request body:", req.body); // Debug input

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the new user with just email and password
    const newUser = new User({ email, password: hashedPassword });

    const savedUser = await newUser.save();

    // Log the new user's data
    console.log("New user registered (simple):", savedUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Simple registration error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET: Retrieve All Users (for debugging/registration details)
router.get("/users/register", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users' registration data
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
