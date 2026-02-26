import React, { useEffect, useRef, useState } from "react";
import { clientsData } from "../data/clientsData";
import Image from "./Image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ClientsSlider = () => {
    const showNavigation = clientsData.length > 5;

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 sm:py-14 md:py-16 lg:py-100 bg-white">
            <div className="container mx-auto">

                {/* Heading + Arrows */}
                <div
                    className={`
            flex items-center justify-center md:justify-between mb-6
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
                >
                    <h2 className="text-4xl font-bold text-primary tracking-tight">
                        Clients that Trust us
                    </h2>

                    {showNavigation && (
                        <div className="hidden lg:flex gap-4">
                            <button
                                ref={prevRef}
                                aria-label="Previous"
                                className="w-11 h-11 rounded-full border-gradient-primary flex items-center justify-center text-black text-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                &#8249;
                            </button>

                            <button
                                ref={nextRef}
                                aria-label="Next"
                                className="w-11 h-11 rounded-full border-gradient-primary flex items-center justify-center text-black text-xl shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                &#8250;
                            </button>
                        </div>
                    )}
                </div>

                {/* Slider */}
                <div
                    className={`
            transition-all duration-700 delay-150
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
                >
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={24}
                        navigation={false}
                        pagination={{ clickable: true }}
                        onBeforeInit={(swiper) => {
                            if (showNavigation) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            320: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {clientsData.map((client, index) => (
                            <SwiperSlide key={index}>
                                <a
                                    href={client.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    {/* OUTER (no transforms) */}
                                    <div
                                        style={{ transitionDelay: `${index * 80}ms` }}
                                        className={`
                      h-[120px] mb-10 mt-3
                      transition-all duration-500
                      ${visible
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 translate-y-6"}
                    `}
                                    >
                                        {/* INNER (hover-safe) */}
                                        <div
                                            className="
                        group
                        h-full w-full
                        bg-white rounded-xl
                        border-gradient-primary
                        flex items-center justify-center p-5

                        transform-gpu
                        transition-all duration-300 ease-out

                        hover:border-orange-400
                        hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)]
                      "
                                        >
                                            <Image
                                                name={client.image}
                                                ext={client.ext}
                                                width={180}
                                                height={90}
                                                alt={client.name}
                                                className="
                          w-full max-w-[140px] object-contain
                          transition-transform duration-300 ease-out
                          group-hover:scale-102
                        "
                                            />
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default ClientsSlider;