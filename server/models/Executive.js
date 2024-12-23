import mongoose from 'mongoose';

// Define the schema for the executive
const executiveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  email: { type: String, required: true },
  class: { type: String, required: true },
  phoneNumber: { type: String },
  profilePicture: { type: String }, // URL to a profile picture if applicable
  joinedAt: { type: Date, default: Date.now },
});

// Create the model
const Executive = mongoose.model('Executive', executiveSchema);

export default Executive;
