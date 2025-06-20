import ConsolePanelCard from "@/components/app/projects/tower-testing/console-panel-card";
import HeroSection from "@/components/app/projects/tower-testing/hero-section";

import SchemaSection from "@/components/app/projects/tower-testing/schema-section";
import { StickyScrollRevealDemo } from "@/components/app/projects/tower-testing/stick-roll";
import TowerTestingCard from "@/components/app/projects/tower-testing/tower-testing-card";
import VfdConsole from "@/components/app/projects/tower-testing/Vfdpanelcard";
import FeaturesSectionDemo from "@/components/features-section-demo-2";

const TowerTesting = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img
        src="/dumper-page-bg.png"
        className="w-full h-80 sm:h-auto mt-20 lg:-mt-40 z-1 relative"
      />
      <SchemaSection />
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with Purpose-Built Features
        </h4>
        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From real-time deflection tracking to automated compliance reports,
          our Tower Testing Software has everything you need. Monitor stress,
          strain, environmental conditions, and more — all through intelligent
          APIs. It can even generate structural reports and certification
          documents for you.
        </p>
      </div>
      <StickyScrollRevealDemo />
      <TowerTestingCard />
      <VfdConsole />
      <ConsolePanelCard />
      <FeaturesSectionDemo />
    </div>
  );
};
export default TowerTesting;
