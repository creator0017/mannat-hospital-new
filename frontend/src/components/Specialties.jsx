import React from 'react';

const specialties = [
    { icon: 'skeleton', title: 'Spine Surgery', description: 'Pioneering minimal invasive and endoscopic techniques for faster recovery and less pain.' },
    { icon: 'orthopedics', title: 'Orthopedics', description: 'Comprehensive care for bone, joint, and muscle health, from trauma to total replacements.' },
    { icon: 'child_care', title: 'Pediatric Surgery', description: 'Specialized, compassionate surgical solutions designed specifically for our youngest patients.' },
    { icon: 'medical_services', title: 'General Surgery', description: 'Expert surgical interventions across a wide range of conditions using modern technology.' },
    { icon: 'stethoscope', title: 'Internal Medicine', description: 'Holistic health management focused on prevention, diagnosis, and non-surgical treatment.' },
    { icon: 'emergency', title: '24/7 Emergency', description: 'Round-the-clock critical care support with immediate response for any medical emergency.' }
];

const Specialties = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">World-Class Care</h2>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Our Specialized Departments</h3>
                    </div>
                    <a className="text-primary font-bold flex items-center gap-2 group" href="#">
                        View all specialties
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
                            <div className="size-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specialties;
