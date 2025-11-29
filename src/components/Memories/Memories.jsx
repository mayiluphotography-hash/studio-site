import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Memories.css';

const Memories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMemory, setActiveMemory] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const memories = [
    {
      id: 1,
      title: "Whispers of Forever",
      subtitle: "Timeless Love Stories",
      image:
        "/images/home-img/1.JPG",
      description:
        "Where moments become memories and love stories are written in light. Each frame captures the unspoken promises, the stolen glances, and the beautiful chaos of your special day.",
      highlights: ["Emotional Storytelling", "Candid Moments", "Artistic Composition", "Timeless Elegance"],
      stats: "500+ Love Stories Captured",
      color: "#8B4513",
    },
    {
      id: 2,
      title: "Echoes of Joy",
      subtitle: "Celebrations & Milestones",
      image:
        "/images/home-img/2.JPG",
      description:
        "Life's most precious celebrations frozen in time. From the first cry to golden anniversaries, we preserve the laughter, tears, and joy that make your journey unforgettable.",
      highlights: ["Authentic Emotions", "Dynamic Coverage", "Creative Storytelling", "Family Legacy"],
      stats: "300+ Family Milestones",
      color: "#2E8B57",
    },
    {
      id: 3,
      title: "Dreams Unveiled",
      subtitle: "Creative Portraits",
      image:
        "/images/home-img/3.JPG",
      description:
        "Unleashing the artistry within every soul. Transformative portrait sessions that reveal the unique beauty and personality shining through each individual story.",
      highlights: ["Artistic Vision", "Personalized Concepts", "Professional Lighting", "Magical Results"],
      stats: "1000+ Portrait Sessions",
      color: "#6A5ACD",
    },
  ];

  /* -------------------------------------------------------
      SECTION VISIBILITY FIX (Mobile Always Visible)
  ------------------------------------------------------- */
  useEffect(() => {
    // Mobile fix: always visible
    if (isMobile) {
      setIsVisible(true);
      return;
    }

    // Desktop only: IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -10%" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  /* AUTO ROTATE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemory((prev) => (prev + 1) % memories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [memories.length]);

  const handleExploreClick = (type) => {
    window.scrollTo(0, 0);
    navigate("/portfolio", { state: { filter: type } });
  };

  const handleBookSession = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  const handleGallery = () => {
    window.scrollTo(0, 0);
    navigate("/memories");
  };

  return (
    <section
      ref={sectionRef}
      className={`memories-section ${isVisible ? "visible" : ""}`}
      id="memories"
    >
      <div className="memories-container">
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element el-1"></div>
          <div className="floating-element el-2"></div>
          <div className="floating-element el-3"></div>
          <div className="floating-element el-4"></div>
        </div>

        {/* Header */}
        <div className="memories-header">
          <h2 className="memories-title">
            <span className="title-line-1">Eternal Moments,</span>
            <span className="title-line-2">Timeless Memories</span>
          </h2>
          <p className="memories-subtitle">
            Where every click tells a story, every frame holds emotion, and every memory becomes a treasure for generations to come.
          </p>
        </div>

        {/* Grid */}
        <div className="memories-grid">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`memory-card ${activeMemory === index ? "active" : ""
                } ${isVisible ? "animate-in" : ""}`}
              style={{ "--accent-color": memory.color }}
              onMouseEnter={() => setActiveMemory(index)}
            >
              {/* Image */}
              <div className="memory-image-container">
                <img src={memory.image} alt={memory.title} className="memory-image" />
                <div className="memory-overlay">
                  <div className="memory-stats">
                    <span>{memory.stats}</span>
                  </div>
                </div>
                <div className="memory-border"></div>
              </div>

              {/* Content */}
              <div className="memory-content">
                <div className="memory-tags">
                  <span className="memory-tag">{memory.subtitle}</span>
                </div>

                <h3 className="memory-content-title">{memory.title}</h3>
                <p className="memory-description">{memory.description}</p>

                <div className="memory-highlights">
                  {memory.highlights.map((h, i) => (
                    <span key={i} className="highlight-item">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="memory-actions">
                  <button className="btn-explore"
                    // onClick={() => handleExploreClick(memory.title)}
                    onClick={() => handleGallery()}
                  >
                    <span>Explore Gallery</span>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="memory-decoration"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="memories-cta">
          <div className="cta-content">
            <h3>Ready to Create Your Own Timeless Memories?</h3>
            <p>Let's craft a photography experience as unique as your story.</p>
            <button className="btn-cta-primary" onClick={handleBookSession}>
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
