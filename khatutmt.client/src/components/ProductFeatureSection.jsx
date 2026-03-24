import React, { useEffect, useRef, useState } from "react";
import ThemeButton from "./ThemeButton";
import ProductHighlightCard from "./ProductHighlightCard";

const ProductFeatureSection = () => {

    const textRef = useRef(null);
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

        if (textRef.current) observer.observe(textRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-white pb-100 text-center lg:text-start">
            <div className="container mx-auto pb-4">

                {/* TOP TEXT ROW */}
                <div
                    ref={textRef}
                    className={`
                        flex flex-col lg:flex-row items-start lg:items-center
                        justify-between gap-6 mb-8

                        transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
                        will-change-[transform,opacity,filter]
                        ${visible
                            ? "opacity-100 translate-y-0 blur-0"
                            : "opacity-0 translate-y-14 blur-sm"}
                    `}
                >

                    {/* LEFT CONTENT */}
                    <div className="max-w-4xl">

                        <h2
                            className={`
                                text-4xl font-bold text-primary tracking-tight
                                transition-all duration-700 delay-100
                                ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-6"}
                            `}
                        >
                            Our Products
                        </h2>

                        <p
                            className={`
                                mt-3 text-[#282828] text-sm md:text-base leading-relaxed
                                transition-all duration-700 delay-200
                                ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-6"}
                            `}
                        >
                            The first step of billet production is the procurement of sponge iron. High-quality sponge iron is sourced and stored in the raw material yard. This sponge iron (DRI), along with scrap, is then added to the furnace using a giant crane.
                        </p>

                    </div>

                    {/* RIGHT BUTTON */}
                    <div
                        className={`
        w-full
        flex
        justify-center
        lg:justify-end
        transition-all duration-700 delay-300
        ${visible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-6"}
    `}
                    >
                        <div className="flex justify-center w-full lg:w-auto">
                            <ThemeButton
                                text="Know More"
                                link="/products"
                                className="px-8 py-3 text-sm font-medium"
                            />
                        </div>
                    </div>


                </div>

                {/* CARDS (UNCHANGED) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    <div className="lg:col-span-6">
                        <ProductHighlightCard
                            title="Billets "
                            description="Shri Khatu Shyam produces billets as per the requirements of TMT bars, with a strong focus on quality. The company is located in Silvassa."
                            imageName="billets-banner-home"
                            imageExt="png"
                            imageAlt="Billets - Khatu TMT"
                            link="/products#billets"
                        />
                    </div>

                    <div className="lg:col-span-6">
                        <ProductHighlightCard
                            title="TMT Bars"
                            description="KHATU THERMEX TMT Bars are internationally accepted and superior to conventional steel bars."
                            imageName="home-tmt-new"
                            imageExt="png"
                            imageAlt="TMT Bars  - Khatu TMT"
                            link="/products#khatu-tmx-bars"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductFeatureSection;
