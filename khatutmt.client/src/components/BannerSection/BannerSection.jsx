import { Link } from "react-router-dom";

const BannerSection = ({ title, pageName }) => {
    return (
        <div
            className="relative w-full bg-cover bg-center py-10 sm:py-12 md:py-14 lg:py-16 text-center"
            style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}/assets/images/gray-banner.png)`
            }}
        >
            <div className="container mx-auto px-4 relative">

                {/* Title */}
                <h1 className="
                    text-xl sm:text-3xl md:text-4xl
                    font-bold mb-2 lg:mb-1
                    bg-gradient-to-r from-[#F89B32] to-[#CF3A38]
                    bg-clip-text text-transparent
                ">
                    {title}
                </h1>

                {/* Breadcrumb */}
                <div className="
                    text-xs sm:text-sm md:text-base
                    text-[#282828]
                    flex items-center justify-center
                    gap-2
                ">
                    <Link to="/" className="hover:text-[#F89B32] transition">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="font-medium">{pageName}</span>
                </div>

            </div>

         
        </div>
    );
};

export default BannerSection;