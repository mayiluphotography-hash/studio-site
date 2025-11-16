import React, { useState, useEffect } from 'react';
import './ClientGalleryFeed.css';

const ClientGalleryFeed = ({ client, onClose, onImageClick }) => {
    const [loadedImages, setLoadedImages] = useState([]);
    const [imageLoadStatus, setImageLoadStatus] = useState({});

    useEffect(() => {
        setLoadedImages(client.images);
        // Initialize load status for all images
        const initialStatus = {};
        client.images.forEach((_, index) => {
            initialStatus[index] = false;
        });
        setImageLoadStatus(initialStatus);
    }, [client.images]);

    const handleImageLoad = (index) => {
        setImageLoadStatus(prev => ({
            ...prev,
            [index]: true
        }));
    };

    const handleImageError = (index) => {
        setImageLoadStatus(prev => ({
            ...prev,
            [index]: true
        }));
    };

    return (
        <div className="client-gallery-feed">
            {/* Animated Background */}
            <div className="feed-background">
                <div className="feed-floating-shape feed-shape-1"></div>
                <div className="feed-floating-shape feed-shape-2"></div>
                <div className="feed-floating-shape feed-shape-3"></div>
            </div>

            {/* Header */}
            <div className="feed-header">
                <button className="back-btn" onClick={onClose}>
                    ← Back to Gallery
                </button>
                <div className="client-info">
                    <h1>{client.name}</h1>
                    <div className="client-details">
                        <span>{client.category}</span>
                        <span>•</span>
                        <span>{client.location}</span>
                        <span>•</span>
                        <span>{client.date}</span>
                    </div>
                </div>
                <div className="image-count">
                    {client.images.length} Photos
                </div>
            </div>

            {/* Instagram-like Feed Grid */}
            <div className="feed-grid">
                {loadedImages.map((image, index) => (
                    <div
                        key={index}
                        className={`feed-item ${!imageLoadStatus[index] ? 'loading' : ''}`}
                        onClick={() => onImageClick(index)}
                    >
                        <img
                            src={image}
                            alt={`${client.name} - ${index + 1}`}
                            loading="lazy"
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                        />
                        <div className="image-number">{index + 1}</div>
                    </div>
                ))}
            </div>

            {/* Decoration Line */}
            <div className="feed-decoration">
                <div className="feed-decoration-line"></div>
                <div className="feed-decoration-dot"></div>
                <div className="feed-decoration-line"></div>
            </div>

            {/* Testimonial Section */}
            <div className="feed-testimonial">
                <div className="quote-icon">"</div>
                <p>{client.testimonial}</p>
                <div className="client-signature">- {client.name}</div>
            </div>

            {/* Scroll to Top Button */}
            <button
                className="scroll-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                ↑
            </button>
        </div>
    );
};

export default ClientGalleryFeed;