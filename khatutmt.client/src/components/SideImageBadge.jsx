import React, { useEffect, useRef, useState } from "react";
import Image from "./Image";

const SideImageBadge = ({
    imageName,
    imageExt = "jpg",
    imageAlt,
    title,
}) => {
    const ref = useRef(null);
    const motionRef = useRef(null);

    const [visible, setVisible] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);

    /* --------------------------------
       Intersection Reveal
    --------------------------------*/
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.35 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    /* --------------------------------
       Scroll Progress
    --------------------------------*/
    useEffect(() => {
        const handleScroll = () => {
            if (!motionRef.current) return;

            const rect = motionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = 1 - Math.min(
                Math.max(rect.top / windowHeight, 0),
                1
            );

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* --------------------------------
       Hover Tilt
    --------------------------------*/
    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 6, y: y * -6 });
    };

    const resetTilt = () => setTilt({ x: 0, y: 0 });

    /* --------------------------------
       Motion Values
    --------------------------------*/
    const scrollScale = 0.94 + scrollProgress * 0.08;
    const scrollRotate = scrollProgress * 3;
    const scrollDepth = scrollProgress * 40;

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            className={`
                relative inline-block left-[-3%] sm:left-auto
                transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
        >

            {/* 🔥 MOTION WRAPPER */}
            <div
                ref={motionRef}
                style={{
                    transform: `
                        perspective(1400px)
                        translateZ(${scrollDepth}px)
                        scale(${scrollScale})
                        rotateX(${tilt.y + scrollRotate}deg)
                        rotateY(${tilt.x}deg)
                    `
                }}
                className="
                    relative
                    transition-transform duration-[700ms] ease-out
                    will-change-transform
                "
            >

                {/* IMAGE CARD */}
                <div
                    className="
                        relative
w-[clamp(220px,70vw,440px)] 
                    lg:w-[clamp(180px,28vw,440px)] 
xl:w-[clamp(220px,70vw,440px)] 

                        aspect-square
                        rounded-2xl
                        overflow-hidden
                        bg-white
                        shadow-[0_40px_90px_-35px_rgba(0,0,0,0.45)]
                    "
                >
                    <Image
                        name={imageName}
                        ext={imageExt}
                        alt={imageAlt}
                        className="w-full h-full object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />

                    {/* INNER FRAME */}
                    <div
                        className={`
                            absolute
                            top-4 bottom-4 left-4 right-0
                            sm:top-10 sm:bottom-10 sm:left-10
                            border-l-[4px] sm:border-l-[6px]
                            border-t-[4px] sm:border-t-[6px]
                            border-b-[4px] sm:border-b-[6px]
                            border-white
                            rounded-tl-xl rounded-bl-xl
                            pointer-events-none
                            transition-all duration-[900ms] delay-150
                            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
                        `}
                    />
                </div>

                {/* SIDE BADGE (NOW MOVES TOGETHER) */}
                <div
                    className={`
                        absolute
                        top-4 bottom-4 sm:top-10 sm:bottom-10
                        right-0
                        translate-x-full
                        w-[44px] sm:w-[60px] lg:w-[68px] xl:w-[80px]
                        bg-white
                        border-r-[4px] sm:border-r-[6px]
                        border-t-[4px] sm:border-t-[6px]
                        border-b-[4px] sm:border-b-[6px]
                        border-[#7b1e0f]
                        rounded-tr-xl rounded-br-xl
                        flex items-center justify-center
                        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
                        transition-all duration-[900ms] delay-300
                        ${visible ? "opacity-100 translate-x-full" : "opacity-0 translate-x-[130%]"}
                    `}
                >
                    <span
                                className="
            -rotate-90
            text-xs sm:text-sm md:text-lg
            font-bold
            tracking-[0.2em]
            text-[#7b1e0f]
            whitespace-nowrap
  "
                    >
                        {title}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default SideImageBadge;
