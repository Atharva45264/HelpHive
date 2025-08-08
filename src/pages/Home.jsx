// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Dashboard from '../components/DashBoard';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Dashboard />
      <Footer />
    </>
  );
}

export default Home;
