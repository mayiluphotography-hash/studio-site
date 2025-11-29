import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Contact = () => {
    useScrollToTop();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Replace these with your actual EmailJS IDs
    const EMAILJS_SERVICE_ID = 'service_o3fyqpf';
    const EMAILJS_TEMPLATE_ID = 'template_6uxwy9a';
    const EMAILJS_USER_ID = 'zbmdD7tqhjj7TBIV_';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleMobileChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            // Remove any non-digit characters and limit to 10 digits
            const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: numbersOnly
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simple variable names that match template
            const templateParams = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                service: formData.eventType,
                event_date: formData.eventDate || 'Not specified',
                message: formData.message,
                timestamp: new Date().toLocaleString('en-IN')
            };

            console.log('Sending data:', templateParams); // Debug log

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_USER_ID
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                eventDate: '',
                message: ''
            });

        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const eventTypes = [
        'Wedding Photography',
        'Engagement Session',
        'Portrait Session',
        'Family Photography',
        'Event Coverage',
        'Commercial Work',
        'Other'
    ];

    return (
        <section className="contact-section">
            <div className="container">

                {/* Contact Header */}
                <div className="contact-header">
                    <h2>Begin Your Journey</h2>
                    <p>Let's create something beautiful together. Share your vision and I'll help bring it to life.</p>
                </div>

                <div className="contact-content">

                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Get In Touch</h3>
                            <p className="info-description">
                                Ready to capture your special moments? Reach out and let's discuss how we can create timeless memories together.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className="method-details">
                                        <h4>Email</h4>
                                        <p>mayiluphotography@gmail.com</p>
                                        <a href="mailto:mayiluphotography@gmail.com">Send Message</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                                        </svg>
                                    </div>
                                    <div className="method-details">
                                        <h4>Phone Numbers</h4>
                                        <div className="phone-numbers">
                                            <div className="phone-item">
                                                <span>+91 88706 45930</span>
                                                <a href="tel:+918870645930">Call</a>
                                            </div>
                                            <div className="phone-item">
                                                <span>+91 97154 02757</span>
                                                <a href="tel:+919715402757">Call</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div className="method-details">
                                        <h4>Studio</h4>
                                        <p>Nambiyur, Tamil Nadu, India</p>
                                        <a href="https://www.google.com/maps/search/?api=1&query=MAYILU+PHOTOGRAPHY+Nambiyur+Tamil+Nadu+India" target="_blank" rel="noopener noreferrer">Get Directions</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg>
                                    </div>
                                    <div className="method-details">
                                        <h4>Response Time</h4>
                                        <p>Within 24 Hours</p>
                                        <span>Professional & Prompt</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="contact-social">
                                <h4>Follow Along</h4>
                                <div className="social-links">
                                    <a
                                        href="https://www.instagram.com/mayiluphotography?igsh=MTFtNHB3aW55ZHYyNw=="
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://wa.me/918870645930"
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.452" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-header">
                                <h3>Send Message</h3>
                                <p>Fill out the form below and I'll get back to you soon.</p>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleMobileChange}
                                        inputMode="numeric"
                                        pattern="[0-9]{10}"
                                        maxLength="10"
                                        required
                                        placeholder="Enter 10-digit number"
                                    />
                                    {formData.phone && formData.phone.length !== 10 && (
                                        <div className="error-message">
                                            Please enter exactly 10 digits
                                        </div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventType">Service Interested In *</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {eventTypes.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventDate">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell me about your vision, special requirements, or any questions you might have..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting || formData.phone.length !== 10}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                    Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="error-message">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                    </svg>
                                    Sorry, there was an error sending your message. Please try again or contact us directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;