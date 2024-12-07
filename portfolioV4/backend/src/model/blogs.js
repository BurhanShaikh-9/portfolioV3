const mongoose = require("mongoose")
const blogSchema = new mongoose.Schema({
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    ogTitle: { type: String, required: true },
    ogDescription: { type: String, required: true },
    ogImage: { type: String, required: true },
    ogUrl: { type: String, required: true },
    slug: { type: String, required: true },
    featuredImage: { type: String, required: true },
    featuredImageAltTxt: { type: String, required: true },
    focusKeyword: { type: String, required: true },
    tags: { type: String, required: true },
    categories: { type: String, required: true },
    Heading1: { type: String, required: true },
    Heading2: { type: String, required: true },
    Heading3: { type: String, required: true },
    author: { type: String, default: 'Anonymous' },
    createdAt: { type: Date, default: Date.now },
  });
  
  // Blog Model
  module.exports = mongoose.model('Blog', blogSchema);