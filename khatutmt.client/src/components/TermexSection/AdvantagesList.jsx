import React from "react";

const points = [
    "Superior product with Consistent Quality from bars to bars.",
    "Higher Elongation Combined with high yield strength.",
    "Higher Thermal Stability resisting loss of strength at high temperatures (400 - 600 degrees, C) such as during fires. ",
    "Better Corrosion Resistance.",
    "High Weld ability.",
    "High Ductility.",
    "Bond Strength.",
    "Resistance to Strain Aging.",
];

const AdvantagesList = ({ isVisible }) => {
    return (
        <div className={`w-full transition-all duration-1000 ease-out
            ${isVisible
                ? "opacity-100 translate-x-0 rotate-0"
                : "opacity-0 rotate-3 translate-x-10"}
            `}>
            {/* Heading */}
            <h2 className="text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-6">
                Khatu TMX TMT Bars Advantages:
            </h2>

            <ul className="space-y-3">
                {points.map((point, i) => (
                    <li
                        key={i}
            className={`flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed
            transition-all duration-700 ease-out
            ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
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

                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdvantagesList;