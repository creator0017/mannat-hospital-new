import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ServicePageLayout = ({
    title, subtitle,
    overview,
    symptoms,
    causes,
    diagnosis,
    treatments,
    doctor,
    faqs,
    onBookClick
}) => {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <Header onBookClick={onBookClick} />

            {/* Hero Section */}
            <div className="bg-primary pt-32 pb-20 px-6 lg:px-10 text-white relative overflow-hidden shadow-lg">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">{title}</h1>
                    <p className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-sm">{subtitle}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">info</span>
                            Condition Overview
                        </h2>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">{overview}</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Symptoms */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-red-500">warning</span>
                                Symptoms
                            </h2>
                            <ul className="space-y-3">
                                {symptoms.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-accent text-sm mt-1 flex-shrink-0">check_circle</span>
                                        <span className="text-slate-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Causes */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="material-symbols-outlined text-orange-500">search</span>
                                Medical Causes
                            </h2>
                            <ul className="space-y-3">
                                {causes.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-accent text-sm mt-1 flex-shrink-0">check_circle</span>
                                        <span className="text-slate-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Diagnosis & Treatment */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">medical_services</span>
                            Diagnosis & Treatment Options
                        </h2>

                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b pb-2">Diagnostic Tests</h3>
                            <ul className="space-y-2">
                                {diagnosis.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b pb-2">Treatment Approach</h3>
                            <ul className="space-y-2">
                                {treatments.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-slate-600">
                                        <span className="material-symbols-outlined text-green-500 mt-0.5">verified</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                                    <button
                                        className="w-full text-left p-5 bg-slate-50 flex items-center justify-between font-bold text-slate-800 focus:outline-none hover:bg-slate-100"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="pr-4">{faq.question}</span>
                                        <span className="material-symbols-outlined flex-shrink-0 text-primary transition-transform duration-300" style={{ transform: openFaqIndex === index ? 'rotate(180deg)' : '' }}>
                                            expand_more
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-5 text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Doctor Expertise */}
                    <div className="bg-white p-6 rounded-3xl shadow-md border-t-4 border-primary">
                        <h3 className="text-lg font-bold text-slate-800 mb-6">Expert Specialist</h3>
                        <div className="text-center mb-6">
                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-slate-100">
                                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900">{doctor.name}</h4>
                            <p className="text-sm font-semibold text-primary">{doctor.role}</p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">Key Services</p>
                            <ul className="space-y-2 text-sm text-slate-700">
                                {doctor.services.map((svc, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px] text-accent">arrow_right</span>
                                        {svc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us Minimal */}
                    <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-6 text-white">Why Mannat Hospital?</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span className="text-sm text-slate-300">Experienced Specialists</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span className="text-sm text-slate-300">Advanced Surgical Care</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span className="text-sm text-slate-300">24/7 Emergency Services</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span className="text-sm text-slate-300">Modern State-of-the-art Equipment</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sticky CTA Widget */}
                    <div className="sticky top-32 bg-gradient-to-br from-primary to-blue-800 p-8 rounded-3xl text-white shadow-2xl">
                        <h3 className="text-2xl font-black mb-3 text-white">Need Expert Advice?</h3>
                        <p className="text-blue-100 text-sm mb-6 leading-relaxed">Schedule a consultation with our experienced specialists today and take the first step towards recovery.</p>

                        <button onClick={onBookClick} className="w-full bg-white text-primary font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 hover:shadow-lg transition-all mb-3 text-sm tracking-wide">
                            <span className="material-symbols-outlined">calendar_month</span>
                            Book Appointment
                        </button>

                        <a href="https://wa.me/917590878764" target="_blank" rel="noreferrer" className="w-full bg-green-500 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 hover:shadow-lg transition-all text-sm tracking-wide">
                            WhatsApp Consultation
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicePageLayout;
