import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        title: '50000+ Happy Patients',
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
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg viewBox="0 0 24 24" className="w-8 h-8">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <div className="flex text-yellow-500 text-2xl tracking-widest mt-1">
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

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16 px-2"
                    >
                        {reviews.map((review, i) => (
                            <SwiperSlide key={i} className="h-auto">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-l-[#1d4ed8] h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex text-yellow-500 text-lg tracking-wider">★★★★★</div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full">Google Review</span>
                                    </div>
                                    <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10 flex-grow">"{review.text}"</p>
                                    <div className="mt-auto">
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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

        </section>
    );
};

export default ReviewsSection;
