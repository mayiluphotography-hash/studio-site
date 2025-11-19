import React, { useEffect, useRef } from 'react';
import './Popup.css';

const Popup = ({ children, onClose, size = "medium", showCloseButton = true }) => {
    const popupRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                handleClose();
            }
        };

        // Add animations
        if (overlayRef.current && popupRef.current) {
            overlayRef.current.style.animation = 'popupOverlayFadeIn 0.3s ease forwards';
            popupRef.current.style.animation = 'popupSlideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
        }

        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);
        
        // Prevent body scroll when popup is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const handleClose = () => {
        if (overlayRef.current && popupRef.current) {
            overlayRef.current.style.animation = 'popupOverlayFadeOut 0.3s ease forwards';
            popupRef.current.style.animation = 'popupSlideDown 0.3s ease forwards';
            
            setTimeout(() => {
                onClose();
            }, 250);
        } else {
            onClose();
        }
    };

    const getSizeClass = () => {
        switch (size) {
            case "small": return "popup-small";
            case "large": return "popup-large";
            case "fullscreen": return "popup-fullscreen";
            default: return "popup-medium";
        }
    };

    return (
        <div 
            className="popup-overlay" 
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className={`popup-container ${getSizeClass()}`} 
                ref={popupRef}
            >
                {showCloseButton && (
                    <button 
                        className="popup-close-btn"
                        onClick={handleClose}
                        aria-label="Close popup"
                    >
                        <span className="popup-close-icon">✕</span>
                    </button>
                )}
                
                {/* Dynamic Content */}
                <div className="popup-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;