import { Helmet } from "react-helmet";
import BannerSection from "../../components/BannerSection/BannerSection";
import { Link } from "react-router-dom";
function Error() {
  return (
      <>
          <Helmet>
              <title>Page Not Found | Khatu TMT</title>

              <meta
                  name="description"
                  content="The page you are looking for does not exist or has been moved. Explore Khatu TMT website for TMT bars and steel products."
              />

              <meta name="robots" content="noindex, nofollow" />

          </Helmet>

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
                      Khatu TMT is a leading TMT bars manufacturer in India offering high quality Thermex TMT bars, billets and ingots for construction and infrastructure projects. Known for strength, durability and BIS certified standards, these steel products are widely used across applications.
                  </p>


                  {/* ================= ABOUT US ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/about-us" className="hover:underline">
                          About Us
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      A well-established steel manufacturer in India specializing in TMT bars, billets and ingots produced through advanced rolling mill technology. The company focuses on quality production, innovation and supporting infrastructure growth with consistent steel solutions.
                  </p>


                  {/* ================= PRODUCTS ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/products" className="hover:underline">
                          Products
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      Khatu TMT offers a wide range of TMT bars in Fe 500, Fe 500D and Fe 550 grades along with billets and ingots manufactured as per BIS standards. These products ensure high strength, corrosion resistance and durability for modern construction needs.
                  </p>


                  {/* ================= MANUFACTURING FACILITIES ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/manufacturing-facilities" className="hover:underline">
                          Manufacturing Facilities
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      A modern steel rolling mill in Silvassa equipped with advanced technology for manufacturing Thermex TMT bars with precision and consistency. The facility supports high performance steel production for construction and infrastructure sectors.
                  </p>


                  {/* ================= WHAT IS TMT ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/what-is-tmt" className="hover:underline">
                          What is TMT?
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-3">
                      TMT bars are thermo mechanically treated steel bars widely used in construction for their strength, ductility and corrosion resistance. The advanced manufacturing process ensures durability and suitability for earthquake resistant structures.
                  </p>


                  {/* ================= CONTACT US ================= */}
                  <h2 className="text-2xl font-bold text-primary mb-3">
                      <Link to="/contact-us" className="hover:underline">
                          Contact Us
                      </Link>
                  </h2>

                  <p className="text-[#282828] leading-relaxed mb-4 lg:mb-5">
                      Khatu TMT provides reliable supply of TMT bars, billets and ingots across India. Connect with the Mumbai office for inquiries, product details and business communication.
                  </p>

                  <ul className="space-y-6 text-sm text-gray-333333">

                      <li className="flex items-start gap-4">
                          <span className="bg-[#6F1A07] p-2 rounded-md flex-shrink-0">
                              <picture>
                                  <source
                                      srcSet="assets/images/location.webp"
                                      type="image/webp"
                                  />
                                  <img
                                      src="assets/images/location.png"
                                      alt="Location"
                                      className="h-4 w-4 object-contain"
                                  />
                              </picture>
                          </span>
                          <span className="leading-relaxed">
                              <h3 className="text-lg text-[#6F1A07] font-bold mb-1">
                                  Shri Khatu Shyam Alloys Pvt Ltd
                              </h3>
                              807, Filix, Opp. Asian Paints Company,<br />
                              LBS Road, Bhandup, West, Mumbai - 400078
                          </span>
                      </li>

                      <li className="flex items-start gap-4">

                          <span className="bg-[#6F1A07] p-2 rounded-md flex-shrink-0">
                              <picture>
                                  <source
                                      srcSet="assets/images/sms-star.webp"
                                      type="image/webp"
                                  />
                                  <img
                                      src="assets/images/sms-star.png"
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
                                      srcSet="assets/images/call-outgoing.webp"
                                      type="image/webp"
                                  />
                                  <img
                                      src="assets/images/call-outgoing.png"
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