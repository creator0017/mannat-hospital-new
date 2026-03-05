import React from 'react';

const Logo = ({ className = "h-16" }) => {
    return (
        <img
            src="/mannat-logo.png"
            alt="Mannat Hospital - Institute of Endoscopic & Minimal Invasive Spine Surgery"
            className={className}
            style={{
                objectFit: 'contain',
                display: 'block',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                background: 'transparent',
            }}
        />
    );
};

export default Logo;
