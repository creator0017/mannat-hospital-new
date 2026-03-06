import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SpineSurgerySeoPage = ({ onBookClick }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header onBookClick={onBookClick} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-[#1e3a8a] text-white py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2000&auto=format&fit=crop"
                            alt="Spine Surgery at Mannat Hospital"
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                        <div className="max-w-3xl">
                            <span className="inline-block bg-white/20 text-white backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-white/30">
                                Department of Orthopaedics & Spine Surgery
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                                Best Endoscopic Spine Surgery in <span className="text-blue-300">Sundernagar, Himachal</span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                                Led by Dr. M.A. Basit, Mannat Hospital is the premier institute for Minimal Invasive and Stitch-less Endoscopic Spine Surgery in Mandi district. Regain your mobility with 10,000+ successful surgeries.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={onBookClick}
                                    className="bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-black/20 hover:-translate-y-1 transition-transform"
                                >
                                    Book Consultation Now
                                </button>
                                <a
                                    href="tel:+917590878764"
                                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">call</span>
                                    +91 75908 78764
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Endoscopic Spine Surgery?</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        Endoscopic spine surgery is an advanced, state-of-the-art form of minimally invasive spine surgery designed to provide patients a quicker recovery and less pain than traditional spine surgery.
                                        At Mannat Hospital, we use a small tube through a micro-incision (less than 1 cm) to remove herniated discs or bone spurs that compress spinal nerves.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        This 'stitch-less' technique ensures minimal damage to surrounding muscles, allowing patients to walk the same day and often return home within 24 hours.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Conditions We Treat</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Slip Disc (Herniated Disc)",
                                            "Sciatica Nerve Pain",
                                            "Spinal Stenosis",
                                            "Cervical Spondylosis (Neck Pain)",
                                            "Lumbar Spondylosis (Back Pain)",
                                            "Scoliosis & Deformities"
                                        ].map((condition, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <span className="material-symbols-outlined text-[#1d4ed8]">check_circle</span>
                                                <span className="font-bold text-gray-800">{condition}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Mannat Hospital?</h2>
                                    <ul className="space-y-4">
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-green-600 text-3xl shrink-0">military_tech</span>
                                            <div>
                                                <h4 className="font-bold text-xl text-gray-900">Dr. M.A. Basit - Expert Surgeon</h4>
                                                <p className="text-gray-600">Renowned orthopedic and endoscopic spine surgeon with thousands of successful procedures in Himachal Pradesh.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-green-600 text-3xl shrink-0">speed</span>
                                            <div>
                                                <h4 className="font-bold text-xl text-gray-900">Faster Recovery</h4>
                                                <p className="text-gray-600">Our minimal invasive techniques mean less tissue damage, shorter hospital stays, and quicker return to normal life.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-green-600 text-3xl shrink-0">health_and_safety</span>
                                            <div>
                                                <h4 className="font-bold text-xl text-gray-900">Cashless Insurance Empanelment</h4>
                                                <p className="text-gray-600">We accept Ayushman Bharat, HIMCARE, ECHS, and major health insurances for hassle-free treatment.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Patient Google Review */}
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-[#1d4ed8]">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex text-yellow-500 text-lg tracking-wider">★★★★★</div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full">Google Review</span>
                                    </div>
                                    <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">"I recently visited mannat hospital for general spine check up... I underwent successfully spine operation by Dr. M A Basit. Due to his hard work and by grace of God I am completely healthy today. Outstanding hospital for spine care!"</p>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Savita Thakur</h4>
                                        <p className="text-sm text-gray-500">Spine Patient</p>
                                    </div>
                                </div>

                                {/* FAQs */}
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-xl p-6">
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Is endoscopic spine surgery safe?</h3>
                                            <p className="text-gray-600">Yes, it is highly safe. Because the incision is microscopic, the risk of infection, bleeding, and muscle damage is significantly lower compared to open traditional surgery.</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-xl p-6">
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">Will I be awake during the surgery?</h3>
                                            <p className="text-gray-600">Depending on the exact procedure, endoscopic spine surgery can often be performed under local anesthesia with conscious sedation, meaning you are relaxed but able to communicate with the surgeon.</p>
                                        </div>
                                        <div className="border border-gray-200 rounded-xl p-6">
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">How long is the recovery?</h3>
                                            <p className="text-gray-600">Many patients experience immediate relief from nerve pain and can walk within hours of surgery. Most return home the same day or next morning, and can resume light activities within 1-2 weeks.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Sidebar sticky */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
                                    <h3 className="text-2xl font-black text-gray-900 mb-6">Schedule Your Spine Consultation</h3>

                                    <div className="flex flex-col gap-4 mb-8">
                                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#1d4ed8] shrink-0">
                                                <span className="material-symbols-outlined">calendar_month</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Availability</p>
                                                <p className="font-bold text-gray-900">Mon - Sat, 10 AM to 5 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100">
                                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                                                <span className="material-symbols-outlined">emergency</span>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Emergency Care</p>
                                                <p className="font-bold text-gray-900">24x7 Available</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onBookClick}
                                        className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-white py-4 rounded-xl font-black text-lg shadow-md transition-colors mb-4"
                                    >
                                        Book Appointment
                                    </button>

                                    <a
                                        href="https://wa.me/917590878764"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-colors"
                                    >
                                        WhatsApp Us
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SpineSurgerySeoPage;
