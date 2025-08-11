// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import FeaturesSection from './components/FeaturesSection';
import Dashboard from './components/DashBoard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <HowItWorks />
            <FeaturesSection />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
