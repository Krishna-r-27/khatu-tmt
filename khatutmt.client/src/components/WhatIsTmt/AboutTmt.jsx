import { useEffect, useRef, useState } from "react";
function AboutTmt() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);
  return (
      <>
          <section
              ref={sectionRef}
              className={`w-full py-10 sm:py-14 md:py-16 lg:py-100
    transform-gpu transition-all duration-[1600ms]
    ease-[cubic-bezier(0.25,1,0.5,1)]
    ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-24"
                  }`}
          >
              <div className="container mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                      <div>
                          <picture>
                              <source
                                  srcSet={`${import.meta.env.BASE_URL}/assets/images/tmt.webp`}
                                  type="image/webp"
                              />
                              <img
                                  src={`${import.meta.env.BASE_URL}/assets/images/tmt.png`}
                                  alt="Manufacturing Facility"
                                  className="w-full rounded-2xl shadow-md object-cover"
                              />
                          </picture>
                      </div>

                      <div className="text-[#282828] text-sm sm:text-base leading-relaxed space-y-4">

                          <p>
                              <strong>Thermo Mechanical Treatment (TMT)</strong> is the world's most advanced technology in manufacturing of high quality steel. In this method, mild steel is used. The bars are treated after passing through successive stages of rolling to achieve its final shape. A short, intensive but very precise in-line cooling of the rolled bar is imparted in the Thermex process through a proprietary system. This treatment results in a cooled hardened periphery. On further cooling the bar on atmosphere, a thermal exchange (THERMEX) occurs between the core and cooled outside surface whereby the resultant bar structure is a distinct tempered marten site at periphery and a fine grained ferrite-pearlite structure in the central zone. The Thermex Bar produced by the above Quenching and Self-Tempering process (QST) has unique qualities of desired high strength and toughness combined with excellent ductility with bars having elongation (A5) values of 18% to 25%.
                          </p>

                      </div>

                  </div>
              </div>
          </section>
      </>
  );
}

export default AboutTmt;