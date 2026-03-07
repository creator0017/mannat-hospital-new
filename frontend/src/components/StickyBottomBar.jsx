import React from 'react';

const StickyBottomBar = ({ onBookClick }) => {
    // Contact Info
    const phoneNumber = '+917590878764';
    const cleanPhone = '7590878764';

    // WhatsApp URL
    const message = encodeURIComponent(
        'Hello Mannat Hospital! I would like to book an appointment. Please help me with the details.'
    );
    const whatsappUrl = `https://wa.me/91${cleanPhone}?text=${message}`;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[9998] md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300">
            <div className="flex items-center h-16 w-full">

                {/* 1. CALL NOW Button */}
                <a
                    href={`tel:${cleanPhone}`}
                    className="flex-1 flex flex-col items-center justify-center h-full text-white bg-[#1d4ed8] hover:bg-blue-800 transition-colors border-r border-blue-900/20"
                >
                    <span className="material-symbols-outlined text-[20px] mb-0.5">call</span>
                    <span className="text-[10px] font-bold tracking-wider">CALL NOW</span>
                </a>

                {/* 2. WHATSAPP Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center h-full text-white bg-[#25D366] hover:bg-green-600 transition-colors border-r border-green-800/20"
                >
                    <span className="material-symbols-outlined text-[20px] mb-0.5">chat</span>
                    <span className="text-[10px] font-bold tracking-wider">WHATSAPP</span>
                </a>

                {/* 3. BOOK APPOINTMENT Button */}
                <button
                    onClick={onBookClick}
                    className="flex-1 flex flex-col items-center justify-center h-full text-white bg-accent hover:bg-accent/90 transition-colors"
                >
                    <span className="material-symbols-outlined text-[20px] mb-0.5">calendar_month</span>
                    <span className="text-[10px] font-bold tracking-wider">BOOK NOW</span>
                </button>
            </div>
        </div>
    );
};

export default StickyBottomBar;
