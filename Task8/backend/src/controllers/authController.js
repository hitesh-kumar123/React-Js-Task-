const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const sendVerificationEmail =
  require("../config/mail");

// Register
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const token =
      crypto.randomUUID();

    await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken: token,
    });

    await sendVerificationEmail(
      email,
      token
    );

    res.status(201).json({
      message:
        "Registration successful. Check your email.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// verify
const verifyEmail = async (
  req,
  res
) => {
  try {
    const { token } = req.params;

    const user =
      await User.findOne({
        verificationToken: token,
      });

    if (!user) {
      return res.status(400).json({
        message:
          "Invalid Verification Token",
      });
    }

    user.isVerified = true;
    user.verificationToken = null;

    await user.save();

    res.send(
      "Email Verified Successfully"
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    if (!user.isVerified) {
      return res.status(400).json({
        message:
          "Please verify your email first",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      message: "Login Success",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.userId
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
  getProfile,
  verifyEmail,
};