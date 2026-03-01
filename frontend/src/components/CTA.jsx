import React from 'react';

const CTA = ({ onBookClick }) => {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark animate-fade-in">
            <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to regain your mobility?</h2>
                        <p className="text-slate-500 dark:text-slate-400">Schedule a consultation with our spine specialists today and take the first step towards a pain-free life.</p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <button
                            onClick={onBookClick}
                            className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg whitespace-nowrap"
                        >
                            Book Online Now
                        </button>
                        <p className="text-center text-sm font-medium text-slate-400">Or call: <a href="tel:7590878764" className="hover:text-primary transition-colors">+91 75908 78764</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
