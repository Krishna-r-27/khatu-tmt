function Certificates() {
    return (
        <section className="py-10 sm:py-14 md:py-16 lg:py-100 bg-white">
            <div className="container mx-auto">

                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Certificates
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 md:mt-6">

                    {/* Certificate 1 */}
                    <div className="border-gradient-primary rounded-xl p-[2px] transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="bg-white rounded-xl overflow-hidden">
                            <picture>
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}/assets/images/KhatuCertificate-1.webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={`${import.meta.env.BASE_URL}/assets/images/KhatuCertificate-1.jpg`}
                                    alt="Certificate 1"
                                    className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-contain p-3 transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </div>

                    {/* Certificate 2 */}
                    <div className="border-gradient-primary rounded-xl p-[2px] transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="bg-white rounded-xl overflow-hidden">
                            <picture>
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}/assets/images/KhatuCertificate-2.webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={`${import.meta.env.BASE_URL}/assets/images/KhatuCertificate-2.jpg`}
                                    alt="Certificate 2"
                                    className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-contain p-3 transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </div>

                    {/* Certificate 3 */}
                    <div className="border-gradient-primary rounded-xl p-[2px] transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2">
                        <div className="bg-white rounded-xl overflow-hidden">
                            <picture>
                                <source
                                    srcSet={`${import.meta.env.BASE_URL}/assets/images/KhatuCertificate-3.webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={`${import.meta.env.BASE_URL}/assets/images/KhatuCertificate-3.jpg`}
                                    alt="Certificate 3"
                                    className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-contain p-3 transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </picture>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Certificates;