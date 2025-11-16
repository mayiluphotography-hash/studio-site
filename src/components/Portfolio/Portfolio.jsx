// import React, { useState, useEffect, useRef } from 'react';
// import './Portfolio.css';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [visibleImages, setVisibleImages] = useState(12);
//   const sectionRef = useRef(null);

//   // Enhanced portfolio data with your actual photography categories
//   const portfolioData = [
//     // Weddings
//     { id: 1, src: '/images/portfolio/wedding-1.jpg', category: 'wedding', title: 'Romantic Beach Wedding', location: 'Goa', featured: true },
//     { id: 2, src: '/images/portfolio/wedding-2.jpg', category: 'wedding', title: 'Traditional South Indian Wedding', location: 'Chennai' },
//     { id: 3, src: '/images/portfolio/wedding-3.jpg', category: 'wedding', title: 'Destination Wedding', location: 'Udaipur' },
//     { id: 4, src: '/images/portfolio/wedding-4.jpg', category: 'wedding', title: 'Intimate Garden Ceremony', location: 'Bangalore' },
    
//     // Portraits
//     { id: 5, src: '/images/portfolio/5.jpg', category: 'portrait', title: 'Classic Black & White Portrait', location: 'Studio', featured: true },
//     { id: 6, src: '/images/portfolio/6.jpg', category: 'portrait', title: 'Maternity Session', location: 'Outdoor' },
//     { id: 7, src: '/images/portfolio/7.jpg', category: 'portrait', title: 'Family Portrait', location: 'Home' },
//     { id: 8, src: '/images/portfolio/8.jpg', category: 'portrait', title: 'Professional Headshots', location: 'Studio' },
    
//     // Events
//     { id: 9, src: '/images/portfolio/9.jpg', category: 'event', title: 'Corporate Gala', location: 'Mumbai', featured: true },
//     { id: 10, src: '/images/portfolio/10.jpg', category: 'event', title: 'Birthday Celebration', location: 'Private Venue' },
//     { id: 11, src: '/images/portfolio/11.jpg', category: 'event', title: 'Engagement Party', location: 'Beach' },
//     { id: 12, src: '/images/portfolio/12.jpg', category: 'event', title: 'Charity Event', location: 'Hotel' },
    
//     // Commercial
//     { id: 13, src: '/images/portfolio/13.jpg', category: 'commercial', title: 'Fashion Campaign', location: 'Studio', featured: true },
//     { id: 14, src: '/images/portfolio/14.jpg', category: 'commercial', title: 'Product Photography', location: 'Studio' },
//     { id: 15, src: '/images/portfolio/15.jpg', category: 'commercial', title: 'Brand Story', location: 'Urban' },
//     { id: 16, src: '/images/portfolio/16.jpg', category: 'commercial', title: 'Architecture', location: 'Chennai' },
    
//     // Additional images for masonry effect
//     { id: 17, src: '/images/portfolio/17.jpg', category: 'wedding', title: 'Sunset Couple Session', location: 'Kerala' },
//     { id: 18, src: '/images/portfolio/18.jpg', category: 'portrait', title: 'Newborn Photography', location: 'Home' },
//     { id: 19, src: '/images/portfolio/19.jpg', category: 'event', title: 'Wedding Reception', location: 'Palace' },
//     { id: 20, src: '/images/portfolio/20.jpg', category: 'commercial', title: 'Jewelry Shoot', location: 'Studio' },
//   ];

//   const filters = [
//     { key: 'all', label: 'All Work' },
//     { key: 'wedding', label: 'Weddings' },
//     { key: 'portrait', label: 'Portraits' },
//     { key: 'event', label: 'Events' },
//     { key: 'commercial', label: 'Commercial' }
//   ];

//   const filteredImages = portfolioData.filter(image => 
//     activeFilter === 'all' || image.category === activeFilter
//   ).slice(0, visibleImages);

//   const featuredImages = portfolioData.filter(image => image.featured);

//   const openLightbox = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   const navigateImage = (direction) => {
//     if (!selectedImage) return;
    
//     const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
//     let newIndex;
    
//     if (direction === 'next') {
//       newIndex = (currentIndex + 1) % filteredImages.length;
//     } else {
//       newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
//     }
    
//     setSelectedImage(filteredImages[newIndex]);
//   };

//   const loadMore = () => {
//     setVisibleImages(prev => prev + 8);
//   };

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (!selectedImage) return;
      
//       if (e.key === 'Escape') closeLightbox();
//       if (e.key === 'ArrowRight') navigateImage('next');
//       if (e.key === 'ArrowLeft') navigateImage('prev');
//     };

//     document.addEventListener('keydown', handleKeyPress);
//     return () => document.removeEventListener('keydown', handleKeyPress);
//   }, [selectedImage]);

//   return (
//     <section ref={sectionRef} className="portfolio-section">
//       <div className="container">
//         {/* Portfolio Header */}
//         <div className="portfolio-header">
//           <h2>Portfolio</h2>
//           <p>Explore my journey through the lens - capturing emotions, stories, and timeless moments</p>
//         </div>

//         {/* Featured Images Grid - Showcase your best work */}
//         <div className="featured-grid">
//           {featuredImages.slice(0, 3).map((image, index) => (
//             <div 
//               key={image.id}
//               className={`featured-item featured-${index + 1}`}
//               onClick={() => openLightbox(image)}
//             >
//               <div className="image-container">
//                 <img 
//                   src={image.src} 
//                   alt={image.title}
//                   loading="lazy"
//                 />
//                 <div className="image-overlay">
//                   <div className="image-info">
//                     <h3>{image.title}</h3>
//                     <p>{image.location}</p>
//                     <span className="category-tag">{image.category}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Filter Buttons */}
//         <div className="portfolio-filters">
//           {filters.map(filter => (
//             <button
//               key={filter.key}
//               className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
//               onClick={() => {
//                 setActiveFilter(filter.key);
//                 setVisibleImages(12);
//               }}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </div>

//         {/* Masonry Grid Portfolio */}
//         <div className="portfolio-grid">
//           {filteredImages.map((image, index) => (
//             <div
//               key={image.id}
//               className={`portfolio-item ${image.category} ${isLoading ? 'loading' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onClick={() => openLightbox(image)}
//             >
//               <div className="image-wrapper">
//                 <img 
//                   src={image.src} 
//                   alt={image.title}
//                   loading="lazy"
//                 />
//                 <div className="portfolio-overlay">
//                   <div className="portfolio-info">
//                     <h4>{image.title}</h4>
//                     <p>{image.location}</p>
//                     <span className="portfolio-category">{image.category}</span>
//                   </div>
//                   <div className="zoom-icon">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                       <path d="M15 15L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
//                       <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="white" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         {visibleImages < portfolioData.length && (
//           <div className="load-more-container">
//             <button className="load-more-btn" onClick={loadMore}>
//               Load More
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                 <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="lightbox" onClick={closeLightbox}>
//           <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="lightbox-close" onClick={closeLightbox}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </button>
            
//             <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage('prev')}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </button>
            
//             <button className="lightbox-nav lightbox-next" onClick={() => navigateImage('next')}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//             </button>

//             <div className="lightbox-image-container">
//               <img src={selectedImage.src} alt={selectedImage.title} />
//             </div>
            
//             <div className="lightbox-info">
//               <h3>{selectedImage.title}</h3>
//               <p>{selectedImage.location}</p>
//               <span className="lightbox-category">{selectedImage.category}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Portfolio;