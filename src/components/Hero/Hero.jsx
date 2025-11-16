import React, { useRef, useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // Key to reset progress animation

  const videos = [
    { src: '/videos/hero-wedding-1.mp4', title: 'Capturing Pure Love' },
    { src: '/videos/hero-wedding-2.mp4', title: 'Candid Wedding Moments' },
    { src: '/videos/hero-wedding-3.mp4', title: 'Cherished Memories Forever' },
    { src: '/videos/hero-wedding-4.mp4', title: 'Timeless Candid Stories' },
    { src: '/videos/hero-wedding-5.mp4', title: 'A Journey of Two Souls' }
  ];


  // Handle video load
  const handleVideoLoad = (index) => {
    setLoadedVideos(prev => [...prev, index]);
  };

  // Handle video error
  const handleVideoError = (index) => {
    console.log(`Video ${index} failed to load`);
    if (index === 0) {
      setShowFallback(true);
    }
  };

  // Auto-rotate videos every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (loadedVideos.length > 0) {
        setIsTransitioning(true);

        setTimeout(() => {
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
          setIsTransitioning(false);
          // Reset progress animation key when changing videos
          setProgressKey(prev => prev + 1);
        }, 800);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [videos.length, loadedVideos]);

  // Pause all videos except current
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex && loadedVideos.includes(index)) {
          video.play().catch(error => {
            console.log('Video play failed:', error);
          });
        } else {
          video.pause();
          video.currentTime = 0; // Reset other videos to start
        }
      }
    });
  }, [currentVideoIndex, loadedVideos]);

  // Show fallback if no videos load within 5 seconds
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (loadedVideos.length === 0) {
        setShowFallback(true);
      }
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [loadedVideos]);

  // Manual navigation
  const goToVideo = (index) => {
    if (index === currentVideoIndex || !loadedVideos.includes(index)) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex(index);
      setIsTransitioning(false);
      // Reset progress animation when manually navigating
      setProgressKey(prev => prev + 1);
    }, 500);
  };

  const hasLoadedVideos = loadedVideos.length > 0;
  const showLoading = !hasLoadedVideos && !showFallback;

  return (
    <section className="hero-section">
      {/* Video Background Slider */}
      <div className={`video-background ${hasLoadedVideos ? 'loaded' : ''}`}>
        {videos.map((video, index) => (
          <video
            key={index}
            ref={el => videoRefs.current[index] = el}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => handleVideoLoad(index)}
            onError={() => handleVideoError(index)}
            className={`background-video ${index === currentVideoIndex && hasLoadedVideos ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}

        {/* Loading State */}
        {showLoading && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
            <p>Loading beautiful moments...</p>
          </div>
        )}

        {/* Fallback background image */}
        <div
          className="fallback-background"
          style={{ opacity: (showFallback || !hasLoadedVideos) ? 1 : 0 }}
        ></div>

        {/* Video overlay for better text readability */}
        <div className="video-overlay"></div>

        {/* Video Progress Indicator - Only show if videos are loaded */}
        {hasLoadedVideos && (
          <>
            <div className="video-progress">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`progress-bar ${index === currentVideoIndex ? 'active' : ''} ${index < currentVideoIndex ? 'completed' : ''} ${!loadedVideos.includes(index) ? 'disabled' : ''}`}
                  onClick={() => loadedVideos.includes(index) && goToVideo(index)}
                >
                  <div
                    className="progress-fill"
                    key={progressKey} // This key resets the animation
                    style={{
                      animationPlayState: index === currentVideoIndex ? 'running' : 'paused',
                      animationDelay: index === currentVideoIndex ? '0s' : 'inherit'
                    }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Video Navigation Dots */}
            <div className="video-dots">
              {videos.map((video, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentVideoIndex ? 'active' : ''} ${!loadedVideos.includes(index) ? 'disabled' : ''}`}
                  onClick={() => loadedVideos.includes(index) && goToVideo(index)}
                  disabled={!loadedVideos.includes(index)}
                  aria-label={`Show ${video.title} video`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* <div className="hero-content">
        <div className="hero-text">
          <h2>Capturing Your Love Story</h2>
          <h1>WEDDING PHOTOGRAPHY</h1>
          <p>Beautiful, timeless photography for your special day</p>
          <div className="hero-buttons">
            <button 
              className="btn-primary" 
              onClick={() => setActiveSection('portfolio')}
            >
              View Portfolio
            </button>
            <button 
              className="btn-secondary"
              onClick={() => setActiveSection('contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div> */}
    </section>
  );
};

export default Hero;