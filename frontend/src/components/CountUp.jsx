import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, suffix = '', prefix = '', duration = 2000, separator = '' }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    // Intersection Observer to trigger when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Animate the count
    useEffect(() => {
        if (!hasStarted) return;

        let startTime = null;
        const startValue = 0;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease-out cubic for smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(eased * (end - startValue) + startValue);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    // Format number with separator (e.g., commas)
    const formatNumber = (num) => {
        if (separator) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        }
        return num;
    };

    return (
        <span ref={ref}>
            {prefix}{formatNumber(count)}{suffix}
        </span>
    );
};

export default CountUp;
