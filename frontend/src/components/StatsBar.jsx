import React from 'react';
import CountUp from './CountUp';

const StatsBar = () => {
    return (
        <div className="bg-[#1e3a8a] text-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                <div>
                    <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                        <CountUp end={500} suffix="+" duration={2000} />
                    </div>
                    <p className="text-blue-200 font-medium">Happy Patients</p>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                        <CountUp end={10} suffix="+" duration={2000} />
                    </div>
                    <p className="text-blue-200 font-medium">Years of Care</p>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black mb-2 text-white">
                        <CountUp end={6} duration={2000} />
                    </div>
                    <p className="text-blue-200 font-medium">Departments</p>
                </div>
                <div>
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
