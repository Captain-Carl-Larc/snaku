
import express from 'express';
import { createPost, getAllPosts, getPostById } from '../controllers/postController.js'; // Import controller functions

const router = express.Router();


// POST request to create a new post
router.post('/', createPost);

// GET request to get all posts
router.get('/', getAllPosts);

// GET request to get a specific post by ID
router.get('/:id', getPostById);


  
// Export the router
export default router;
