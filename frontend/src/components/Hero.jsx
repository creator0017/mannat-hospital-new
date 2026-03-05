import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ onBookClick }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden animate-fade-in">
            {/* Background Gradient */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full"
                    style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 30%, #1a365d 50%, #0c2340 70%, #0f172a 100%)',
                    }}
                />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.2) 0%, transparent 50%)',
                    }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
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
                        Restoring movement and enhancing lives with precision surgical care since 1993. Experience world-class clinical expertise tailored for your recovery.
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
