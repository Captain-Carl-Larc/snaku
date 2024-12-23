import mongoose from 'mongoose';

// Define the schema for an event
const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventPosterUrl: { type: String },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Create the model
const Event = mongoose.model('Event', eventSchema);

export default Event;
