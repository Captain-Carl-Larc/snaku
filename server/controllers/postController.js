import Post from '../models/Post.js'; // Import the Post model

// Controller function to create a new post
export const createPost = async (req, res) => {
  try {
    // Check if a post with the same title already exists
    const existingPost = await Post.findOne({ title: req.body.title });

    if (existingPost) {
      return res.status(400).json({ message: 'Post with this title already exists' }); // If post exists, send error
    }

    // If no post exists with the same title, create the new post
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost); // Send the created post back as the response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Send an error if something goes wrong
  }
};

// Controller function to get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts from the database
    res.status(200).json(posts); // Send the posts back as the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a specific post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Find post by ID
    if (!post) {
      return res.status(404).json({ message: 'Post not found' }); // If not found, send 404 error
    }
    res.status(200).json(post); // Send the post back as the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
