import React, { useState, useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
    useScrollToTop();
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: '50+', label: 'Weddings Captured' },
        { number: '100+', label: 'Happy Couples' },
        { number: '5+', label: 'Years Experience' },
        { number: '10K+', label: 'Photos Delivered' }
    ];

    const values = [
        {
            icon: '❤️',
            title: 'Passion for Stories',
            description: 'Every couple has a unique love story. I focus on capturing the genuine emotions and authentic moments that make your story special.'
        },
        {
            icon: '🎨',
            title: 'Creative Vision',
            description: 'Blending traditional techniques with contemporary styles to create timeless imagery that you\'ll cherish for generations.'
        },
        {
            icon: '⚡',
            title: 'Quick Delivery',
            description: 'Understanding the excitement of seeing your photos, I ensure prompt delivery without compromising on quality.'
        },
        {
            icon: '🤝',
            title: 'Personal Connection',
            description: 'I build a comfortable relationship with every client to ensure natural, relaxed photos that truly represent you.'
        }
    ];

    const handleContact = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    };

    const handleViewWorks = () => {
        window.scrollTo(0, 0);
        navigate('/memories');
    }

    return (
        <section className={`about-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                {/* Hero Section */}
                <div className="about-hero">
                    <div className="hero-content">
                        <h1>Capturing Life's Most Precious Moments</h1>
                        <p className="hero-subtitle">
                            Hi, I'm Mayilu - a passionate photographer dedicated to preserving your most cherished memories with artistry and emotion.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img
                            src="/images/photographer.jpg"
                            alt="Mayilu Photography"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div className="image-placeholder">
                            <span>Mayilu Photography</span>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className="story-section">
                    <div className="story-content">
                        <h2>My Photography Journey</h2>
                        <div className="story-text">
                            <p>
                                My love for photography began 5 years ago when I captured my first wedding.
                                Seeing the joy and emotion in that couple's eyes made me realize the power of preserving precious moments.
                            </p>
                            <p>
                                Based in Tamil Nadu, I've had the privilege of working with diverse couples and families,
                                each with their unique stories and cultural backgrounds. From intimate court marriages to
                                grand traditional weddings, every assignment teaches me something new.
                            </p>
                            <p>
                                I believe that great photography isn't just about technical perfection - it's about capturing
                                the soul of the moment. The unscripted laughter, the tender glances, the joyful tears -
                                these are the moments that truly matter.
                            </p>
                        </div>
                    </div>
                    <div className="story-image">
                        <img
                            src="/images/working.jpg"
                            alt="Working with couples"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <div className="image-placeholder">
                            <span>My Photography Style</span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="values-section">
                    <h2>My Approach to Photography</h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="about-cta">
                    <h2>Let's Create Something Beautiful Together</h2>
                    <p>I'd love to hear your story and discuss how we can capture your special moments</p>
                    <div className="cta-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => handleContact()}
                        >
                            Get in Touch
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => handleViewWorks()}
                        >
                            View My Work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;