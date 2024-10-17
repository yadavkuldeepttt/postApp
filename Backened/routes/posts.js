// routes/postRoutes.js
const express = require('express');
const multer = require('multer');
const postController = require('../controllers/postController');

const router = express.Router();

// Set up Multer for image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Routes for CRUD operations
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.post('/', upload.single('image'), postController.createPost);
router.put('/:id', upload.single('image'), postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
