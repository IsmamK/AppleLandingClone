import React from 'react';
import { Element, Link } from 'react-scroll';
import Navbar from '../components/Navbar';
import HeroComponent from '../components/HeroComponent';
import SubHeroComponent from '../components/SubHeroComponent';
import Contents from '../components/Contents';
import Footer from '../components/Footer'; 

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <HeroComponent />
      </Element>
      <Element name="sub-hero">
        <SubHeroComponent />
      </Element>
      <Element name="contents">
        <Contents />
      </Element>
      <Footer />
      <Link to="hero" smooth={true} duration={500} className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Go to Top</Link>
    </div>
  );
}

export default Homepage;
