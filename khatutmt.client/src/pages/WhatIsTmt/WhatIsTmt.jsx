import { Helmet } from "react-helmet";
import BannerSection from "../../components/BannerSection/BannerSection";
import AboutTmt from "../../components/WhatIsTmt/AboutTmt";
import TmtAdvantage from "../../components/TmtAdvantage/TmtAdvantage";

function WhatIsTmt() {
  return (
      <>
          <Helmet>
              <title>
                  TMT Bar in Construction | Process, Properties & Benefits
              </title>

              <meta
                  name="description"
                  content="TMT bars used in construction with thermo mechanical treatment process, high strength, ductility and corrosion resistance for durable steel structures."
              />

              <meta
                  name="keywords"
                  content="TMT bar in construction, thermo mechanical treatment process, TMT bar properties, TMT bar benefits, high strength steel bars, corrosion resistant TMT bars, ductile steel bars"
              />

              <link
                  rel="canonical"
                  href="https://www.khatutmt.com/what-is-tmt"
              />
          </Helmet>

          <BannerSection
              title="Thermo Mechanical Treatment (TMT)"
              pageName="What is TMT?" />
          <AboutTmt />
          <TmtAdvantage />
          
      </>
  );
}

export default WhatIsTmt;