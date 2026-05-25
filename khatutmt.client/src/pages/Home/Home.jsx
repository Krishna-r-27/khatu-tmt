import { Helmet } from "react-helmet";
import CTASection from "../../components/CTASection";
import ClientsSlider from "../../components/ClientsSlider";
import CompanyLeadershipSection from "../../components/CompanyLeadershipSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import ImageWithContentSection from "../../components/ImageWithContentSection";
import ProductFeatureSection from "../../components/ProductFeatureSection";
import SideImageContentLayout from "../../components/SideImageContentLayout";
import KhatuCertificate from "../../components/Certificates";

function Home() {
    
  return (

      <>
          <Helmet>
              <title>
                  TMT Bars Manufacturer India | Thermex Steel Bars Supplier
              </title>

              <meta
                  name="description"
                  content="TMT bars manufacturer in India offering Thermex steel bars, billets and ingots. BIS certified, high strength steel for construction and infrastructure projects."
              />

              <meta
                  name="keywords"
                  content="TMT bars manufacturer India, Thermex TMT bars supplier, steel bars India, BIS certified TMT bars, construction steel supplier"
              />

              <link
                  rel="canonical"
                  href="https://www.khatutmt.com/"
              />
             
          </Helmet>
          <div>
              <HeroSection />

              <SideImageContentLayout
                  imageName="about-khatu-tmt-new"
                  imageExt="png"
                  imageAlt="Steel factory"
                  badgeTitle="Founded in 2001"
                  heading="About Khatu TMT"
                  description="Shri Khatu Shyam Alloys Pvt. Ltd. is one of the most prominent names in the Indian steel industry, making a significant contribution to the development and growth of the Indian economy. Founded in 2001, the company initially focused on steel production. Over the years, we have expanded our capabilities and emerged as renowned manufacturers and suppliers of Thermex TMT Bars."
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
                  description="Shri Khatu Shyam Alloys Pvt. Ltd. is equipped with a fully automatic steel rolling mill at Silvassa (Dadra Nagar Haveli), complete with advanced machinery and latest technology, to provide a superior quality of TMT Bars. Renowned names in construction and infrastructure sectors from Mumbai and South Gujarat have relied on our brand of TMT Bars known as Khatu TMT."
                  buttonText="Know More"
                  buttonLink="/manufacturing-facilities"
                  reverse={false}
              />

              <ClientsSlider />

              <KhatuCertificate />


          </div>
      </>
    
  );
}



export default Home;