import BannerSection from "../../components/BannerSection/BannerSection";
import Billets from "../../components/OurProducts/Billets";
import KhatuTMXBars from "../../components/OurProducts/KhatuTMXBars";
import Quality from "../../components/OurProducts/Quality";
import ReBarsTable from "../../components/OurProducts/ReBarsTable";
import BenefitsAccordion from "../../components/OurProducts/BenefitsAccordion";
import SteelMeltingProcess from "../../components/OurProducts/SteelMeltingProcess";
import SteelQualitySection from "../../components/OurProducts/SteelQualitySection";
import TermexSection from "../../components/TermexSection/TermexSection";

function Products() {
    const leftItems = [
        {
            title: "Strength",
            content: {
                type: "paragraph",
                text: "KHATU TMT Bar available in Fe-500, Fe-550, Fe-500 D & Fe-550 D Grade, which is much stronger than conventional CTD bars and give a 20% stronger concrete structure with the same quantity of steel.",
            },
        },
        {
            title: "Bend Properties",
            content: {
                type: "paragraph",
                text: "Due to unique feature of elongation KHATU TMX TMT bars display many times Bend/Re-bend properties which make it not only easy on work but safe in hazardous situations.",
            },
        },
        {
            title: "Fire Resistant",
            content: {
                type: "paragraph",
                text: "KHATU TMX TMT Bar has higher thermal stability in comparison to CTD bar making it safer in fire hazards.",
            },
        },
        {
            title: "Ageing Resistant",
            content: {
                type: "paragraph",
                text: "KHATU TMX TMT Bars is ageing resistant due to the manufacturing process and chemical composition.",
            },
        },
        {
            title: "Weldability",
            content: {
                type: "paragraph",
                text: "KHATU TMX TMT bars with low carbon content can be used for huti and other weld joints without reduction in strength as the weld joints.",
            },
        },
        {
            title: "Saving",
            content: {
                type: "paragraph",
                text: "More strength means more saving too. KHATU TMX TMT bars save steel up to 20%.",
            },
        },
        {
            title: "Khatu TMX TMT Bars dispatch information",
            content: {
                type: "list",
                items: [
                    "Length - 12 meters (40 ft.) uniform.",
                    "Marking every meter Mark KHATU TMX 500 / KHATU TMX 500 D",
                    "Packing (Bars in Strapped bundles).",
                    "Invoicing (As per actual weight)."
                ],
                highlight: ["KHATU TMX 500", "KHATU TMX 500 D"]
            },
        },
        {
            title: "Quality Assurance",
            content: {
                type: "list",
                items: [
                    "Safety first: Consistence delivery of products with improved specification, through constant technological upgrades.",
                    "Economical: Developing high-strength products aiming to reduce the customer's material consumption and ensuring competitive prices.",
                ],
            },
        },
    ];

    const rightItems = [
        {
            title: "Elongation",
            content: {
                type: "paragraph",
                text: "More strength with higher elongation in one of the unique feature of KHATU TMX TMT bars. It makes no concrete structure not only sound but safe also. KHATU TMX TMT bars show up to 50% more elongation than the conventional CTD bars without compromising on strength which makes it safe in earthquake prone areas.",
                highlight: ["KHATU TMX TMT"], // words to bold
            },
        },
        {
            title: "Corrosion Resistant",
            content: {
                type: "paragraph",
                text: "KHATU TMX TMT Bars show negligible rusting in comparison to cold twisted bars. Even after long period of time. Due to its very special manufacturing process and absence of cold stress it means longer life of concrete structure i.e. Buildings.",
                highlight: ["KHATU TMX TMT"],
            },
        },
        {
            title: "Fatigue Resistant",
            content: {
                type: "paragraph",
                text: "The unique feature of KHATU TMX BAR is its high fatigue resistance on dynamic loading on account of high strength of the surface layer.",
            },
        },
        {
            title: "Earthquake Resistance",
            content: {
                type: "paragraph",
                text: "KHATU TMX Re-Bars have fatigue resistance to Dynamic/Seismic loads due to its higher ductility quality. This makes KHATU TMX bars most suitable for use in earthquake prone areas.",
            },
        },
        {
            title: "Technology",
            content: {
                type: "paragraph",
                text: "KHATU TMX TMT bars are the latest on globe THERMEX technology which makes it latest and innovative product.",
            },
        },
        {
            title: "Product Range",
            content: {
                type: "list",
                items: [
                    "KHATU TMX TMT bars are available in a wide range of sizes.",
                    "Regular 8, 10, 12, 16, 20, 25, 32 MM dia.",
                    "On order: 18, 22, 28 MM dia.",
                ],
            },
        },
        {
            title: "Quality Implementation",
            content: {
                type: "list",
                items: [
                    "Strict adherence to sampling & testing of steel chemistry.",
                    "Detailed sampling of finished products.",
                    "Rolling in negative tolerance.",
                    "Ensuring timely dispatches to the customer.",
                    "Advanced products through technological upgrades.",
                    "Strict cost cutting in processes to deliver value to the customer.",
                    "Ensuring systematic working procedures.",
                    "High team motivation to meet the company's vision.",
                    "Strict adherence to ISI Standards & procedures.",
                ],
            },
        },
        {
            title: "Quality Accrediation",
            content: {
                type: "paragraph",
                text: "KHATU TMX Re-Bars are produced bases on Indian Technology & Design our processes and product confirm to FE-500, FE-550, Fe-500 D Fe-550 D As per IS: 1786/2008.",
            },
        },
    ];

    const qualityCards = [
        {
            title: "Raw Material",
            description:
                "To ensure that the end product is of the highest quality, it is important that the raw material is also of the highest quality. To ensure that these standards are met, the company is producing Standard Billets.",
        },
        {
            title: "TMT Control",
            description:
                "The quality control department keeps a close watch on the finished goods by conducting various quality tests at fixed intervals.",
        },
    ];
  return (
      <>
          <BannerSection
              title="Our Products"
              pageName="Products" />
          <Billets />
          <KhatuTMXBars />
          <TermexSection />
          <Quality />
          <SteelQualitySection
              bgImage={`${import.meta.env.BASE_URL}/assets/images/steel-quality.png`}
              cards={qualityCards}
          />
          <ReBarsTable />
          <SteelMeltingProcess />
          <BenefitsAccordion
              title="Benefits of using Khatu Steel TMT Re-Bars:-"
              leftItems={leftItems}
              rightItems={rightItems}
          />
      </>
  );
}

export default Products;