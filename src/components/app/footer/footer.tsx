import { Separator } from "@/components/ui/separator";
import SocialMediaLinks from "./social-media-links";
import ContactDetails from "./contact-details";
import AddressDetails from "./address-details";
import ProductLinksSection from "./product-links-section";
import footerData from "@/data/footer-data";
const { section1, section2 } = footerData;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-8 sm:pt-10 pb-3 flex justify-center items-center footer-section text-white relative overflow-hidden">
      <div className="max-w-5xl mx-4 w-full">
        <div className="grid sm:grid-cols-4 sm:gap-10 gap-5 mb-10">
          {section1.map((section) => (
            <ProductLinksSection
              key={`${section.heading}-footer-heading-1`}
              section={section}
            />
          ))}
        </div>
        <div className="grid sm:grid-cols-4 sm:gap-10 gap-5">
          {section2.map((section) => (
            <ProductLinksSection
              key={`${section.heading}-footer-heading-2`}
              section={section}
            />
          ))}
        </div>

        <Separator className="bg-[#1B1C1E] mb-5" />

        <div className="flex sm:flex-row flex-col ">
          <ContactDetails />
          <AddressDetails />
        </div>

        <Separator className="bg-[#1B1C1E] my-2" />

        <div className="flex sm:flex-row flex-col-reverse sm:justify-baseline justify-center">
          <p className="w-full text-sm text-muted text-center sm:text-left sm:mb-0 mb-3">
            Copyright © {currentYear} LCS Controls PVT LTD
          </p>
          <SocialMediaLinks />
        </div>
      </div>
      <div className="red-glow-left sm:block hidden"></div>
      <div className="red-glow-right sm:block hidden"></div>
    </footer>
  );
};

export default Footer;
