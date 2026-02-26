import React, { useEffect, useRef, useState } from "react";
import Image from "./Image";

const StatItem = ({ imageName, imageExt, imageAlt, value, label }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(0);

    // Reveal on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Count-up animation
    useEffect(() => {
        if (!visible) return;
        const end = parseInt(value.replace(/\D/g, ""), 10) || 0;
        const suffix = value.replace(/[0-9]/g, "");
        let start = 0;
        const duration = 1200;
        const step = Math.max(1, end / (duration / 16));

        const interval = setInterval(() => {
            start += step;
            if (start >= end) {
                clearInterval(interval);
                setCount(end + suffix);
            } else {
                setCount(Math.floor(start) + suffix);
            }
        }, 16);

        return () => clearInterval(interval);
    }, [visible, value]);

    return (
        <div
            ref={ref}
            className={`flex items-center gap-4 py-6 px-3 transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            {/* Image */}
            <div
                className={`w-12 h-12 flex items-center justify-center transition-transform duration-700
          ${visible ? "scale-100" : "scale-75"}`}
            >
                <Image
                    name={imageName}
                    ext={imageExt}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Text */}
            <div>
                <h2 className="text-2xl font-semibold text-primary tabular-nums">
                    {count || (visible ? value : "0")}
                </h2>
                <p className="text-[#282828]">{label}</p>
            </div>
        </div>
    );
};

export default StatItem;