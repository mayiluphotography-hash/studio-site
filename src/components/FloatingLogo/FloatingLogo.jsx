import React, { useState, useEffect, useRef } from 'react';
import './FloatingLogo.css';

const FloatingLogo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const chatBoxRef = useRef(null);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        // Check if click is not on the floating logo
        const floatingLogo = event.target.closest('.floating-logo');
        if (!floatingLogo) {
          setIsChatOpen(false);
        }
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen]);

  // Optional: Hide logo on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    // Uncomment if you want the hide/show on scroll behavior
    // window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const phoneNumber = '918870645930'; // Replace with your WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsChatOpen(false);
    }
  };

  const handleQuickReply = (quickMessage) => {
    const phoneNumber = '918870645930'; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(quickMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsChatOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* WhatsApp Chat Box */}
      <div 
        ref={chatBoxRef}
        className={`whatsapp-chat-box ${isChatOpen ? 'open' : ''}`}
      >
        <div className="whatsapp-header">
          <div className="whatsapp-avatar">
            <span>M</span>
          </div>
          <div className="whatsapp-info">
            <h3>Mayilu Photography</h3>
            <p>Typically replies instantly</p>
          </div>
          <button 
            className="close-chat"
            onClick={() => setIsChatOpen(false)}
          >
            ×
          </button>
        </div>
        
        <div className="whatsapp-body">
          <div className="welcome-message">
            <p>Hello! 👋</p>
            <p>I'm here to help with your photography needs. Send me a message and I'll get back to you as soon as possible!</p>
          </div>
          
          <div className="quick-replies">
            <button 
              className="quick-reply"
              onClick={() => handleQuickReply("Hi! I'm interested in booking a photoshoot. Can you tell me more about your packages?")}
            >
              📸 Book Photoshoot
            </button>
            <button 
              className="quick-reply"
              onClick={() => handleQuickReply("Hello! I'd like to know your pricing for wedding photography.")}
            >
              💒 Wedding Pricing
            </button>
            <button 
              className="quick-reply"
              onClick={() => handleQuickReply("Hi! Can I see your portfolio and check your availability?")}
            >
              📅 Check Availability
            </button>
          </div>
        </div>
        
        <div className="whatsapp-actions">
          <input
            type="text"
            className="whatsapp-input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="send-button"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            ➤
          </button>
        </div>
      </div>

      {/* Floating Logo */}
      <div
        className={`floating-logo ${isVisible ? 'visible' : 'hidden'} ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleLogoClick}
      >
        <div className="floating-logo-inner">
          <img
            src="/images/mayil.png"
            alt="Mayilu Photography"
            className="floating-logo-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if image doesn't load */}
          <div className="floating-logo-fallback">
            <span>M</span>
          </div>

          {/* Pulse animation ring */}
          <div className="pulse-ring"></div>

          {/* Hover tooltip */}
          <div className="floating-tooltip">
            {isChatOpen ? 'Close Chat' : 'Chat with Us'}
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingLogo;