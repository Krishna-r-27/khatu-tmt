const AdvantageCard = ({ title, items }) => {
    return (
        <div className="h-full border-2 border-[#F9AB31] rounded-3xl p-3 sm:p-4 md:p-4 lg:p-5 sm:p-8 bg-white">
            <h3 className="text-lg sm:text-xl font-semibold text-[#000000] mb-5">
                {title}
            </h3>

            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li className="flex items-start gap-3 text-[#282828] text-sm sm:text-base leading-relaxed">

                        <picture className="flex-shrink-0">
                            <source
                                srcSet={`${import.meta.env.BASE_URL}/assets/images/arrow-point.webp`}
                                type="image/webp"
                            />
                            <img
                                src={`${import.meta.env.BASE_URL}/assets/images/arrow-point.png`}
                                alt="arrow"
                                className="w-4 h-4 mt-1 flex-shrink-0"
                            />
                        </picture>

                        <span>{item}</span>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdvantageCard;