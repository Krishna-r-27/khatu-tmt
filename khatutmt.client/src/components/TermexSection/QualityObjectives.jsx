import React from "react";

const objectives = [
    {
        title: "Customer Satisfaction",
        icon: "assets/images/customer-review.png",
    },
    {
        title: "Technological advancement",
        icon: "assets/images/innovation-gear.png",
    },
    {
        title: "Cost Reduction",
        icon: "assets/images/cost-optimization.png",
    },
];

const QualityObjectives = ({ isVisible }) => {
    return (
        <div className={`w-full transition-all duration-1000 ease-out
            ${isVisible
                ? "opacity-100 translate-x-0 rotate-0"
                : "opacity-0 -rotate-3 -translate-x-10"}
            `}>
            {/* Heading */}
            <h2 className="text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-6">
                KHATU TMT TERMEX Pie Strength of Quality (Quality Objectives):
            </h2>

            {/* Cards */}
            <div className="space-y-4">
                {objectives.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 border border-[#6F1A07] rounded-lg"
                    >
                        {/* Icon */}
                        <div className="bg-[#6F1A07] p-3 rounded-lg flex-shrink-0">
                            <img
                                src={`${import.meta.env.BASE_URL}/${item.icon}`}
                                alt={item.title}
                                className="h-5 w-5 lg:h-8 lg:w-8 object-contain"
                            />
                        </div>

                        {/* Title */}
                        <p className="text-[#282828] text-lg sm:text-base font-semibold">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QualityObjectives;