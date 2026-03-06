import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const videos = [
    {
        reelId: 'DVMFwcikgd4',
        url: 'https://www.instagram.com/reel/DVMFwcikgd4/',
        title: 'Life-Changing Endoscopic Spine Surgery',
        desc: 'Painless and stitch-less endoscopic spine surgery performed by Dr. Basit.',
        category: 'Patient Story',
    },
    {
        reelId: 'DU735k6CSql',
        url: 'https://www.instagram.com/reel/DU735k6CSql/',
        title: 'Quick Relief for Back Pain',
        desc: 'Quick relief techniques and information for back pain.',
        category: 'Educational',
    },
    {
        reelId: 'DU0t0LfCf_E',
        url: 'https://www.instagram.com/reel/DU0t0LfCf_E/',
        title: 'Back Pain & Correct Posture',
        desc: 'Guidance on back pain and the importance of correct posture.',
        category: 'Educational',
    },
    {
        reelId: 'DUM3k2yiYqh',
        url: 'https://www.instagram.com/reel/DUM3k2yiYqh/',
        title: 'Rheumatoid Arthritis Management',
        desc: 'Rheumatoid Arthritis precautions and management by Dr. M.A. Basit.',
        category: 'Medical Info',
    },
    {
        reelId: 'DTvQIcMiapD',
        url: 'https://www.instagram.com/reel/DTvQIcMiapD/',
        title: 'Chronic Low Backache & Physiotherapy',
        desc: 'A comparison between chronic low backache and the role of physiotherapy.',
        category: 'Educational',
    },
    {
        reelId: 'DTDAdJ_CVl4',
        url: 'https://www.instagram.com/reel/DTDAdJ_CVl4/',
        title: 'Joint Pains in Winter',
        desc: 'Managing joint pains during the winter season.',
        category: 'Health Tips',
    },
    {
        reelId: 'DR_d2rCD8sO',
        url: 'https://www.instagram.com/reel/DR_d2rCD8sO/',
        title: 'Minimal Invasive Spine Surgery Success',
        desc: 'Success story of minimal invasive spine surgery for chronic low back ache.',
        category: 'Patient Story',
    },
    {
        reelId: 'DR37W0bkZDa',
        url: 'https://www.instagram.com/reel/DR37W0bkZDa/',
        title: 'Rheumatoid Arthritis Relief',
        desc: 'Life modifications and pain relief strategies for Rheumatoid Arthritis patients.',
        category: 'Educational',
    },
    {
        reelId: 'DRsQLNNDLQG',
        url: 'https://www.instagram.com/reel/DRsQLNNDLQG/',
        title: 'Neck Pain from Mobile Use',
        desc: 'Neck pain caused by mobile phone use and how to correct posture.',
        category: 'Health Tips',
    },
    {
        reelId: 'DRHukQuiQMW',
        url: 'https://www.instagram.com/reel/DRHukQuiQMW/',
        title: 'Total Knee Replacement – Ayushman Bharat',
        desc: 'Total knee replacement for osteoarthritis under the Ayushman Bharat health scheme.',
        category: 'Medical Info',
    },
];

const localVideos = [
    {
        src: '/hospital-video.mp4',
        title: 'A Glimpse Inside Mannat Hospital',
        desc: 'Take a walkthrough of our modern facilities, medical infrastructure, and state-of-the-art operation theaters.',
        category: 'Hospital Videos'
    }
];

const categories = ['All', 'Hospital Videos', 'Patient Story', 'Educational', 'Medical Info', 'Health Tips'];

const PatientStoriesPage = ({ onBookClick }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredIGVideos = activeFilter === 'All'
        ? videos
        : activeFilter === 'Hospital Videos'
            ? []
            : videos.filter(v => v.category === activeFilter);

    const filteredLocalVideos = activeFilter === 'All'
        ? localVideos
        : activeFilter === 'Hospital Videos'
            ? localVideos
            : [];

    const totalCount = filteredIGVideos.length + filteredLocalVideos.length;

    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>
                {/* Hero */}
                <section className="py-20 bg-primary text-white animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
                        <h1 className="text-5xl lg:text-6xl font-black mb-6">Watch Patient Stories</h1>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">Hear from our patients about their experiences and watch expert medical advice from our specialists.</p>
                    </div>
                </section>

                {/* Filter Buttons */}
                <section className="py-8 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === cat
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Videos Grid */}
                <section className="py-16 bg-background-light dark:bg-background-dark/50 animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <p className="text-sm text-slate-400 mb-8 text-center">Showing {totalCount} videos</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Local Hospital Videos */}
                            {filteredLocalVideos.map((video, i) => (
                                <div key={`local-${i}`} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                                    <div className="w-full aspect-video bg-black">
                                        <video
                                            controls
                                            className="w-full h-full object-cover"
                                            preload="metadata"
                                        >
                                            <source src={video.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="p-5">
                                        <span className="inline-block text-[11px] bg-primary/10 text-primary font-bold px-3 py-1 rounded-full mb-3">{video.category}</span>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{video.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{video.desc}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Instagram Reel Videos */}
                            {filteredIGVideos.map((video, i) => (
                                <div key={`ig-${activeFilter}-${video.reelId}`} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all">
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
                                    <div className="p-5">
                                        <span className="inline-block text-[11px] bg-accent/10 text-accent font-bold px-3 py-1 rounded-full mb-3">{video.category}</span>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{video.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-3">{video.desc}</p>
                                        <a
                                            href={video.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline"
                                        >
                                            Watch on Instagram
                                            <span className="material-symbols-outlined text-base">open_in_new</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Follow CTA */}
                <section className="py-16 bg-white dark:bg-background-dark text-center">
                    <a
                        href="https://www.instagram.com/mannat_hospital_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        Follow Us on Instagram
                    </a>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default PatientStoriesPage;
