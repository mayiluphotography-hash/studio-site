import React, { useState, useEffect } from 'react';
import './Intro.css';

const Intro = ({ onIntroComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';
    
    // Start opening animation after a brief delay
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    // Complete intro after animation
    const completeTimer = setTimeout(() => {
      setShowContent(false);
      // Restore scrolling when intro completes
      document.body.style.overflow = 'visible';
      onIntroComplete();
    }, 2500);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
      // Ensure scrolling is restored if component unmounts
      document.body.style.overflow = 'visible';
    };
  }, [onIntroComplete]);

  if (!showContent) return null;

  return (
    <div className={`intro-overlay ${isOpen ? 'open' : ''}`}>
      {/* Left Door */}
      <div className="intro-door left-door"></div>
      
      {/* Right Door */}
      <div className="intro-door right-door"></div>
      
      {/* Center Logo */}
      <div className="intro-logo">
        <img 
          src="/images/mayil.png" 
          alt="Mayilu Photography"
          className="intro-logo-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback text logo */}
        <div className="intro-logo-fallback">
          <span className="logo-text">Mayilu</span>
          <span className="logo-subtitle">Photography</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;