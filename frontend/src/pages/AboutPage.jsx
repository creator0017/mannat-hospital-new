import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

                {/* Video Testimonials */}
                <section className="py-24 bg-background-light dark:bg-background-dark/50 animate-fade-in border-t border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">Video Testimonials</h2>
                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">What Our Patients Say About Us</h3>
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
                            className="pb-16"
                        >
                            {[
                                {
                                    reelId: 'DVMFwcikgd4',
                                    title: 'Life-Changing Endoscopic Spine Surgery',
                                    desc: 'Painless and stitch-less endoscopic spine surgery performed by Dr. Basit.',
                                    url: 'https://www.instagram.com/reel/DVMFwcikgd4/'
                                },
                                {
                                    reelId: 'DR_d2rCD8sO',
                                    title: 'Minimal Invasive Spine Surgery Success',
                                    desc: 'Success story of minimal invasive spine surgery for chronic low back ache.',
                                    url: 'https://www.instagram.com/reel/DR_d2rCD8sO/'
                                },
                                {
                                    reelId: 'DRHukQuiQMW',
                                    title: 'Total Knee Replacement Recovery',
                                    desc: 'Total knee replacement for osteoarthritis under the Ayushman Bharat health scheme.',
                                    url: 'https://www.instagram.com/reel/DRHukQuiQMW/'
                                },
                                {
                                    reelId: 'DTDAdJ_CVl4',
                                    title: 'Joint Pains in Winter',
                                    desc: 'Managing joint pains during the winter season expert advice.',
                                    url: 'https://www.instagram.com/reel/DTDAdJ_CVl4/'
                                },
                                {
                                    reelId: 'DUM3k2yiYqh',
                                    title: 'Rheumatoid Arthritis Management',
                                    desc: 'Rheumatoid Arthritis precautions and management by Dr. M.A. Basit.',
                                    url: 'https://www.instagram.com/reel/DUM3k2yiYqh/'
                                }
                            ].map((video, i) => (
                                <SwiperSlide key={i} className="h-auto">
                                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col mx-2">
                                        <div className="w-full aspect-[9/16] max-h-[500px] bg-black">
                                            <iframe
                                                src={`https://www.instagram.com/reel/${video.reelId}/embed/`}
                                                title={video.title}
                                                className="w-full h-full"
                                                frameBorder="0"
                                                scrolling="no"
                                                allowTransparency="true"
                                                allowFullScreen
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="flex text-yellow-500 text-lg tracking-wider mb-2">★★★★★</div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{video.title}</h4>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">{video.desc}</p>
                                            <a
                                                href={video.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline mt-auto"
                                            >
                                                Watch Full Story
                                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
