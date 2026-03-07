import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departments } from '../data/departments';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const DepartmentDetail = ({ onBookClick }) => {
    const { slug } = useParams();
    const department = departments.find(d => d.slug === slug);
    const [openFaq, setOpenFaq] = useState(null);

    // Internal booking state specifically for the form at the bottom
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        department: department?.shortName || '',
        date: '',
        message: ''
    });

    if (!department) {
        return (
            <>
                <Header onBookClick={onBookClick} />
                <div className="min-h-[60vh] flex items-center justify-center text-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
                        <Link to="/departments" className="text-primary hover:underline">View All Departments</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Mannat Hospital",
        "url": "https://mannat-hospital-new.vercel.app",
        "telephone": "+917590878764",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sundernagar",
            "addressLocality": "Sundernagar",
            "addressRegion": "Himachal Pradesh",
            "postalCode": "175018",
            "addressCountry": "IN"
        },
        "medicalSpecialty": department.shortName
    };

    return (
        <>
            <SEO
                title={`${department.name} | Mannat Hospital Sundernagar`}
                description={`Looking for ${department.shortName} in Sundernagar? Mannat Hospital offers expert ${department.shortName} with experienced doctors. Call now or book online.`}
                keywords={`${department.shortName} sundernagar, best ${department.shortName} mandi himachal, ${department.name}, mannat hospital`}
                canonicalUrl={`https://mannat-hospital-new.vercel.app/departments/${slug}`}
                schema={schema}
            />
            <Header onBookClick={onBookClick} />
            <main>
                {/* SECTION 1 — HERO */}
                <section className="bg-gradient-to-r from-[#1d4ed8] to-[#1e40af] text-white py-20 animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-sm text-blue-200 mb-6 font-medium">
                            <Link to="/" className="hover:text-white transition-colors">Home</Link> &gt;
                            <Link to="/departments" className="hover:text-white transition-colors mx-1">Departments</Link> &gt;
                            <span className="text-white ml-1">{department.name}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">{department.name}</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-10">{department.tagline}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:+917590878764" className="bg-white text-[#1d4ed8] font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-lg">
                                <span className="material-symbols-outlined text-xl">call</span>
                                Call Now
                            </a>
                            <button onClick={() => {
                                document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });
                            }} className="border-2 border-white/30 bg-transparent text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <span className="material-symbols-outlined text-xl">event</span>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — DOCTOR CARD */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-10">
                        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-slate-100 dark:border-slate-700 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-200 dark:bg-slate-700 rounded-full flex-shrink-0 flex items-center justify-center shadow-inner overflow-hidden border-4 border-slate-50 dark:border-slate-800 text-6xl">
                                {department.icon}
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-bold mb-2">{department.doctor}</h3>
                                <p className="text-[#1d4ed8] dark:text-blue-400 font-bold text-lg mb-1">{department.qualification}</p>
                                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">{department.experience}</p>
                                <button
                                    onClick={() => {
                                        document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold px-8 py-3.5 rounded-xl transition-colors w-full md:w-auto shadow-md shadow-blue-500/30"
                                >
                                    Book Appointment with Doctor
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — TREATMENTS LIST */}
                <section className="py-20 bg-white dark:bg-background-dark text-slate-900 dark:text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold">Treatments We Offer</h2>
                            <div className="w-24 h-1 bg-[#1d4ed8] mx-auto mt-6 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {department.treatments.map((treatment, i) => (
                                <div key={i} className="border border-blue-100 dark:border-slate-700 bg-blue-50/50 dark:bg-slate-800 p-6 rounded-2xl flex items-center gap-4 hover:border-[#1d4ed8] transition-all shadow-sm">
                                    <div className="bg-[#1d4ed8] rounded-full p-1 text-white flex-shrink-0">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </div>
                                    <span className="font-semibold text-lg">{treatment}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — WHY CHOOSE MANNAT HOSPITAL */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Why Choose Mannat Hospital</h2>
                            <div className="w-24 h-1 bg-[#1d4ed8] mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: 'emergency', title: '24x7 Emergency Available', desc: 'Round-the-clock medical care for critical situations.' },
                                { icon: 'medical_services', title: 'Experienced Specialists', desc: 'Highly qualified doctors providing expert treatments.' },
                                { icon: 'biotech', title: 'Modern Equipment', desc: 'State-of-the-art medical technology and facilities.' },
                                { icon: 'volunteer_activism', title: 'Affordable Treatment', desc: 'Quality healthcare that fits within your budget.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] text-center group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="size-16 bg-blue-50 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1d4ed8] transition-colors">
                                        <span className="material-symbols-outlined text-3xl text-[#1d4ed8] dark:text-blue-400 group-hover:text-white">{item.icon}</span>
                                    </div>
                                    <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 5 — PATIENT REVIEWS */}
                <section className="py-24 bg-white dark:bg-background-dark text-slate-900 dark:text-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">What Patients Say</h2>
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <div className="flex text-yellow-500 text-xl">
                                    ★ ★ ★ ★ ★
                                </div>
                                <span className="font-bold text-lg">4.7</span>
                                <span className="text-slate-500 dark:text-slate-400">· 200+ Reviews on Google</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Ramesh K.", review: "Very good doctors and caring staff." },
                                { name: "Anita S.", review: "Best hospital in Sundernagar." },
                                { name: "Suresh M.", review: "Clean facility and quick treatment." },
                            ].map((rev, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
                                    <div className="flex text-yellow-500 text-lg mb-4">★★★★★</div>
                                    <p className="font-medium italic mb-6">"{rev.review}"</p>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">– {rev.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — FAQ ACCORDION */}
                {department.faqs && department.faqs.length > 0 && (
                    <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
                        <div className="max-w-3xl mx-auto px-6 lg:px-10">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                                <div className="w-24 h-1 bg-[#1d4ed8] mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="space-y-4">
                                {department.faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
                                    >
                                        <button
                                            className="w-full text-left p-6 font-semibold text-lg flex justify-between items-center focus:outline-none"
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        >
                                            {faq.q}
                                            <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                                expand_more
                                            </span>
                                        </button>
                                        <div
                                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-4">{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 7 — APPOINTMENT FORM */}
                <section id="appointment" className="py-24 bg-white dark:bg-background-dark text-slate-900 dark:text-white">
                    <div className="max-w-3xl mx-auto px-6 lg:px-10">
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.1)] border border-slate-100 dark:border-slate-700">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Book an Appointment</h2>
                                <p className="text-slate-500 dark:text-slate-400">Schedule your consultation with our {department.shortName} experts.</p>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Appointment request sent! We will contact you soon.");
                                }}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                                        <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] focus:outline-none dark:bg-slate-700 dark:border-slate-600" required placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Phone Number</label>
                                        <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] focus:outline-none dark:bg-slate-700 dark:border-slate-600" required placeholder="10-digit number" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Department</label>
                                        <select value={formData.department} onChange={e => setFormData({ ...formData, department: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] focus:outline-none dark:bg-slate-700 dark:border-slate-600 appearance-none">
                                            {departments.map((dept, i) => (
                                                <option key={i} value={dept.shortName}>{dept.shortName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                                        <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] focus:outline-none dark:bg-slate-700 dark:border-slate-600" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Additional Message (Optional)</label>
                                    <textarea rows="3" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] focus:outline-none dark:bg-slate-700 dark:border-slate-600" placeholder="Describe your symptoms or reason for visit..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-[#1d4ed8] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#1e40af] transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 mt-4">
                                    Confirm Appointment <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default DepartmentDetail;
