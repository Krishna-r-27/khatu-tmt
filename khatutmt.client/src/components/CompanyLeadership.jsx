import React, { useEffect, useRef, useState } from "react";
import ThemeButton from "./ThemeButton";
import Image from "./Image";

const CompanyLeadership = ({
    heading = "From the Founder",
    description1 = (
        <>
            Lead by our chairman, <strong className="text-primary">Mr.Ramavtar Agarwal,</strong> his wealth of experience and keen foresight, has helped us scale new heights of success.He is ably supported by his two sons Mr.Manish Agarwal and Mr.Ashish Agarwal.
</>        
    ),
    description2 = "Together they bring dynamism, commercial acumen, dedication and an enterprising approach that has propelled Shri Khatu Shyam Alloys Pvt. Ltd. as one a force to reckon with in the manufacturing sector.",
    description3 = "We are always ready to serve our customers. We assure a guaranteed service to all our customers.",

    imageName = "Mr-Ramavtar-Agarwal-Chairman",
    imageExt = "jpg",
    imageAlt = "Chairman Mr. Ramavtar Agarwal",

    buttonText = "Know More",
    buttonLink = "/what-is-tmt"
}) => {

    const textRef = useRef(null);
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

        if (textRef.current) observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-center">

                {/* MOBILE HEADING */}
                <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center block lg:hidden">
                    {heading}
                </h2>

                {/* IMAGE */}
                {/* IMAGE */}
                <div className="relative lg:col-span-5 order-1 lg:order-2 flex justify-center">

                    <div
                        className={`
            w-[220px] h-[280px]
            sm:w-[260px] sm:h-[320px]
            md:w-[320px] md:h-[400px]
            lg:w-full lg:h-auto

            transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
            will-change-[transform,opacity]

            ${visible
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-12 scale-95"}
        `}
                    >
                        <Image
                            name={imageName}
                            ext={imageExt}
                            alt={imageAlt}
                            className="
                w-full h-auto object-contain rounded-2xl
                rounded-2xl
                shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]
            "
                        />
                    </div>

                </div>


                {/* TEXT CONTENT */}
                <div
                    ref={textRef}
                    className={`
                        lg:col-span-7 order-2 lg:order-1 mt-10 lg:mt-0
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
                            text-3xl lg:text-4xl font-bold text-primary mb-4 hidden lg:block
                            transition-all duration-700 delay-100
                            ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
                        `}
                    >
                        {heading}
                    </h2>

                    {/* PARA 1 */}
                    <p
                        className={`
                           text-[#282828] leading-relaxed mb-3
                            transition-all duration-700 delay-200
                            ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
                        `}
                    >
                        {description1}
                    </p>

                    {/* PARA 2 */}
                    <p
                        className={`
                           text-[#282828] leading-relaxed mb-3
                            transition-all duration-700 delay-300
                            ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
                        `}
                    >
                        {description2}
                    </p>

                    {/* PARA 3 */}
                    <p
                        className={`
                           text-[#282828] leading-relaxed mb-4
                            transition-all duration-700 delay-400
                            ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
                        `}
                    >
                        {description3}
                    </p>

                    {/* BUTTON */}
                    <div
                        className={`
                            transition-all duration-700 delay-500
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

                </div>

            </div>
        </section>
    );
};

export default CompanyLeadership;
