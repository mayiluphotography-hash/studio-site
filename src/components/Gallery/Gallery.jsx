import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('weddings');
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data - replace with your actual images
  const galleryData = {
    weddings: [
      { id: 1, src: '/images/weddings/wedding-1.jpg', title: 'Sarah & John', description: 'Country Club Wedding' },
      { id: 2, src: '/images/weddings/wedding-2.jpg', title: 'Michelle & David', description: 'Beach Ceremony' },
      { id: 3, src: '/images/weddings/wedding-3.jpg', title: 'Jessica & Mike', description: 'Garden Wedding' },
      { id: 4, src: '/images/weddings/wedding-4.jpg', title: 'Amanda & Chris', description: 'Vineyard Wedding' },
      { id: 5, src: '/images/weddings/wedding-5.jpg', title: 'Emily & James', description: 'Urban Wedding' },
      { id: 6, src: '/images/weddings/wedding-6.jpg', title: 'Lauren & Robert', description: 'Traditional Church' }
    ],
    portraits: [
      { id: 1, src: '/images/portraits/portrait-1.jpg', title: 'Family Portrait', description: 'Golden Hour Session' },
      { id: 2, src: '/images/portraits/portrait-2.jpg', title: 'Maternity', description: 'Studio Session' },
      { id: 3, src: '/images/portraits/portrait-3.jpg', title: 'Engagement', description: 'Sunset Beach' },
      { id: 4, src: '/images/portraits/portrait-4.jpg', title: 'Newborn', description: 'Lifestyle Session' }
    ],
    events: [
      { id: 1, src: '/images/events/event-1.jpg', title: 'Corporate Gala', description: 'Annual Company Event' },
      { id: 2, src: '/images/events/event-2.jpg', title: 'Birthday Celebration', description: '50th Birthday Party' },
      { id: 3, src: '/images/events/event-3.jpg', title: 'Charity Event', description: 'Fundraising Gala' }
    ]
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Explore my work through different categories</p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeCategory === 'weddings' ? 'active' : ''}`}
            onClick={() => setActiveCategory('weddings')}
          >
            Weddings
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'portraits' ? 'active' : ''}`}
            onClick={() => setActiveCategory('portraits')}
          >
            Portraits
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'events' ? 'active' : ''}`}
            onClick={() => setActiveCategory('events')}
          >
            Events
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryData[activeCategory].map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.title}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=600&fit=crop';
                  }}
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;