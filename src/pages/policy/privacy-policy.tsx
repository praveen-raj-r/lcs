import HeroSection from "@/components/app/privacy-policy/hero-section";
import LeftSide from "@/components/app/privacy-policy/left-side";
import RightSide from "@/components/app/privacy-policy/right-side";

const sections = [
  { id: "about-lcs" },
  { id: "info-protect" },
  { id: "rights" },
  { id: "links" },
  { id: "changes" },
  { id: "contact" },
  { id: "info-we-collect-via-technology" },
  { id: "info-we-collect-from-account" },
  { id: "info-we-collect-children-privacy" },
  { id: "info-we-share-personal" },
  { id: "info-we-share-non-personal" },
];

const PrivacyPolicy = () => {
  return (
    <div className="mt-[-64px] relative">
      <HeroSection />
      <div className="bg-white w-full flex justify-center **:[border-color:#e5e5e5]">
        <div className="max-w-5xl mx-4 w-full flex border relative">
          <LeftSide />
          <RightSide sections={sections} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
