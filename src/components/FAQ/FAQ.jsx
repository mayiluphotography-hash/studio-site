import React, { useState, useEffect } from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import './FAQ.css';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
    useScrollToTop();
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeFaq, setActiveFaq] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const faqCategories = [
        { id: 'all', name: 'All Questions', icon: '❓' },
        { id: 'booking', name: 'Booking & Pricing', icon: '💰' },
        { id: 'wedding', name: 'Wedding Photography', icon: '💒' },
        { id: 'portrait', name: 'Portrait Sessions', icon: '📷' },
        { id: 'delivery', name: 'Delivery & Products', icon: '🎁' },
        { id: 'technical', name: 'Technical & Equipment', icon: '⚙️' }
    ];

    const allFaqs = [
        // Booking & Pricing
        {
            id: 1,
            category: 'booking',
            question: "How far in advance should we book?",
            answer: "I recommend booking 3-6 months in advance for weddings and 2-4 weeks for portrait sessions. Popular dates (especially wedding seasons from November to February) get booked quickly, so early booking is advised to secure your preferred date."
        },
        {
            id: 2,
            category: 'booking',
            question: "What's included in your packages?",
            answer: "All packages include professional photography, basic editing, high-resolution digital images, and printing rights. Premium packages include additional services like engagement sessions, albums, and longer coverage hours. Detailed inclusions are listed on our Packages page."
        },
        {
            id: 3,
            category: 'booking',
            question: "Do you offer payment plans?",
            answer: "Yes! We offer flexible payment plans to make photography services accessible. Typically, we require a 30% booking deposit, with the remaining balance due 2 weeks before your event. Custom payment schedules can be arranged."
        },
        {
            id: 4,
            category: 'booking',
            question: "What is your cancellation policy?",
            answer: "Booking deposits are non-refundable but transferable to another date if rescheduled at least 30 days in advance. For cancellations within 30 days, 50% of the total package amount is charged. We understand emergencies happen and always try to be flexible."
        },

        // Wedding Photography
        {
            id: 5,
            category: 'wedding',
            question: "What if it rains on our wedding day?",
            answer: "I always have backup plans! We can use indoor locations, bring umbrellas for creative shots, or reschedule if possible. Some of the most beautiful and dramatic photos happen in unexpected weather conditions. I'm experienced in shooting in various weather scenarios."
        },
        {
            id: 6,
            category: 'wedding',
            question: "How many hours of coverage do we need for our wedding?",
            answer: "For most Indian weddings, I recommend 8-12 hours to capture all important moments - from bridal preparation to reception festivities. Intimate weddings may need 4-6 hours. We'll discuss your specific timeline during consultation to determine the perfect coverage duration."
        },
        {
            id: 7,
            category: 'wedding',
            question: "Do you cover pre-wedding and post-wedding events?",
            answer: "Yes! I cover all wedding-related events including engagement ceremonies, mehndi, sangeet, haldi, wedding ceremony, and reception. Additional events can be added to your package with adjusted pricing."
        },
        {
            id: 8,
            category: 'wedding',
            question: "Can you work with our wedding planner?",
            answer: "Absolutely! I regularly collaborate with wedding planners to ensure seamless coordination. I'll work with your planner on timeline, locations, and special requirements to make sure everything runs smoothly."
        },

        // Portrait Sessions
        {
            id: 9,
            category: 'portrait',
            question: "What should we wear for our portrait session?",
            answer: "Wear clothes that make you feel confident and comfortable. Solid colors or subtle patterns work best. Coordinate colors with your partner/family without matching exactly. Avoid loud logos and busy patterns. I'll provide detailed styling guidance before your session."
        },
        {
            id: 10,
            category: 'portrait',
            question: "Where do portrait sessions take place?",
            answer: "Sessions can be at your home, outdoor locations (parks, beaches, urban settings), or in my studio. I'll help you choose the perfect location based on your desired style and comfort level. Location scouting is included for outdoor sessions."
        },
        {
            id: 11,
            category: 'portrait',
            question: "How long does a typical portrait session last?",
            answer: "Portrait sessions typically last 1-2 hours, giving us enough time for multiple locations and outfit changes without feeling rushed. Family sessions with children may take a bit longer to accommodate breaks and keep everyone comfortable."
        },

        // Delivery & Products
        {
            id: 12,
            category: 'delivery',
            question: "How many photos will we receive?",
            answer: "For weddings: 50-100 professionally edited photos per hour of coverage. For portraits: 30-50 final images per hour. I focus on quality over quantity, delivering only the best images that tell your complete story."
        },
        {
            id: 13,
            category: 'delivery',
            question: "How long until we receive our photos?",
            answer: "Portrait sessions: 1-2 weeks. Weddings: 3-4 weeks during peak season, 2-3 weeks during off-season. You'll receive a sneak peek within 48 hours of your event to share with family and friends."
        },
        {
            id: 14,
            category: 'delivery',
            question: "Do you provide raw, unedited images?",
            answer: "I deliver professionally edited high-resolution JPEG files. Raw files are not provided as they represent unfinished work and don't reflect my artistic style and quality standards. The editing process is an essential part of my creative vision."
        },
        {
            id: 15,
            category: 'delivery',
            question: "Can we print the photos ourselves?",
            answer: "Yes! All packages include printing rights. You'll receive high-resolution files suitable for printing. I also offer professional printing services through trusted labs that ensure color accuracy and quality that consumer printers can't match."
        },

        // Technical & Equipment
        {
            id: 16,
            category: 'technical',
            question: "What's your backup equipment policy?",
            answer: "I always carry multiple professional camera bodies, various lenses, external flashes, and extra batteries to every shoot. Equipment failure will never compromise your special day. I also use dual memory card slots for instant backup during shooting."
        },
        {
            id: 17,
            category: 'technical',
            question: "Do you work with an assistant or second shooter?",
            answer: "For weddings and large events, I typically work with an assistant. Second photographers are available for additional coverage and different angles. This is especially useful for capturing simultaneous events and multiple perspectives."
        },
        {
            id: 18,
            category: 'technical',
            question: "Do you travel for shoots?",
            answer: "Yes! I serve all of Tamil Nadu and frequently travel across South India. Travel within 50km of Nambiyur is included. For destinations beyond, reasonable travel fees apply covering transportation and accommodation if needed."
        },
        {
            id: 19,
            category: 'technical',
            question: "What happens if you get sick on our shoot day?",
            answer: "In the extremely rare event I cannot photograph your event due to illness, I have a network of trusted professional photographers who can step in. Your deposit would be fully refundable in this scenario, though it has never happened in my career."
        }
    ];

    const filteredFaqs = activeCategory === 'all'
        ? allFaqs
        : allFaqs.filter(faq => faq.category === activeCategory);

    const toggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id);
    };


    const handleContact = () => {
        window.scrollTo(0, 0);
        navigate('/contact');
    };

    return (
        <section className={`faq-section ${isVisible ? 'visible' : ''}`}>
            <div className="container">
                {/* Hero Section */}
                <div className="faq-hero">
                    <h1>Frequently Asked Questions</h1>
                    <p className="hero-subtitle">
                        Everything you need to know about my photography services, booking process, and what to expect.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="faq-categories">
                    {faqCategories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* FAQ Grid */}
                <div className="faq-content">
                    <div className="faq-grid">
                        {filteredFaqs.map(faq => (
                            <div
                                key={faq.id}
                                className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <h3>{faq.question}</h3>
                                    <span className="faq-icon">
                                        {activeFaq === faq.id ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Have Questions CTA */}
                <div className="faq-cta">
                    <div className="cta-content">
                        <h2>Still Have Questions?</h2>
                        <p>Can't find what you're looking for? I'm here to help with any questions about your photography needs.</p>
                    </div>
                    <div className="cta-buttons">
                        <button
                            className="btn-primary"
                            onClick={() => handleContact()}
                        >
                            Contact Me Directly
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => window.location.href = '/process'}
                        >
                            View My Process
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;