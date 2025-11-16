import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect for liquid background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section when route changes
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setActiveSection('home');
        break;
      case '/memories':
        setActiveSection('memories');
        break;
      case '/packages':
        setActiveSection('packages');
        break;
      case '/process':
        setActiveSection('process');
        break;
      case '/about':
        setActiveSection('about');
        break;
      case '/contact':
        setActiveSection('contact');
        break;
      default:
        setActiveSection('home');
    }
  }, [location, setActiveSection]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className={`professional-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={() => handleNavClick('home')} className="logo-link">
            <div className="logo-image">
              <img
                src="/images/mayil.png"
                alt="Mayilu Photography"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="logo-fallback">M</span>
            </div>
            <div className="logo-text">
              <span className="logo-main">Mayilu</span>
              <span className="logo-sub">Photography</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu desktop-nav">
          <Link
            to="/"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => handleNavClick('home')}
          >
            🏡 Home
          </Link>
          <Link
            to="/memories"
            className={activeSection === 'memories' ? 'active' : ''}
            onClick={() => handleNavClick('memories')}
          >
            📸 Our Gallery
          </Link>
          <Link
            to="/packages"
            className={activeSection === 'packages' ? 'active' : ''}
            onClick={() => handleNavClick('packages')}
          >
            💼 Packages
          </Link>
          <Link
            to="/process"
            className={activeSection === 'process' ? 'active' : ''}
            onClick={() => handleNavClick('process')}
          >
            🎯 Our Process
          </Link>
          <Link
            to="/about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            👨‍💼 About Us
          </Link>
          <Link
            to="/contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            📞 Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="nav-menu mobile-nav">
            <Link
              to="/"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              🏡 Home
            </Link>
            <Link
              to="/memories"
              className={activeSection === 'memories' ? 'active' : ''}
              onClick={() => handleNavClick('memories')}
            >
              📸 Our Gallery
            </Link>
            <Link
              to="/packages"
              className={activeSection === 'packages' ? 'active' : ''}
              onClick={() => handleNavClick('packages')}
            >
              💼 Packages
            </Link>
            <Link
              to="/process"
              className={activeSection === 'process' ? 'active' : ''}
              onClick={() => handleNavClick('process')}
            >
              🎯 Our Process
            </Link>
            <Link
              to="/about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              👨‍💼 About Us
            </Link>
            <Link
              to="/contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              📞 Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;