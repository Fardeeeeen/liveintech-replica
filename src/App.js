import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FeaturesSection2 from './components/FeatureSection2';
import AboutSection from './components/AboutSection';
import Tracks from './components/Tracks';
import Catalysts from './components/Catalysts';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './App.css';

const App = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000]);
  return (
      <div className="App">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <FeaturesSection2 />
        <Tracks />
        <Catalysts />
        <AboutSection />
        <ContactUs />
        <Footer />
      </div>
  );
}

export default App;