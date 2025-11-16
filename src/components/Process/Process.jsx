import React, { useState, useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './Process.css';

const Process = () => {
    useScrollToTop();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const steps = [
        {
            number: '01',
            title: 'Discovery & Consultation',
            icon: '💬',
            description: 'Let\'s get to know each other and discuss your vision',
            details: [
                'Free initial consultation (in-person or video call)',
                'Understand your requirements and expectations',
                'Discuss dates, locations, and package options',
                'Review portfolio and previous work samples',
                'Answer all your questions about the process'
            ],
            timeline: '1-2 days',
            image: '/images/process-consultation.jpg'
        },
        {
            number: '02',
            title: 'Planning & Preparation',
            icon: '📋',
            description: 'Detailed planning to ensure everything goes perfectly',
            details: [
                'Create customized shot list based on your preferences',
                'Location scouting and venue visit (if needed)',
                'Timeline planning for the entire day',
                'Outfit and styling recommendations',
                'Weather contingency planning'
            ],
            timeline: '1-2 weeks before shoot',
            image: '/images/process-planning.jpg'
        },
        {
            number: '03',
            title: 'The Photoshoot Day',
            icon: '📸',
            description: 'Relax and enjoy while I capture your special moments',
            details: [
                'Arrive early for setup and preparation',
                'Natural, guided posing that feels comfortable',
                'Multiple backup equipment for reliability',
                'Candid moments alongside planned shots',
                'Continuous communication throughout the day'
            ],
            timeline: 'Your special day',
            image: '/images/process-shoot.jpg'
        },
        {
            number: '04',
            title: 'Editing & Selection',
            icon: '🎨',
            description: 'Transforming raw images into timeless memories',
            details: [
                'Professional color correction and retouching',
                'Creative editing to match your preferred style',
                'Initial selection of best images',
                'Client review and feedback round',
                'Final adjustments based on your input'
            ],
            timeline: '2-3 weeks after shoot',
            image: '/images/process-editing.jpg'
        },
        {
            number: '05',
            title: 'Delivery & Products',
            icon: '🎁',
            description: 'Receiving your beautiful, ready-to-share memories',
            details: [
                'High-resolution digital images via online gallery',
                'Print-ready files for physical albums',
                'Mobile-optimized images for social media',
                'Printing guidance and recommendations',
                'USB drive with all final images (premium packages)'
            ],
            timeline: '1-2 days after final approval',
            image: '/images/process-delivery.jpg'
        }
    ];

    return (
        <section className={`process-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                {/* Hero Section */}
                <div className="process-hero">
                    <h1>My Photography Process</h1>
                    <p className="hero-subtitle">
                        From our first conversation to delivering your final images, here's how we'll work together to create beautiful, timeless memories.
                    </p>
                </div>

                {/* Timeline Steps */}
                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="step-content">
                                <div className="step-header">
                                    <div className="step-number">{step.number}</div>
                                    <div className="step-icon">{step.icon}</div>
                                </div>
                                <h3>{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                
                                <div className="step-details">
                                    <h4>What to Expect:</h4>
                                    <ul>
                                        {step.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="step-timeline">
                                    <strong>Timeline:</strong> {step.timeline}
                                </div>
                            </div>

                            <div className="step-image">
                                <img 
                                    src={step.image} 
                                    alt={step.title}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="image-placeholder">
                                    <span>{step.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                {/* <div className="process-faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question">
                                    <h4>{faq.question}</h4>
                                    <span className="faq-icon">+</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* CTA Section */}
                <div className="process-cta">
                    <div className="cta-content">
                        <h2>Ready to Start Your Photography Journey?</h2>
                        <p>Let's discuss your vision and create a personalized plan for your special day</p>
                        <div className="cta-features">
                            <div className="feature">
                                <span className="feature-icon">✅</span>
                                <span>Free Consultation</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">✅</span>
                                <span>Flexible Payment Plans</span>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">✅</span>
                                <span>Personalized Service</span>
                            </div>
                        </div>
                    </div>
                    <div className="cta-buttons">
                        <button 
                            className="btn-primary"
                            onClick={() => window.location.href = '/contact'}
                        >
                            Book Your Consultation
                        </button>
                        <button 
                            className="btn-secondary"
                            onClick={() => window.location.href = '/packages'}
                        >
                            View Packages
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;