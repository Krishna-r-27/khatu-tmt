import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
function Certificates() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {});

        return () => {
            Fancybox.destroy();
        };
    }, []);
    return (
        <section className="py-10 sm:py-14 md:py-16 lg:py-100 bg-white">
            <div className="container mx-auto">

                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    Certificates
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 md:mt-6">

                    {/* Certificate 1 */}
                    {/* Certificate 1 */}
                    <a
                        href={`${import.meta.env.BASE_URL}assets/images/khatu-tmt-certificate.jpeg`}
                        data-fancybox="gallery"
                        className="group border-gradient-primary rounded-xl p-[2px] transition-all duration-500 ease-out hover:shadow-2xl block"
                    >
                        <div className="bg-white rounded-xl overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/images/khatu-tmt-certificate.jpeg`}
                                alt="Certificate 1"
                                className="w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[580px] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12]"
                            />
                        </div>
                    </a>

                    {/* Certificate 2 */}
                    <a
                        href={`${import.meta.env.BASE_URL}assets/images/KhatuCertificate-2.jpg`}
                        data-fancybox="gallery"
                        className="group border-gradient-primary rounded-xl p-[2px] transition-all duration-500 ease-out hover:shadow-2xl block"
                    >
                        <div className="bg-white rounded-xl overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/images/KhatuCertificate-2.jpg`}
                                alt="Certificate 2"
                                className="w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[580px] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12]"
                            />
                        </div>
                    </a>

                    {/* Certificate 3 */}
                    <a
                        href={`${import.meta.env.BASE_URL}assets/images/KhatuCertificate-3.jpg`}
                        data-fancybox="gallery"
                        className="group border-gradient-primary rounded-xl p-[2px] transition-all duration-500 ease-out hover:shadow-2xl block"
                    >
                        <div className="bg-white rounded-xl overflow-hidden">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/images/KhatuCertificate-3.jpg`}
                                alt="Certificate 3"
                                className="w-full h-[360px] sm:h-[440px] md:h-[520px] lg:h-[580px] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12]"
                            />
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Certificates;