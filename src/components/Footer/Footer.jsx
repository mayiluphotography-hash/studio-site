import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import {
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaYoutube,
    FaHeart,
    FaPhoneAlt
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    return (
        <footer className="professional-footer">
            <div className="footer-container">

                {/* Main Footer Content */}
                <div className="footer-content">

                    {/* Brand Column */}
                    <div className="footer-column brand-column">
                        <div className="footer-logo">
                            <div className="footer-logo-image">
                                <img src="/images/mayil.png" alt="Mayilu Photography" />
                            </div>
                            <div className="footer-logo-text">
                                <span className="footer-logo-main">Mayilu</span>
                                <span className="footer-logo-sub">Photography</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Capturing timeless moments with artistic vision and unparalleled professionalism.
                            Your story deserves to be told beautifully.
                        </p>
                        <div className="social-links">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/mayiluphotography?igsh=MTFtNHB3aW55ZHYyNw=="
                                className="social-link"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={20} />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/918870645930"
                                className="social-link"
                                aria-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp size={20} />
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@mayiluphotography8259"
                                className="social-link"
                                aria-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube size={20} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:mayiluphotography@gmail.com"
                                className="social-link"
                                aria-label="Email"
                            >
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3 className="footer-title">Explore</h3>
                        <ul className="footer-links">
                            <li><a onClick={() => navigate('/')}>Home</a></li>
                            <li><a onClick={() => navigate('/memories')}>Our Gallery</a></li>
                            <li><a onClick={() => navigate('/packages')}>Packages</a></li>
                            <li><a onClick={() => navigate('/faq')}>FAQ</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-column">
                        <h3 className="footer-title">Services</h3>
                        <ul className="footer-links">
                            <li><a onClick={() => navigate('/packages')}>Wedding Photography</a></li>
                            <li><a onClick={() => navigate('/packages')}>Portrait Sessions</a></li>
                            <li><a onClick={() => navigate('/packages')}>Event Coverage</a></li>
                            <li><a onClick={() => navigate('/packages')}>Commercial Work</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h3 className="footer-title">Connect</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaEnvelope size={14} />
                                <span>mayiluphotography@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaPhoneAlt size={14} />
                                <span>+91 88706-45930</span>
                            </div>
                            <div className="contact-item">
                                <FaPhoneAlt size={14} />
                                <span>+91 97154-02757</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt size={14} />
                                <span>Balaji complex, Near taluk office, Nambiyur - 638458</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            &copy; {currentYear} Mayilu Photography. Made with <FaHeart size={12} color="#ff6b6b" /> All rights reserved.
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;