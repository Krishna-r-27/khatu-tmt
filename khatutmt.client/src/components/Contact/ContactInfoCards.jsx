import { useEffect, useRef, useState } from "react";

const ContactInfoCards = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const cards = [
        {
            title: "Our Location",
            content: (
                <>
                    507, Maganlal Chambers, Carnac Bunder<br />
                    Masjid, Mumbai – 400009
                </>
            ),
            img: "location"
        },
        {
            title: "Email On",
            content: (
                <>
                    <a
                        href="mailto:info@khatutmt.com"
                        className="hover:text-[#6F1A07] transition-colors duration-300"
                    >
                        info@khatutmt.com
                    </a>
                    <br />
                    <a
                        href="mailto:sales@khatutmt.com"
                        className="hover:text-[#6F1A07] transition-colors duration-300"
                    >
                        sales@khatutmt.com
                    </a>
                </>
            ),
            img: "sms-star"
        },
        {
            title: "Call On",
            content: (
                <a
                    href="tel:+919930772570"
                    className="hover:text-[#6F1A07] transition-colors duration-300"
                >
                    +91 99307 72570
                </a>
            ),
            img: "call-outgoing"
        }
    ];

    return (
        <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`border border-[#6F1A07] rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 flex items-start gap-4 bg-white
                            transform transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isVisible
                                    ? "opacity-100 translate-y-0 rotate-0"
                                    : "opacity-0 translate-y-10 rotate-[-2deg]"
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="bg-[#6F1A07] p-3 rounded-lg flex-shrink-0">
                                <picture>
                                    <source
                                        srcSet={`${import.meta.env.BASE_URL}/assets/images/${card.img}.webp`}
                                        type="image/webp"
                                    />
                                    <img
                                        src={`${import.meta.env.BASE_URL}/assets/images/${card.img}.png`}
                                        alt={card.title}
                                        className="h-6 w-6 object-contain"
                                    />
                                </picture>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#6F1A07] mb-2">
                                    {card.title}
                                </h4>
                                <p className="text-sm text-[#282828]">
                                    {card.content}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ContactInfoCards;