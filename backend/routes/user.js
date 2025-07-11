const express = require('express');
const router = express.Router();

// Controllers
const {
  getProfile,
  updateProfile,
  getUserByUsername
} = require('../controllers/userController');

// Middleware
const { auth } = require('../middleware/auth');

// ✅ Authenticated routes
router.get('/profile', auth, getProfile);       // GET current user's profile
router.put('/profile', auth, updateProfile);    // UPDATE current user's profile

// ✅ Public route
router.get('/:username', getUserByUsername);    // GET public profile by username

module.exports = router;
