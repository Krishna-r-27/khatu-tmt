import { useEffect } from "react";
import CTASection from "../../components/CTASection";
import ClientsSlider from "../../components/ClientsSlider";
import CompanyLeadershipSection from "../../components/CompanyLeadershipSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import ImageWithContentSection from "../../components/ImageWithContentSection";
import ProductFeatureSection from "../../components/ProductFeatureSection";
import SideImageContentLayout from "../../components/SideImageContentLayout";
import { setSEO } from "../../utils/seo";

function Home() {
    useEffect(() => {
        setSEO({
            title: "Khatu TMT - Best TMT Bars in India",
            description: "Shri Khatu Shyam Alloys Pvt. Ltd. is one of the most prominent names in the Indian steel industry, making a significant contribution to the development and growth of Indian economy.",
            image: "https://khatu.com/og.jpg",
            url: "https://khatu.com/"
        });
    }, []);
  return (
      <div>
          <HeroSection />
         
          <SideImageContentLayout
              imageName="about-khatu-tmt"
              imageExt="png"
              imageAlt="Steel factory"
              badgeTitle="Founded in 2001"
              heading="About Khatu TMT"
              description="Shri Khatu Shyam Alloys Pvt. Ltd. is one of the most prominent names in the Indian steel industry, making a significant contribution to the development and growth of Indian economy. Founded in 2001 initially the company was solely into the production of M.S. Ingots. Over the years, we expanded our capabilities beyond M.S. Ingots and emerged as the renowned manufacturers and suppliers of Thermex TMT Bars."
              buttonText="Know More"
              buttonLink="/about-us"
          />
          <CompanyLeadershipSection />
          <ProductFeatureSection />
          <CTASection />
          <ImageWithContentSection
              imageName="fully-automatic-steel-rolling-mill"
              imageExt="png"
              imageAlt="Building construction"
              heading="Manufacturing Facilities"
              description="Shri Khatu Shyam Alloys Pvt. Ltd. is equipped with a fully automatic steel rolling mill at Silvassa (Dadra Nagar Haveli), complete with advanced machinery and latest technology, to provide a superior quality of TMT Bars. Renowned names in construction and infrastructure sectors from Mumbai and South Gujarat have relied on our brand of TMT Bars known as Khatu Thermex 500."
              buttonText="Know More"
              buttonLink="/manufacturing-facilities"
              reverse={false}
          />

          <ClientsSlider />
       
          
</div>
    
  );
}



export default Home;