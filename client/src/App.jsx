// /client/src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';  // Import Layout here
import Home from './pages/home'; // Import the Home page
import About from './pages/about'; // Import the About page
import Events from './pages/events'; // Import the Events page
import Contact from './pages/contact'; // Import the Contact page
import Posts from './pages/posts';// Import the Posts page
import Executive from './pages/executive'; // Import the Executive page
import Admin from './pages/admin'; // Import the Admin page

const App = () => {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Executive" element={<Executive />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
