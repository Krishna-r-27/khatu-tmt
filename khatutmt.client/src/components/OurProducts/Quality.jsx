import { useEffect, useRef, useState } from "react";
function Quality() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio );
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
      <>
          <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100 overflow-hidden">
              <div
                  className={`container mx-auto
    transform transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-16"}
    `}
              >
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-28 items-center">

                      {/* Left Image */}
                      <div>
                          <picture>
                              <source
                                  srcSet={`${import.meta.env.BASE_URL}/assets/images/silhouette-group-worker-civil-engineer.webp`}
                                  type="image/webp"
                              />
                              <img
                                  src={`${import.meta.env.BASE_URL}/assets/images/silhouette-group-worker-civil-engineer.png`}
                                  alt="Manufacturing Facility"
                                  className="w-full rounded-2xl shadow-md object-cover"
                              />
                          </picture>
                      </div>

                      {/* Right Content */}
                      <div className="text-[#282828] text-sm sm:text-base leading-relaxed space-y-4">

                          <p>
                              KHATU Multimedia implies quality, and this is seen from the fact that our product and processes are approved by various reputed groups. All the raw materials as well as finishing products are tested as per IS and Thermex Specifications at our well-equipped Chemical and Physical labs, Test Certificates are Issued with every delivery. <strong>KHATU TMX</strong> TMT Bars are manufacturing conforming to various international standards. Vis IS 1786 grade <strong>FE-500/550/500 D/550 D of BIS OF INDIA.</strong>
                          </p>
                          <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-3">
                                  Quality Control Tests:
                              </h3>

                              <ul className="space-y-2">

                                  <li className="flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed">
                                      <picture className="flex-shrink-0">
                                          <source
                                              srcSet={`${import.meta.env.BASE_URL}/assets/images/arrow-point.webp`}
                                              type="image/webp"
                                          />
                                          <img
                                              src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                              alt="arrow"
                                              className="w-4 h-4 mt-1 flex-shrink-0"
                                          />
                                      </picture>
                                      <span>Universal Testing Machine (UTM)</span>
                                  </li>

                                  <li className="flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed">
                                      <picture className="flex-shrink-0">
                                          <source
                                              srcSet={`${import.meta.env.BASE_URL}/assets/images/arrow-point.webp`}
                                              type="image/webp"
                                          />
                                          <img
                                              src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                              alt="arrow"
                                              className="w-4 h-4 mt-1 flex-shrink-0"
                                          />
                                      </picture>
                                      <span>Chemical Etching Test</span>
                                  </li>

                                  <li className="flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed">
                                      <picture className="flex-shrink-0">
                                          <source
                                              srcSet={`${import.meta.env.BASE_URL}/assets/images/arrow-point.webp`}
                                              type="image/webp"
                                          />
                                          <img
                                              src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                              alt="arrow"
                                              className="w-4 h-4 mt-1 flex-shrink-0"
                                          />
                                      </picture>
                                      <span>Bar profile measurement system</span>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Quality;