import React from "react";
import CompanyLeadership from "./CompanyLeadership";
import StatsBox from "./StatsBox";

const CompanyLeadershipSection = () => {
    return (
        <section className="w-full py-10 sm:py-14 md:py-16 lg:py-100">
            <div className="container mx-auto">

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-center text-center lg:text-start">

                    {/* LEFT - STATS */}
                    <div className="xl:col-span-4 order-2 lg:order-1">
                        <StatsBox />
                    </div>

                    {/* CENTER - CONTENT */}
                    <div className="xl:col-span-8 order-1 lg:order-2">
                        <CompanyLeadership />
                    </div>


                </div>

            </div>
        </section>
    );
};

export default CompanyLeadershipSection;
