const express = require('express');
const {
  createProject,
  getUserProjects,
  getProjectsByUsername,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createProject);
router.get('/', auth, getUserProjects);
router.get('/user/:username', getProjectsByUsername);
router.put('/:id', auth, updateProject);
router.delete('/:id', auth, deleteProject);

module.exports = router;