import React from 'react';

const Accreditations = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">Trusted By</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16">Accreditations & Empanelments</h3>

                {/* Top Row: Logos */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-16">
                    <div className="flex flex-col items-center group">
                        <div className="h-24 md:h-28 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                            <img src="/logos/nabh.png" alt="Pre-NABH" className="max-h-full max-w-full object-contain drop-shadow-md grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Pre-NABH</span>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="h-24 md:h-28 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                            <img src="/logos/ayushman.png" alt="Ayushman Bharat" className="max-h-full max-w-full object-contain drop-shadow-md grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Ayushman Bharat</span>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="h-24 md:h-28 flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                            <img src="/logos/hp_govt.png" alt="Himachal Government" className="max-h-full max-w-full object-contain drop-shadow-md grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Himachal Government</span>
                    </div>
                </div>

                {/* Bottom Row: Text / Badges */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-4 px-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <span className="material-symbols-outlined text-4xl text-primary">handshake</span>
                        <div className="text-left">
                            <span className="block text-slate-900 dark:text-white font-bold text-lg">Insurance Partners</span>
                            <span className="block text-slate-500 dark:text-slate-400 text-sm">Empanelled with TPA</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-4 px-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <span className="material-symbols-outlined text-4xl text-green-500">payments</span>
                        <div className="text-left">
                            <span className="block text-slate-900 dark:text-white font-bold text-lg">Cashless Insurance</span>
                            <span className="block text-slate-500 dark:text-slate-400 text-sm">Hassle-free Admissions</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accreditations;
