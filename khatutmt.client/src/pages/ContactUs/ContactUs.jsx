import { Helmet } from "react-helmet";
import BannerSection from "../../components/BannerSection/BannerSection";
import ContactInfoCards from "../../components/Contact/ContactInfoCards";
import ContactMapForm from "../../components/Contact/ContactMapForm";

function ContactUs() {
    return (
        <>
            <Helmet>
                <title>
                    Contact TMT Bars Manufacturer India | Steel Supplier Details
                </title>

                <meta
                    name="description"
                    content="Contact TMT bars manufacturer for billets, ingots and steel supply. Get details of Mumbai office and Silvassa plant for business inquiries."
                />

                <meta
                    name="keywords"
                    content="contact TMT manufacturer India, steel supplier contact, TMT bars inquiry, steel company Mumbai, Silvassa steel plant contact"
                />

                <link
                    rel="canonical"
                    href="https://www.khatutmt.com/contact-us"
                />
            </Helmet>

            <BannerSection
                title="Contact Us"
                pageName="Contact Us"
            />

            <ContactInfoCards />
            <ContactMapForm />
        </>
    );
}

export default ContactUs;