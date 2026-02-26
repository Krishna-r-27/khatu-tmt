import React, { useEffect, useRef, useState } from "react";
import ThemeButton from "./ThemeButton";
import Image from "./Image";

const ProductHighlightCard = ({
    title,
    description,
    imageName,
    imageExt,
    imageAlt,
    link = "/",
}) => {
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className={`w-full max-w-6xl mx-auto transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
        >
            <div className="flex flex-col md:flex-row items-stretch min-h-[320px]">

                {/* LEFT */}
                <div
                    className="
            w-full md:w-1/2 md:my-10
            px-3 md:px-8 pt-5 pb-5
            border-l-[3px] border-t-[3px] 
            border-orange-400 border-r-[3px] md:border-r-[0px] md:border-b-[3px]
            rounded-tl-[28px] md:rounded-bl-[28px]
            rounded-tr-[28px] md:rounded-tr-[0px]
            bg-white flex flex-col h-auto md:h-[350px]
          "
                >
                    <h2 className="text-xl font-semibold text-[#7A1F10] pt-3">
                        {title}
                    </h2>

                    <p className="mt-2text-[#282828] leading-relaxed text-base line-clamp-7">
                        {description}
                    </p>

                    <div className="mt-4">
                        <ThemeButton
                            text="Know More"
                            link={link}
                            className="
                px-8 py-3 text-sm font-medium
                rounded-full text-white
                bg-gradient-to-r from-orange-400 to-red-500
                hover:opacity-90 transition
                inline-flex items-center gap-2
              "
                        />
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full md:w-1/2 h-[280px] md:h-auto">
                    <Image
                        name={imageName}
                        ext={imageExt}
                        alt={imageAlt}
                        className="w-full h-full
              rounded-tr-[0px]
              rounded-br-[28px]
              rounded-bl-[28px]
              lg:rounded-tr-[28px]
              lg:rounded-bl-[0px]"
                    />
                </div>

            </div>
        </div>
    );
};

export default ProductHighlightCard;
