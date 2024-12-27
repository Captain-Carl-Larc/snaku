import mongoose from 'mongoose';
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
    //Validate the id
    const postID= req.params.id;
    if(!mongoose.Types.ObjectId.isValid(postID)) return res.status(404).send('No post with that id');

    //See if the post exists
    const post = await Post.findById(postID); // Find post by ID
    if (!post) {
      return res.status(404).json({ message: 'Post not found' }); // If not found, send 404 error
    }
    res.status(200).json(post); // Send the post back as the response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a post by ID
export const updatePost = async (req, res) => {
  try {
    //Validate the id
    const postID= req.params.id;
    if(!mongoose.Types.ObjectId.isValid(postID)){
      return res.status(404).json({message:`Invalid string id ${postID}`});
    } 

    //See if the post exists
    const post = await Post.findById(postID); // Find post by ID
    if (!post) {
      return res.status(404).json({ message: 'Post not found' }); // If not found, send 404 error
    }

    //Update the post if it exists
    const updatedPost = await Post.findByIdAndUpdate (postID, req.body, {new: true});
    res.status(200).json(updatedPost); // Send the updated post back as the response
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controller function to delete a post by ID

export const deletePost = async (req, res) => {
  try {
    //Validate the id
      const id  = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ message: `Invalid string id ${id}` });//if the id is not valid return 404
      }
      //validate existence of the post
      const post = await Post.findById(id);
      if (!post) {
          return res.status(404).json({ message: 'Post not found' });
      }
      //delete the post if it exists
      await Post.findByIdAndDelete({_id: id});
      res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};
      

// Controller function to delete all posts
export const deleteAllPosts = async (req, res) => {
  try {
    //Check if there are any posts
    const posts = await Post.find();
    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts to delete' });
    }

    //Delete all posts if they exist
    await Post.deleteMany({});
    res.status(200).json({ message: 'All posts deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


