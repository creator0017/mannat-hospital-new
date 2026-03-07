import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const specialties = [
    { image: 'https://images.unsplash.com/photo-1581093196277-9f60898934c2?q=80&w=800&auto=format&fit=crop', title: 'Orthopaedics', description: 'Comprehensive care for bone, joint, and muscle health, from trauma to total replacements.' },
    { image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=800&auto=format&fit=crop', title: 'Spine Surgery', description: 'Pioneering minimal invasive and endoscopic techniques for faster recovery and less pain.' },
    { image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop', title: 'Joint Replacement', description: 'Advanced surgical solutions for knee, hip, and shoulder joint replacements.' },
    { image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop', title: 'Trauma Care', description: 'Immediate and expert treatment for complex fractures and accidental injuries.' },
    { image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=800&auto=format&fit=crop', title: 'Physiotherapy & Rehabilitation', description: 'Customized physical therapy programs to restore movement and relieve pain.' },
    { image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=800&auto=format&fit=crop', title: 'Internal Medicine', description: 'Holistic health management focused on prevention, diagnosis, and non-surgical treatment.' },
    { image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop', title: 'Pulmonary / Chest Medicine', description: 'Expert care for respiratory diseases, asthma, COPD, and chronic breathing problems.' }
];

const Specialties = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark/50 animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">World-Class Care</h2>
                        <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Our Specialized Departments</h3>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
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
                    {specialties.map((item, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full transform scale-90 origin-top mx-auto w-full">
                                <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>

                                    {item.title === 'Spine Surgery' ? (
                                        <Link to="/departments/spine-surgery-sundernagar" className="mt-auto w-full border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-white px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-xl transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary text-center">
                                            Learn More
                                        </Link>
                                    ) : (
                                        <button className="mt-auto w-full border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-white px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-xl transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                            Learn More
                                        </button>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Specialties;
