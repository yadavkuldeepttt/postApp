const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
