import React, { useState } from 'react';
import CountUp from './CountUp';

const reviews = [
    {
        name: "Ramesh Kumar",
        location: "Sundernagar",
        date: "2 months ago",
        text: "Very good doctors and caring staff. My mother had her knee surgery here and recovered very fast. Highly recommended for anyone in Sundernagar."
    },
    {
        name: "Anita Sharma",
        location: "Mandi",
        date: "3 months ago",
        text: "Best hospital in Sundernagar. Clean rooms, polite staff and the doctors are very experienced. Got excellent treatment for my wife."
    },
    {
        name: "Suresh Mehta",
        location: "Sunder Nagar",
        date: "1 month ago",
        text: "Emergency service is very fast. They attended my father within minutes of arrival. 24x7 staff is always ready. Thank you Mannat!"
    },
    {
        name: "Priya Thakur",
        location: "Sundernagar",
        date: "3 weeks ago",
        text: "Consulted for my child's fever and the pediatrician was very thorough and kind. The medicines worked in 2 days."
    },
    {
        name: "Vijay Singh",
        location: "Mandi",
        date: "5 months ago",
        text: "Had surgery here and everything went smoothly. The operation theatre is modern and the post-op care was excellent. Very satisfied."
    },
    {
        name: "Meena Devi",
        location: "Sundernagar",
        date: "6 weeks ago",
        text: "Good hospital with all facilities. Doctors explain everything clearly before treatment. Affordable charges compared to city hospitals."
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
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.7 out of 5 stars</h2>
                    <p className="text-gray-600 text-lg mb-8">Based on 200+ Patient Reviews on Google</p>

                    <a
                        href="https://maps.google.com"
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
