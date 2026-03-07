import React, { useState, useEffect } from 'react';

let hasAppeared = false;

const PopupLeadForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        department: ''
    });

    useEffect(() => {
        // 1. Timer Logic (10 seconds delay)
        const timer = setTimeout(() => {
            showPopup();
        }, 10000);

        // 2. Exit Intent Logic for desktop (mouse moves to top of browser)
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0) {
                showPopup();
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const showPopup = () => {
        if (!hasAppeared) {
            setIsOpen(true);
            hasAppeared = true;
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.id === 'popup-overlay') {
            handleClose();
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Form submitting:', formData);

        // Simulated submission state
        setIsSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div
            id="popup-overlay"
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4 animate-fade-in"
            onClick={handleOverlayClick}
        >
            <div className="bg-white w-full h-full md:h-auto md:max-w-[400px] md:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:block animate-slide-up relative">

                {/* Close Button has absolute positioning. Reordered into DOM here */}
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 text-white md:text-gray-500 hover:text-gray-200 bg-black/20 hover:bg-black/40 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    aria-label="Close"
                >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                </button>

                {/* Top Banner */}
                <div className="bg-[#1d4ed8] text-white p-6 pt-12 md:pt-8 text-center shrink-0">
                    <div className="text-5xl mb-3">🏥</div>
                    <h2 className="text-2xl font-bold mb-1">Need to See a Doctor?</h2>
                    <p className="text-blue-100 text-sm">Get a FREE Consultation Today</p>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                    {isSubmitted ? (
                        <div className="text-center py-10 animate-fade-in">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="material-symbols-outlined text-green-600 text-3xl">check</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h3>
                            <p className="text-slate-600">✅ We'll call you within 30 minutes!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full text-[16px] px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] placeholder-slate-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">+91</span>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        pattern="[0-9]{10}"
                                        title="10 digit mobile number"
                                        placeholder="Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full text-[16px] pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] placeholder-slate-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Department</label>
                                <select
                                    name="department"
                                    required
                                    value={formData.department}
                                    onChange={handleChange}
                                    className="w-full text-[16px] px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/50 focus:border-[#1d4ed8] bg-white appearance-none"
                                >
                                    <option value="" disabled>Select Department</option>
                                    <option value="General Medicine">General Medicine</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Gynecology & Obstetrics">Gynecology & Obstetrics</option>
                                    <option value="Pediatrics / Child Care">Pediatrics / Child Care</option>
                                    <option value="General Surgery">General Surgery</option>
                                    <option value="Emergency Care">Emergency Care</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 bg-[#1d4ed8] hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Book Free Consultation <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div >
    );
};

export default PopupLeadForm;
