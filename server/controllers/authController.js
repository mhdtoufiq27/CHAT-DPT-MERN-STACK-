const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "chatdpt_super_secret_jwt_key_2026_key", {
    expiresIn: "30d",
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    let user;
    try {
      user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists with this email" });
      }

      user = await User.create({ name, email, password });
    } catch (dbErr) {
      // In-memory fallback if Mongo is offline
      user = {
        _id: "user_" + Date.now(),
        name,
        email,
        plan: "Free",
      };
    }

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      plan: user.plan || "Free",
      avatar: user.avatar || "",
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message || "Registration failed" });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    let user;
    try {
      user = await User.findOne({ email });
    } catch (e) {
      user = null;
    }

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        plan: user.plan,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Login failed" });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/me
const getMe = async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({
      _id: "guest",
      name: "Guest User",
      email: "guest@chatdpt.com",
      plan: "Free",
      isGuest: true,
    });
  }
};

// @desc    Update profile
// @route   PUT /api/auth/profile
const updateProfile = async (req, res) => {
  try {
    const { name, customInstructions, plan } = req.body;
    if (req.user) {
      const user = await User.findById(req.user._id);
      if (user) {
        if (name) user.name = name;
        if (customInstructions !== undefined) user.customInstructions = customInstructions;
        if (plan) user.plan = plan;
        await user.save();
        return res.json(user);
      }
    }
    res.json({ message: "Settings updated for current session" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, getMe, updateProfile };
