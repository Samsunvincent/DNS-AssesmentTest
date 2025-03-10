const User = require("../db/model/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password is required" });
    }

    const checkUser = await User.findOne({ email });
    console.log("Checking email in users data:", checkUser);

    if (!checkUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    const role = checkUser.userType || "admin";

    const token = jwt.sign(
      { id: checkUser._id, role },
      process.env.PRIVATE_KEY,
      { expiresIn: role === "admin" ? "1h" : "10d" }
    );

    console.log("Generated token:", token);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: { user: checkUser, role, token },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ success: false, message: "An error occurred during login" });
  }
};
