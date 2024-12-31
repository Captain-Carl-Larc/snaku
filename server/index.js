import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postRoute.js'; // Import the post routes
import executiveRoutes from './routes/executiveRoute.js'; // Import the executive routes



dotenv.config();
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());

app.use(cors());

// Use post routes
app.use('/api/posts', postRoutes);

//Executive routes
app.use('/api/executive', executiveRoutes);

const PORT = process.env.PORT || 5000;
console.log(PORT);

const mongoDbUrl= process.env.MONGODB_URI;
console.log(mongoDbUrl);

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB Connected...');
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit the application if the connection fails
    }
  };
  
  // Call the function to connect to the database
  connectDB();
  

  // Define a simple route
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
  

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
