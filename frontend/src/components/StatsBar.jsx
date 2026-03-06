import React from 'react';
import CountUp from './CountUp';

const StatsBar = () => {
    return (
        <div className="bg-[#1e3a8a] text-white py-10 px-6 md:px-12 rounded-3xl shadow-2xl mt-12 md:mt-16 mb-24 mx-auto max-w-[95%] xl:max-w-7xl relative z-20">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12 text-center xl:text-left">

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full xl:w-7/12 items-start">
                    <div className="flex flex-col items-center w-full">
                        <div className="text-4xl md:text-5xl lg:text-5xl font-black mb-3 text-white tracking-tight">
                            <CountUp end={10000} suffix="+" duration={2000} />
                        </div>
                        <p className="text-blue-200 font-semibold tracking-widest uppercase text-[10px] md:text-xs">Surgeries</p>
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <div className="text-4xl md:text-5xl lg:text-5xl font-black mb-3 text-white tracking-tight">
                            6
                        </div>
                        <p className="text-blue-200 font-semibold tracking-widest uppercase text-[10px] md:text-xs leading-tight text-center">Specialised<br />Departments</p>
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <div className="text-4xl md:text-5xl lg:text-5xl font-black mb-3 text-white tracking-tight">
                            <CountUp end={15} suffix="+" duration={2000} />
                        </div>
                        <p className="text-blue-200 font-semibold tracking-widest uppercase text-[10px] md:text-xs">Years of Care</p>
                    </div>

                    <div className="flex flex-col items-center w-full">
                        <div className="text-4xl md:text-5xl lg:text-5xl font-black mb-3 text-white tracking-tight">
                            24x7
                        </div>
                        <p className="text-blue-200 font-semibold tracking-widest uppercase text-[10px] md:text-xs">Emergency</p>
                    </div>
                </div>

                {/* Accreditations Section */}
                <div className="xl:border-l xl:border-blue-800/50 xl:pl-12 w-full xl:w-5/12 flex flex-col items-center xl:items-start pt-8 xl:pt-0 border-t border-blue-800/50 xl:border-t-0">
                    <p className="text-blue-200 font-bold uppercase tracking-widest text-[13px] mb-6 text-center w-full">Accreditations & Insurance Schemes</p>

                    <div className="flex flex-wrap items-end justify-center gap-4 xl:gap-5 w-full">

                        {/* Ayushman Bharat */}
                        <div className="flex flex-col items-center gap-2.5 group">
                            <div className="h-[60px] w-[60px] bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                <img src="/logos/ayushman.png" alt="Ayushman Bharat" className="max-h-full max-w-full object-contain" />
                            </div>
                            <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider text-center max-w-[70px] leading-tight">Ayushman<br />Bharat</span>
                        </div>

                        {/* HIMCARE */}
                        <div className="flex flex-col items-center gap-2.5 group">
                            <div className="h-[60px] w-[60px] bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                <img src="/logos/himcare.png" alt="HIMCARE" className="max-h-full max-w-full object-contain" />
                            </div>
                            <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider text-center max-w-[70px] leading-tight mt-auto">HIMCARE</span>
                        </div>

                        {/* ECHS */}
                        <div className="flex flex-col items-center gap-2.5 group">
                            <div className="h-[60px] w-[60px] bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                <img src="/logos/echs.png" alt="ECHS" className="max-h-full max-w-full object-contain" />
                            </div>
                            <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider text-center max-w-[70px] leading-tight mt-auto">ECHS</span>
                        </div>

                        {/* NABH */}
                        <div className="flex flex-col items-center gap-2.5 group">
                            <div className="h-[60px] w-[60px] bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                <img src="/logos/nabh.png" alt="NABH" className="max-h-full max-w-full object-contain" />
                            </div>
                            <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider text-center max-w-[70px] leading-tight mt-auto">NABH</span>
                        </div>

                        {/* HP Govt */}
                        <div className="flex flex-col items-center gap-2.5 group">
                            <div className="h-[60px] w-[60px] bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                                <img src="/logos/hp_govt.png" alt="HP Govt" className="max-h-full max-w-full object-contain" />
                            </div>
                            <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider text-center max-w-[70px] leading-tight mt-auto">HP Govt</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsBar;
