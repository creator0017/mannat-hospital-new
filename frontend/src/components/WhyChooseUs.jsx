import React from 'react';

const reasons = [
    { icon: 'diversity_1', title: 'Expert Surgeons', description: 'Board-certified specialists with international training.' },
    { icon: 'precision_manufacturing', title: 'Advanced Tech', description: 'Next-gen endoscopic and robotic-assisted equipment.' },
    { icon: 'health_and_safety', title: '24/7 Care', description: 'Always available for emergencies and critical needs.' },
    { icon: 'favorite', title: 'Patient First', description: 'Personalized treatment plans for every individual.' }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-primary text-white animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Why Mannat Hospital</h2>
                    <h3 className="text-4xl font-bold">Unrivaled Expertise. Precision Technology.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {reasons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                            <p className="text-white/70 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
