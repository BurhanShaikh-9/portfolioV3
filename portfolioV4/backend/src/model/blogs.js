const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema({
    metaTitle: { type: String, required: false },
    metaDescription: { type: String, required: false },
    ogTitle: { type: String, required: false },
    ogDescription: { type: String, required: false },
    ogImage: { type: String, required: false },
    ogUrl: { type: String, required: false },
    slug: { type: String, required: false },
    featuredImage: { type: String, required: false },
    featuredImageAltTxt: { type: String, required: false },
    focusKeyword: { type: String, required: false },
    tags: { type: String, required: false },
    categories: { type: String, required: false },
    Heading1: { type: String, required: false },
    Heading2: { type: String, required: false },
    Heading3: { type: String, required: false },
    author: { type: String, default: 'Anonymous' },
    createdAt: { type: Date, default: Date.now },
  });
  
  // Blog Model
  module.exports = mongoose.model('Blog', blogSchema);