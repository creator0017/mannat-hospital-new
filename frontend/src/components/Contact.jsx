import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, formData);
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-background-dark animate-fade-in">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-primary dark:text-accent font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">Contact Us</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info + Map */}
                    <div className="space-y-8">
                        {/* Hospital Name */}
                        <div>
                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mannat Hospital</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Reg. No: HP0202701312</p>
                            <div className="w-16 h-1 bg-accent rounded-full"></div>
                        </div>

                        {/* Contact Details Cards */}
                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
                                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-2xl text-primary">location_on</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-1">Our Address</h5>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                        Near Petrol Pump, Salah, Sunder Nagar,<br />
                                        Distt. Mandi, Himachal Pradesh — 175018
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
                                <div className="size-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-2xl text-accent">call</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-1">Phone Numbers</h5>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        <a href="tel:7590878764" className="hover:text-primary transition-colors">7590878764</a>
                                        <span className="mx-2 text-slate-300">|</span>
                                        <a href="tel:01907266405" className="hover:text-primary transition-colors">01907-266405</a>
                                        <span className="mx-2 text-slate-300">|</span>
                                        <a href="tel:01907267305" className="hover:text-primary transition-colors">01907-267305</a>
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
                                <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-2xl text-primary">mail</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-1">Email Us</h5>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        <a href="mailto:mannathospital20@gmail.com" className="hover:text-primary transition-colors">mannathospital20@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            {/* OPD & Emergency */}
                            <div className="flex items-start gap-4 bg-background-light dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
                                <div className="size-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-2xl text-accent">schedule</span>
                                </div>
                                <div>
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-1">Timings</h5>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                                        OPD: 9:00 AM to 5:00 PM
                                    </p>
                                    <p className="text-accent font-semibold text-sm mt-1">
                                        🚨 Emergency Available 24/7
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent">map</span>
                                Find Us on Google Maps
                            </h5>
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 h-64">
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
                            <a
                                href="https://maps.app.goo.gl/dqNpGKnq8gxivvLn8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 text-primary font-bold text-sm hover:underline"
                            >
                                <span className="material-symbols-outlined text-lg">open_in_new</span>
                                Open in Google Maps for Directions
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-background-light dark:bg-slate-900 p-8 lg:p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl h-fit">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send Us a Message</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Have a question or need assistance? Fill in the form and we'll get back to you shortly.</p>

                        {success && (
                            <div className="bg-accent/10 border border-accent text-accent p-4 rounded-xl text-center mb-6 animate-fade-in">
                                <span className="material-symbols-outlined text-3xl mb-1">check_circle</span>
                                <p className="font-bold">Message Sent Successfully!</p>
                                <p className="text-sm">We will get back to you soon.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-sm"
                                    type="text"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email</label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-sm"
                                        type="email"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone</label>
                                    <input
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-sm"
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Your Message</label>
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none transition-all text-sm h-32 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                disabled={loading}
                                className="w-full bg-primary text-white py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <span className="material-symbols-outlined">send</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
