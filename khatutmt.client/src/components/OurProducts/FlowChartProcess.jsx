function FlowChartProcess({ isVisible }) {
    const StepCard = ({ number, text }) => (
        <div className="bg-white rounded-xl border border-cyan-400 flex items-stretch overflow-hidden h-[70px]">

            {/* Number Box */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 
                        text-white font-semibold 
                        flex items-center justify-center 
                        px-3 h-full text-lg">
                {number.toString().padStart(2, "0")}
            </div>

            {/* Text */}
            <div className="p-3 flex items-center text-sm sm:text-base w-full text-[#282828] font-semibold">
                {text}
            </div>

        </div>
    );

    return (
        <div
            className={`transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-16"}
        `}
        >
            <h2 className="text-xl sm:text-4xl font-bold text-primary mb-4 lg:mb-8">
                Process of flow chart - Steel Melting
            </h2>

            <div className="max-w-6xl mx-auto relative">

                {/* ROW 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center">

                    <StepCard number={1} text="Raw materials (Sponge Iron, DRI)" />

                    {/* Arrow Column */}
                    <div className="flex justify-center">
                        <picture>
                            <source
                                media="(max-width: 991px)"
                                srcSet={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                            />

                            <img
                                src={`${import.meta.env.BASE_URL}/assets/images/right-side-arrow.png`}
                                className="h-8 lg:h-auto lg:w-8"
                                alt=""
                            />
                        </picture>
                    </div>
                    <StepCard number={2} text="Poured into furnace" />

                </div>

                <div className="flex justify-center lg:justify-end lg:pr-[22%]">
                    <img
                        src={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                        className="h-8"
                        alt=""
                    />
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center">

                    <StepCard number={4} text="Removal of slag" />

                    {/* Arrow Column */}
                    <div className="flex justify-center">
                        <picture>
                            <source
                                media="(max-width: 991px)"
                                srcSet={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                            />

                            <img
                                src={`${import.meta.env.BASE_URL}/assets/images/right-side-arrow.png`}
                                className="h-8 lg:h-auto lg:w-8"
                                alt=""
                            />
                        </picture>
                    </div>

                    <StepCard number={3} text="Melting (By electricity of 4500 KW)" />

                </div>

                {/* ↓ Arrow */}
                <div className="flex justify-center lg:justify-start lg:pl-[22%]">
                    <img
                        src={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                        className="h-8"
                        alt=""
                    />
                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center">

                    <StepCard number={5} text="Poured into laddle" />

                    {/* Arrow Column */}
                    <div className="flex justify-center">
                        <picture>
                            <source
                                media="(max-width: 991px)"
                                srcSet={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                            />

                            <img
                                src={`${import.meta.env.BASE_URL}/assets/images/right-side-arrow.png`}
                                className="h-8 lg:h-auto lg:w-8"
                                alt=""
                            />
                        </picture>
                    </div>

                    <StepCard number={6} text="Laddle moved tp C.C.M. plant" />

                </div>

                {/* ↓ Arrow */}
                <div className="flex justify-center lg:justify-end lg:pr-[22%]">
                    <img
                        src={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                        className="h-8"
                        alt=""
                    />
                </div>


                {/* ROW 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center">

                    <StepCard number={8} text="Cast hot billets" />

                    {/* Arrow Column */}
                    <div className="flex justify-center">
                        <picture>
                            <source
                                media="(max-width: 991px)"
                                srcSet={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                            />

                            <img
                                src={`${import.meta.env.BASE_URL}/assets/images/right-side-arrow.png`}
                                className="h-8 lg:h-auto lg:w-8"
                                alt=""
                            />
                        </picture>
                    </div>

                    <StepCard number={7} text="Sized hot billets" />

                </div>

                {/* ↓ Arrow */}
                <div className="flex justify-center lg:justify-start lg:pl-[22%]">
                    <img
                        src={`${import.meta.env.BASE_URL}/assets/images/down-side-arrow.png`}
                        className="h-8"
                        alt=""
                    />
                </div>
                {/* FINAL STEP FULL WIDTH */}
                <div>
                    <StepCard
                        number={9}
                        text="Direct charging to rolling mill for rolling into TMT bars"
                    />
                </div>

            </div>
        </div>
    );
}

export default FlowChartProcess;