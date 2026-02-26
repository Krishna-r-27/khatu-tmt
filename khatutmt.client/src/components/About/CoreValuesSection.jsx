import { useEffect, useRef, useState } from "react";
function CoreValuesSection() {
    const values = [
        {
            title: "Quality",
            imageWebp: "assets/images/view-modern-construction-site.webp",
            imagePng: "assets/images/view-modern-construction-site.png",
            description:
                "Instilling quality and strength in our steel products is our top most priority.To deliver only the best products, we ensure that quality is a part of the entire process right from the selection of the raw material till the manufacturing of our product.",
        },
        {
            title: "Commitment",
            imageWebp: "assets/images/successful-business-peolple-handshaking.webp",
            imagePng: "assets/images/successful-business-peolple-handshaking.png",
            description:
                "With the firm commitment towards quality, we are engaged in manufacturing and supplying Thermex TMT Bars.",
        },
        {
            title: "Accountability",
            imageWebp: "assets/images/workplace-results-professional-report.webp",
            imagePng: "assets/images/workplace-results-professional-report.png",
            description:
                "The plant is accredited with IS 1786: 2008 certification for high strength deformed steel bars and wires for concrete reinforcement.",
        },
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
        <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100">
            <div className="container mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {values.map((item, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl border-[3px] border-[#6F1A07] p-4 lg:p-6
transform-gpu transition-all duration-[1400ms]
ease-[cubic-bezier(0.16,1,0.3,1)]
will-change-transform
${isVisible
                                    ? "opacity-100 translate-y-0 scale-100"
                                    : "opacity-0 translate-y-20 scale-95"}
 hover:shadow-2xl`}
                            style={{ transitionDelay: `${index * 250}ms` }}
                        >{/* Image */}
                            <div className="rounded-xl overflow-hidden mb-5">
                                <picture>
                                    <source srcSet={item.imageWebp} type="image/webp" />
                                    <img
                                        src={`${import.meta.env.BASE_URL}/${item.imagePng}`}
                                        alt={item.title}
                                        className="w-full h-48 object-cover rounded-xl
transition-transform duration-[2000ms]
ease-[cubic-bezier(0.16,1,0.3,1)]
transform-gpu
group-hover:scale-125"
                                    />
                                </picture>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-primary mb-3">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-[#282828] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default CoreValuesSection;