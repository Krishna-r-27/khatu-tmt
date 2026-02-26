import { useEffect, useRef, useState } from "react";
import ThemeButton from "../ThemeButton";

const ContactMapForm = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
            }
        );

        const currentRef = sectionRef.current;

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);
    return (
        <section ref={sectionRef} className="w-full pb-12 md:pb-16 lg:pb-20">
            <div className="container mx-auto">

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Map */}
                    <div
                        className={`rounded-3xl overflow-hidden border border-[#6F1A07]
                            transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-12"
                            }`}>
                        <a
                            href="https://www.google.com/maps?q=507,Maganlal+Chambers,Carnac+Bunder,Masjid,Mumbai+400009"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full h-full"
                        >
                            <iframe
                                src="https://www.google.com/maps?q=507,Maganlal+Chambers,Carnac+Bunder,Masjid,Mumbai+400009&output=embed"
                                className="w-full h-full border-0 pointer-events-none"
                                loading="lazy"
                            ></iframe>
                        </a>
                    </div>

                    {/* Form */}
                    <div
                        className={`border border-[#6F1A07] rounded-3xl bg-white overflow-hidden
                        transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-12"
                            }`} >
                        {/* Heading Section */}
                        <div className="border-b border-[#6F1A07] py-3 sm:py-4 md:py-5 lg:py-6 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#6F1A07]">
                                Enquiry Now
                            </h2>
                        </div>

                        {/* Form Body */}
                        <div className="p-4 sm:p-8 lg:p-8">

                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">

                                {/* Your Name */}
                                <div>
                                    <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                        Your Name*
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                    />
                                </div>

                                {/* Company Name */}
                                <div>
                                    <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Company"
                                        className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                        Email Address*
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                        Phone Number*
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 xxxxx xxxxx"
                                        className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                        Country*
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none w-full border border-[#6F1A07]
                                                rounded-lg px-4 py-3 text-sm bg-white
                                                focus:outline-none focus:ring-1 focus:ring-[#6F1A07]
                                                focus:border-[#6F1A07]
                                                transition-all duration-300" >
                                            <option value="">Select country</option>
                                            <option>India</option>
                                            <option>Germany</option>
                                        </select>

                                        {/* Custom Arrow */}
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                            <svg
                                                className="w-4 h-4 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* State */}
                                <div>
                                    <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                        State*
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="appearance-none w-full border border-[#6F1A07]
                                                rounded-lg px-4 py-3 text-sm bg-white
                                                focus:outline-none focus:ring-1 focus:ring-[#6F1A07]
                                                focus:border-[#6F1A07]
                                                transition-all duration-300">
                                            <option value="">Select state</option>
                                            <option>Maharashtra</option>
                                            <option>Gujarat</option>
                                        </select>

                                        {/* Custom Arrow */}
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                            <svg
                                                className="w-4 h-4 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Message */}
                            <div className="mt-6">
                                <label className="block text-sm font-mediumtext-[#282828] mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                    className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                />
                            </div>

                            {/* Captcha Row */}
                            <div className="grid sm:grid-cols-[2fr_1fr] gap-6 mt-6">
                                <input
                                    type="text"
                                    placeholder="Enter the captcha"
                                    className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                />
                                <div className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm flex items-center justify-center bg-gray-50">
                                    5 - four = ?
                                </div>
                            </div>

                            {/* Button */}
                            <div className="mt-8">
                                <ThemeButton
                                    text="Submit Now"
                                    link="/"
                                    className="px-8 py-3 text-sm font-medium shadow-lg"
                                />
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactMapForm;