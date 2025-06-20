import ColorStyleSection from "@/components/app/brand-guidelines/color-style-section";
import HeroSection from "@/components/app/brand-guidelines/hero-section";
import LogoSections from "@/components/app/brand-guidelines/logo-sections";
import Typography from "@/components/app/brand-guidelines/typography";
import UsageGuidelinesSection from "@/components/app/brand-guidelines/usage-guidelines-section";
import UseProhibitedSection from "@/components/app/brand-guidelines/use-prohibited-section";

const BrandGuidelines = () => {
  return (
    <div className="mt-[-64px]">
      <HeroSection />
      <LogoSections />
      <UsageGuidelinesSection />
      <ColorStyleSection />
      <Typography />
      <UseProhibitedSection />
    </div>
  );
};

export default BrandGuidelines;
