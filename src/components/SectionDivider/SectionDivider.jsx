import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ type = 'floral', color = '#087526', flip = false }) => {
    const dividers = {
        floral: (
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={`section-divider-svg ${flip ? 'section-divider-flipped' : ''}`}>
                <path d="M0,0V20c47.79,10,103.59,15,158,13,70.36-2.5,136.33-15,206.8-17C438.64,14,512.34,25,583,32c69.27,8,138.3,11,209.4,6,36.15-3,69.85-8,104.45-13C989.49,11,1113-7,1200,24V0Z"
                    fill={color} opacity="0.25" className="section-divider-path-1"></path>
                <path d="M0,0V7C13,16,27.64,25,47.69,32,99.41,49,165,49,224.58,40c31.15-5,60.09-12,89.67-18,40.92-9,84.73-21,130.83-22,36.26-1,70.9,4,98.6,14,31.77,11,62.32,28,103.63,33,40.44,5,81.35-3,119.13-11s75.16-17,116.92-19c59.73-3,113.28,10,168.9,17,30.2,4,59,3,87.09-3,22.43-5,48-12,60.65-22V0Z"
                    fill={color} opacity="0.5" className="section-divider-path-2"></path>
                <path d="M0,0V3C149.93,26,314.09,32,475.83,19c43-3,84.23-9,127.61-12,59-4,112.48,5,165.56,16C827.93,34,886,42,951.2,40c86.53-3,172.46-21,248.8-38V0Z"
                    fill={color} className="section-divider-path-3"></path>
            </svg>
        ),

        leaves: (
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={`section-divider-svg ${flip ? 'section-divider-flipped' : ''}`}>
                <path d="M321.39,25c58-5,114.16-13,172-19,82.39-7,168.19-8,250.45,0C823.78,14,906.67,32,985.66,41c70.05,8,146.53,12,214.34,1V0H0V12A600.21,600.21,0,0,0,321.39,25Z"
                    fill={color} opacity="0.3" className="section-divider-path-1"></path>
                <path d="M0,0V7C13,16,27.64,25,47.69,32,99.41,49,165,49,224.58,40c31.15-5,60.09-12,89.67-18,40.92-9,84.73-21,130.83-22,36.26-1,70.9,4,98.6,14,31.77,11,62.32,28,103.63,33,40.44,5,81.35-3,119.13-11s75.16-17,116.92-19c59.73-3,113.28,10,168.9,17,30.2,4,59,3,87.09-3,22.43-5,48-12,60.65-22V0Z"
                    fill={color} opacity="0.5" className="section-divider-path-2"></path>
            </svg>
        ),

        elegant: (
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={`section-divider-svg ${flip ? 'section-divider-flipped' : ''}`}>
                <path d="M0,0V3c0,10,291,22,600,22s600-12,600-22V0Z" fill={color} opacity="0.3" className="section-divider-path-1"></path>
                <path d="M0,0V6c0,15,200,27,600,27s600-12,600-27V0Z" fill={color} opacity="0.5" className="section-divider-path-2"></path>
                <path d="M0,0V8c0,21,150,32,600,32s600-11,600-32V0Z" fill={color} className="section-divider-path-3"></path>
            </svg>
        ),

        romantic: (
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={`section-divider-svg ${flip ? 'section-divider-flipped' : ''}`}>
                <path d="M0,0V20c47.79,10,103.59,15,158,13,70.36-2.5,136.33-15,206.8-17C438.64,14,512.34,25,583,32c69.27,8,138.3,11,209.4,6,36.15-3,69.85-8,104.45-13C989.49,11,1113-7,1200,24V0Z"
                    fill={color} opacity="0.25" className="section-divider-path-1"></path>
                <path d="M0,0V7C13,16,27.64,25,47.69,32,99.41,49,165,49,224.58,40c31.15-5,60.09-12,89.67-18,40.92-9,84.73-21,130.83-22,36.26-1,70.9,4,98.6,14,31.77,11,62.32,28,103.63,33,40.44,5,81.35-3,119.13-11s75.16-17,116.92-19c59.73-3,113.28,10,168.9,17,30.2,4,59,3,87.09-3,22.43-5,48-12,60.65-22V0Z"
                    fill={color} opacity="0.5" className="section-divider-path-2"></path>
            </svg>
        ),

        modern: (
            <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className={`section-divider-svg ${flip ? 'section-divider-flipped' : ''}`}>
                <path d="M0,0V20c47.79,10,103.59,15,158,13,70.36-2.5,136.33-15,206.8-17C438.64,14,512.34,25,583,32c69.27,8,138.3,11,209.4,6,36.15-3,69.85-8,104.45-13C989.49,11,1113-7,1200,24V0Z"
                    fill={color} opacity="0.4" className="section-divider-path-1"></path>
            </svg>
        )
    };

    return (
        <div className="section-divider-wrapper">
            {dividers[type]}
        </div>
    );
};

export default SectionDivider;