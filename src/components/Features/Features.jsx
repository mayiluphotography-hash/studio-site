import React, { useState, useEffect, useRef } from 'react';
import Stats from './Stats';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: '💍',
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our artistic wedding photography services.',
      highlights: ['Full Day Coverage', 'Pre-Wedding Shoot', 'Album Design', 'Digital Gallery']
    },
    {
      id: 2,
      icon: '👨‍👩‍👧‍👦',
      title: 'Portrait Sessions',
      description: 'Beautifully crafted portrait sessions that reflect your personality and tell your unique story.',
      highlights: ['Studio & Outdoor', 'Multiple Outfits', 'Professional Editing', 'Print Options']
    },
    {
      id: 3,
      icon: '🎉',
      title: 'Event Photography',
      description: 'Document your special events with creativity and precision, preserving memories forever.',
      highlights: ['Corporate Events', 'Birthdays', 'Engagements', 'Candid Coverage']
    },
    {
      id: 4,
      icon: '🌟',
      title: 'Commercial Photography',
      description: 'Professional photography for businesses, brands, and commercial projects.',
      highlights: ['Product Shoots', 'Brand Campaigns', 'Professional Editing', 'Fast Delivery']
    },
    {
      id: 5,
      icon: '👶',
      title: 'Newborn & Maternity',
      description: 'Gentle and loving photography sessions to capture the beautiful journey of parenthood.',
      highlights: ['In-Home Sessions', 'Professional Props', 'Family Portraits', 'Safety First Approach']
    },
    {
      id: 6,
      icon: '🌄',
      title: 'Outdoor & Travel',
      description: 'Breathtaking landscape and travel photography in stunning natural locations.',
      highlights: ['Golden Hour Shoots', 'Scenic Locations', 'Adventure Sessions', 'Natural Lighting']
    }
  ];

  // Start auto-rotation
  const startAutoRotation = () => {
    stopAutoRotation();
    intervalRef.current = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
  };

  // Stop auto-rotation
  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // FIXED: Visibility handling (mobile + desktop)
  useEffect(() => {
    // 🔥 ALWAYS VISIBLE on mobile screens
    if (window.innerWidth < 768) {
      setIsVisible(true);
      startAutoRotation();
      return;
    }

    // Desktop: Use IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsSectionInView(isIntersecting);

        if (isIntersecting && !isVisible) {
          setIsVisible(true);
          startAutoRotation();
        } else if (!isIntersecting) {
          stopAutoRotation();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      stopAutoRotation();
    };
  }, [isVisible, features.length]);

  // Pause rotation on hover
  const handleMouseEnter = (index) => {
    setActiveFeature(index);
    stopAutoRotation();
  };

  const handleMouseLeave = () => {
    if (isSectionInView || window.innerWidth < 768) {
      startAutoRotation();
    }
  };

  return (
    <section ref={sectionRef} className={`features-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">

        <div className="features-header">
          <h2>Why Choose Mayilu Photography?</h2>
          <p>Professional photography services tailored to capture your most precious moments</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${activeFeature === index ? 'active' : ''} ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              <ul className="feature-highlights">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>

              <div className="feature-indicator"></div>
            </div>
          ))}
        </div>

        <Stats />
      </div>
    </section>
  );
};

export default Features;
