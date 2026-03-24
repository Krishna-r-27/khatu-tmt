import { useEffect, useState, useRef } from "react";

function BenefitsAccordion({ title, leftItems, rightItems }) {
    const items = [...leftItems, ...rightItems];

    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const intervalRef = useRef(null);

    /* -----------------------------
       Detect Screen Size
    ----------------------------- */
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    /* -----------------------------
       Auto Slide (Only Mobile)
    ----------------------------- */
    useEffect(() => {
        if (!isMobile) return;

        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 4000);

        return () => clearInterval(intervalRef.current);
    }, [isMobile, items.length]);

    return (
        <section className="w-full py-20">
            <div className="mx-auto container">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
                    {title}
                </h2>

                {/* =========================
                   DESKTOP / TABLET GRID
                ========================== */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`
        bg-white
        border-2 border-[#F9AB31]
        rounded-xl
        p-6
        shadow-lg
        transition-all duration-500
        hover:shadow-2xl
        hover:-translate-y-2

        ${index === items.length - 1 ? "lg:col-span-3 sm:col-span-2" : ""}
    `}
                        >
                            <h3 className="text-lg font-medium mb-3 text-[#000000]">
                                {item.title}
                            </h3>

                            {item.content.type === "paragraph" && (
                                <p className="text-[#282828] text-md leading-relaxed">
                                    {item.content.text}
                                </p>
                            )}

                            {item.content.type === "list" && (
                                <ul
                                    className={`
        ${item.title === "Quality Implementation"
                                            ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
                                            : "space-y-2"
                                        }
    `}
                                >
                                    {item.content.items.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed"
                                        >
                                            <img
                                                src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                                alt="arrow"
                                                className="w-4 h-4 mt-1 flex-shrink-0"
                                            />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* =========================
                   MOBILE SLIDER (<769px)
                ========================== */}
                <div className="md:hidden relative overflow-hidden">

                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="min-w-full px-2">
                                <div className="
                                    bg-white
                                    border-2 border-[#F9AB31]
                                    rounded-xl
                                    p-6
                                    shadow-lg
                                ">
                                    <h3 className="text-lg font-medium mb-3 text-[#000000]">
                                        {item.title}
                                    </h3>

                                    {item.content.type === "paragraph" && (
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {item.content.text}
                                        </p>
                                    )}

                                    {item.content.type === "list" && (
                                        <ul className="space-y-2">
                                            {item.content.items.map((point, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-[#282828] text-sm leading-relaxed"
                                                >
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                                        alt="arrow"
                                                        className="w-4 h-4 mt-1"
                                                    />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DOTS */}
                    <div className="flex justify-center mt-6 gap-2">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${current === index
                                        ? "bg-[#F9AB31] w-6"
                                        : "bg-gray-300 w-3"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BenefitsAccordion;