import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Priya & Raj",
            event: "Wedding Photography",
            text: "Mayilu captured our wedding's true emotions - every photo tells our love story perfectly!",
            rating: 5,
            image: "/images/testimonials/1.JPG",
            coupleNames: "Priya & Raj"
        },
        {
            id: 2,
            name: "Arun Family",
            event: "Family Portrait",
            text: "Our family's real personality shines through in every photo - natural, joyful, and priceless memories!",
            rating: 5,
            image: "/images/testimonials/2.JPG",
            coupleNames: "Arun Family"
        },
        {
            id: 3,
            name: "Sneha & Aditya",
            event: "Maternity Shoot",
            text: "Made us feel so comfortable and captured this precious time with beautiful, emotional artistry!",
            rating: 5,
            image: "/images/testimonials/3.jpg",
            coupleNames: "Sneha & Aditya"
        },
        {
            id: 4,
            name: "Karthik & Meera",
            event: "Commercial Shoot",
            text: "Professional photos that feel authentic - perfectly captured our brand's energy and passion!",
            rating: 5,
            image: "/images/testimonials/4.jpg",
            coupleNames: "Karthik & Meera"
        },
        {
            id: 5,
            name: "Divya & Sanjay",
            event: "Anniversary Shoot",
            text: "Turned our simple evening walk into magical photos that look like romantic movie stills!",
            rating: 5,
            image: "/images/testimonials/5.JPG",
            coupleNames: "Divya & Sanjay"
        },
        {
            id: 6,
            name: "Rohit & Anjali",
            event: "Engagement Shoot",
            text: "Felt like hanging out with a friend - captured our real relationship with all its beautiful moments!",
            rating: 5,
            image: "/images/testimonials/6.jpg",
            coupleNames: "Rohit & Anjali"
        }
    ];

    // Smooth auto-slide function
    const nextTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const prevTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 800);
    };

    // Auto-slide with pause on hover
    useEffect(() => {
        const startAutoSlide = () => {
            if (isPaused) return;

            timerRef.current = setInterval(() => {
                nextTestimonial();
            }, 5000);
        };

        const stopAutoSlide = () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };

        stopAutoSlide();
        startAutoSlide();

        return () => {
            stopAutoSlide();
        };
    }, [currentIndex, isPaused, testimonials.length]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container-wrapper">
                <div className="testimonials-section-header">
                    <h2 className="testimonials-section-title">Love Stories Captured</h2>
                    <p className="testimonials-section-subtitle">Moments that speak louder than words</p>
                </div>

                <div
                    className="testimonials-slider-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="testimonials-slider-nav">
                        <button
                            className="testimonials-nav-btn testimonials-prev-btn"
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft className="testimonials-nav-icon" />
                        </button>

                        <button
                            className="testimonials-nav-btn testimonials-next-btn"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight className="testimonials-nav-icon" />
                        </button>
                    </div>

                    <div className="testimonials-cards-container">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonials-card ${index === currentIndex ? 'testimonials-active' :
                                    index === (currentIndex - 1 + testimonials.length) % testimonials.length ? 'testimonials-prev' :
                                        index === (currentIndex + 1) % testimonials.length ? 'testimonials-next' : 'testimonials-hidden'
                                    }`}
                            >
                                <div className="testimonials-card-inner">
                                    <div className="testimonials-card-front">
                                        <div className="testimonials-client-image-container">
                                            <div className="testimonials-client-image">
                                                <img
                                                    src={testimonial.image}
                                                    alt={`${testimonial.coupleNames} - ${testimonial.event}`}
                                                    className="testimonials-client-photo"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                    onLoad={(e) => {
                                                        e.target.style.opacity = '1';
                                                    }}
                                                />
                                                <div className="testimonials-image-placeholder">
                                                    <span>{testimonial.coupleNames}</span>
                                                </div>
                                                <div className="testimonials-image-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="testimonials-card-content">
                                            <div className="testimonials-quote-icon">
                                                <FaQuoteLeft />
                                            </div>
                                            <div className="testimonials-stars">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <FaStar key={i} className="testimonials-star" />
                                                ))}
                                            </div>
                                            <p className="testimonials-text">
                                                {testimonial.text.length > 70 ? `${testimonial.text.substring(0, 70)}...` : testimonial.text}
                                            </p>
                                            {/* <div className="testimonials-client-info">
                                                <h4 className="testimonials-client-name">{testimonial.coupleNames}</h4>
                                                <span className="testimonials-event-type">{testimonial.event}</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonials-progress-indicator">
                        <div className="testimonials-progress-bar">
                            <div
                                className="testimonials-progress-fill"
                                style={{
                                    width: `${((currentIndex + 1) / testimonials.length) * 100}%`
                                }}
                            ></div>
                        </div>
                        <div className="testimonials-slide-numbers">
                            <span className="testimonials-current">{currentIndex + 1}</span>
                            <span className="testimonials-separator">/</span>
                            <span className="testimonials-total">{testimonials.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;