import { useState, useEffect, useRef } from "react";

function BenefitsAccordion({ title, leftItems, rightItems }) {
    const [activeKey, setActiveKey] = useState("left-0"); // First item open

    const toggleItem = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    const renderItems = (items, columnName) =>
        items.map((item, index) => {
            const key = `${columnName}-${index}`;
            const isOpen = activeKey === key;

            return (
                <div key={key} className="mb-4">

                    <button
                        onClick={() => toggleItem(key)}
                        className={`w-full flex justify-between items-center
              px-4 py-4 text-left text-white
              font-semibold text-base sm:text-lg
              bg-gradient-to-r from-[#CF3A38] to-[#F89B32]
              ${isOpen ? "rounded-t-md" : "rounded-md"}`}
                    >
                        {item.title}
                        <picture className="w-5 h-5">
                            {isOpen ? (
                                <>
                                    <source
                                        srcSet={`${import.meta.env.BASE_URL}/assets/images/up-arrow.webp`}
                                        type="image/webp"
                                    />
                                    <img
                                        src={`${import.meta.env.BASE_URL}/assets/images/up-arrow.png`}
                                        alt="Collapse"
                                        className="w-4 h-4"
                                    />
                                </>
                            ) : (
                                <>
                                    <source
                                        srcSet={`${import.meta.env.BASE_URL}/assets/images/down-arrow.webp`}
                                        type="image/webp"
                                    />
                                    <img
                                        src={`${import.meta.env.BASE_URL}/assets/images/down-arrow.png`}
                                        alt="Expand"
                                        className="w-4 h-4"
                                    />
                                </>
                            )}
                        </picture>

                    </button>

                    {isOpen && (
                        <div className="bg-[linear-gradient(90deg,#CF3A38_0%,#F89B32_100%)] p-[1px] rounded-b-md">
                            <div className="bg-white p-3 sm:p-4 md:p-4 lg:p-5 text-sm sm:text-base text-[#282828] rounded-b-md">
                                {item.content.type === "paragraph" && (
                                    <p>
                                        {item.content.highlight
                                            ? item.content.text.split(
                                                new RegExp(`(${item.content.highlight.join("|")})`, "g")
                                            ).map((part, i) =>
                                                item.content.highlight.includes(part) ? (
                                                    <strong key={i}>{part}</strong>
                                                ) : (
                                                    part
                                                )
                                            )
                                            : item.content.text}
                                    </p>
                                )}

                                {item.content.type === "list" && (
                                    <ul className="space-y-2">
                                        {item.content.items.map((point, i) => (
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
                                                <span>
                                                    {item.content.highlight
                                                        ? point
                                                            .split(
                                                                new RegExp(
                                                                    `(${[...item.content.highlight]
                                                                        .sort((a, b) => b.length - a.length)
                                                                        .join("|")})`,
                                                                    "g"
                                                                )
                                                            )
                                                            .map((part, i) =>
                                                                item.content.highlight.includes(part) ? (
                                                                    <strong key={i}>{part}</strong>
                                                                ) : (
                                                                    part
                                                                )
                                                            )
                                                        : point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            );
        });

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100">
            <div className="container mx-auto">

                <h2
                    className={`text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-8
    transform-gpu transition-all duration-[1400ms]
    ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-16"
                        }`}
                >
                    {title}
                </h2>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-0 md:gap-10">

                    <div
                        className={`transform-gpu transition-all duration-[1600ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-24"
                            }`}
                    >
                        {renderItems(leftItems, "left")}
                    </div>

                    <div
                        className={`transform-gpu transition-all duration-[1700ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-24"
                            }`}
                    >
                        {renderItems(rightItems, "right")}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BenefitsAccordion;