// src/routes/AnimatedRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* Future pages like /about, /contact can be added here */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
