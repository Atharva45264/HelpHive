// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Dashboard from '../components/DashBoard';

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Dashboard />
      <About />
      <Footer />
    </>
  );
}

export default Home;
