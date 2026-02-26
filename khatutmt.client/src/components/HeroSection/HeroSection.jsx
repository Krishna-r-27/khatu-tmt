import { useEffect, useRef } from "react";
import Image from "../Image";
import ThemeButton from "../ThemeButton";
import "./hero-section.css";

const HeroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // 🚑 Always reveal immediately if already in viewport
        const reveal = () => el.classList.add("hero-visible");

        if (prefersReducedMotion) {
            reveal();
            return;
        }

        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            reveal();
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(reveal);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden hero-root 
min-h-[70vh] sm:min-h-[75vh] lg:min-h-[90vh] 
flex items-start bg-cover bg-center"
            style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}/assets/images/home-banner.png)`
            }}
        >
            {/* LEFT CONTENT */}
            <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
                <div className="max-w-3xl mx-auto text-center hero-content">

                    {/* HEADING SVG */}
                    <h1 className="w-full sm:max-w-[520px] lg:max-w-[720px] mx-auto lg:mx-0 hero-heading">
                        <svg
                            viewBox="0 0 1240 520"
                            className="w-full h-auto hero-svg"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#F89B32" />
                                    <stop offset="100%" stopColor="#CF3A38" />
                                </linearGradient>

                                <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow
                                        dx="0"
                                        dy="4"
                                        stdDeviation="4"
                                        floodColor="#000"
                                        floodOpacity="0.25"
                                    />
                                </filter>
                            </defs>
                            <text
                                className="hero-text hero-line hero-line-1"
                                x="40"
                                y="180"
                                textAnchor="start"
                                fontSize="154"
                                fontWeight="800"
                                fill="url(#textGradient)"
                                stroke="#000"
                                strokeWidth="4"
                                paintOrder="stroke fill"
                                filter="url(#textShadow)"
                            >
                                बुनियाद
                            </text>

                            <text
                                className="hero-text hero-line hero-line-2"
                                x="40"
                                y="420"
                                textAnchor="start"
                                fontSize="154"
                                fontWeight="800"
                                fill="url(#textGradient)"
                                stroke="#000"
                                strokeWidth="4"
                                paintOrder="stroke fill"
                                filter="url(#textShadow)"
                            >
                                भविष्य की
                            </text>
                        </svg>
                    </h1>

                    {/* MOBILE IMAGE */}
                    

                    {/* DESCRIPTION */}
                    <p className="text-white max-w-lg text-xl mx-auto lg:mx-0 lg:ps-4 hero-desc text-start">
                        Delivering unmatched strength, safety, and performance for
                        modern infrastructure.
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex justify-center lg:justify-start lg:ps-4 hero-cta">
                        <ThemeButton
                            text="Know More" link="/about-us"
                            className="px-8 py-3 text-sm font-medium"
                        />
                    </div>
                </div>
            </div>

            {/* DESKTOP IMAGE */}
            {/* LEFT IMAGE */}
            <div className="absolute left-0 bottom-0 w-[22%] xl:w-[18%] 2xl:w-[20%] hero-image-left hero-slide-left">
                <Image
                    name="banner-bars"
                    ext="png"
                    width={500}
                    height={600}
                    alt="Steel rods left"
                    className="w-full object-contain"
                />
            </div>

            {/* RIGHT IMAGE */}
            <div className="absolute right-0 bottom-0 w-[32%] xl:w-[28%] 2xl:w-[30%] hero-image-right hero-slide-right">
                <Image
                    name="home-banner-building"
                    ext="png"
                    width={700}
                    height={700}
                    alt="Building right"
                    className="w-full object-contain"
                />
            </div>
        </section>
    );
};

export default HeroSection;