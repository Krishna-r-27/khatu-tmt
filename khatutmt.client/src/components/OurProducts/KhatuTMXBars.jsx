import { useEffect, useRef, useState } from "react";
function KhatuTMXBars() {
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
      <>
          <section ref={sectionRef} id="khatu-tmx-bars" className="w-full overflow-x-hidden">

              <div className="container mx-auto">
                  <div className="grid md:grid-cols-2 gap-0 md:gap-8 lg:gap-28 items-center">
                      <div
                          className={`text-[#282828] text-sm sm:text-base leading-relaxed space-y-4
    transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-16"}
    `}
                      >
                          <picture className="block md:hidden">
                              <source
                                  srcSet={`${import.meta.env.BASE_URL}/assets/images/close-up-stack-steel-bar.webp`}
                                  type="image/webp"
                              />
                              <img
                                  src={`${import.meta.env.BASE_URL}/assets/images/close-up-stack-steel-bar.png`}
                                  alt="Manufacturing Facility"
                                  className="w-full rounded-2xl shadow-md object-cover"
                              />
                          </picture>
                          <h2 class="text-xl sm:text-4xl font-bold text-primary mt-6 lg:mt-0 mb-4 lg:mb-6">Khatu TMX Bars</h2>
                          <p>
                              <strong>KHATU TMX TMT Bars</strong> are accepted internationally and are superior to conventional cold twisted deformed bars or TOR STEEL Bars. Majority of the Central and State Government Departments, Construction and infrastructure Houses as also Quality Monitoring Agencies accept the same.
                          </p>
                          <p>
                              <strong>KHATU TMX TMT BARS</strong> are manufactured in our <strong>plant at Silvassa</strong> in the range of 08MM to 32 MM dia in grades FE-500, Fe-550, FE-500 D, Fe-550 D As per IS: 1786/2008 <strong>KHATU TMX</strong> TMT BARS exhibit high yield strength coupled with high elongation for strength and safety.
                          </p>
                          
                      </div>
                      <div
                          className={`transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 translate-x-16"}
    `}
                      >
                          <picture className="hidden md:block">
                              <source
                                  srcSet={`${import.meta.env.BASE_URL}/assets/images/close-up-stack-steel-bar.webp`}
                                  type="image/webp"
                              />
                              <img
                                  src={`${import.meta.env.BASE_URL}/assets/images/close-up-stack-steel-bar.png`}
                                  alt="Manufacturing Facility"
                                  className="w-full rounded-2xl shadow-md object-cover"
                              />
                          </picture>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default KhatuTMXBars;