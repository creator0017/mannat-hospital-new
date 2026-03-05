import React, { useState, useCallback, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const galleryImages = [
    // Reception
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0044.jpg', alt: 'Reception', category: 'Reception' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/20293078_1788650234495811_8274191159230574979_n.jpg', alt: 'Reception', category: 'Reception' },

    // Operation Theatre
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171213-WA0007-1.jpg', alt: 'Operation Theatre', category: 'Operation Theatre' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0031-1.jpg', alt: 'Operation Theatre', category: 'Operation Theatre' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0032.jpg', alt: 'Operation Theatre', category: 'Operation Theatre' },

    // Pharmacy
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171228-WA0043-1024x768.jpg', alt: 'Pharmacy', category: 'Pharmacy' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171228-WA0044.jpg', alt: 'Pharmacy', category: 'Pharmacy' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171228-WA0040.jpg', alt: 'Pharmacy', category: 'Pharmacy' },

    // Ward
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0025-1.jpg', alt: 'Ward', category: 'Ward' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/26055822_1943867452307421_1882733383947713247_n-1.jpg', alt: 'Ward', category: 'Ward' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0026-1.jpg', alt: 'Ward', category: 'Ward' },

    // Waiting Area
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0035.jpg', alt: 'Waiting Area', category: 'Waiting Area' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0036-1.jpg', alt: 'Waiting Area', category: 'Waiting Area' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0038-1.jpg', alt: 'Waiting Area', category: 'Waiting Area' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171213-WA0011-1.jpg', alt: 'Waiting Area', category: 'Waiting Area' },

    // Lab
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171228-WA0042.jpg', alt: 'Lab', category: 'Lab' },

    // Entry / Entrance
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171229-WA0040.jpg', alt: 'Entry', category: 'Entry' },
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171213-WA0010.jpg', alt: 'Entrance', category: 'Entry' },

    // NICU
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171227-WA0029-1.jpg', alt: 'NICU', category: 'NICU' },

    // OPD
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171213-WA0008-732x1024.jpg', alt: 'OPD', category: 'OPD' },

    // Private Room
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171228-WA0027.jpg', alt: 'Private Room', category: 'Ward' },

    // Lift
    { src: 'https://www.mannathospital.com/wp-content/uploads/2017/12/IMG-20171229-WA0044.jpg', alt: 'Lift', category: 'Entry' },

    // Ambulance
    { src: 'https://www.mannathospital.com/wp-content/uploads/2018/09/34038820_2120248018002696_1819819029620064256_n.jpg', alt: 'Fully Equipped Ambulance', category: 'Ambulance' },

    // New Hospital Photos
    { src: '/gallery/photo-1.jpeg', alt: 'Mannat Hospital Building — Front View', category: 'Hospital' },
    { src: '/about-hospital.png', alt: 'Mannat Hospital Building', category: 'Hospital' },
    { src: '/gallery/photo-3.jpeg', alt: 'ICU — Intensive Care Unit', category: 'Ward' },
    { src: '/gallery/photo-4.jpeg', alt: 'Reception Desk', category: 'Reception' },
    { src: '/gallery/photo-5.jpeg', alt: 'In-House Pharmacy', category: 'Pharmacy' },
    { src: '/gallery/photo-6.jpeg', alt: 'Mannat Hospital — Full Building View', category: 'Hospital' },


    // Services & Specialties Posters
    { src: '/gallery/hospital-1.jpeg', alt: 'Endoscopic & Minimal Invasive Spine Surgery', category: 'Services Info' },
    { src: '/gallery/hospital-2.jpeg', alt: 'Fracture Treatment', category: 'Services Info' },
    { src: '/gallery/hospital-3.jpeg', alt: 'Joint Pain Treatment — Knee, Hip & Shoulder', category: 'Services Info' },
    { src: '/gallery/hospital-4.jpeg', alt: 'Joint Replacement Surgery', category: 'Services Info' },
    { src: '/gallery/hospital-5.jpeg', alt: 'Knee Arthroscopy — Minimal Invasive', category: 'Services Info' },
    { src: '/gallery/hospital-6.jpeg', alt: 'Robotic Joint Replacement in 24 Hours', category: 'Services Info' },
    { src: '/gallery/hospital-7.jpeg', alt: 'Hip Replacement Surgery', category: 'Services Info' },
    { src: '/gallery/hospital-8.jpeg', alt: 'Endoscopic Spine Surgery — Safest Solution', category: 'Services Info' },
    { src: '/gallery/hospital-9.jpeg', alt: 'Mannat Hospital — Banner', category: 'Hospital' },
    { src: '/gallery/hospital-10.jpeg', alt: 'What is Bamboo Spine?', category: 'Services Info' },
    { src: '/gallery/hospital-11.jpeg', alt: 'Total Knee Replacement — Pain Free', category: 'Services Info' },
    { src: '/gallery/hospital-12.jpeg', alt: 'Revision Joint Replacement', category: 'Services Info' },
];

