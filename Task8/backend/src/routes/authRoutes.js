const express = require("express");

const router = express.Router();
const {
  register,
  login,
  getProfile,
  verifyEmail,
} = require(
  "../controllers/authController"
);

const authMiddleware = require(
  "../middleware/authMiddleware"
);

router.post(
  "/register",
  register
);

router.get(
  "/verify/:token",
  verifyEmail
);


router.post(
  "/login",
  login
);

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

module.exports = router;