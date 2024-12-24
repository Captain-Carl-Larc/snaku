// /client/src/services/postService.js
// /client/src/services/postService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/posts';

const createPost = async (postData) => {
  try {
    const response = await axios.post(BASE_URL, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Function to fetch all posts
 const getPosts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
};



export { createPost,getPosts };

