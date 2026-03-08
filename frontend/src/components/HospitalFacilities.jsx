import React from 'react';

const facilities = [
    { icon: 'surgical', title: 'Modular Operation Theatre', description: 'State-of-the-art modular OTs designed for zero-infection surgical precision.' },
    { icon: 'monitor_heart', title: 'ICU (Intensive Care)', description: 'Advanced life support and continuous monitoring for critical patients.' },
    { icon: 'medical_information', title: 'Digital X-Ray', description: 'High-resolution digital imaging for accurate and fast diagnoses.' },
    { icon: 'biotech', title: 'Laboratory Services', description: 'In-house diagnostic lab offering a comprehensive range of rapid tests.' },
    { icon: 'medication', title: 'Pharmacy', description: '24/7 fully stocked pharmacy ensuring immediate availability of all medicines.' },
    { icon: 'airport_shuttle', title: 'Ambulance Service', description: 'Rapid response ambulance service with life-saving equipment onboard.' },
    { icon: 'emergency', title: 'Emergency Care', description: 'Dedicated casualty department equipped to handle critical traumas 24x7.' }
];

const HospitalFacilities = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-background-dark/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">World-Class Infrastructure</h2>
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Hospital Facilities</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        We provide state-of-the-art medical facilities ensuring the highest standards of safety, accuracy, and patient comfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {facilities.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white">{item.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalFacilities;
