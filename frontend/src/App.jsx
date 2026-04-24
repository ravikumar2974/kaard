import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import TemplateGallery from './pages/TemplateGallery';
import Contact from './pages/Contact';
import WeddingMain from './weddingCards/WeddingMain';
import WeddingCardPage from './weddingCards/WeddingCardPage';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<TemplateGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/wedding/*' element={<WeddingMain />} />
        <Route path="/wedding/:cardSlug" element={<WeddingCardPage />} />
        <Route path="/wedding/:cardSlug/to/:guestName" element={<WeddingCardPage />} />
      </Routes>
    </div>
  );
}

export default App;