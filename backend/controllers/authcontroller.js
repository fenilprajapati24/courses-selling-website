const bcrypt = require('bcrypt');
const usermodel = require('../models/usermodel');
const genereatetoken = require('../utils/generatetoken');

const registeruser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // ✅ Check if user already exists
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // ✅ Create user
    const user = await usermodel.create({
      email,
      password: hash,
      name,
    });

    // ✅ Generate token
    const token = genereatetoken(user);
    res.cookie("token", token, { httpOnly: true });

    return res.status(201).json({ message: "User registered successfully", token });
  } catch (err) {
    console.error("Error in registeruser:", err);
    res.status(500).json({ message: "Server error" });
  }
};

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Check if user exists
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User or password is incorrect" });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "User or password is incorrect" });
    }

    // ✅ Generate and send token
    const token = genereatetoken(user);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour
    });

    return res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Error in loginuser:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registeruser, loginuser };
