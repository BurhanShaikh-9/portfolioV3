const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blogs");

const router = express.Router();

router.post("/blogs", createBlog); // Create a blog
router.get("/blogs", getAllBlogs); // Get all blogs
router.get("/blogs/:id", getBlogById); // Get blog by ID
router.put("/blogs/:id", updateBlog); // Update blog by ID
router.delete("/blogs/:id", deleteBlog); // Delete blog by ID

module.exports = router;
