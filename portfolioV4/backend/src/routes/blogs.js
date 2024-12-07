const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blogs");
const upload = require('../middleware/multer');


const router = express.Router();

router.post('/blogs', upload.single('featuredImage'), createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', upload.single('featuredImage'), updateBlog);
router.delete('/blogs/:id', deleteBlog);

module.exports = router;
