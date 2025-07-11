const express = require('express');
const { getAllUsers } = require('../controllers/adminController');
const { adminAuth } = require('../middleware/auth');
const router = express.Router();

router.get('/users', adminAuth, getAllUsers);

module.exports = router;