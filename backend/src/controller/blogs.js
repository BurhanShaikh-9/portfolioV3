const Blog = require("../model/blogs");
const cloudinary = require('../middleware/cloudinary');

// 1. Create a new blog with image upload
const createBlog = async (req, res) => {
  try {
    const image = req.file ? req.file.path : null; // Get Cloudinary image path
    const newBlog = new Blog({ ...req.body, featuredImage: image });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog', error });
  }
};

// 2. Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// 3. Get a blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

// 4. Update a blog with optional image upload
const updateBlog = async (req, res) => {
  try {
    const image = req.file ? req.file.path : undefined; // Get Cloudinary image path if uploaded
    const updatedData = { ...req.body };
    if (image) updatedData.featuredImage = image;

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error });
  }
};

// 5. Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error });
  }
};

module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
