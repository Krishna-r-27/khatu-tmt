import { useEffect, useRef, useState } from "react";
function SteelQualitySection({ bgImage, cards }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio);
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
        <section
            ref={sectionRef}
            className="relative w-full py-10 sm:py-14 md:py-16 lg:py-100 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark Overlay */}
            <div
                className={`absolute inset-0 transition-opacity duration-[1200ms]
    ${isVisible ? "opacity-100" : "opacity-0"}
    `}
            />

            <div className="relative container mx-auto">

                <div className="grid md:grid-cols-2 gap-6">

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl
    transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                                    : "opacity-0 translate-y-12 scale-95 blur-sm"}
    `}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <h3 className="text-lg md:text-xl font-bold text-[#6F1A07] mb-3">
                                {card.title}
                            </h3>

                            <p className="text-sm md:text-basetext-[#282828] leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default SteelQualitySection;