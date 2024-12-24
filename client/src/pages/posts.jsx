import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postservices'; // Import the service function

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB'); // Returns date in dd/mm/yyyy format
  };

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Use the service function to fetch posts
        console.log(data[0]);
        setPosts(data);
        
        setLoading(false);
      } catch (err) {
        setError('Error fetching posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className='text-4xl font-bold'>Posts</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-item">
            <h2 className='font-semibold'>{post.title}</h2>
            <h4 className='italic'>Author:  {post.author}</h4>
            <h4 className='italic'>Reviewer:  {post.author}</h4>
            <p>{post.content}</p>   
            <small>Created on: {formatDate(post.createdAt)}</small>         
          </div>
        ))}
      </div>
    </div>
  );
};


export default PostsPage;
