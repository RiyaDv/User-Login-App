const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../model/User");

const userAction = {
  // ----- Registration -----
  register: asyncHandler(async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Validation
    if (!username || !email || !password) {
      throw new Error("All Fields are Required");
    }

    // Check if User Already Exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User Already Exist");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create User
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    // Send Response
    res.json({
      username: newUser.username,
      email: newUser.email,
      id: newUser.id,
    });
  }),

  // ----- Login -----
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Invalid username or password");
    }

    // Check if password is valid
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid username or password");
    }

    // Generate Token
    const token = jwt.sign({ id: user.id, role: user.role }, "anyKey", {
      expiresIn: "10d",
    });

    // Send Response
    res.json({
      message: "Login Success",
      token,
      id: user._id,
      username: user.username,
      email: user.email,
    });
  }),

  // ----- Profile -----
  profile: asyncHandler(async (req, res) => {
    // Find User
    const user = await User.findById(req.user).select("-password");
    res.json({ user });
  }),

  // ----- Admin -----
  admin: asyncHandler(async (req, res) => {
    // Find User
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  }),
};

module.exports = userAction;
