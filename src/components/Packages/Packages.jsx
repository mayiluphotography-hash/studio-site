import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Packages.css';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Packages = () => {
    useScrollToTop();
    const navigate = useNavigate();

    const packages = [
        {
            id: 1,
            name: "Traditional Photo + Video Package",
            category: "Complete Wedding Coverage",
            price: "₹40,000",
            image: "/images/packages/1.jpg",
            description: "Complete traditional photography AND videography coverage for Nalangu and Wedding ceremonies. Unlimited photos and video recording with highly professional equipment to capture every precious moment in both photo and video.",
            coverage: "Full Photo + Video Coverage",
            delivery: "Unlimited Photos + 1 Album + 1 Edited Video",
            timeline: "4-5 Weeks Delivery",
            features: [
                "Unlimited Photos with Professional Equipment",
                "Unlimited Video Recording in High Quality",
                "1 Premium Photo Album",
                "1 Fully Edited Wedding Video",
                "Full Event Coverage (Nalangu & Wedding)",
                "High-Resolution Edited Images",
                "Professionally Edited Video with Audio",
                "Traditional Ceremony Specialization",
                "Digital Soft Copies in Pen Drive",
                "Calendar Gift",
                "2 Photo Frames",
                "Pre/Post Wedding Shoot Option"
            ],
            bestFor: "Traditional Tamil weddings, Nalangu ceremonies, couples wanting complete photo and video coverage"
        },
        {
            id: 2,
            name: "Complete Celebration Package",
            category: "Most Popular - Photo + Video + Candid",
            price: "₹60,000",
            image: "/images/packages/2.jpg",
            description: "Our most comprehensive package combining traditional photography, videography, and candid coverage. Perfect for couples who want complete documentation of their wedding with all three essential services in one bundle.",
            coverage: "Full Event Coverage (All Ceremonies)",
            delivery: "Unlimited Photos + 1 Album + 1 Video + Candid Coverage",
            timeline: "4-5 Weeks Delivery",
            features: [
                "Traditional Photography - Unlimited Photos with Professional Equipment",
                "Traditional Videography - Unlimited Recording with Full Editing",
                "Candid Photography - Unlimited Couple & Portrait Coverage",
                "1 Premium Photo Album",
                "1 Fully Edited Wedding Video",
                "Digital Soft Copies in Pen Drive",
                "Pre-Wedding OR Post-Wedding Shoot",
                "Calendar Gift",
                "3 Photo Frames",
                "Full Nalangu & Wedding Ceremony Coverage",
                "High-Resolution Edited Images",
                "Professionally Edited Video with Audio"
            ],
            bestFor: "Couples wanting complete coverage, traditional Tamil weddings with all services, comprehensive documentation"
        },
        {
            id: 3,
            name: "Luxury Experience Package",
            category: "Ultimate Photo + Video + Candid Coverage",
            price: "₹115,000",
            image: "/images/packages/3.jpg",
            description: "The ultimate luxury package offering comprehensive coverage with premium deliverables. Includes traditional photography & videography, candid photography & videography, and exclusive premium features for the most discerning couples.",
            coverage: "Complete Multi-Service Coverage",
            delivery: "2 Albums + 2 Videos + Unlimited Photos & Videos",
            timeline: "5-6 Weeks Delivery",
            features: [
                "Traditional Photography - Unlimited Professional Photos",
                "Traditional Videography - Unlimited High-Quality Recording",
                "Candid Photography - Unlimited Couple & Portrait Coverage",
                "Candid Videography - Unlimited Candid Video Coverage",
                "2 Premium Photo Albums",
                "2 Fully Edited Wedding Videos (Traditional + Candid)",
                "Digital Soft Copies in Pen Drive",
                "Pre-Wedding OR Post-Wedding Shoot",
                "Calendar Gift",
                "3 Premium Photo Frames",
                "Full Nalangu & Wedding Ceremony Coverage",
                "High-Resolution Edited Images",
                "Professionally Edited Videos with Audio",
                "Multi-angle Coverage",
                "Comprehensive Storytelling"
            ],
            bestFor: "Grand weddings, luxury celebrations, multi-day functions, couples wanting the most comprehensive coverage with premium deliverables"
        },
        {
            id: 4,
            name: "Premium Complete Wedding Package",
            category: "Ultimate Coverage with LED & Drone",
            price: "₹145,000",
            image: "/images/packages/4.jpg",
            description: "The most comprehensive wedding package offering complete coverage with premium additions including LED screens and drone photography. Everything you need to capture your special day from every angle with the highest quality equipment.",
            coverage: "Complete Wedding Coverage + LED & Drone",
            delivery: "2 Albums + 2 Videos + LED + Drone Coverage",
            timeline: "5-6 Weeks Delivery",
            features: [
                "Traditional Photography - Unlimited Professional Photos",
                "Traditional Videography - Unlimited High-Quality Recording",
                "Candid Photography - Unlimited Couple & Portrait Coverage",
                "Candid Videography - Unlimited Candid Video Coverage",
                "LED Screen Setup - 2 units (8x6) for Reception",
                "Drone Photography & Videography - Aerial Coverage",
                "2 Premium Photo Albums",
                "2 Fully Edited Wedding Videos",
                "Digital Soft Copies in Pen Drive",
                "Pre-Wedding OR Post-Wedding Shoot",
                "Calendar Gift",
                "3 Premium Photo Frames",
                "Full Nalangu & Wedding Ceremony Coverage",
                "Reception Special Coverage with LED",
                "Aerial Shots with Drone",
                "High-Resolution Edited Images",
                "Professionally Edited Videos with Audio"
            ],
            bestFor: "Grand luxury weddings, destination weddings, couples wanting complete coverage with premium technology, large-scale celebrations"
        },
        {
            id: 5,
            name: "Ultimate Royal Wedding Package",
            category: "Complete Coverage with Premium Add-ons",
            price: "₹210,000",
            image: "/images/packages/6.jpg",
            description: "The most exclusive and comprehensive wedding package for royal celebrations. Includes every premium service - from traditional coverage to cutting-edge technology like AI QR code scanning, photobooth, and extended pre/post wedding sessions. Nothing is left to chance for your perfect day.",
            coverage: "Complete Multi-Day Coverage with All Premium Services",
            delivery: "2 Albums + 2 Videos + LED + Drone + Photobooth + AI Technology",
            timeline: "6-7 Weeks Delivery",
            features: [
                "Traditional Photography - Unlimited Professional Photos",
                "Traditional Videography - Unlimited High-Quality Recording",
                "Candid Photography - Unlimited Couple & Portrait Coverage",
                "Candid Videography - Unlimited Candid Video Coverage",
                "LED Screen Setup - 2 units (8x6) for Reception",
                "Drone Photography & Videography - Aerial Coverage",
                "AI QR Code Scanning - Advanced Technology for Reception",
                "Photobooth with 300 Instant Photo Prints",
                "Pre OR Post Wedding Session - 2 Days Candid Photo & Video",
                "2 Premium Photo Albums",
                "2 Fully Edited Wedding Videos",
                "Digital Soft Copies in Pen Drive",
                "6 Premium Photo Frames",
                "Calendar Gift",
                "Full Nalangu & Wedding Ceremony Coverage",
                "Reception Special Coverage with LED & AI Technology",
                "Aerial Shots with Drone",
                "High-Resolution Edited Images",
                "Professionally Edited Videos with Audio",
                "Instant Guest Entertainment with Photobooth",
                "Multi-Day Coverage for Complete Story"
            ],
            bestFor: "Royal weddings, luxury destination weddings, grand celebrations, couples wanting every possible service, multi-day events with premium technology"
        }
    ];

    const handleContactClick = () => {
        navigate('/contact');
    };

    const handleBookNow = (packageName, packagePrice) => {
        navigate('/contact', {
            state: {
                selectedPackage: packageName,
                packagePrice: packagePrice
            }
        });
    };

    const handleViewGallery = () => {
        navigate('/memories');
    };

    return (
        <section className="packages-section visible" id="packages">
            <div className="container">
                {/* Section Header */}
                <div className="packages-header">
                    <h2>Photography Packages Designed for You</h2>
                    <p>Every love story is unique. Choose the perfect package that matches your vision, budget, and celebration style.</p>
                </div>

                {/* Packages Grid */}
                <div className="packages-container">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            className={`package-card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
                        >
                            {/* Image Side */}
                            <div className="package-image-side">
                                <div className="image-container">
                                    <img
                                        src={pkg.image}
                                        alt={pkg.name}
                                        loading="lazy"
                                    />
                                    <div className="package-overlay">
                                        <span className="package-price">{pkg.price}</span>
                                        <span className="package-category">{pkg.category}</span>
                                        <div className="package-highlights">
                                            <div className="highlight-item">
                                                <span className="highlight-icon">⏱️</span>
                                                <span>{pkg.coverage}</span>
                                            </div>
                                            <div className="highlight-item">
                                                <span className="highlight-icon">🖼️</span>
                                                <span>{pkg.delivery}</span>
                                            </div>
                                            <div className="highlight-item">
                                                <span className="highlight-icon">📅</span>
                                                <span>{pkg.timeline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="package-content-side">
                                <div className="package-content">
                                    <div className="package-badge">
                                        {pkg.category}
                                    </div>
                                    <h3>{pkg.name}</h3>
                                    <p className="package-description">{pkg.description}</p>

                                    <div className="package-features">
                                        <h4>📦 Everything Included:</h4>
                                        <ul>
                                            {pkg.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="package-bestfor">
                                        <strong>🎯 Perfect For:</strong> {pkg.bestFor}
                                    </div>

                                    <div className="package-actions">
                                        <button
                                            className="btn-primary"
                                            onClick={() => handleBookNow(pkg.name, pkg.price)}
                                        >
                                            Book This Package
                                        </button>
                                        <button
                                            className="btn-secondary"
                                            onClick={handleViewGallery}
                                        >
                                            See Similar Work
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="packages-cta">
                    <div className="cta-content">
                        <h3>Need Something Custom?</h3>
                        <p>Every love story is unique. Let's create a personalized package that perfectly captures your vision:</p>
                        <div className="cta-features">
                            <div className="cta-feature">
                                <span className="cta-icon">✨</span>
                                <span>Mix & match services</span>
                            </div>
                            <div className="cta-feature">
                                <span className="cta-icon">💰</span>
                                <span>Flexible payment plans</span>
                            </div>
                            <div className="cta-feature">
                                <span className="cta-icon">🎨</span>
                                <span>Custom editing styles</span>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn-outline"
                        onClick={handleContactClick}
                    >
                        Get Custom Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Packages;