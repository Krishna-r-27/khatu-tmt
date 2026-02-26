import BannerSection from "../../components/BannerSection/BannerSection";
import AboutTmt from "../../components/WhatIsTmt/AboutTmt";
import TmtAdvantage from "../../components/TmtAdvantage/TmtAdvantage";

function WhatIsTmt() {
  return (
      <>
          <BannerSection
              title="Thermo Mechanical Treatment (TMT)"
              pageName="What is TMT?" />
          <AboutTmt />
          <TmtAdvantage />
          
      </>
  );
}

export default WhatIsTmt;