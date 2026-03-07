import React, { useState } from 'react';
import CountUp from './CountUp';

const reviews = [
    {
        name: "Savita Thakur",
        location: "Patient",
        date: "1 week ago",
        text: "I recently visited mannat hospital for general spine check up... I underwent successfully spine operation by Dr. M A Basit. Due to his hard work and by grace of God I am completely healthy today. Outstanding hospital for spine care!"
    },
    {
        name: "Amzad Rishu",
        location: "Patient",
        date: "1 month ago",
        text: "My father was suffering from severe back pain... We consulted Dr. M. A. Basit, and it turned out to be the best decision. He performed the surgery, and my father's pain was completely relieved. I highly recommend him for stitch-less endoscopic spine surgery."
    },
    {
        name: "SARVESH GROVER",
        location: "Patient",
        date: "4 months ago",
        text: "I had been struggling with a persistent back problem... Thanks to their effective treatment and continued support, I've seen a significant improvement in my condition. I would highly recommend Dr. MA Basit and their team at Mannat hospital, Sundernagar."
    },
    {
        name: "Cristiano",
        location: "Patient",
        date: "5 months ago",
        text: "The doctors here are highly skilled, the hospital is neat and clean, and the doctors are caring and take time to explain patients in detail... Highly recommend this hospital for orthopedic care. Dr M.A Basit is the Best Orthopedic and Endoscopic spine surgeon!"
    },
    {
        name: "Neha Khan",
        location: "Patient",
        date: "5 months ago",
        text: "I recently visited Mannat Hospital for orthopedic treatment and surgery, and my overall experience was excellent. Dr. M. Basit is highly professional, knowledgeable, and caring. The nursing staff was attentive and polite."
    },
    {
        name: "Ishika Chaudhary",
        location: "Patient",
        date: "4 months ago",
        text: "I had a very positive impact, feeling safe and supported, and having my health issues resolved efficiently by kind, professional staff. Dr. M.A Basit is highly professional and knowledgeable. The nursing staff is very caring. 🌟🌟🌟🌟🌟🌟"
    }
];

const trustBadges = [
    {
        icon: 'emergency',
        title: '24x7 Emergency',
        sub: 'Always available for emergencies',
        borderColor: 'border-t-red-600',
        iconColor: 'text-red-600'
    },
    {
        icon: 'medical_services',
        title: 'Expert Doctors',
        sub: 'Qualified specialists in every dept',
        borderColor: 'border-t-[#1d4ed8]',
        iconColor: 'text-[#1d4ed8]'
    },
    {
        icon: 'domain',
        title: 'Modern Facilities',
        sub: 'Equipped OT, ICU & diagnostics',
        borderColor: 'border-t-[#1d4ed8]',
        iconColor: 'text-[#1d4ed8]'
    },
    {
        icon: 'health_and_safety',
        title: 'Insurance Accepted',
        sub: 'Cashless treatment available',
        borderColor: 'border-t-green-600',
        iconColor: 'text-green-600'
    },
    {
        icon: 'payments',
        title: 'Affordable Care',
        sub: 'Quality treatment at fair prices',
        borderColor: 'border-t-green-600',
        iconColor: 'text-green-600'
    },
    {
        icon: 'diversity_1',
        title: '500+ Happy Patients',
        sub: 'Trusted by families across Mandi',
        borderColor: 'border-t-orange-600',
        iconColor: 'text-orange-600'
    }
];

const ReviewsSection = () => {
    return (
        <section className="bg-white" id="reviews-trust">
            {/* SECTION 1 — GOOGLE RATING BANNER */}
            <div className="bg-[#eff6ff] py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google Logo"
                            className="w-8 h-8"
                        />
                        <div className="flex text-yellow-500 text-2xl tracking-widest">
                            ★★★★★
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.5 out of 5 stars</h2>
                    <p className="text-gray-600 text-lg mb-8">Based on 193 Patient Reviews on Google</p>

                    <a
                        href="https://maps.app.goo.gl/jaMNnyxF2vHhQDRP7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm hover:shadow-md text-[#1d4ed8] font-bold px-8 py-4 rounded-xl transition-all"
                    >
                        See All Reviews on Google <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </a>
                </div>
            </div>

            {/* SECTION 2 — REVIEW CARDS */}
            <div className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Real reviews from real patients in Sundernagar & Mandi district</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-l-[#1d4ed8]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex text-yellow-500 text-lg tracking-wider">★★★★★</div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full">Google Review</span>
                                </div>
                                <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                                <div className="mt-auto">
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 3 — TRUST BADGES */}
            <div className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Patients Trust Mannat Hospital</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {trustBadges.map((badge, i) => (
                            <div key={i} className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border-t-4 ${badge.borderColor}`}>
                                <span className={`material-symbols-outlined text-4xl mb-4 ${badge.iconColor}`}>
                                    {badge.icon}
                                </span>
                                <h4 className="font-bold text-gray-900 text-lg mb-2">{badge.title}</h4>
                                <p className="text-sm text-gray-500">{badge.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 4 — STATS BAR */}
            <div className="bg-[#1e3a8a] text-white py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            <CountUp end={500} suffix="+" duration={2000} />
                        </div>
                        <p className="text-blue-200 font-medium">Happy Patients</p>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            <CountUp end={10} suffix="+" duration={2000} />
                        </div>
                        <p className="text-blue-200 font-medium">Years of Care</p>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            <CountUp end={6} duration={2000} />
                        </div>
                        <p className="text-blue-200 font-medium">Departments</p>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            24x7
                        </div>
                        <p className="text-blue-200 font-medium">Emergency</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
