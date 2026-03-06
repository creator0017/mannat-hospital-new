import React from 'react';
import CountUp from './CountUp';

const StatsBar = () => {
    return (
        <div className="bg-[#1e3a8a] text-white py-10 px-6 md:px-12 rounded-3xl shadow-2xl mt-12 md:mt-16 mb-24 mx-auto max-w-[95%] xl:max-w-7xl relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24 justify-items-center w-full text-center items-start">

                {/* Stats Section */}
                <div className="flex flex-col items-center w-full">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white tracking-tight">
                        <CountUp end={10000} suffix="+" duration={2000} />
                    </div>
                    <p className="text-blue-200 font-semibold tracking-widest uppercase text-xs md:text-sm">Surgeries</p>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white tracking-tight">
                        6
                    </div>
                    <p className="text-blue-200 font-semibold tracking-widest uppercase text-xs md:text-sm">Specialised Departments</p>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white tracking-tight">
                        <CountUp end={15} suffix="+" duration={2000} />
                    </div>
                    <p className="text-blue-200 font-semibold tracking-widest uppercase text-xs md:text-sm">Years of Care</p>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white tracking-tight">
                        24x7
                    </div>
                    <p className="text-blue-200 font-semibold tracking-widest uppercase text-xs md:text-sm">Emergency</p>
                </div>

            </div>
        </div>
    );
};

export default StatsBar;
