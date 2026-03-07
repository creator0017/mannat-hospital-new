import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const DepartmentsPage = ({ onBookClick }) => {
    return (
        <>
            <SEO
                title="Our Departments | Mannat Hospital Sundernagar"
                description="Explore the specialized medical departments at Mannat Hospital Sundernagar including Orthopedics, Gynecology, Pediatrics, and 24x7 Emergency Care."
                keywords="hospital departments, medical specialties, orthopedics, gynecology, pediatrics, mannat hospital"
            />
            <Header onBookClick={onBookClick} />
            <main>
                {/* Hero Section */}
                <section className="py-20 bg-primary text-white animate-fade-in text-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">Our Departments</h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">Providing world-class healthcare with specialized departments dedicated to your well-being.</p>
                    </div>
                </section>

                {/* Departments Grid */}
                <section className="py-24 bg-background-light dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {departments.map((dept, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                                    <div className="size-16 bg-[#1d4ed8]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl text-[#1d4ed8]">{dept.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#1d4ed8] transition-colors">{dept.shortName}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed flex-grow">{dept.tagline}</p>

                                    <Link
                                        to={`/departments/${dept.slug}`}
                                        className="inline-flex items-center gap-2 text-[#1d4ed8] font-bold mt-auto hover:text-blue-800 transition-colors cursor-pointer"
                                    >
                                        View Department
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default DepartmentsPage;
