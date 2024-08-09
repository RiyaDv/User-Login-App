const express = require("express");
const userAction = require("../controllers/ActionLogic");
const { isAuthenticated, isAdmin } = require("../middleware/isAuth");

const router = express.Router();

// Registration Route
router.post("/api/users/register", userAction.register);

// Login Route
router.post("/api/users/login", userAction.login);

// Profile Route
router.get("/api/users/profile", isAuthenticated, userAction.profile);

// Admin Login
router.get("/api/users/admin", isAdmin, userAction.admin);

module.exports = router;
