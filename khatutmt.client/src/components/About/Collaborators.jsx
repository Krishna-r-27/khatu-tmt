import { useEffect, useRef, useState } from "react";
function Collaborators() {
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
      <>
          <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100 overflow-x-hidden">

              <div className="container mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-28 items-center">

                      {/* Left Image */}
                      <div
                          className={`transform-gpu transition-all duration-[1800ms]
ease-[cubic-bezier(0.16,1,0.3,1)]
${isVisible
                                  ? "opacity-100 translate-x-0 scale-100"
                                  : "opacity-0 -translate-x-16 scale-95"
                              }`}
                      >
                          <picture>
                              <source
                                  srcSet={`${import.meta.env.BASE_URL}/assets/images/indian-businessman-signs-contract.webp`}
                                  type="image/webp"
                              />
                              <img
                                  src={`${import.meta.env.BASE_URL}/assets/images/indian-businessman-signs-contract.png`}
                                  alt="Manufacturing Facility"
                                  className="w-full rounded-2xl shadow-md object-cover transition-transform duration-[1200ms]"
                              />
                          </picture>
                      </div>

                      {/* Right Content */}
                      <div
                          className={`text-[#282828] text-sm sm:text-base leading-relaxed space-y-4
transform-gpu transition-all duration-[2000ms]
ease-[cubic-bezier(0.16,1,0.3,1)]
${isVisible
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 translate-x-16"
                              }`}
                      ><h2
                          className={`text-xl sm:text-4xl font-bold text-primary mb-4
    transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-6"}
    `}
                      >
                              Collaborators
                          </h2>
                          <p>
                              In keeping with our tradition of exploring the availability of latest technology to further enhance the quality of our products as also introducing new products accepted internationally the company has entered in to collaboration with <strong>H S E - Germany</strong> through their exclusive agents in India.
                              M/s H & K Rolling Mill Engineers Pvt Ltd Mumbai for supply, installation, commissioning of the Thermex System for manufacture of
                              <strong> THERMEX TMT BARS.</strong>
                          </p>
                          
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Collaborators;