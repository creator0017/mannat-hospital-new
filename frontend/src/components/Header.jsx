import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Our Doctors', path: '/specialists', icon: 'person' },
    { name: 'Departments', path: '/departments', icon: 'local_hospital' },
    { name: 'Facilities', path: '/facilities', icon: 'apartment' },
    { name: 'Services', path: '/services', icon: 'medical_services' },
    { name: 'Gallery', path: '/gallery', icon: 'photo_library' },
    { name: 'Contact Us', path: '/contact', icon: 'call' },
    { name: 'About Us', path: '/about', icon: 'info' },
];

const Header = ({ onBookClick }) => {
    const location = useLocation();

    return (
        <header className="glass-header sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 backdrop-blur-md">
            <div className="max-w-[90rem] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-4 min-h-[5rem] gap-4 lg:gap-8">
                {/* Left Side: Logo */}
                <Link to="/" className="shrink-0">
                    <Logo className="h-14" />
                </Link>

                {/* Middle: Navigation Links */}
                <nav className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2 flex-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-[15px] font-bold transition-all duration-200 hover:text-primary flex items-center gap-1.5 ${isActive ? 'text-primary border-b-2 border-primary' : 'text-slate-600 dark:text-slate-300 border-b-2 border-transparent'
                                    } px-1 py-1`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={onBookClick}
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
                    >
                        Book Appointment
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
