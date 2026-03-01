import React, { useState, useEffect } from 'react';

const videos = [
    {
        url: 'https://www.instagram.com/reel/DVMFwcikgd4/',
        title: 'Life-Changing Endoscopic Spine Surgery',
        desc: 'Painless and stitch-less endoscopic spine surgery performed by Dr. Basit.',
        category: 'Patient Story',
    },
    {
        url: 'https://www.instagram.com/reel/DU735k6CSql/',
        title: 'Quick Relief for Back Pain',
        desc: 'Quick relief techniques and information for back pain.',
        category: 'Educational',
    },
    {
        url: 'https://www.instagram.com/reel/DU0t0LfCf_E/',
        title: 'Back Pain & Correct Posture',
        desc: 'Guidance on back pain and the importance of correct posture.',
        category: 'Educational',
    },
    {
        url: 'https://www.instagram.com/reel/DUM3k2yiYqh/',
        title: 'Rheumatoid Arthritis Management',
        desc: 'Rheumatoid Arthritis precautions and management by Dr. M.A. Basit.',
        category: 'Medical Info',
    },
    {
        url: 'https://www.instagram.com/reel/DTvQIcMiapD/',
        title: 'Chronic Low Backache & Physiotherapy',
        desc: 'A comparison between chronic low backache and the role of physiotherapy.',
        category: 'Educational',
    },
    {
        url: 'https://www.instagram.com/reel/DTDAdJ_CVl4/',
        title: 'Joint Pains in Winter',
        desc: 'Managing joint pains during the winter season.',
        category: 'Health Tips',
    },
    {
        url: 'https://www.instagram.com/reel/DR_d2rCD8sO/',
        title: 'Minimal Invasive Spine Surgery Success',
        desc: 'Success story of minimal invasive spine surgery for chronic low back ache.',
        category: 'Patient Story',
    },
    {
        url: 'https://www.instagram.com/reel/DR37W0bkZDa/',
        title: 'Rheumatoid Arthritis Relief',
        desc: 'Life modifications and pain relief strategies for Rheumatoid Arthritis patients.',
        category: 'Educational',
    },
    {
        url: 'https://www.instagram.com/reel/DRsQLNNDLQG/',
        title: 'Neck Pain from Mobile Use',
        desc: 'Neck pain caused by mobile phone use and how to correct posture.',
        category: 'Health Tips',
    },
    {
        url: 'https://www.instagram.com/reel/DRHukQuiQMW/',
        title: 'Total Knee Replacement – Ayushman Bharat',
        desc: 'Total knee replacement for osteoarthritis under the Ayushman Bharat health scheme.',
        category: 'Medical Info',
    },
];

const categories = ['All', 'Patient Story', 'Educational', 'Medical Info', 'Health Tips'];

const PatientStories = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredVideos = activeFilter === 'All'
        ? videos
        : videos.filter(v => v.category === activeFilter);

    // Load Instagram embed script
    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Re-process embeds when filter changes
    useEffect(() => {
        const timer = setTimeout(() => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [activeFilter]);

    return (
        <section id="patient-stories" className="py-24 bg-background-light dark:bg-background-dark/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">Real Stories, Real Results</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Watch Patient Stories</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Hear from our patients about their experiences and watch expert medical advice from our specialists.</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary border border-slate-200 dark:border-slate-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVideos.map((video, i) => (
                        <div key={`${activeFilter}-${i}`} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all">
                            {/* Instagram Embed using blockquote */}
                            <div className="w-full overflow-hidden">
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-captioned
                                    data-instgrm-permalink={video.url}
                                    data-instgrm-version="14"
                                    style={{
                                        background: '#FFF',
                                        border: 0,
                                        borderRadius: '3px',
                                        boxShadow: 'none',
                                        margin: '0',
                                        maxWidth: '100%',
                                        minWidth: '100%',
                                        padding: 0,
                                        width: '100%',
                                    }}
                                >
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">View on Instagram</a>
                                </blockquote>
                            </div>
                            {/* Info */}
                            <div className="p-5">
                                <span className="inline-block text-[11px] bg-accent/10 text-accent font-bold px-3 py-1 rounded-full mb-3">{video.category}</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{video.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{video.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Follow CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="https://www.instagram.com/mannat_hospital_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        Follow Us on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PatientStories;
