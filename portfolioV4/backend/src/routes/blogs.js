const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blogs");
const upload = require('../middleware/multer');
const { authenticateToken } = require("../middleware/jwtToken");


const router = express.Router();

router.post('/blogs', authenticateToken,  upload.single('featuredImage'), createBlog);
router.get('/blogs', authenticateToken,  getAllBlogs);
router.get('/blogs/:id', authenticateToken,  getBlogById);
router.put('/blogs/:id', authenticateToken,  upload.single('featuredImage'), updateBlog);
router.delete('/blogs/:id', authenticateToken,  deleteBlog);

module.exports = router;
