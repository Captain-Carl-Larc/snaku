// /client/src/services/postService.js
// /client/src/services/postService.js
import axios from 'axios';

const createPost = async (postData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/posts', postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export { createPost };

