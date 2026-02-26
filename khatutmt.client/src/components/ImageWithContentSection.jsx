import React, { useEffect, useRef, useState } from "react";
import StackedImageCard from "./StackedImageCard";
import ThemeButton from "./ThemeButton";

const ImageWithContentSection = ({
    imageName,
    imageExt = "jpg",
    imageAlt = "",
    heading = "",
    description = "",
    buttonText = "",
    buttonLink = "#",
    reverse = false,
}) => {

    const contentRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
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
        <section className="pt-100 bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-8 md:gap-y-12 items-center text-center lg:text-start">

                {/* CONTENT */}
                <div
                    ref={contentRef}
                    className={`lg:col-span-5 lg:pe-5 xl:pe-0 pt-5 lg:pt-0
                        order-3
                        ${reverse ? "lg:order-3" : "lg:order-1"}

                        transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
                        will-change-[transform,opacity,filter]
                        ${visible
                            ? "opacity-100 translate-y-0 blur-0"
                            : "opacity-0 translate-y-14 blur-sm"}
                    `}
                >
                    {/* DESKTOP HEADING */}
                    <h2
                        className={`
                            text-4xl font-bold text-primary tracking-tight mb-4 hidden lg:block
                            transition-all duration-700 delay-100
                            ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
                        `}
                    >
                        {heading}
                    </h2>

                    {/* DESCRIPTION */}
                    <p
                        className={`
                            text-[#282828] leading-relaxed mb-4
                            transition-all duration-700 delay-200
                            ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
                        `}
                    >
                        {description}
                    </p>

                    {/* BUTTON */}
                    {buttonText && (
                        <div
                            className={`
                                transition-all duration-700 delay-300
                                ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-6"}
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

                {/* SPACER */}
                <div className="hidden xl:block xl:col-span-1 lg:order-2" />

                {/* MOBILE HEADING */}
                <h2 className="text-4xl font-bold text-primary tracking-tight block lg:hidden order-1">
                    {heading}
                </h2>

                {/* IMAGE (UNCHANGED) */}
                <div
                    className={`flex justify-center lg:justify-end lg:col-span-6
                        order-1
                        ${reverse ? "lg:order-1" : "lg:order-3"}
                    `}
                >
                    <StackedImageCard
                        imageName={imageName}
                        imageExt={imageExt}
                        imageAlt={imageAlt}
                    />
                </div>

            </div>
        </section>
    );
};

export default ImageWithContentSection;
