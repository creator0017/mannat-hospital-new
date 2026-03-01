import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const specialists = [
    {
        name: 'Dr. M.A Basit',
        degree: 'MBBS, MS (Ortho)',
        role: 'Endoscopic & Minimal Invasive Spine Surgeon',
        fellowship: 'Fellowship in Spine Surgery',
        experience: '21+ Years Experience',
        image: '/doctors/dr-basit.png',
        summary: 'Renowned Orthopedic & Spine Surgeon with 21+ years of experience. Specialist in Endoscopic & Minimal Invasive Spine Surgery with over 1000 successful spine surgeries and 500+ joint replacements.',
        bio: [
            'Dr. M.A Basit is a renowned Orthopedic & Spine Surgeon with over 21 years of experience.',
            'He specializes in Endoscopic & Minimal Invasive Spine Surgery — pioneering techniques for faster recovery and minimal scarring.',
            'He has done more than 1000 successful spine surgeries — including Discectomy (cervical & lumbar), USS, and Scoliosis correction.',
            'He has done more than 500 successful hip & knee replacements with world class implants & excellent results.',
        ],
        expertise: [
            'Endoscopic & Minimal Invasive Spine Surgery',
            'Spine (Discectomy, USS, Spinal Trauma & Tumors)',
            'Joint Replacement — affordable price & world class implants (knee, hip, elbow)',
            'Trauma (complex trauma & all bone fixation)',
            'Deformity Correction & Limb Lengthening Surgeries',
        ],
        stats: [
            { label: 'Spine Surgeries', value: '1000+' },
            { label: 'Joint Replacements', value: '500+' },
            { label: 'Years Experience', value: '21+' },
        ],
    },
    {
        name: 'Dr. Sanjay Dhiman',
        degree: 'MBBS, MD (Medicine)',
        role: 'Consultant Physician',
        fellowship: 'Specialist in Diabetes, Hypertension & Heart Disease',
        experience: '26+ Years Experience',
        image: '/doctors/dr-sanjay-dhiman.png',
        summary: 'Highly experienced physician with over 26 years of expertise in managing Diabetes, Hypertension, and Heart Disease. Dedicated to comprehensive patient care and chronic disease management.',
        bio: [
            'Dr. Sanjay Dhiman is a senior consultant physician at Mannat Hospital with over 26 years of rich clinical experience.',
            'He specializes in the management and treatment of chronic diseases including Diabetes, Hypertension, and Heart Disease.',
            'Known for his compassionate approach and thorough clinical assessment, Dr. Dhiman is committed to providing the best possible outcomes for his patients.',
            'His extensive experience enables him to handle complex medical cases with precision and care.',
        ],
        expertise: [
            'Diabetes Management & Treatment',
            'Hypertension (High Blood Pressure) Care',
            'Heart Disease Diagnosis & Management',
            'General Medicine & Internal Medicine',
            'Chronic Disease Management',
        ],
        stats: [
            { label: 'Years Experience', value: '26+' },
            { label: 'Specializations', value: '3+' },
            { label: 'Patients Treated', value: '10K+' },
        ],
    },
];

/* ─── Modal Component ─── */
const DoctorModal = ({ doctor, onClose, onBookClick }) => {
    if (!doctor) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

            {/* Modal */}
            <div
                className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
                style={{ animation: 'scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors group shadow-lg"
                >
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-red-500 transition-colors">close</span>
                </button>

                {/* Top Section — Image + Name */}
                <div className="relative">
                    <div className="h-72 md:h-80 overflow-hidden rounded-t-3xl bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full object-contain object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-1">{doctor.name}</h2>
                        <p className="text-teal-300 font-semibold text-lg">{doctor.degree}</p>
                        <p className="text-white/70 text-sm mt-1">{doctor.fellowship}</p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 border-b border-slate-100 dark:border-slate-800">
                    {doctor.stats.map((stat, i) => (
                        <div key={i} className="text-center py-5 border-r last:border-r-0 border-slate-100 dark:border-slate-800">
                            <p className="text-2xl md:text-3xl font-black text-primary">{stat.value}</p>
                            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Body Content */}
                <div className="p-8 space-y-8">
                    {/* About */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">person</span>
                            About
                        </h3>
                        <div className="space-y-3">
                            {doctor.bio.map((line, i) => (
                                <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{line}</p>
                            ))}
                        </div>
                    </div>

                    {/* Expertise */}
                    <div>
                        <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">workspace_premium</span>
                            Areas of Expertise
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {doctor.expertise.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3.5">
                                    <span className="material-symbols-outlined text-primary text-lg mt-0.5 flex-shrink-0">check_circle</span>
                                    <span className="text-slate-700 dark:text-slate-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={() => { onClose(); if (onBookClick) onBookClick(); }}
                            className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl py-3.5 px-6 text-center font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
                        >
                            Book Appointment
                        </button>
                        <Link to="/contact" onClick={onClose} className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 rounded-xl py-3.5 px-6 text-center font-semibold transition-all">
                            Contact Hospital
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ─── Main Page ─── */
const SpecialistsPage = ({ onBookClick }) => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                {/* Hero */}
                <section className="py-20 bg-primary text-white animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">Our Specialists</h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">Meet the expert team of doctors and surgeons dedicated to your health and well-being.</p>
                    </div>
                </section>

                {/* Specialist Cards */}
                <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
                    <div className="max-w-6xl mx-auto px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {specialists.map((doc, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                                    onClick={() => setSelectedDoctor(doc)}
                                >
                                    {/* Image */}
                                    <div className="relative h-72 overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                                        <img
                                            src={doc.image}
                                            alt={doc.name}
                                            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        {/* Floating Badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-1.5 shadow-lg">
                                            <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{doc.experience}</span>
                                        </div>
                                        {/* Name overlay on image */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl font-black text-white mb-0.5">{doc.name}</h3>
                                            <p className="text-teal-300 font-semibold text-sm">{doc.degree}</p>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <p className="text-accent font-bold text-sm uppercase tracking-wider mb-2">{doc.role}</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{doc.summary}</p>
                                        <p className="text-xs text-slate-400 dark:text-slate-500 mb-5 italic">{doc.fellowship}</p>

                                        {/* Stats Mini Row */}
                                        <div className="flex items-center gap-4 mb-5">
                                            {doc.stats.map((stat, j) => (
                                                <div key={j} className="flex-1 text-center bg-slate-50 dark:bg-slate-800/50 rounded-xl py-2.5">
                                                    <p className="text-lg font-black text-primary">{stat.value}</p>
                                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* View Profile Button */}
                                        <button className="w-full bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-xl py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                            <span>View Full Profile</span>
                                            <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Modal */}
            <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} onBookClick={onBookClick} />

            {/* Inline keyframes for modal animation */}
            <style>{`
                @keyframes scaleIn {
                    0% { opacity: 0; transform: scale(0.92) translateY(20px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
            `}</style>
        </>
    );
};

export default SpecialistsPage;
