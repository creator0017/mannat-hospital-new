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

            </div>
        </div>
    );
};

export default StatsBar;
