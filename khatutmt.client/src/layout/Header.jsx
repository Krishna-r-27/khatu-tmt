import { useState, useEffect } from "react";
import Image from "../components/Image";
import ThemeButton from "../components/ThemeButton";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        "Home",
        "About Us",
        "Products",
        "Manufacturing Facilities",
        "What is TMT?",
        "Contact Us",
    ];

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <header className="w-full shadow-sm bg-white relative z-50">
            {/* Main Header */}
            <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4 lg:px-0">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <NavLink to="/" end>
                        <Image
                            name="khatu-tmt-logo"
                            ext="png"
                            width={234}
                            height={106}
                            alt="Khatu TMT logo"
                            className="w-40 lg:w-[192px] cursor-pointer"
                        />
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-6 lg:gap-5 xl:gap-10 text-base font-medium">
                    {navLinks.map((item, i) => {
                        

                        return (
                            <NavLink
                                key={i}
                                to={
                                    item === "Home"
                                        ? "/"
                                        : item === "About Us"
                                            ? "/about-us"
                                            : item === "Products"
                                                ? "/products"
                                                : item === "Manufacturing Facilities"
                                                    ? "/manufacturing-facilities"
                                                    : item === "What is TMT?"
                                                        ? "/what-is-tmt"
                                                        : item === "Contact Us"
                                                            ? "/contact-us"
                                                            : "#"
                                }
                                className={({ isActive }) =>
                                    `relative inline-block pb-3 ${isActive
                                        ? "text-primary font-bold"
                                        : "text-dark hover:text-primary"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item}

                                        {isActive && (
                                            <span
                                                className="absolute left-1/2 -translate-x-1/2 bottom-0
                    h-[3px] w-[90%] rounded bg-primary-gradient"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </nav>



                {/* Desktop CTA */}
                <div className="hidden xl:block">
                    <ThemeButton link="/contact-us" text="Enquiry Now" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="lg:hidden text-2xltext-[#282828]"
                >
                    ☰
                </button>
            </div>

            {/* ================= MOBILE OFFCANVAS ================= */}
            <div
                className={`fixed inset-0 z-50 transition ${open ? "visible" : "invisible"
                    }`}
            >
                {/* Overlay */}
                <div
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Drawer */}
                <div
                    className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                        <NavLink to="/" end>
                        <Image
                            name="khatu-tmt-logo"
                            ext="png"
                            width={160}
                            height={60}
                            alt="Shri Khatu Shyam Alloys Pvt. Ltd."
                                className="w-32 cursor-pointer"
                            />
                        </NavLink>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl text-gray-600"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    <nav className="flex flex-col px-4 py-6 space-y-4 text-sm font-medium">
                        {navLinks.map((item, i) => (
                            <NavLink
                                key={i}
                                to={
                                    item === "Home"
                                        ? "/"
                                        : item === "About Us"
                                            ? "/about-us"
                                            : item === "Products"
                                                ? "/products"
                                                : item === "Manufacturing Facilities"
                                                    ? "/manufacturing-facilities"
                                                    : item === "What is TMT?"
                                                        ? "/what-is-tmt"
                                                        : item === "Contact Us"
                                                            ? "/contact-us"
                                                            : "#"
                                }
                                end={item === "Home"}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-orange-500 ${isActive ? "text-primary font-semibold" : ""
                                    }`
                                }
                            >
                                {item}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Mobile CTA */}
                    <div className="px-4 mt-auto">
                        <ThemeButton link="/contact-us" text="Enquiry Now" className="w-full" />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
