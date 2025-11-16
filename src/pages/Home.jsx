import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
// import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import Memories from '../components/Memories/Memories';
import SectionDivider from '../components/SectionDivider/SectionDivider';
import { useScrollToTop } from '../components/hooks/useScrollToTop';

const Home = ({ setActiveSection }) => {
  useScrollToTop();
  return (
    <>
      <Hero setActiveSection={setActiveSection} />
      <SectionDivider type="floral" color="#087526" flip={false} />

      <Features />
      <div className="header-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dot"></div>
        <div className="decoration-line"></div>
      </div>
      <Testimonials />
      <div className="header-decoration">
        <div className="decoration-line"></div>
        <div className="decoration-dot"></div>
        <div className="decoration-line"></div>
      </div>
      <Memories />
      {/* <Portfolio /> */}
      {/* You can add more sections here later */}
    </>
  );
};

export default Home;