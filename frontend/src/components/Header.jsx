import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About Us', path: '/about', icon: 'info' },
    { name: 'Facilities', path: '/facilities', icon: 'apartment' },
    { name: 'Services', path: '/services', icon: 'medical_services' },
    { name: 'Specialists', path: '/specialists', icon: 'person' },
    { name: 'Gallery', path: '/gallery', icon: 'photo_library' },
    { name: 'Patient Stories', path: '/patient-stories', icon: 'play_circle' },
    { name: 'Contact Us', path: '/contact', icon: 'call' },
];

const Header = ({ onBookClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Close menu on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Close on Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <header className="glass-header sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
                    {/* Left Side: Menu + Logo */}
                    <div className="flex items-center gap-3">
                        {/* Grid Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="relative flex items-center justify-center size-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-primary/10 hover:text-primary transition-all group"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-transform duration-500 ${menuOpen ? 'rotate-180 scale-90' : 'rotate-0 scale-100'}`}
                            >
                                {/* Top-left square */}
                                <rect
                                    x="2" y="2" width="8" height="8" rx="2"
                                    stroke="currentColor" strokeWidth="2.2" fill="none"
                                    className={`transition-all duration-500 origin-center ${menuOpen ? 'opacity-80' : ''}`}
                                />
                                {/* Top-right diamond (rotated square) */}
                                <rect
                                    x="14" y="2" width="8" height="8" rx="2"
                                    stroke="currentColor" strokeWidth="2.2" fill="none"
                                    className="transition-all duration-500 origin-[18px_6px]"
                                    style={{ transform: menuOpen ? 'rotate(0deg)' : 'rotate(45deg)', transformOrigin: '18px 6px' }}
                                />
                                {/* Bottom-left square */}
                                <rect
                                    x="2" y="14" width="8" height="8" rx="2"
                                    stroke="currentColor" strokeWidth="2.2" fill="none"
                                    className={`transition-all duration-500 ${menuOpen ? 'opacity-80' : ''}`}
                                />
                                {/* Bottom-right square */}
                                <rect
                                    x="14" y="14" width="8" height="8" rx="2"
                                    stroke="currentColor" strokeWidth="2.2" fill="none"
                                    className={`transition-all duration-500 ${menuOpen ? 'opacity-80' : ''}`}
                                />
                            </svg>
                        </button>

                        <Link to="/" className="flex items-center gap-3">
                            <div className="flex items-center justify-center">
                                <img
                                    alt="Mannat Hospital Logo"
                                    className="h-12 w-auto object-contain"
                                    src="/logo.jpg"
                                />
                            </div>
                            <h2 className="text-primary dark:text-white text-xl font-extrabold tracking-tight">Mannat Hospital</h2>
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onBookClick}
                            className="hidden sm:flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/20"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in Menu Panel */}
            <div
                ref={menuRef}
                className={`fixed top-0 left-0 z-[60] h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-400 ease-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <img alt="Logo" className="h-10 w-auto" src="/logo.jpg" />
                        <span className="text-lg font-extrabold text-primary">Menu</span>
                    </div>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Nav Items */}
                <nav className="p-4 space-y-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    {navItems.map((item, i) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 group ${isActive
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-primary/5 hover:text-primary'
                                    }`}
                                style={{
                                    transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                                    opacity: menuOpen ? 1 : 0,
                                    transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                                    transition: `opacity 0.3s ${i * 50}ms, transform 0.3s ${i * 50}ms, background-color 0.2s, color 0.2s`,
                                }}
                            >
                                <span className={`material-symbols-outlined text-xl ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`}>
                                    {item.icon}
                                </span>
                                {item.name}
                                {isActive && (
                                    <span className="ml-auto material-symbols-outlined text-lg text-white/70">check_circle</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Book Appointment CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <button
                        onClick={() => {
                            setMenuOpen(false);
                            if (onBookClick) onBookClick();
                        }}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all"
                    >
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                        Book Appointment
                    </button>
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                        <span className="material-symbols-outlined text-sm">call</span>
                        <a href="tel:7590878764" className="hover:text-primary transition-colors">7590878764</a>
                        <span>|</span>
                        <a href="tel:01907266405" className="hover:text-primary transition-colors">01907-266405</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
