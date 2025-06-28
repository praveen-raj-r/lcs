import ConsolePanelCard from "@/components/app/projects/tower-testing/console-panel-card";
import HeroSection from "@/components/app/projects/tower-testing/hero-section";
import SchemaSection from "@/components/app/projects/tower-testing/schema-section";
import { StickyScrollRevealDemo } from "@/components/app/projects/tower-testing/stick-roll";
import TowerTestingCard from "@/components/app/projects/tower-testing/tower-testing-card";
import VfdConsole from "@/components/app/projects/tower-testing/Vfdpanelcard";
import { cn } from "@/lib/utils";
import {
  ChartSpline,
  Cloud,
  DollarSign,
  HandCoins,
  Headset,
  Heart,
  Split,
  SquareTerminal,
} from "lucide-react";

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
      <FeaturesSection />
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <SquareTerminal />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <ChartSpline />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <DollarSign />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <Cloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <Split />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <Headset />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <HandCoins />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <Heart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <div
          className={cn(
            "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
            (index === 0 || index === 4) &&
              "lg:border-l dark:border-neutral-800",
            index < 4 && "lg:border-b dark:border-neutral-800"
          )}
        >
          {index < 4 && (
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          )}
          {index >= 4 && (
            <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          )}
          <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
            {feature.icon}
          </div>
          <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
              {feature.title}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TowerTesting;
