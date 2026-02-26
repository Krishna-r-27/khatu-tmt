import { useEffect, useRef, useState } from "react";
function ReBarsTable() {
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
          <section ref={sectionRef} className="w-full py-10 sm:py-14 md:py-16 lg:py-100 overflow-hidden">
              <div
                  className={`container mx-auto
    transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
    ${isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"}
    `}
              >
                  <h2 class="text-xl sm:text-4xl font-bold text-primary mb-4">Saving in Weight Due to minimum Rolling tolerance on the use of KHATU
                      TMX TMT RE-BARS:</h2>
                  <div className="overflow-x-auto rounded-3xl">

                      <table className="min-w-full border-collapse text-sm sm:text-base">

                          {/* Header */}
                          <thead className="bg-[#6F1A07] text-white text-center 
                          [&>tr>th]:border 
                          [&>tr>th]:border-white">

                              <tr>
                                  <th className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">Size in mm</th>
                                  <th className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">Specific Weight</th>
                                  <th className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">BIS Standard</th>
                                  <th className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">Tolerance</th>
                                  <th colSpan="2" className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">
                                      KHATU TMX TMT Re-Bars Tolerance
                                  </th>
                                  <th className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">Saving</th>
                              </tr>

                              <tr>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3"></th>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3">Gram Meter</th>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3">Gram Meter</th>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3">%</th>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3">Gram Meter</th>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3">%</th>
                                  <th className="px-3 py-2 lg:px-4 lg:py-3">By Weight</th>
                              </tr>

                          </thead>

                          {/* Body */}
                          <tbody className="text-center text-[#282828] 
                         [&>tr>td]:border 
                         [&>tr>td]:border-[#C97A6A]">

                              {[
                                  ["8 mm", "395", "367 To 423", "+7 To -7", "371 To 383", "-3 To -6", "5.5 %"],
                                  ["10 mm", "617", "574 To 660", "+7 To -7", "580 To 598", "-3 To -6", "5.5 %"],
                                  ["12 mm", "888", "844 To 932", "+5 To -5", "852 To 861", "-3 To -4", "4.5 %"],
                                  ["16 mm", "1580", "1501 To 1659", "+5 To -5", "1517 To 1533", "-3 To -4", "4.5 %"],
                                  ["20 mm", "2470", "2396 To 2544", "+3 To -3", "2408 To 2421", "-2 To -2.5", "2.75 %"],
                                  ["25 mm", "3850", "3935 To 3965", "+3 To -3", "3754 To 3773", "-2 To -2.5", "2.75 %"],
                                  ["32 mm", "6310", "6120 To 6499", "+3 To -3", "6152 To 6184", "-2 To -2.5", "2.75 %"],
                              ].map((row, index) => (
                                  <tr key={index}>
                                      {row.map((cell, i) => (
                                          <td key={i} className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4">
                                              {cell}
                                          </td>
                                      ))}
                                  </tr>
                              ))}

                          </tbody>

                      </table>

                  </div>
              </div>
          </section>
      </>
  );
}

export default ReBarsTable;