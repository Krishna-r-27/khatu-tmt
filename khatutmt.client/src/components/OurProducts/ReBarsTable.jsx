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
                       TMT RE-BARS:</h2>
                  <div className="overflow-x-auto rounded-3xl md:mt-6">

                      <table className="min-w-full border-separate border-spacing-0 text-sm sm:text-base border border-[#C97A6A] rounded-3xl overflow-hidden">

                          {/* HEADER */}
                          <thead className="bg-[#6F1A07] text-white text-center [&>tr>th]:font-normal text-lg">

                              <tr>
                                  <th
                                      rowSpan={2}
                                      className="px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4 
                border-b border-white border-r border-white first:rounded-tl-3xl"
                                  >
                                      Size in mm
                                  </th>

                                  <th className="px-3 py-3 border-b border-white border-r border-white">
                                      Specific Weight
                                  </th>

                                  <th className="px-3 py-3 border-b border-white border-r border-white">
                                      BIS Standard
                                  </th>

                                  <th className="px-3 py-3 border-b border-white border-r border-white">
                                      Tolerance
                                  </th>

                                  <th colSpan={2} className="px-3 py-3 border-b border-white border-r border-white">
                                      KHATU TMT Re-Bars Tolerance
                                  </th>

                                  <th
                                      className="px-3 py-3 border-b border-white last:rounded-tr-3xl"
                                  >
                                      Saving
                                  </th>
                              </tr>

                              <tr>
                                  <th className="px-3 py-2 border-b border-white border-r border-white">
                                      Gram Meter
                                  </th>
                                  <th className="px-3 py-2 border-b border-white border-r border-white">
                                      Gram Meter
                                  </th>
                                  <th className="px-3 py-2 border-b border-white border-r border-white">
                                      %
                                  </th>
                                  <th className="px-3 py-2 border-b border-white border-r border-white">
                                      Gram Meter
                                  </th>
                                  <th className="px-3 py-2 border-b border-white border-r border-white">
                                      %
                                  </th>
                                  <th className="px-3 py-2 border-b border-white">
                                      By Weight
                                  </th>
                              </tr>

                          </thead>

                          {/* BODY */}
                          <tbody className="text-center text-[#282828]">

                              {[
                                  ["8 mm", "395", "367 To 423", "+7 To -7", "371 To 383", "-3 To -6", "5.5 %"],
                                  ["10 mm", "617", "574 To 660", "+7 To -7", "580 To 598", "-3 To -6", "5.5 %"],
                                  ["12 mm", "888", "844 To 932", "+5 To -5", "852 To 861", "-3 To -4", "4.5 %"],
                                  ["16 mm", "1580", "1501 To 1659", "+5 To -5", "1517 To 1533", "-3 To -4", "4.5 %"],
                                  ["20 mm", "2470", "2396 To 2544", "+3 To -3", "2408 To 2421", "-2 To -2.5", "2.75 %"],
                                  ["25 mm", "3850", "3734 To 3965", "+3 To -3", "3754 To 3773", "-2 To -2.5", "2.75 %"],
                                  ["32 mm", "6310", "6120 To 6499", "+3 To -3", "6152 To 6184", "-2 To -2.5", "2.75 %"],
                              ].map((row, index) => (
                                  <tr key={index}>
                                      {row.map((cell, i) => (
                                          <td
                                              key={i}
                                              className={`px-3 py-3 md:px-4 md:py-4 lg:px-4 lg:py-4
                        border-b border-[#C97A6A]
                        border-r border-[#C97A6A]
                        ${index === 6 ? "border-b-0" : ""}
                        ${i === row.length - 1 ? "border-r-0" : ""}
                        ${index === 6 && i === 0 ? "rounded-bl-3xl" : ""}
                        ${index === 6 && i === row.length - 1 ? "rounded-br-3xl" : ""}`}
                                          >
                                              {cell}
                                          </td>
                                      ))}
                                  </tr>
                              ))}

                          </tbody>

                      </table>

                  </div>

                  <h2 className="text-xl sm:text-4xl font-bold text-primary mt-12 mb-4">
                      Chemical Properties of Khatu TMT Bars:
                  </h2>
                  <p className="mb-4 md:mb-6">Khatu thermax TMT Bars are available in a wide range of sizes. Regular 8, 10, 12, 16, 20, 25, 32 MM Diameter.</p>

                  <div className="overflow-x-auto rounded-3xl">

                      <table className="min-w-full border-separate border-spacing-0 text-sm sm:text-base border border-[#C97A6A] rounded-3xl overflow-hidden">

                          {/* HEADER */}
                          <thead className="bg-[#6F1A07] text-white text-center [&>tr>th]:font-normal text-lg">

                              {/* Row 1 */}
                              <tr>
                                  <th
                                      rowSpan={2}
                                      className="px-4 py-3 border-b border-white border-r border-white first:rounded-tl-3xl"
                                  >
                                      Constituent
                                  </th>

                                  <th
                                      colSpan={2}
                                      className="px-4 py-3 border-b border-white border-r border-white"
                                  >
                                      BIS Standard
                                  </th>

                                  <th
                                      rowSpan={2}
                                      className="px-4 py-3 border-b border-white border-r border-white"
                                  >
                                      Khatu Thermex TMT <br /> Re-bars Tolerance
                                  </th>

                                  <th
                                      rowSpan={2}
                                      className="px-4 py-3 border-b border-white last:rounded-tr-3xl"
                                  >
                                      Percentage
                                  </th>
                              </tr>

                              {/* Row 2 */}
                              <tr>
                                  <th className="px-4 py-3 border-b border-white border-r border-white">
                                      FE-550
                                  </th>
                                  <th className="px-4 py-3 border-b border-white border-r border-white">
                                      FE-550 D
                                  </th>
                              </tr>

                          </thead>

                          {/* BODY */}
                          <tbody className="text-center text-[#282828]">

                              {[
                                  ["C%", "0.30", "0.25", "0.23", "Max"],
                                  ["S%", "0.055", "0.040", "0.037", "Max"],
                                  ["P%", "0.055", "0.040", "0.037", "Max"],
                                  ["S & P%", "0.105", "0.075", "0.072", "Max"],
                              ].map((row, index) => (
                                  <tr key={index}>
                                      {row.map((cell, i) => (
                                          <td
                                              key={i}
                                              className={`px-4 py-3 
                        border-b border-[#C97A6A] 
                        border-r border-[#C97A6A]
                        ${index === 3 ? "border-b-0" : ""}
                        ${i === row.length - 1 ? "border-r-0" : ""}
                        ${index === 3 && i === 0 ? "rounded-bl-3xl" : ""}
                        ${index === 3 && i === row.length - 1 ? "rounded-br-3xl" : ""}`}
                                          >
                                              {cell}
                                          </td>
                                      ))}
                                  </tr>
                              ))}

                          </tbody>
                      </table>

                  </div>

                  {/* Mechanical Properties */}
                  <h2 className="text-xl sm:text-4xl font-bold text-primary mt-12">
                      Mechanical Properties of Khatu TMT Bars:
                  </h2>
                  <div className="overflow-x-auto rounded-3xl mt-6">

                      <table className="min-w-full border-separate border-spacing-0 text-sm sm:text-base border border-[#C97A6A] rounded-3xl overflow-hidden">

                          {/* HEADER */}
                          <thead className="bg-[#6F1A07] text-white text-center 
    [&>tr>th]:font-normal text-lg">

                              <tr>
                                  <th className="px-4 py-3 border-b border-white border-r border-white first:rounded-tl-3xl">
                                      Mechanical Properties
                                  </th>
                                  <th className="px-4 py-3 border-b border-white border-r border-white">
                                      FE-550
                                  </th>
                                  <th className="px-4 py-3 border-b border-white border-r border-white">
                                      FE-550 D
                                  </th>
                                  <th className="px-4 py-3 border-b border-white last:rounded-tr-3xl">
                                      Percentage
                                  </th>
                              </tr>
                          </thead>

                          {/* BODY */}
                          <tbody className="text-center text-[#282828]">

                              {[
                                  ["0.2% Proof Stress (N/mm2)", "575", "600", "Min"],
                                  ["Tensile Strength (N/mm2)", "650", "650", "Min"],
                                  ["Elongation (%Min)", "12% to 18%", "16% to 22%", "Min"],
                              ].map((row, index) => (
                                  <tr key={index}>
                                      {row.map((cell, i) => (
                                          <td
                                              key={i}
                                              className={`px-4 py-3 
                        border-b border-[#C97A6A] 
                        border-r border-[#C97A6A]
                        ${index === 2 ? "border-b-0" : ""}
                        ${i === row.length - 1 ? "border-r-0" : ""}
                        ${index === 2 && i === 0 ? "rounded-bl-3xl" : ""}
                        ${index === 2 && i === row.length - 1 ? "rounded-br-3xl" : ""}`}
                                          >
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