const express = require('express');
const {
  createBlog,
  getUserBlogs,
  getBlogsByUsername,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const { auth } = require('../middleware/auth');
const router = express.Router();
//argoCD test

router.post('/', auth, createBlog);
router.get('/', auth, getUserBlogs);
router.get('/user/:username', getBlogsByUsername);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

module.exports = router;
