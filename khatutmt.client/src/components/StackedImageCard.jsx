import { useEffect, useRef, useState } from "react";
import Image from "./Image";

const StackedImageCard = ({ imageName, imageExt, imageAlt }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const backRef = useRef(null);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const visible =
                1 -
                Math.min(
                    Math.max(rect.top / windowHeight, 0),
                    1
                );

            setProgress(visible);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const imageScale = 1 + progress * 0.08;      // subtle zoom
    const imageY = (1 - progress) * 30;          // parallax lift
    const backScale = 1 + progress * 0.05;
    const backY = (1 - progress) * 15;

    return (
        <div
            ref={containerRef}
            className="
        relative
        w-full
        max-w-[230px]
        aspect-square
        mx-auto
        overflow-visible
        sm:max-w-[360px]
        md:max-w-[400px]
        lg:max-w-[420px]
      "
        >

            {/* BACK BLOCK */}
            <div
                ref={backRef}
                style={{
                    transform: `
            translateY(${backY}px)
            scale(${backScale})
          `,
                }}
                className="
          absolute
          bottom-[-20px]
          right-[-20px]
          sm:bottom-[-30px]
          sm:right-[-30px]
          lg:bottom-[-40px]
          lg:right-[-40px]
          w-full
          h-full
          bg-[#7A1F0E]
          rounded-2xl
          transition-transform
          duration-300
          ease-out
          will-change-transform
        "
            />

            {/* FRONT IMAGE */}
            <div
                ref={imageRef}
                style={{
                    transform: `
            translateY(${imageY}px)
            scale(${imageScale})
          `,
                }}
                className="
          relative
          w-full
          h-full
          rounded-2xl
          overflow-hidden
          shadow-xl
          transition-transform
          duration-300
          ease-out
          will-change-transform
        "
            >
                <Image
                    name={imageName}
                    ext={imageExt}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
            </div>

        </div>
    );
};

export default StackedImageCard;
