import React, { useState } from 'react';

const PhoneCallButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const phoneNumber = 'tel:7590878764';

    return (
        <>
            <a
                href={phoneNumber}
                id="phone-call-button"
                aria-label="Call Mannat Hospital for emergency"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    position: 'fixed',
                    bottom: '28px',
                    left: '28px',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                }}
            >
                {/* Phone Icon Circle */}
                <div
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF4444, #CC0000)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 24px rgba(204, 0, 0, 0.45)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                >
                    {/* Phone SVG Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </div>

                {/* Tooltip */}
                <span
                    style={{
                        background: '#fff',
                        color: '#333',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                        whiteSpace: 'nowrap',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'all 0.3s ease',
                        pointerEvents: 'none',
                    }}
                >
                    Emergency Call
                </span>
            </a>

            {/* Pulse Animation CSS */}
            <style>{`
                @keyframes phone-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(204, 0, 0, 0.5); }
                    70% { box-shadow: 0 0 0 18px rgba(204, 0, 0, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(204, 0, 0, 0); }
                }
                #phone-call-button > div {
                    animation: phone-pulse 2s infinite;
                }
                #phone-call-button:hover > div {
                    animation: none;
                }
            `}</style>
        </>
    );
};

export default PhoneCallButton;
