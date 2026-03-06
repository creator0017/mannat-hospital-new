import React from 'react';
import CountUp from './CountUp';

const StatsBar = () => {
    return (
        <div className="bg-[#1e3a8a] text-white py-10 px-6 md:px-12 rounded-3xl shadow-2xl mb-24 max-w-[95%] xl:max-w-7xl mx-auto -mt-10 relative z-20">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12 text-center xl:text-left">

                {/* Stats Section */}
                <div className="flex flex-wrap md:flex-nowrap justify-center xl:justify-start gap-8 md:gap-12 w-full xl:w-auto">
                    <div className="flex-1 min-w-[120px]">
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            <CountUp end={10000} suffix="+" duration={2000} />
                        </div>
                        <p className="text-blue-200 font-medium tracking-wide">Surgeries</p>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            6
                        </div>
                        <p className="text-blue-200 font-medium tracking-wide">Specialised Departments</p>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            <CountUp end={15} suffix="+" duration={2000} />
                        </div>
                        <p className="text-blue-200 font-medium tracking-wide">Years of Care</p>
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                            24x7
                        </div>
                        <p className="text-blue-200 font-medium tracking-wide">Emergency</p>
                    </div>
                </div>

                {/* Accreditations Section */}
                <div className="xl:border-l xl:border-blue-800/50 xl:pl-12 w-full xl:w-auto flex flex-col items-center xl:items-start">
                    <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mb-5 text-center w-full">Accreditations & Insurance Schemes</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 w-fit mx-auto xl:mx-0">
                        <img src="/logos/ayushman.png" alt="Ayushman Bharat" className="h-12 w-auto object-contain bg-white rounded-lg p-1 shadow-md hover:scale-110 transition-transform" />
                        <img src="/logos/himcare.png" alt="HIMCARE" className="h-12 w-auto object-contain bg-white rounded-lg p-1 shadow-md hover:scale-110 transition-transform" />
                        <img src="/logos/echs.png" alt="ECHS" className="h-12 w-auto object-contain bg-white rounded-lg p-1 shadow-md hover:scale-110 transition-transform" />
                        <img src="/logos/nabh.png" alt="NABH" className="h-12 w-auto object-contain bg-white rounded-lg p-1 shadow-md hover:scale-110 transition-transform" />
                        <span className="bg-white text-blue-900 border-2 border-slate-100 text-xs font-black px-4 py-3 rounded-lg shadow-md hover:scale-110 transition-transform uppercase tracking-wider">HP Govt</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StatsBar;
