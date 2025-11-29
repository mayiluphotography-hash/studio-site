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
            testimonial: "Mayilu captured every emotion of our wedding so beautifully. The photos tell our complete love story!"
        },
        {
            id: 2,
            name: "Saravanan & Sangavi",
            category: "Outdoor",
            location: "Kochi",
            date: "2022",
            coverImage: "/images/sarav-candit/1.jpg",
            images: [
                "/images/sarav-candit/1.jpg",
                "/images/sarav-candit/2.jpg",
                "/images/sarav-candit/3.jpg",
                "/images/sarav-candit/4.jpg",
                "/images/sarav-candit/5.jpg",
                "/images/sarav-candit/6.jpg",
                "/images/sarav-candit/7.jpg",
            ],
            testimonial: "Our outdoor photoshoot in Kochi was amazing! Mayilu made us feel so comfortable and the natural lighting photos are stunning."
        },
        {
            id: 3,
            name: "Vignesh & Dhivya",
            category: "Reception",
            location: "Avinashi",
            date: "2019",
            coverImage: "/images/vignesh/1.jpg",
            images: [
                "/images/vignesh/1.jpg",
                "/images/vignesh/2.jpg",
                "/images/vignesh/3.jpg",
                "/images/vignesh/4.jpg",
                "/images/vignesh/5.jpg",
                "/images/vignesh/6.jpg",
                "/images/vignesh/7.jpg",
            ],
            testimonial: "The reception photos perfectly captured the joy and celebration of our special night in Avinashi!"
        },
        {
            id: 4,
            name: "Pradeep & Naveena",
            category: "Outdoor",
            location: "Ooty",
            date: "2022",
            coverImage: "/images/pradeep/1.jpg",
            images: [
                "/images/pradeep/1.jpg",
                "/images/pradeep/2.jpg",
                "/images/pradeep/3.jpg",
                "/images/pradeep/4.jpg",
            ],
            testimonial: "Our Ooty photoshoot was magical! Mayilu found the most beautiful locations and made us look like we're in a fairytale."
        },
        {
            id: 5,
            name: "Hari & Sumitha",
            category: "Wedding",
            location: "Salem",
            date: "2025",
            coverImage: "/images/hari/1.JPG",
            images: [
                "/images/hari/1.JPG",
                "/images/hari/2.JPG",
                "/images/hari/3.JPG",
                "/images/hari/4.JPG",
                "/images/hari/5.JPG",
                "/images/hari/6.JPG",
                "/images/hari/7.JPG",
                "/images/hari/8.JPG",
                "/images/hari/9.JPG",
                "/images/hari/10.JPG",
                "/images/hari/11.JPG",
                "/images/hari/12.JPG",
            ],
            testimonial: "From the temple ceremonies to the reception, every moment was captured with such artistry and emotion."
        },
        {
            id: 6,
            name: "Jeedhan & Harini",
            category: "Wedding",
            location: "Coimbatore",
            date: "2024",
            coverImage: "/images/dr/4.jpg",
            images: [
                "/images/dr/1.jpg",
                "/images/dr/2.jpg",
                "/images/dr/3.jpg",
                "/images/dr/4.jpg",
                "/images/dr/5.jpg",
                "/images/dr/6.jpg",
                "/images/dr/7.jpg",
                "/images/dr/8.jpg",
                "/images/dr/9.jpg",
                "/images/dr/10.jpg",
                "/images/dr/11.jpg",
                "/images/dr/12.jpg",
                "/images/dr/13.jpg",
                "/images/dr/14.jpg",
                "/images/dr/15.jpg",
                "/images/dr/16.jpg",
                "/images/dr/17.jpg",
                "/images/dr/18.jpg",
                "/images/dr/19.jpg",
                "/images/dr/20.jpg",
                "/images/dr/21.jpg",
                "/images/dr/22.jpg",
                "/images/dr/23.jpg",
                "/images/dr/25.jpg",
                "/images/dr/26.jpg",
                "/images/dr/27.jpg",
                "/images/dr/28.jpg",
                "/images/dr/29.jpg",
                "/images/dr/30.jpg",
                "/images/dr/31.jpg",
                "/images/dr/32.jpg",
            ],
            testimonial: "Our Coimbatore wedding was documented so perfectly! Mayilu captured both the grand celebrations and intimate moments beautifully."
        },
        {
            id: 7,
            name: "Jeedhan & Harini",
            category: "Outdoor",
            location: "Gobichettipalayam",
            date: "2025",
            coverImage: "/images/outdoor/13.jpg",
            images: [
                "/images/outdoor/1.jpg",
                "/images/outdoor/2.jpg",
                "/images/outdoor/3.jpg",
                "/images/outdoor/4.jpg",
                "/images/outdoor/5.jpg",
                "/images/outdoor/6.jpg",
                "/images/outdoor/7.jpg",
                "/images/outdoor/8.jpg",
                "/images/outdoor/9.jpg",
                "/images/outdoor/10.jpg",
                "/images/outdoor/11.jpg",
                "/images/outdoor/12.jpg",
                "/images/outdoor/13.jpg",
                "/images/outdoor/14.jpg",
                "/images/outdoor/15.jpg",
                "/images/outdoor/16.jpg",
                "/images/outdoor/17.jpg",
                "/images/outdoor/18.jpg",
                "/images/outdoor/19.jpg",
                "/images/outdoor/20.jpg",
                "/images/outdoor/21.jpg",
                "/images/outdoor/22.jpg",
                "/images/outdoor/23.jpg",
                "/images/outdoor/25.jpg",
                "/images/outdoor/26.jpg",
            ],
            testimonial: "Gobichetpalayam dreams come true! ✨ Mayilu captured the magic of our outdoor wedding, from the grand festivities to the most intimate moments, all with the beautiful rustic backdrop we love."
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