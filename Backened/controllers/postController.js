// controllers/postController.js
const Post = require('../models/Post');
const path = require('path');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.filename : null;
    const post = new Post({ title, description, imageUrl });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? req.file.filename : undefined;

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.title = title || post.title;
    post.description = description || post.description;
    if (imageUrl) post.imageUrl = imageUrl;

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

// Delete a post by ID
// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};

