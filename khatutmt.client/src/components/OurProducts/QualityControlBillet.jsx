function QualityControlBillet({ isVisible }) {
    const points = [
        "Modern chemical analysis equipment",
        "German made Spectrometer for quick and accurate analysis",
        "Automatic mould level control in caster",
        "Billet macro analysis for internal structure control",
    ];

    return (
        <div
            className={`transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"}
    `}
        >
            <h2 className="text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-8">
                Quality control practices for billet mfg
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-4">
                Quality Control Measures Adopted:
            </h3>

            <ul className="space-y-3">
                {points.map((point, i) => (
                    <li
                        key={i}
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

                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default QualityControlBillet;