import React from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Image from "../components/Image";

const Footer = () => {
    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Products", path: "/products" },
        { name: "Manufacturing Facilities", path: "/manufacturing-facilities" },
        { name: "What is TMT?", path: "/what-is-tmt" },
        { name: "Contact Us", path: "/contact-us" },
    ];
    return (
        <footer
            className="relative text-gray-300 bg-cover bg-center"
            style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}/assets/images/footer-bg.png')`
            }}
        >
         
            {/* CONTENT */}
            <div className="relative container mx-auto px-4">

                {/* GRID */}
                <div className="
  grid grid-cols-1
  md:grid-cols-[1.8fr_0.7fr_1fr]
  xl:grid-cols-[1fr_1fr_1fr]
  gap-8 xl:gap-16
">


                    {/* LEFT WHITE CARD */}
                    <div className="bg-white py-8 md:py-8  lg:md:py-14  lg:py-12 px-4 md:px-2  xl:px-10 text-gray-800 shadow-md h-full">
                        <NavLink to="/" end>
                        <Image
                            name="khatu-tmt-logo"
                            ext="png"
                            width={234}
                            height={106}
                            alt="Shri Khatu Shyam Alloys Pvt. Ltd. logo"
                            className="w-40 mb-6 cursor-pointer"
                        />
                    </NavLink>
                        <p className="leading-7 text-base">
                            Shri Khatu Shyam Alloys Pvt. Ltd. is one of the most
                            prominent names in the Indian steel industry, making
                            a significant contribution to the development and
                            growth of Indian economy. Founded in 2001 initially
                            the company was solely into the production of M.S.
                            Ingots.
                        </p>
                    </div>

                    {/* CENTER */}
                    <div className="md:py-6  lg:md:py-14  lg:py-12 ps-4 md:ps-2  xl:ps-10">
                        <h3 className="text-yellow font-semibold text-lg mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4 text-base">
                            {quickLinks.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.path}
                                        end={item.path === "/"}
                                        className={({ isActive }) =>
                                            `group flex items-center gap-2 transition-all duration-300 ${isActive
                                                ? "text-yellow font-semibold"
                                                : "text-white hover:text-yellow"
                                            }`
                                        }
                                    >
                                        <GoDotFill className="text-yellow transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="pb-7 md:pb-0 md:py-6  lg:md:py-14  lg:py-12 px-4 lg:px-0">
                        <h3 className="text-yellow font-semibold text-lg mb-6">
                            Contact Us
                        </h3>

                        <ul className="space-y-5 text-base">

                            <li className="flex gap-3">
                                <FaMapMarkerAlt className="text-yellow mt-1" />
                                <span className="leading-relaxed">
                                    <b>Khatu TMT</b><br />
                                    507, Manglani Chambers,
                                    Carnac Bunder <br />
                                    Masjid,
                                    Mumbai - 400009<br />
                                </span>
                            </li>

                            <li className="flex gap-3">
                                <FaPhoneAlt className="text-yellow mt-1" />
                                <a
                                    href="tel:+919930772570"
                                    className="hover:text-yellow transition-colors duration-300"
                                >
                                    +91 99307 72570
                                </a>
                            </li>

                            <li className="flex gap-3">
                                <FaEnvelope className="text-yellow mt-1" />
                                <span>
                                    <a
                                        href="mailto:info@khatutmt.com"
                                        className="block hover:text-yellow transition-colors duration-300"
                                    >
                                        info@khatutmt.com
                                    </a>
                                    <a
                                        href="mailto:sales@khatutmt.com"
                                        className="block hover:text-yellow transition-colors duration-300"
                                    >
                                        sales@khatutmt.com
                                    </a>
                                </span>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-white/20 "></div>

            {/* BOTTOM BAR */}
            <div className="relative container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-3 py-5 text-base">

                    <p className="text-white text-center md:text-left">
                        Copyright &copy; 2026 Shree Khatu Shyam Alloys Pvt. Ltd.
                        All Rights Reserved. |{" "}
                        <NavLink
                            to="/sitemap"
                            className={({ isActive }) =>
                                `transition hover:text-yellow ${isActive ? "text-yellow font-semibold" : ""
                                }`
                            }
                        >
                            Sitemap
                        </NavLink>
                    </p>

                    <p className="text-white">
                        Website Design by{" "}
                        <a
                            href="https://www.dotsandcoms.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow transition"
                        >
                            D&C
                        </a>
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
