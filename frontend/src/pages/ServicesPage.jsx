import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const serviceCategories = [
    {
        title: 'Orthopedic & Spine Surgery',
        icon: 'skeleton',
        color: 'from-teal-500 to-emerald-600',
        services: [
            'Stitchless Endoscopic Spine Surgery',
            'Transforaminal Endoscopic Spine Surgery',
            'Interlaminar Endoscopic Spine Surgery',
            'Interlaminar Endoscopic Recess Decompression',
            'Endoscopic Fusion Surgery',
            'Deformity Correction Surgery for Spine',
            'Minimal Invasive Spine Surgery',
        ],
    },
    {
        title: 'Joint Replacement Surgeries',
        icon: 'orthopedics',
        color: 'from-blue-500 to-indigo-600',
        services: [
            'Knee Replacement Surgery',
            'Hip Replacement Surgery',
            'Elbow Replacement Surgery',
            'Shoulder Arthroplasty',
            'Knee & Shoulder Arthroscopy',
            'Rehabilitations & Physiotherapy',
        ],
    },
    {
        title: 'Trauma Surgeries',
        icon: 'emergency',
        color: 'from-red-500 to-rose-600',
        services: [
            'Complex Trauma Surgery',
            'Long Bone Fixation',
            'Corrective Surgeries',
            'Tendon Transfer',
            'Upper & Lower Limb Fracture Fixation',
        ],
    },
];

const ServicesPage = ({ onBookClick }) => {
    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                {/* Hero */}
                <section className="py-20 bg-primary text-white animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">Specialities & Services</h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">Comprehensive orthopedic, spine, and trauma surgical services with the latest techniques and world-class care.</p>
                    </div>
                </section>

                {/* Services Categories */}
                <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
                        {serviceCategories.map((category, idx) => (
                            <div key={idx} className="animate-fade-in">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`size-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                        <span className="material-symbols-outlined text-3xl text-white">{category.icon}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white">{category.title}</h2>
                                        <p className="text-sm text-slate-400 mt-1">{category.services.length} services available</p>
                                    </div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {category.services.map((service, i) => (
                                        <div
                                            key={i}
                                            className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`size-10 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
                                                    <span className="material-symbols-outlined text-lg text-white">check_circle</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{service}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                {idx < serviceCategories.length - 1 && (
                                    <div className="border-b border-slate-100 dark:border-slate-800 mt-16" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-primary text-white text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h3 className="text-3xl font-bold mb-4">Need a Consultation?</h3>
                        <p className="text-white/70 mb-8">Book an appointment with our specialists for expert diagnosis and treatment.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={onBookClick}
                                className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-slate-100 transition-all shadow-lg"
                            >
                                Book Appointment
                            </button>
                            <a href="tel:7590878764" className="border-2 border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                                Call: 7590878764
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ServicesPage;
