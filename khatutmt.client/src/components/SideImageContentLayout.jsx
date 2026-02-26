import React, { useEffect, useRef, useState } from "react";
import SideImageBadge from "./SideImageBadge";
import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";

const SideImageContentLayout = ({
    imageName,
    imageExt = "jpg",
    imageAlt = "",
    badgeTitle = "",
    heading = "",
    description = "",
    buttonText = "",
    buttonLink = "#",
    reverse = false,
}) => {
    const contentRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (contentRef.current) observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-white text-center lg:text-start pt-10 sm:pt-14 md:pt-16 lg:pt-100">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-2 gap-12 items-center">

                {/* IMAGE */}
                <div
                    className={`
            text-center lg:text-start
            lg:col-span-5 xl:col-span-1
            ${reverse ? "lg:order-2 lg:col-start-8 xl:order-none xl:col-start-auto" : "lg:col-start-1"}
          `}
                >
                    <h2 className="text-4xl font-bold text-primary tracking-tight mb-8 block lg:hidden">
                        {heading}
                    </h2>

                    <SideImageBadge
                        imageName={imageName}
                        imageExt={imageExt}
                        imageAlt={imageAlt}
                        title={badgeTitle}
                    />
                </div>

                {/* CONTENT */}
                <div
                    ref={contentRef}
                    className={`
            lg:col-span-6 lg:col-start-7 xl:col-span-1 xl:col-start-auto
            ${reverse ? "lg:order-1 lg:col-start-1 xl:order-none" : ""}
            transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
            will-change-[transform,opacity,filter]
            ${visible
                            ? "opacity-100 translate-y-0 blur-0"
                            : "opacity-0 translate-y-14 blur-sm"}
          `}
                >
                    <h2
                        className={`
              text-4xl font-bold text-primary tracking-tight mb-4 hidden lg:block
              transition-all duration-700 delay-100
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
                    >
                        {heading}
                    </h2>

                    <p
                        className={`
              text-[#282828] text-base mb-0 lg:mb-6
              transition-all duration-700 delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
                    >
                        {description}
                    </p>

                    {buttonText && (
                        <div
                            className={`
                transition-all duration-700 delay-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
                        >
                            <ThemeButton
                                text={buttonText}
                                link={buttonLink}
                                className="px-8 py-3 text-sm font-medium"
                            />
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default SideImageContentLayout;