const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "name");
  res.json(posts);
});

// Create post
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, author: req.userId });
  await post.save();
  res.json(post);
});

module.exports = router;
