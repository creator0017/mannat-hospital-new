import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';

const AboutPage = ({ onBookClick }) => {
    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                {/* About Hero */}
                <section className="py-20 bg-primary text-white animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">About Us</h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">Learn about our journey, our mission, and the values that drive us to deliver world-class healthcare.</p>
                    </div>
                </section>

                {/* Since 2014 Section */}
                <section className="py-24 bg-white dark:bg-background-dark overflow-hidden animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Hospital Building Image */}
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/about-hospital.jpg"
                                        alt="Mannat Hospital Building"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {/* Year Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                                    <div className="text-3xl font-black">Since</div>
                                    <div className="text-4xl font-black text-accent">2014</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Heritage</h2>
                                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">Since 2014</h3>

                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    Mannat Hospital is a super speciality hospital situated in the heart of Sundernagar Himachal Pradesh.
                                </p>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div className="size-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-xl text-accent">clinical_notes</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            We have highly qualified & experienced doctors available <strong className="text-slate-900 dark:text-white">24*7</strong>.
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-xl text-primary">local_hospital</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            We provide <strong className="text-slate-900 dark:text-white">world class health facilities</strong> at an affordable price in Himachal.
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
                                        <div className="size-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-xl text-accent">labs</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            We have <strong className="text-slate-900 dark:text-white">24*7 computerized lab, digital X-Ray, pharmacy, and emergency backup</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24 bg-background-light dark:bg-background-dark/50 animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-white dark:bg-slate-900 p-10 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">To be the most trusted and preferred healthcare institution in Himachal Pradesh, delivering affordable, compassionate, and technologically advanced medical care to every patient.</p>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-10 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <div className="size-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-3xl text-accent">flag</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">To provide exceptional healthcare services through skilled professionals, state-of-the-art infrastructure, and a deep commitment to patient safety and well-being.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-20 bg-primary text-white animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-accent mb-2">
                                    <CountUp end={30} suffix="+" duration={2000} />
                                </div>
                                <div className="text-white/70 text-sm font-medium">Years of Service</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-accent mb-2">24/7</div>
                                <div className="text-white/70 text-sm font-medium">Emergency Care</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-accent mb-2">
                                    <CountUp end={10} suffix="K+" duration={2000} />
                                </div>
                                <div className="text-white/70 text-sm font-medium">Patients Treated</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-accent mb-2">
                                    <CountUp end={15} suffix="+" duration={2000} />
                                </div>
                                <div className="text-white/70 text-sm font-medium">Expert Doctors</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-24 bg-white dark:bg-background-dark animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">What We Stand For</h2>
                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Our Core Values</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: 'favorite', title: 'Compassion', desc: 'We treat every patient with empathy, dignity, and personalized attention.' },
                                { icon: 'workspace_premium', title: 'Excellence', desc: 'We strive for the highest standards in clinical care and surgical outcomes.' },
                                { icon: 'handshake', title: 'Integrity', desc: 'We maintain transparency and honesty in all our interactions and treatments.' },
                                { icon: 'groups', title: 'Teamwork', desc: 'Our multidisciplinary team collaborates to deliver the best possible care.' },
                                { icon: 'psychology', title: 'Innovation', desc: 'We embrace the latest medical technologies and techniques for better outcomes.' },
                                { icon: 'volunteer_activism', title: 'Community', desc: 'We are committed to serving and uplifting the health of our local community.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-background-light dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-center hover:shadow-xl transition-all group">
                                    <div className="size-14 mx-auto bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
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

export default AboutPage;
