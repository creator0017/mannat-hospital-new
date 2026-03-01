import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ onBookClick }) => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white dark:bg-background-dark animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center py-20">
                <div className="z-10 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-primary/5 text-primary dark:text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Center of Surgical Excellence
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
                        Pioneering <span className="text-primary">Endoscopic</span> Spine Surgery
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
                        Restoring movement and enhancing lives with precision surgical care since 1993. Experience world-class clinical expertise tailored for your recovery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onBookClick}
                            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            Request Consultation
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <Link to="/patient-stories" className="border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Watch Patient Stories
                        </Link>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                        <img
                            alt="Mannat Hospital building"
                            className="w-full h-full object-cover"
                            src="/mannat-hospital.jpg"
                        />
                    </div>
                    {/* Stats Floating Card */}
                    <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900 dark:text-white">10,000+</div>
                                <div className="text-sm text-slate-500">Successful Spine Procedures</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
