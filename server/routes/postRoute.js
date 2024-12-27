
import express from 'express';
import { createPost, getAllPosts, getPostById,deletePost, updatePost,deleteAllPosts } from '../controllers/postController.js'; // Import controller functions

const router = express.Router();


// POST request to create a new post
router.post('/', createPost);

// GET request to get all posts
router.get('/', getAllPosts);

// GET request to get a specific post by ID
router.get('/:id', getPostById);

// DELETE request to delete a specific post by ID
router.delete('/:id', deletePost);

//delete all posts
router.delete('/', deleteAllPosts);

// PATCH request to update a specific post by ID
router.patch('/:id', updatePost);
  
// Export the router
export default router;
