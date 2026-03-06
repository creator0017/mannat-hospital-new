import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ onBookClick }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden animate-fade-in">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 bg-[#0f172a]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#1e3a5f]/40 to-[#0f172a]/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center py-20">
                <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Center of Surgical Excellence
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-lg">
                        Pioneering <span className="text-accent">Endoscopic</span> Spine Surgery
                    </h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
                        Restoring movement and enhancing lives with precision surgical care since 2011. Experience world-class clinical expertise tailored for your recovery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onBookClick}
                            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors backdrop-blur-sm"
                        >
                            Request Consultation
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <Link to="/patient-stories" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 backdrop-blur-sm transition-colors">
                            Watch Patient Stories
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
