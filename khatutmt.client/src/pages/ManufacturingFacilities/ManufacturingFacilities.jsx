import { useEffect, useRef, useState } from "react";
import BannerSection from "../../components/BannerSection/BannerSection";
const ManufacturingFacilities = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.15 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);
    return (
        <>
            <BannerSection
                title="Manufacturing Facilities"
                pageName="Manufacturing Facilities"/>
            <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100">
            
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Left Image */}
                        <div
                            className={`transform-gpu transition-all duration-[1600ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-24"
                                }`}
                        >
                            <picture>
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}/assets/images/manufacturing.webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={`${import.meta.env.BASE_URL}/assets/images/manufacturing.png`}
                                    alt="Manufacturing Facility"
                                    className="w-full rounded-2xl shadow-md object-cover"
                                />
                            </picture>
                        </div>

                        {/* Right Content */}
                        <div
                            className={`text-[#282828] text-sm sm:text-base leading-relaxed space-y-4
                            transform-gpu transition-all duration-[1800ms]
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-24"
                                }`}
                        >
                            <p>
                                The company's head office is located in Mumbai, and Surat its manufacturing facilities are situated 150 km outside Mumbai in Kharadpada, Silvassa.
                            </p>

                            <p>
                                Shri Khatu Shyam has a steel unit at Silvassa that manufactures M.S. Billets and Ingots along with TMT Bars. We manufacture high quality Billets and Ingots, which helps us make our finished material of high grade.
                            </p>

                            <p>
                                Shri Khatu Shyam Alloys Pvt. Ltd. is equipped with a fully automatic steel rolling mill at Silvassa (Dadra Nagar Haveli), complete with advanced machinery and latest technology, to provide a superior quality of TMT Bars. Renowned names in construction and infrastructure sectors from Mumbai and South Gujarat have relied on our brand of TMT Bars known as Khatu Thermex 500. Certified by Bureau of Indian Standards and also has a recipient of Thermex QST license, Khatu Thermex 500 is a superior quality steel bar that provides unparalleled solution to the construction industry in terms of strength and stability.
                            </p>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ManufacturingFacilities;