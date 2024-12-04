// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const User = require("../Modules/Login");

// // POST: Login Route (Main login logic)
// router.post("/users/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Fetch user from the database by email
//     const user = await User.findOne({ email });

//     // Log the user object to check if it's fetched properly
//     console.log("User fetched from database:", user);

//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // Log the stored hashed password from the database
//     console.log("Stored hashed password:", user.password);

//     // Compare the provided password with the hashed password in the database
//     const match = await bcrypt.compare(password, user.password);
//     console.log("Password match result:", match);  // Log password comparison result

//     if (!match) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // If password matches, login is successful
//     res.status(200).json({ message: "Login successful!" });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // GET: Login Route (Just for demonstration)
// router.get("/users/login", (req, res) => {
//   res.status(200).json({ message: "Login route is accessible via POST method." });
// });

// module.exports = router;




const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// require('../config/db')
const User = require("../Modules/Register"); // Ensure this path is correct

router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Debug the incoming request
    console.log("Login request body:", req.body);

    
    // Fetch user from the database (case-insensitive match for email)
    const user = await User.findOne({ email: req.body.email });
    
    // Log the fetched user from the database
    console.log("User fetched from DB:", user);

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare provided password with the stored hashed password
    const match = await bcrypt.compare(password, user.password);
    console.log("Password match result:", match);

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Login is successful
    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



// GET: Login Route (Just for demonstration)
router.get("/users/login", (req, res) => {
  res.status(200).json({ message: "Login route is accessible via POST method." });
});

module.exports = router;

