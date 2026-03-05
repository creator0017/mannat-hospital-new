import React, { useState, useEffect, useCallback } from 'react';

const galleryImages = [
    { src: '/gallery/photo-1.jpeg', alt: 'Mannat Hospital Building — Front View' },
    { src: '/about-hospital.png', alt: 'Mannat Hospital Building' },
    { src: '/gallery/photo-3.jpeg', alt: 'ICU — Intensive Care Unit' },
    { src: '/gallery/photo-4.jpeg', alt: 'Reception Desk' },
    { src: '/gallery/photo-5.jpeg', alt: 'In-House Pharmacy' },
    { src: '/gallery/photo-6.jpeg', alt: 'Mannat Hospital — Full Building View' },
];

const Story = () => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback((index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [isTransitioning]);

    const next = useCallback(() => {
        goTo((current + 1) % galleryImages.length);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + galleryImages.length) % galleryImages.length);
    }, [current, goTo]);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="py-24 bg-white dark:bg-background-dark overflow-hidden animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Hospital</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">A Glimpse Inside Mannat Hospital</h3>
                </div>

                {/* Slider */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    {/* Images */}
                    <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 transition-all duration-700 ease-in-out"
                                style={{
                                    opacity: i === current ? 1 : 0,
                                    transform: i === current ? 'scale(1)' : 'scale(1.08)',
                                    zIndex: i === current ? 1 : 0,
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                    loading={i === 0 ? 'eager' : 'lazy'}
                                />
                            </div>
                        ))}

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-[2]" />

                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-[3]">
                            <p className="text-white/90 font-semibold text-lg sm:text-xl">
                                {galleryImages[current].alt}
                            </p>
                            <p className="text-white/60 text-sm mt-1">
                                {current + 1} / {galleryImages.length}
                            </p>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-[3] w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <span className="material-symbols-outlined text-2xl">chevron_left</span>
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-[3] w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <span className="material-symbols-outlined text-2xl">chevron_right</span>
                        </button>
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2.5 mt-8">
                    {galleryImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`rounded-full transition-all duration-500 ${i === current
                                ? 'w-10 h-3 bg-primary'
                                : 'w-3 h-3 bg-slate-300 dark:bg-slate-700 hover:bg-primary/50'
                                }`}
                        />
                    ))}
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                    {galleryImages.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${i === current
                                ? 'ring-3 ring-primary shadow-lg scale-105'
                                : 'opacity-60 hover:opacity-100'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-20 h-14 sm:w-24 sm:h-16 object-cover"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Story;
