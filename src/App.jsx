import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Gallery from './components/Gallery/Gallery';
import FloatingLogo from './components/FloatingLogo/FloatingLogo';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Packages from './components/Packages/Packages';
import './App.css';
import SectionDivider from './components/SectionDivider/SectionDivider';
import ClientsGallery from './components/ClientsGallery/ClientsGallery';
import About from './components/About/About';
import Process from './components/Process/Process';
import FAQ from './components/FAQ/FAQ';

// This wrapper component will handle the active section state
function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [showFloatingLogo, setShowFloatingLogo] = useState(true);
  const location = useLocation();

  // Update active section and floating logo visibility based on route
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setActiveSection('home');
        setShowFloatingLogo(true);
        break;
      case '/memories':
        setActiveSection('memories');
        setShowFloatingLogo(true);
        break;
      case '/packages':
        setActiveSection('packages');
        setShowFloatingLogo(true);
        break;
      case '/about':
        setActiveSection('about');
        setShowFloatingLogo(true);
        break;
      case '/process':
        setActiveSection('process');
        setShowFloatingLogo(true);
        break;
      case '/faq':
        setActiveSection('faq');
        setShowFloatingLogo(true);
        break;
      case '/contact':
        setActiveSection('contact');
        setShowFloatingLogo(true);
        break;
      default:
        setActiveSection('home');
        setShowFloatingLogo(true);
    }
  }, [location]);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="App">
      {/* Door Opening Intro Animation */}
      {showIntro && <Intro onIntroComplete={handleIntroComplete} />}

      {/* Main Website Content */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Routes>
          <Route path="/" element={<Home setActiveSection={setActiveSection} />} />
          <Route path="/memories" element={<ClientsGallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Fallback to home for unknown routes */}
          <Route path="*" element={<Home setActiveSection={setActiveSection} />} />
        </Routes>
      </main>

      <SectionDivider type="floral" color="#087526" flip={true} />
      <Footer />
      
      {/* Show floating logo only if not on contact page */}
      {showFloatingLogo && <FloatingLogo />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;