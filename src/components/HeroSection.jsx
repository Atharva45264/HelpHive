import React from 'react';
import { useNavigate } from "react-router-dom";


function HeroSection() {

  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Connecting People, Solving Problems
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Post your query and let the hive help you out!
        </p>
        <button onClick={() => navigate("/dashboard")}
         className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

