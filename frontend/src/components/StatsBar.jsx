import React from 'react';
import CountUp from './CountUp';

const StatsBar = () => {
    return (
        <div className="bg-[#1e3a8a] text-white py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center">
                <div className="flex-1">
                    <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                        <CountUp end={10000} suffix="+" duration={2000} />
                    </div>
                    <p className="text-blue-200 font-medium">Surgeries</p>
                </div>

                <div className="flex-1">
                    <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                        <CountUp end={15} suffix="+" duration={2000} />
                    </div>
                    <p className="text-blue-200 font-medium">Years of Care</p>
                </div>


                <div className="flex-1">
                    <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                        24x7
                    </div>
                    <p className="text-blue-200 font-medium">Emergency</p>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
