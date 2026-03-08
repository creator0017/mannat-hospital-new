import React from 'react';

const reasons = [
    { icon: 'personal_injury', title: '10,000+ Surgeries', description: 'Proven track record of delivering successful surgical outcomes across our departments.' },
    { icon: 'verified', title: '15+ Years Experience', description: 'A trusted name in healthcare serving the community for over a decade.' },
    { icon: 'local_hospital', title: '24/7 Emergency', description: 'Round-the-clock emergency support to handle any medical crisis instantly.' },
    { icon: 'stethoscope', title: 'Specialist Doctors', description: 'Highly qualified and skilled doctors leading our various medical departments.' },
    { icon: 'medical_services', title: 'Advanced Technology', description: 'Equipped with modern technology and state-of-the-art operation theaters.' },
    { icon: 'volunteer_activism', title: 'Patient-Centric Care', description: 'Compassionate care focused entirely on patient recovery and overall well-being.' }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-primary text-white animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Why Mannat Hospital</h2>
                    <h3 className="text-4xl font-bold">Unrivaled Expertise. Precision Technology.</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
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
