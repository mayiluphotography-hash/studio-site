import React, { useEffect } from 'react';
import './ImagePopup.css';

const ImagePopup = ({ image, client, onClose }) => {

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <div className="image-popup-overlay" onClick={onClose}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="popup-header">
                    <div className="popup-client-info">
                        <h3>{client.name}</h3>
                        <span className="image-counter">
                            Viewing Image
                        </span>
                    </div>
                    <button className="popup-close-btn" onClick={onClose}>
                        ×
                    </button>
                </div>

                {/* Main Image */}
                <div className="popup-image-container">
                    <div className="popup-image-wrapper">
                        <img
                            src={image}
                            alt={`${client.name}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePopup;