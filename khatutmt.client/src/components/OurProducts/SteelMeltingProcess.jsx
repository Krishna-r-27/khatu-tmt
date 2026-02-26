import FlowChartProcess from "./FlowChartProcess";
import QualityControlBillet from "./QualityControlBillet";
import { useEffect, useRef, useState } from "react";

function SteelMeltingProcess() {
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
        <section ref={sectionRef} className="w-full overflow-hidden">
            <div className="container mx-auto">

                <div className="grid md:grid-cols-2 gap-8 lg:gap-28 items-center">

                    <FlowChartProcess isVisible={isVisible} />
                    <QualityControlBillet isVisible={isVisible} />

                </div>

            </div>
        </section>
    );
}

export default SteelMeltingProcess;