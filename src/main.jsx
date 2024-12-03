import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports
import './index.css';
import { NavBar } from './Components/Navbar';
import { HomePage } from './Components/HomePage';
import { AboutUs } from './Components/AboutUs'; // Import AboutUs component
import { Portfolio } from './Components/Portfolio';
import { Contact } from './Components/Contact';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/AboutUs" element={<AboutUs />} /> {/* About Us Page */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/portfolio" element={<Portfolio />} /> 
      </Routes>
    </Router>
  </StrictMode>
);


