import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Logo className="h-12" />
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Leading the way in minimal invasive spine surgery and comprehensive clinical care. Your health is our legacy.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="https://www.instagram.com/mannat_hospital_/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="https://maps.app.goo.gl/dqNpGKnq8gxivvLn8" target="_blank" rel="noopener noreferrer" title="Google Maps">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            </a>
                            <a className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="mailto:mannathospital20@gmail.com" title="Email Us">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <a href="tel:7590878764" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                7590878764
                            </a>
                            <a href="tel:01907266405" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                01907-266405
                            </a>
                            <a href="tel:01907267305" className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                01907-267305
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Specialties</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link className="hover:text-primary transition-colors" to="/services">Orthopedic & Spine Surgery</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/services">Joint Replacement</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/services">Trauma Surgery</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/services">Rehabilitations & Physiotherapy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/services">Our Services</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/specialists">Our Doctors</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/gallery">Gallery</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/patient-stories">Patient Stories</Link></li>
                            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Location</h4>
                        <div className="rounded-xl overflow-hidden h-40 mb-4">
                            <iframe
                                title="Mannat Hospital Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565.3400615456277!2d76.8852773!3d31.5223848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390519bb5ad585a9%3A0x8149d5f362c5779!2sMannat%20Hospital%20-%20Institute%20of%20Endoscopic%20%26%20Minimal%20Invasive%20Spine%20Surgery!5e1!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Near Petrol Pump, Salah, Sunder Nagar,<br />
                            Distt. Mandi, HP — 175018<br />
                            <a href="mailto:mannathospital20@gmail.com" className="hover:text-primary transition-colors">mannathospital20@gmail.com</a><br />
                            <a href="tel:7590878764" className="hover:text-primary transition-colors">7590878764</a>
                            <span className="mx-1 text-slate-300">|</span>
                            <a href="tel:01907266405" className="hover:text-primary transition-colors">01907-266405</a>
                            <span className="mx-1 text-slate-300">|</span>
                            <a href="tel:01907267305" className="hover:text-primary transition-colors">01907-267305</a>
                        </p>
                    </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">© 2026 Mannat Hospital. All rights reserved. Registration No: HP0202701312</p>
                    <div className="flex gap-8 text-xs text-slate-400 font-medium">
                        <a className="hover:text-primary" href="#">Privacy Policy</a>
                        <a className="hover:text-primary" href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
