const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "chatdpt_super_secret_jwt_key_2026_key");
      if (decoded && decoded.id) {
        if (mongoose.Types.ObjectId.isValid(decoded.id)) {
          req.user = await User.findById(decoded.id).select("-password");
        } else {
          req.user = { _id: decoded.id, name: "User", email: "user@example.com" };
        }
      }
      return next();
    } catch (error) {
      // Token verification failed or expired, fall back to guest
    }
  }

  // If no valid auth token, attach guest identifier header if provided
  req.guestId = req.headers["x-guest-id"] || "guest_default";
  next();
};

module.exports = { protect };

