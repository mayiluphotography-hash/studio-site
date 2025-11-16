import React, { useState } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import ClientGalleryFeed from './ClientGalleryFeed';
import ImagePopup from './ImagePopup';
import './ClientsGallery.css';

const ClientsGallery = () => {
    useScrollToTop();
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid', 'feed', 'popup'

    // Sample client data - replace with your actual clients
    const clients = [
        {
            id: 1,
            name: "Diwakar & Prakathi",
            category: "Wedding",
            location: "Pulliampatti",
            date: "2025",
            coverImage: "/images/gal-diwakar-prakathi/19.jpg",
            images: [
                "/images/gal-diwakar-prakathi/1.jpg",
                "/images/gal-diwakar-prakathi/2.jpg",
                "/images/gal-diwakar-prakathi/3.jpg",
                "/images/gal-diwakar-prakathi/4.jpg",
                "/images/gal-diwakar-prakathi/5.jpg",
                "/images/gal-diwakar-prakathi/6.jpg",
                "/images/gal-diwakar-prakathi/7.jpg",
                "/images/gal-diwakar-prakathi/8.jpg",
                "/images/gal-diwakar-prakathi/9.jpg",
                "/images/gal-diwakar-prakathi/10.jpg",
                "/images/gal-diwakar-prakathi/11.jpg",
                "/images/gal-diwakar-prakathi/12.jpg",
                "/images/gal-diwakar-prakathi/13.jpg",
                "/images/gal-diwakar-prakathi/14.jpg",
                "/images/gal-diwakar-prakathi/15.jpg",
                "/images/gal-diwakar-prakathi/16.jpg",
                "/images/gal-diwakar-prakathi/17.jpg",
                "/images/gal-diwakar-prakathi/18.jpg",
                "/images/gal-diwakar-prakathi/19.jpg",
                "/images/gal-diwakar-prakathi/20.jpg",
            ],
            testimonial: "Absolutely stunning photos that captured every special moment of our wedding day!"
        },
        {
            id: 2,
            name: "Rahul Family",
            category: "Family Portrait",
            location: "Chennai",
            date: "2024",
            coverImage: "/api/placeholder/400/300",
            images: [
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600"
            ],
            testimonial: "The family photos turned out better than we could have ever imagined!"
        },
        {
            id: 3,
            name: "Sneha Maternity",
            category: "Maternity",
            location: "Bangalore",
            date: "2023",
            coverImage: "/api/placeholder/400/300",
            images: [
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600"
            ],
            testimonial: "Such beautiful and emotional photos that we'll cherish forever."
        },
        {
            id: 4,
            name: "Karthik Corporate",
            category: "Corporate",
            location: "Hyderabad",
            date: "2023",
            coverImage: "/api/placeholder/400/300",
            images: [
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600"
            ],
            testimonial: "Professional and creative corporate photos that perfectly represent our brand."
        },
        {
            id: 5,
            name: "Meera & Sriram",
            category: "Engagement",
            location: "Madurai",
            date: "2024",
            coverImage: "/api/placeholder/400/300",
            images: [
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600"
            ],
            testimonial: "The engagement shoot was so much fun and the photos are magical!"
        },
        {
            id: 6,
            name: "Baby Krishna",
            category: "Newborn",
            location: "Trichy",
            date: "2023",
            coverImage: "/api/placeholder/400/300",
            images: [
                "/api/placeholder/800/600",
                "/api/placeholder/800/600",
                "/api/placeholder/800/600"
            ],
            testimonial: "Incredibly patient and talented with our newborn. Photos are priceless!"
        }
    ];

    const openClientFeed = (client) => {
        setSelectedClient(client);
        setViewMode('feed');
    };

    const openImagePopup = (imageIndex) => {
        setSelectedImageIndex(imageIndex);
        setViewMode('popup');
    };

    const closeImagePopup = () => {
        setViewMode('feed');
        setSelectedImageIndex(null);
    };

    const closeClientFeed = () => {
        setViewMode('grid');
        setSelectedClient(null);
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        setSelectedImageIndex(prev =>
            prev === selectedClient.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setSelectedImageIndex(prev =>
            prev === 0 ? selectedClient.images.length - 1 : prev - 1
        );
    };

    // Render based on view mode
    if (viewMode === 'feed' && selectedClient) {
        return (
            <ClientGalleryFeed
                client={selectedClient}
                onClose={closeClientFeed}
                onImageClick={openImagePopup}
            />
        );
    }

    return (
        <div className="clients-gallery-page">
            {/* Animated Background Elements */}
            <div className="gallery-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className="container">
                {/* Header */}
                <div className="gallery-header">
                    <h1>Client Stories</h1>
                    <p>Explore the beautiful moments we've captured for our wonderful clients</p>
                    <div className="header-decoration">
                        <div className="decoration-line"></div>
                        <div className="decoration-dot"></div>
                        <div className="decoration-line"></div>
                    </div>
                </div>

                {/* Clients Grid */}
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div
                            key={client.id}
                            className="client-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openClientFeed(client)}
                        >
                            <div className="card-inner">
                                <div className="card-image">
                                    <img src={client.coverImage} alt={client.name} />
                                    <div className="card-overlay">
                                        <div className="view-gallery">
                                            <span>View Gallery</span>
                                            <div className="arrow-icon">→</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{client.name}</h3>
                                    <div className="client-meta">
                                        <span className="category">{client.category}</span>
                                        <span className="location">{client.location}</span>
                                        <span className="date">{client.date}</span>
                                    </div>
                                    <div className="image-count">
                                        {client.images.length} Photos
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Popup */}
            {viewMode === 'popup' && selectedClient && selectedImageIndex !== null && (
                <ImagePopup
                    image={selectedClient.images[selectedImageIndex]}
                    client={selectedClient}
                    imageIndex={selectedImageIndex}
                    totalImages={selectedClient.images.length}
                    onClose={closeImagePopup}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </div>
    );
};

export default ClientsGallery;