// /client/src/pages/Admin.jsx
import React, { useState } from 'react';
import { createPost } from '../services/postservices.js'; // Service for making the POST request

const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [published, setPublished] = useState(false);
  const [coverImage, setCoverImage] = useState('');
  const [authorIcon, setAuthorIcon] = useState('');
  const [reviewerIcon, setReviewerIcon] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      author,
      reviewer,
      published,
      coverImage,
      authorIcon,
      reviewerIcon,
    };

    try {
      const newPost = await createPost(postData); // Call the service to create the post
      setMessage(`Post created successfully: ${newPost.title}`);
      setTitle('');
      setContent('');
      setAuthor('');
      setReviewer('');
      setCoverImage('');
      setAuthorIcon('');
      setReviewerIcon('');
    } catch (error) {
      setMessage('Error creating post');
    }
  };

  return (
    <div>
      <h1>Admin Panel - Create a Post</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-semibold">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-semibold">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reviewer" className="block text-sm font-semibold">Reviewer</label>
          <input
            type="text"
            id="reviewer"
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="published" className="block text-sm font-semibold">Published</label>
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coverImage" className="block text-sm font-semibold">Cover Image URL</label>
          <input
            type="text"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="authorIcon" className="block text-sm font-semibold">Author Icon URL</label>
          <input
            type="text"
            id="authorIcon"
            value={authorIcon}
            onChange={(e) => setAuthorIcon(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reviewerIcon" className="block text-sm font-semibold">Reviewer Icon URL</label>
          <input
            type="text"
            id="reviewerIcon"
            value={reviewerIcon}
            onChange={(e) => setReviewerIcon(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-md">
          Create Post
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Admin;
