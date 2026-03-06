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
        summary: 'Renowned Orthopedic & Spine Surgeon with 21+ years of experience. Specialist in Endoscopic & Minimal Invasive Spine Surgery with over 10000 successful spine surgeries and 2500+ joint replacements.',
        bio: [
            'Dr. M.A Basit is a renowned Orthopedic & Spine Surgeon with over 21 years of experience.',
            'He specializes in Endoscopic & Minimal Invasive Spine Surgery — pioneering techniques for faster recovery and minimal scarring.',
            'He has done more than 10000 successful spine surgeries — including Discectomy (cervical & lumbar), USS, and Scoliosis correction.',
            'He has done more than 2500 successful hip & knee replacements with world class implants & excellent results.',
        ],
        expertise: [
            'Endoscopic & Minimal Invasive Spine Surgery',
            'Spine (Discectomy, USS, Spinal Trauma & Tumors)',
            'Joint Replacement — affordable price & world class implants (knee, hip, elbow)',
            'Trauma (complex trauma & all bone fixation)',
            'Deformity Correction & Limb Lengthening Surgeries',
        ],
        stats: [
            { label: 'Spine Surgeries', value: '10000+' },
            { label: 'Joint Replacements', value: '2500+' },
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
    {
        name: 'Dr. Sunny Gupta',
        degree: 'MBBS, MD (Anesthesia), EDIAC',
        role: 'Consultant Anesthesiologist & Pain Management',
        fellowship: 'Senior Residency: AIIMS New Delhi',
        experience: 'Highly Experienced',
        image: '/doctors/dr-sunny-gupta.jpg',
        summary: 'Highly qualified Anesthesiologist and Critical Care specialist. Diplomat in European Anesthesia and Critical Care (EDIAC) with extensive experience in pain management.',
        bio: [
            'Dr. Sunny Gupta is a highly skilled Consultant Anesthesiologist and Pain Management expert.',
            'He completed his MBBS from GMC Jammu and his MD in Anesthesia and Critical Care.',
            'He holds the prestigious Diplomat in European Anesthesia and Critical Care (EDIAC).',
            'He has previously served as a Senior Resident at AIIMS New Delhi and as a Consultant at Fortis Hospital Kangra.',
        ],
        expertise: [
            'Anesthesia & Critical Care',
            'Pain Management',
            'Perioperative Care',
            'Advanced Life Support',
            'Regional Anesthesia',
        ],
        stats: [
            { label: 'Ex-Consultant', value: 'Fortis' },
            { label: 'Sr. Residency', value: 'AIIMS' },
            { label: 'Specialty', value: 'Pain Care' },
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
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                {/* Specialists Section — matches reference design */}
                <section style={{
                    background: 'linear-gradient(135deg, #ede9fe 0%, #e0e7ff 50%, #ede9fe 100%)',
                    padding: '80px 0 100px',
                    minHeight: '100vh',
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

                        {/* Header Row */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                {/* Pill Badge */}
                                <span style={{
                                    display: 'inline-block',
                                    background: 'rgba(109, 40, 217, 0.08)',
                                    border: '1.5px solid rgba(109, 40, 217, 0.2)',
                                    color: '#6d28d9',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    padding: '6px 18px',
                                    borderRadius: '50px',
                                    marginBottom: '16px',
                                }}>Our Doctors</span>
                                <h1 style={{
                                    fontSize: 'clamp(28px, 4vw, 42px)',
                                    fontWeight: '800',
                                    color: '#1e1b4b',
                                    margin: '0',
                                    lineHeight: '1.2',
                                }}>Meet Our Expert Doctors</h1>
                            </div>

                        </div>

                        {/* Doctor Cards Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '24px',
                            maxWidth: '600px',
                        }}>
                            {specialists.map((doc, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedDoctor(doc)}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        position: 'relative',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        aspectRatio: '3 / 3.5',
                                        background: i % 2 === 0
                                            ? 'linear-gradient(160deg, #c7d2fe 0%, #e0e7ff 40%, #ddd6fe 100%)'
                                            : 'linear-gradient(160deg, #ddd6fe 0%, #ede9fe 40%, #c7d2fe 100%)',
                                        boxShadow: hoveredIndex === i
                                            ? '0 20px 40px rgba(79, 70, 229, 0.2), 0 0 0 2px rgba(79, 70, 229, 0.15)'
                                            : '0 4px 20px rgba(0, 0, 0, 0.06)',
                                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                        transform: hoveredIndex === i ? 'translateY(-6px)' : 'translateY(0)',
                                    }}
                                >
                                    {/* Doctor Image */}
                                    <img
                                        src={doc.image}
                                        alt={doc.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top center',
                                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                            transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                                        }}
                                    />

                                    {/* Plus Icon Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '14px',
                                        right: '14px',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: '#4f46e5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)',
                                        transition: 'transform 0.3s ease',
                                        transform: hoveredIndex === i ? 'scale(1.15) rotate(90deg)' : 'scale(1)',
                                        zIndex: 3,
                                    }}>+</div>

                                    {/* Name Overlay — revealed on hover */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        padding: '24px 16px 18px',
                                        background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0) 100%)',
                                        backdropFilter: 'blur(6px)',
                                        transform: hoveredIndex === i ? 'translateY(0)' : 'translateY(100%)',
                                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                        zIndex: 2,
                                    }}>
                                        <p style={{
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            color: '#1e1b4b',
                                            margin: '0 0 2px',
                                            lineHeight: '1.3',
                                        }}>{doc.name}</p>
                                        <p style={{
                                            fontSize: '12px',
                                            fontWeight: '500',
                                            color: '#6d28d9',
                                            margin: '0',
                                            letterSpacing: '0.3px',
                                        }}>{doc.role}</p>
                                    </div>

                                    {/* Always-visible subtle name at bottom for non-hovered state */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        padding: '40px 16px 16px',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                                        opacity: hoveredIndex === i ? 0 : 1,
                                        transition: 'opacity 0.3s ease',
                                        zIndex: 1,
                                    }}>
                                        <p style={{
                                            fontSize: '15px',
                                            fontWeight: '700',
                                            color: '#fff',
                                            margin: '0 0 1px',
                                        }}>{doc.name}</p>
                                        <p style={{
                                            fontSize: '11px',
                                            fontWeight: '500',
                                            color: 'rgba(255,255,255,0.8)',
                                            margin: '0',
                                        }}>{doc.degree}</p>
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
