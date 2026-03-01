import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const facilities = [
    { icon: 'bed', title: 'Indoor Facility', desc: 'Super Delux, Delux Private Rooms & General Wards for comfortable patient stay and recovery.' },
    { icon: 'ambulance', title: '24 Hours Ambulance', desc: 'Round-the-clock fully equipped ambulance service for emergency patient transport.' },
    { icon: 'vaccines', title: '24 Hours Pharmacy', desc: 'In-house pharmacy stocked with all essential medications available 24 hours a day.' },
    { icon: 'biotech', title: 'Fully Computerized Lab', desc: 'Advanced pathology and biochemistry lab for accurate and rapid diagnostic testing.' },
    { icon: 'radiology', title: 'Digital X-Ray & C-ARM', desc: 'High-resolution digital X-ray and C-ARM imaging for detailed surgical and diagnostic imaging.' },
    { icon: 'local_hospital', title: 'High Tech Modular OT', desc: 'State-of-the-art laminar flow operation theaters with advanced surgical equipment.' },
    { icon: 'emergency', title: '24 Hours Emergency — Orthopedics & Trauma', desc: 'Round-the-clock emergency services with trained orthopedic and trauma care specialists.' },
    { icon: 'medical_services', title: '24×7 Medical Emergency', desc: 'Full-time medical emergency department ensuring immediate care at any time of day or night.' },
];

const FacilitiesPage = ({ onBookClick }) => {
    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                {/* Hero */}
                <section className="py-20 bg-primary text-white animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">Our Facilities</h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">World-class infrastructure and modern technology to ensure the best patient care.</p>
                    </div>
                </section>

                {/* Facilities Grid */}
                <section className="py-24 bg-background-light dark:bg-background-dark/50 animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {facilities.map((item, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                                    <div className="size-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FacilitiesPage;
