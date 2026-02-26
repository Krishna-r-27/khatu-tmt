import BannerSection from "../../components/BannerSection/BannerSection";
import About from "../../components/About/Collaborators";
import SpecialFeatures from "../../components/About/SpecialFeatures";
import CoreValuesSection from "../../components/About/CoreValuesSection";
import SideImageContentLayout from "../../components/SideImageContentLayout";
function AboutUs() {
  return (
      <>
          <BannerSection
              title="About Us"
              pageName="About Us"
          />
          <SideImageContentLayout
              imageName="about-khatu-tmt"
              imageExt="png"
              imageAlt="Steel factory"
              badgeTitle="Founded in 2001"
              heading="Company Profile"
              description={
                  <>
                      <p className="mb-4 text-[#282828]"><strong>Shri Khatu Shyam Alloys Pvt Ltd</strong> is manufacturing high strength deformed steel bars
                          for concrete reinforcement. The company is broad based to undertake international quality production of TMT Bars as it has acquired technical know how from Thermex (HSE Germany). The company is lead by young. Energetic directors who are in the field of steel processing, since over a decade and are highly experienced. They are well supported by qualified staff and experienced staff and experienced labour. The very aim of the company is to make available international quality TMT bars to Indian market, which is ever growing. The production plant is equipped with the modern and appropriate production machinery, testing and quality assurance equipments and able operators to ensure and assure quality of steel bars.</p>
                      <p className="text-[#282828]">M/s Shri Khatu Shyam Alloys Pvt Ltd enjoys being a small part in the prosperity of India and Indians.</p>
                  </>
              }
              
          />
          <CoreValuesSection />
          <SpecialFeatures />
          <About />

         
      </>
  );
}

export default AboutUs;