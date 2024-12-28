import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../services/postservices'; // Import the service function

// Function to format date and time
  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    
    // Format date as dd/mm/yyyy
    const formattedDate = date.toLocaleDateString('en-GB');
    
    // Format time as HH:mm:ss
    const formattedTime = date.toLocaleTimeString('en-GB');
    
    return `${formattedDate} ${formattedTime}`;
  };
  



  
  // Function to load more posts

  

// Component to display all posts
const PostsPage = () => {
  const [posts, setPosts] = useState([]);//state to store all posts
  const [loading, setLoading] = useState(true);//state to store loading status
  const [error, setError] = useState(null);//state to store error status
  

  
  
  //states for post categories
  const [careerPosts, setCareerPosts] = useState([]);//state to store career posts
  const [wellnessPosts, setWellnessPosts] = useState([]);//state to store wellness posts
  const [popularPosts, setPopularPosts] = useState([]);//state to store popular posts
  const [latestPosts, setLatestPosts] = useState([]);//state to store latest posts

  //state for posts to display
  const [endIndex, setEndIndex] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Use the service function to fetch posts
        console.log("data is",data);
        setPosts(data);//set the posts state to the fetched data
       
        //set the posts to their respective categories
        setCareerPosts(data.filter(post => post.category === 'career'));
        setWellnessPosts(data.filter(post => post.category === 'wellness'));
        setPopularPosts(data.filter(post => post.category === 'popular'));
        setLatestPosts(data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)));
        
        //set loading to false after fetching the posts
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

  const showMorePosts=()=>{
    setEndIndex((prevEndIndex)=>prevEndIndex+4)
  }
  const loadMorePosts = () => {
    //state to handle posts to display
    setEndIndex((prevEndIndex)=>prevEndIndex+2)
  console.log(endIndex);
  
};
  //reusable function to display posts
  function displayPosts(posts, category) {
    // Filter posts based on the selected category
    const filteredPosts = posts.filter(post => post.category === category);
    console.log("from inside render component",endIndex);
    
    // Slice the filtered posts based on the endIndex
    const postsToDisplay = filteredPosts.slice(0, endIndex);
    console.log("the legth is: ",postsToDisplay.length)
    // Update the endIndex

    
    // Return the mapped posts
  
   
  
    // Map over the filtered posts
    return filteredPosts.map((post) => (
     <div className='bg-yellow-600 '>   
        <div key={post._id} className="w-64 bg-red-600 post-item">
          <NavLink  to={`/post/${post.title}`}   >
          <img src="https://images.freeimages.com/images/large-previews/355/poppies-2-1334190.jpg?fmt=webp&w=500" className='px-0 w-80'
            />
            <h2 className='px-2 font-semibold'>{post.title}</h2>
            <h4 className='px-2 italic'>Author: {post.author}</h4>
            <h4 className='px-2 italic'>Reviewer: {post.reviewer}</h4>
            <p className='px-2'>{post.content}</p>
            <p className='px-2 font-bold'>Category: {post.category}</p>
            <p className='px-2'>Created on: {formatDateTime(post.createdAt)}</p> 
          </NavLink >  
        </div>
      </div>
    ));
  }

  return(
    <div className="all-posts">
      <div className="heading">
        <h1 className="text-4xl font-bold text-center text-green-600">
          All Posts
        </h1>
      </div>
      <div className="posts-categories-container">
        <div className="flex flex-col items-center mx-auto mb-6 popular-container">
          <h2 className='my-4 text-2xl font-bold'>Popular</h2>
          <div className="flex flex-wrap justify-center px-4 gap-x-4 gap-y-2 the-posts">
            {displayPosts(posts,"popular")}
          </div>
          <button onClick={loadMorePosts} className='flex items-center justify-center w-48 px-4 py-2 my-4 text-lg font-semibold bg-blue-700 rounded-lg'>
          View more
        </button>
          <button className='flex items-center justify-center w-48 px-4 py-2 my-4 text-lg font-semibold bg-blue-700 rounded-lg'>
          View less
        </button>

          
        </div>
        <div className="latest-container">
        <h2 className='text-2xl font-bold'>Career</h2>
          <div className="the-posts">
            {displayPosts(posts,"career")}
          </div>
        </div>
        <div className="my-6 wellness-container">
        <h2 className='text-2xl font-bold'>Wellness & Lifestyle</h2>
          <div className="the-posts">
            {displayPosts(posts,"wellness")}
          </div>
        </div>
        <div className="career-container">
          
        </div>
      </div>
    </div>
  )
};


export default PostsPage;
