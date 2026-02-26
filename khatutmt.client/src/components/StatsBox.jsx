// components/StatsBox.jsx
import React from "react";
import StatItem from "./StatItem";

const StatsBox = () => {
    return (
        <div className="max-w-md mx-auto text-start bg-white rounded-2xl border border-[#6F1A07] shadow-lg divide-y">

            <StatItem
                imageName="projects-finished"
                imageExt="png"
                imageAlt="Projects Icon"
                value="512+"
                label="Successfully Project Finished."
            />

            <StatItem
                imageName="revenue-investment"
                imageExt="png"
                imageAlt="Growth Icon"
                value="1120+"
                label="Revenue in 2017 Investment"
            />

            <StatItem
                imageName="colleagues-counting-more-daily"
                imageExt="png"
                imageAlt="Users Icon"
                value="1520+"
                label="Colleagues & counting more daily"
            />

        </div>
    );
};

export default StatsBox;
