import React, { useEffect, useRef, useState } from "react";
import ThemeButton from "./ThemeButton";
import ButtonWhite from "./ButtonWhite";

const CTASection = () => {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const visible = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
            setProgress(visible);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden"
        >

            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                style={{
                    backgroundImage: `url(${import.meta.env.BASE_URL}/assets/images/quality-metals.png)`,
                    transform: `scale(${1 + progress * 0.12})`,
                }}
            />


            {/* Lighter Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

            {/* Content */}
            <div
                className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white transition-all duration-700 ease-out"
                style={{
                    opacity: progress,
                    transform: `translateY(${30 - progress * 30}px)`,
                }}
            >
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
                    Building the World with <span className="text-yellow">Quality Metals</span>
                </h2>

                <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl mx-auto">
                    When you partner with us, you unlock deep domain expertise, operational
                    excellence, and future-ready innovation that accelerates outcomes.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <ThemeButton text="Contact Us" link="/contact-us" className="px-8 py-3 text-sm font-medium shadow-lg" />
                    <ButtonWhite text="View Products" link="/products" className="px-8 py-3 text-sm font-medium backdrop-blur" />
                </div>
            </div>
        </section>
    );
};

export default CTASection;