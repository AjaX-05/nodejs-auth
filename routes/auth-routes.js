const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/auth-controller");
const authMiddleware = require("../middleware/auth-middleware");
const authRoutes = express.Router();

// all routes are related to authentication && authorization

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/passwordchange", authMiddleware, changePassword);

module.exports = authRoutes;
