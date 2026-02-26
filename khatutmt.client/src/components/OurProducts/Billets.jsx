import { useEffect, useRef, useState } from "react";
function Billets() {
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
          <section ref={sectionRef} id="billets" className="w-full py-10 sm:py-14 md:py-16 lg:py-100">

              <div className="container mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-28 items-center">

                      <div
                          className={`transform transition-all duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95"}
    `}
                      >
                          <picture>
                              <source
                                  srcSet={`${import.meta.env.BASE_URL}/assets/images/steel-bilet-product.webp`}
                                  type="image/webp"
                              />
                              <img
                                  src={`${import.meta.env.BASE_URL}/assets/images/steel-bilet-product.png`}
                                  alt="Manufacturing Facility"
                                  className="w-full rounded-2xl shadow-md object-cover"
                              />
                          </picture>
                      </div>

                      <div className="text-[#282828] text-sm sm:text-base leading-relaxed space-y-6">
                          <h2 class="text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-6">Billets</h2>
                          {[
                              "Billets are manufactured as per IS standards (2831-2012) and are used for manufacture of TMT Re Bars.",
                              "Mixture of Sponge Iron, DRI are fed into induction furnaces of capacities 25 and 30 MT in steel melting shop to produce supreme quality mild steel.",
                              "After going through rigorous treatment and chemical analysis, the molten steel is cast into square billets of the desired cross section in high speed CONCAST (Now Primetals) CCM (Continuous Casting Machine). The cast steel is cooled with the help of regulated water and air pressure to form billets of accurate cross section.",
                              "As the billets pass towards the cooling bed, they are accurately cut into the required lengths by high accuracy shearing machines. Finally, the hot billets are laid on the insulated roller transfer tables to be transported to the rolling mill."
                          ].map((text, index) => (
                              <p
                                  key={index}
                                  className={`transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isVisible
                                          ? "opacity-100 translate-y-0"
                                          : "opacity-0 translate-y-6"}
            `}
                                  style={{ transitionDelay: `${index * 200}ms` }}
                              >
                                  {text}
                              </p>
                          ))}
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default Billets;