const categories = ['All', 'Hospital', 'Services Info', 'Reception', 'Operation Theatre', 'Ward', 'Waiting Area', 'Pharmacy', 'Lab', 'NICU', 'OPD', 'Entry', 'Ambulance'];

/* ---- Lightbox Modal ---- */
const Lightbox = ({ image, images, onClose, onNavigate }) => {
    const currentIndex = images.indexOf(image);

    const goNext = useCallback(() => {
        if (currentIndex < images.length - 1) onNavigate(images[currentIndex + 1]);
    }, [currentIndex, images, onNavigate]);

    const goPrev = useCallback(() => {
        if (currentIndex > 0) onNavigate(images[currentIndex - 1]);
    }, [currentIndex, images, onNavigate]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, goNext, goPrev]);

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
            {/* Close */}
            <button onClick={onClose} className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">close</span>
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 text-white/60 text-sm font-bold">
                {currentIndex + 1} / {images.length}
            </div>

            {/* Prev */}
            {currentIndex > 0 && (
                <button
                    onClick={(e) => { e.stopPropagation(); goPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white size-12 rounded-full flex items-center justify-center transition-all"
                >
                    <span className="material-symbols-outlined text-2xl">chevron_left</span>
                </button>
            )}

            {/* Next */}
            {currentIndex < images.length - 1 && (
                <button
                    onClick={(e) => { e.stopPropagation(); goNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white size-12 rounded-full flex items-center justify-center transition-all"
                >
                    <span className="material-symbols-outlined text-2xl">chevron_right</span>
                </button>
            )}

            {/* Image */}
            <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-fade-in"
                />
                <div className="mt-4 text-center">
                    <p className="text-white font-bold text-lg">{image.alt}</p>
                    <span className="inline-block mt-1 text-xs bg-accent px-3 py-1 rounded-full text-white font-semibold">{image.category}</span>
                </div>
            </div>
        </div>
    );
};

const GalleryPage = ({ onBookClick }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const filteredImages = activeFilter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter);

    // Auto-advance slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        }, 3500); // Change image every 3.5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Header onBookClick={onBookClick} />
            <main>


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

                {/* Gallery Grid */}
                <section className="py-16 bg-background-light dark:bg-background-dark/50 animate-fade-in">
                    <div className="max-w-7xl mx-auto px-6 lg:px-10">
                        <p className="text-sm text-slate-400 mb-8 text-center">Showing {filteredImages.length} images</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {filteredImages.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedImage(img)}
                                    className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 cursor-pointer"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                        <div>
                                            <p className="text-white font-bold text-xs">{img.alt}</p>
                                            <span className="inline-block mt-1 text-[10px] bg-accent px-2 py-0.5 rounded-full text-white font-semibold">{img.category}</span>
                                        </div>
                                    </div>
                                    {/* Zoom Icon */}
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-white text-xl drop-shadow-lg">zoom_in</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Lightbox Modal */}
            {selectedImage && (
                <Lightbox
                    image={selectedImage}
                    images={filteredImages}
                    onClose={() => setSelectedImage(null)}
                    onNavigate={(img) => setSelectedImage(img)}
                />
            )}
        </>
    );
};

export default GalleryPage;
