import BannerSection from "../../components/BannerSection/BannerSection";
import ContactInfoCards from "../../components/Contact/ContactInfoCards";
import ContactMapForm from "../../components/Contact/ContactMapForm";

function ContactUs() {
    return (
        <>
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