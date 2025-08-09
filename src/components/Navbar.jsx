// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">HelpHive</h1>

      <div className="flex items-center space-x-4">
        <Link to="#howitworks" className="text-gray-700 hover:text-indigo-500">How It Works</Link>
        <Link to="#features" className="text-gray-700 hover:text-indigo-500">Features</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-500">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-500">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;



