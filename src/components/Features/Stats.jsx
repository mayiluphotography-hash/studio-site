import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Stats data with + symbol
  const statsData = [
    { target: 1500, label: 'Weddings Captured', suffix: '+' },
    { target: 1500, label: 'Happy Clients', suffix: '+' },
    { target: 8, label: 'Years Experience', suffix: '+' }
  ];

  // Intersection Observer for stats animation
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Small delay to ensure CSS animation starts first
          setTimeout(() => {
            animateStats();
          }, 300);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => statsObserver.disconnect();
  }, [hasAnimated]);

  // Animate stats counting with + symbol
  const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stats-number');

    statNumbers.forEach((statNumber, index) => {
      const target = parseInt(statNumber.getAttribute('data-target'));
      const suffix = statsData[index].suffix;
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
          // Add + symbol after animation completes
          statNumber.innerHTML = `${Math.floor(current)}<span class="stats-plus">${suffix}</span>`;
        } else {
          statNumber.textContent = Math.floor(current);
        }
      }, 16);
    });
  };

  return (
    <div ref={statsRef} className="stats-container">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`stats-item ${hasAnimated ? 'animated' : ''}`}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          <div
            className="stats-number"
            data-target={stat.target}
          >
            0
          </div>
          <div className="stats-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;