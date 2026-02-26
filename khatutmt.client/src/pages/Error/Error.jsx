import BannerSection from "../../components/BannerSection/BannerSection";
import { Link } from "react-router-dom";
function Error() {
  return (
      <>
          <BannerSection
              title="404"
              pageName="404" />
          <section className="w-full py-10 sm:py-14 md:py-16 lg:py-100">
              <div className="container mx-auto">

                  <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                      Error 404 page not found
                  </h1>
                  {/* ================= HOME ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/" className="hover:underline">
                          Home
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      Khatut TMT is a leading manufacturer of high-strength TMT bars
                      designed for durable, earthquake-resistant, and long-lasting
                      construction. We deliver premium quality steel solutions that
                      ensure safety, strength, and reliability for every project.
                      Our TMT bars are manufactured using advanced technology to
                      provide superior bonding strength, corrosion resistance, and
                      excellent ductility, making them ideal for residential,
                      commercial, and infrastructure projects.
                  </p>


                  {/* ================= ABOUT US ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/about-us" className="hover:underline">
                          About Us
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      Khatut TMT is committed to producing high-quality thermo
                      mechanically treated (TMT) steel bars that meet national and
                      international standards. With years of experience in steel
                      manufacturing, we focus on innovation, quality control, and
                      customer satisfaction.
                      Our mission is to build a stronger India by supplying reliable
                      construction steel that enhances structural integrity and
                      long-term performance.
                  </p>


                  {/* ================= PRODUCTS ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/products" className="hover:underline">
                          Products
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      We manufacture premium grade TMT bars in various sizes suitable
                      for residential, commercial, and industrial construction.
                      Our products offer superior tensile strength, flexibility,
                      and resistance against corrosion.
                      Each bar undergoes strict quality testing to ensure
                      consistency, durability, and compliance with IS standards.
                  </p>


                  {/* ================= MANUFACTURING FACILITIES ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/manufacturing-facilities" className="hover:underline">
                          Manufacturing Facilities
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      Our state-of-the-art manufacturing unit is equipped with
                      advanced rolling mills and automated quality control systems.
                      We use modern quenching and self-tempering technology to
                      produce high-strength TMT bars.
                      From raw material selection to final dispatch, every stage
                      follows strict quality protocols to ensure superior product performance.
                  </p>


                  {/* ================= WHAT IS TMT ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/what-is-tmt" className="hover:underline">
                          What is TMT?
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      TMT (Thermo Mechanically Treated) bars are high-strength
                      reinforcement bars widely used in construction. They are
                      manufactured using a special heat treatment process that
                      enhances strength, ductility, and corrosion resistance.
                      TMT bars provide better earthquake resistance, higher load
                      bearing capacity, and longer structural life compared to
                      conventional steel bars.
                  </p>


                  {/* ================= CONTACT US ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/contact-us" className="hover:underline">
                          Contact Us
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-4 lg:mb-5">
                      Get in touch with Khatut TMT for product inquiries,
                      dealership opportunities, or bulk orders. Our team is ready
                      to assist you with technical guidance and project requirements.
                  </p>

                  <ul className="space-y-6 text-sm text-gray-333333">

                      <li className="flex items-start gap-4">
                          <span className="bg-[#6F1A07] p-2 rounded-md flex-shrink-0">
                              <picture>
                                  <source
                                      srcSet="/khatu-tmt/assets/images/location.webp"
                                      type="image/webp"
                                  />
                                  <img
                                      src="/khatu-tmt/assets/images/location.png"
                                      alt="Location"
                                      className="h-4 w-4 object-contain"
                                  />
                              </picture>
                          </span>
                          <span className="leading-relaxed">
                              <h3 className="text-lg text-[#6F1A07] font-bold mb-1">
                                  Shri Khatu Shyam Alloys Pvt Ltd
                              </h3>
                              507, Maganlal Chambers, Carnac Bunder<br />
                              Masjid, Mumbai - 400009
                          </span>   
                      </li>

                      <li className="flex items-start gap-4">

                          <span className="bg-[#6F1A07] p-2 rounded-md flex-shrink-0">
                              <picture>
                                  <source
                                      srcSet="/khatu-tmt/assets/images/sms-star.webp"
                                      type="image/webp"
                                  />
                                  <img
                                      src="/khatu-tmt/assets/images/sms-star.png"
                                      alt="Email"
                                      className="h-4 w-4 object-contain"
                                  />
                              </picture>
                          </span>

                          {/* Emails Column */}
                          <div className="flex flex-col">
                              <a
                                  href="mailto:info@khatutmt.com"
                                  className="hover:text-[#6F1A07]"
                              >
                                  info@khatutmt.com
                              </a>

                              <a
                                  href="mailto:sales@khatutmt.com"
                                  className="hover:text-[#6F1A07]"
                              >
                                  sales@khatutmt.com
                              </a>
                          </div>

                      </li>

                      <li className="flex items-center gap-4">
                          <span className="bg-[#6F1A07] p-2 rounded-md flex-shrink-0">
                              <picture>
                                  <source
                                      srcSet="/khatu-tmt/assets/images/call-outgoing.webp"
                                      type="image/webp"
                                  />
                                  <img
                                      src="/khatu-tmt/assets/images/call-outgoing.png"
                                      alt="Call"
                                      className="h-4 w-4 object-contain"
                                  />
                              </picture>
                          </span>
                          <a
                              href="tel:+919930772570" className="hover:text-[#6F1A07]">
                              +91 99307 72570
                          </a>
                      </li>
                  </ul>

              </div>
          </section>
      </>
  );
}

export default Error;