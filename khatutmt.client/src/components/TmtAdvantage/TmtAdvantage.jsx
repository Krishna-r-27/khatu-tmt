import { useEffect, useRef, useState } from "react";
import AdvantageCard from "./AdvantageCard";

const TmtAdvantage = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
        );

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const advantages = [
        "Superior product with consistent quality",
        "Higher elongation combined with high yield strength",
        "High thermal stability resisting loss of strength at high temperature (400-600o C) during fires",
        "Earthquake resistant",
        "High weld ability & bendability",
        "Bond strength & resistance strengthening"
    ];

    const features = [
        "Facility to roll special length customised as per your requirements",
        "Manufactured in an ultramodern fully automatic plant",
        "Higher tensile strength than its standard results in a stronger construction and infrastructure",
        "Each TMT bar has a fixed weight as per ISI standard",
        "Complete Physical and Chemical best of raw material and TMT bar",
        "KhatuThermex has minimum deterioration rate because of its chemical composition",
        "Customers get better quality at low cost as per saving of steel"
    ];

    return (
        <section ref={sectionRef} className="w-full pb-12 md:pb-16 lg:pb-20 overflow-x-hidden">
            <div className="container mx-auto">

                {/* Section Heading */}
                <div className="lg:mb-8 mb-6">
                    <h2
                        className={`text-xl sm:text-4xl font-bold text-primary mb-4
                        transform-gpu transition-all duration-[1200ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-16"
                            }`}
                    >
                        Advantages
                    </h2>

                    <p
                        className={`text-[#282828] text-sm sm:text-base
                        transform-gpu transition-all duration-[1400ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-16"
                            }`}
                    >
                        Instilling quality and strength in our steel products is our top most priority. To deliver only the best products, we ensure that quality is a part of the entire process right from the selection of the raw material till the manufacturing of our product.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
                    <div
                        className={`h-full transform-gpu transition-all duration-[1500ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-24"
                            }`}
                    >
                        <AdvantageCard
                            title="It gives us the advantage of:"
                            items={advantages}
                        />
                    </div>

                    <div
                        className={`h-full transform-gpu transition-all duration-[1500ms]
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-24"
                            }`}
                    >
                        <AdvantageCard
                            title="Features"
                            items={features}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TmtAdvantage;