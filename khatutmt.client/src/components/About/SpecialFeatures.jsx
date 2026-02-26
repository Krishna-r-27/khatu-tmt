import { useEffect, useRef, useState } from "react";
function SpecialFeatures() {
    const testFacilities = [
        "Facility to roll special length customised as per client's requirements",
        "Higher tensile strength than its standard results in a stronger construction and infrastructure",
        "Each TMT Bar has a fixed weight as per ISI standard",
        "Complete Physical and Chemical best of raw material and TMT Bar",
        "Khatu Thermex has minimum deterioration rate because of its chemical composition",
        "Customers get better quality at low cost as per saving of steel",

    ];

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <>
            <section ref={sectionRef} className="w-full overflow-x-hidden">

                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-28 items-center">
                        <div
                            className={`text-[#282828] text-sm sm:text-base leading-relaxed space-y-4
    transform transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]
    ${isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-20"}
    `}
                        > <div>
                                
                                <ul className="list-disc pl-5 marker:text-[#6F1A07]">
                                    <li className="text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-6 lg:ms-12">
                                        What Makes It Special
                                    </li>
                                </ul>

                                <picture className="block md:hidden mb-6 mt-6">
                                    <source
                                        srcSet={`${import.meta.env.BASE_URL}/assets/images/about-steel.webp`}
                                        type="image/webp"
                                    />
                                    <img
                                        src={`${import.meta.env.BASE_URL}/assets/images/about-steel.png`}
                                        alt="Manufacturing Facility"
                                        className="w-full rounded-2xl object-cover"
                                    />
                                </picture>

                                <ul className="space-y-4">
                                    {testFacilities.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed"
                                        >
                                            <picture className="flex-shrink-0">
                                                <source
                                                    srcSet={`${import.meta.env.BASE_URL}/assets/images/arrow-point.webp`}
                                                    type="image/webp"
                                                />
                                                <img
                                                    src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                                    alt="arrow"
                                                    className="w-4 h-4 mt-1 flex-shrink-0"
                                                />
                                            </picture>

                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div
                            className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]
    ${isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-20"}
    `}
                        >
                            <picture className="hidden md:block">
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}/assets/images/about-steel.webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={`${import.meta.env.BASE_URL}/assets/images/about-steel.png`}
                                    alt="Manufacturing Facility"
                                    className="w-full rounded-2xl object-cover"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SpecialFeatures;