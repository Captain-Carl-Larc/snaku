import mongoose from 'mongoose';

// Define the schema for the post
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // Category of the post
  author: { type: String, required: true }, // Author of the post
  reviewer: { type: String, required: true }, // Reviewer of the post
  published: { type: Boolean, default: false }, // Is the post published?
  createdAt: { type: Date, default: Date.now }, // Automatically set to current date/time
  coverImage: { type: String }, // URL for the cover image
  authorIcon: { type: String }, // URL for the author's small round image
  reviewerIcon: { type: String }, // URL for the reviewer's small round image
});

// Create the model
const Post = mongoose.model('Post', postSchema);

export default Post;
