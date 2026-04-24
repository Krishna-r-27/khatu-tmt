import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../ThemeButton";

const ContactMapForm = () => {
    const sectionRef = useRef(null);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    // ─── Captcha Generator ────────────────────────────────────────────────────
    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        return { question: `${a} + ${b} = ?`, answer: (a + b).toString() };
    };

    // ─── State ────────────────────────────────────────────────────────────────
    const [captchaData, setCaptchaData] = useState(generateCaptcha());
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        message: "",
        captcha: ""
    });

    // ─── Intersection Observer ─────────────────────────────────────────────────
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, {});
        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    // ─── Handle Change ────────────────────────────────────────────────────────
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        if (name === "phone") newValue = value.replace(/\D/g, "").slice(0, 10);
        if (name === "captcha") newValue = value.replace(/\D/g, "").slice(0, 4);
        setFormData(prev => ({ ...prev, [name]: newValue }));
        setErrors(prev => ({ ...prev, [name]: null }));
    };

    // ─── Validation ───────────────────────────────────────────────────────────
    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (!formData.captcha.trim()) newErrors.captcha = "Captcha is required";
        return newErrors;
    };

    // ─── Handle Submit ────────────────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            const firstErrorField = Object.keys(validationErrors)[0];
            const element = document.querySelector(`[name="${firstErrorField}"]`);
            if (element) { element.scrollIntoView({ behavior: "smooth", block: "center" }); element.focus(); }
            return;
        }
        setLoading(true);
        const payload = { ...formData, captchaAnswer: captchaData.answer };
        try {
            const response = await fetch("/api/contactform", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            const text = await response.text();
            let data = {};
            try { data = JSON.parse(text); } catch { console.error("Non-JSON response:", text); return; }
            if (response.ok) {
                navigate("/thank-you");
                setFormData({ name: "", companyName: "", email: "", phone: "", country: "", state: "", message: "", captcha: "" });
                setCaptchaData(generateCaptcha());
            } else {
                const serverErrors = data.errors || {};
                if (serverErrors.captcha) setErrors({ captcha: serverErrors.captcha[0] });
                setCaptchaData(generateCaptcha());
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <section ref={sectionRef} className="w-full pb-12 md:pb-16 lg:pb-20">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Map */}
                    <div className={`rounded-3xl overflow-hidden border border-[#6F1A07]
                        transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
                        <a href="https://www.google.com/maps?q=507,Maganlal+Chambers,Carnac+Bunder,Masjid,Mumbai+400009"
                            target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <iframe
                                src="https://www.google.com/maps?q=507,Maganlal+Chambers,Carnac+Bunder,Masjid,Mumbai+400009&output=embed"
                                className="w-full h-full border-0 pointer-events-none"
                                loading="lazy"
                            ></iframe>
                        </a>
                    </div>

                    {/* Form */}
                    <div className={`border border-[#6F1A07] rounded-3xl bg-white overflow-hidden
                        transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>

                        {/* Heading Section */}
                        <div className="border-b border-[#6F1A07] py-3 sm:py-4 md:py-5 lg:py-6 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#6F1A07]">Enquiry Now</h2>
                        </div>

                        {/* Form Body */}
                        <div className="p-4 sm:p-8 lg:p-8">
                            <form onSubmit={handleSubmit}>

                                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">

                                    {/* Your Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#282828] mb-2">Your Name*</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]" />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#282828] mb-2">Company Name*</label>
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange}
                                            placeholder="Your Company"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]" />
                                        {errors.companyName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#282828] mb-2">Email Address*</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]" />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#282828] mb-2">Phone Number*</label>
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                                            placeholder="xxxxx xxxxx"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]" />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#282828] mb-2">
                                            Country*
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Enter your country"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                        />
                                        {errors.country && (
                                            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                                        )}
                                    </div>

                                    {/* State */}
                                    <div>
                                        <label className="block text-sm font-medium text-[#282828] mb-2">
                                            State*
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="Enter your state"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                        />
                                        {errors.state && (
                                            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                                        )}
                                    </div>

                                </div>

                                {/* Message */}
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-[#282828] mb-2">Your Message*</label>
                                    <textarea rows="4" name="message" value={formData.message} onChange={handleChange}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]" />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Captcha Row */}
                                <div className="grid sm:grid-cols-[2fr_1fr] gap-6 mt-6 items-start">

                                    {/* Input + Error */}
                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            name="captcha"
                                            value={formData.captcha}
                                            onChange={handleChange}
                                            placeholder="Enter the captcha"
                                            className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#6F1A07]"
                                        />

                                        {/* Fixed height error container */}
                                        <div className="h-[16px] mt-1">
                                            {errors.captcha && (
                                                <p className="text-red-500 text-xs">{errors.captcha}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Captcha Box */}
                                    <div className="w-full border border-[#6F1A07] rounded-lg px-4 py-3 text-sm flex items-center justify-center bg-gray-50 font-semibold tracking-wide h-[48px]">
                                        {captchaData.question}
                                    </div>

                                </div>

                                {/* Button */}
                                <div className="mt-8">
                                    <ThemeButton
                                        type="submit"
                                        disabled={loading}
                                        text={loading ? "Submitting..." : "Submit Now"}
                                        className="px-8 py-3 text-sm font-medium shadow-lg"
                                    />
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMapForm;