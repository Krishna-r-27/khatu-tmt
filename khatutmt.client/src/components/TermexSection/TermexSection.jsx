import React, { useEffect, useRef, useState } from "react";
import QualityObjectives from "./QualityObjectives";
import AdvantagesList from "./AdvantagesList";

const TermexSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
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
            className="w-full pt-8 md:pt-16 lg:pt-20 overflow-x-hidden overflow-y-hidden"
        >
            <div
                className={`container mx-auto transition-all duration-1000 ease-out
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <QualityObjectives isVisible={isVisible} />
                    <AdvantagesList isVisible={isVisible} />
                </div>
            </div>
        </section>
    );
};

export default TermexSection;