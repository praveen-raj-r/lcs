import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import foundationCardBg from "@/assets/about-us/foundation-card-bg.png";

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: "left" | "right";
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: "Trust",
    description:
      "Built on a foundation of transparency and reliability, we foster long-term relationships rooted in mutual respect and consistent delivery.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: User2,
    title: "People-First Culture",
    description:
      "We believe our people are our greatest strength. Empowering teams, nurturing talent, and promoting growth are core to our culture.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive for excellence in every detail, consistently pushing boundaries to deliver high-quality results that exceed expectations.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: "Innovation",
    description:
      "Driven by curiosity and powered by technology, we deliver future-ready solutions through innovative thinking and agile execution.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: User,
    title: "Collaboration",
    description:
      "Collaboration lies at the heart of everything we do — with clients, teams, and partners — to build smarter, faster, and stronger solutions.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Lightbulb,
    title: "Sustainability",
    description:
      "Committed to a responsible future, we embed sustainability into our operations, products, and mindset for long-term impact.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pb-4 pt-4 text-sm",
          "ring ring-border",
          feature.cornerStyle
        )}
      >
        <div className="mb-3 text-[2rem] text-primary flex justify-between items-center">
          <h2 className="text-xl text-[#D90429] font-medium">
            {feature.title}
          </h2>
          <Icon stroke="#D90429" />
        </div>
        <div className="p-4 text-base rounded-2xl font-medium text-[#1D1D1F] relative overflow-hidden">
          <p className="z-2 relative pb-10">{feature.description}</p>
          <div
            className="h-full w-full absolute bottom-0 right-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${foundationCardBg})` }}
          ></div>
        </div>
        {/* Decorative elements */}
        <span
          className={cn(
            "absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2",
            "bg-gradient-to-r from-blue-400 to-blue-400 opacity-60"
          )}
        ></span>
      </div>
    </div>
  );
};

function Feature() {
  return (
    <section>
      <div className="max-w-5xl pb-16 pt-2 mx-4">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="flex justify-center">
              <div className="mb-4.5 relative mx-auto w-fit rounded-full px-7 py-3 text-sm text-foreground ring ring-border">
                <span className="z-1 relative flex items-center gap-2 font-semibold text-3xl">
                  Foundation
                </span>
                <span className="absolute -bottom-px left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-red-100 via-red-500 to-red-100"></span>
                <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Foundation = () => {
  return (
    <div className="bg-[#F8f7f5] flex justify-center flex-col items-center">
      <div className="max-w-5xl mx-4 w-full py-10">
        <div className="flex items-center flex-col gap-6">
          <h1 className="text-center font-semibold text-[38px] leading-[48px] text-[#1d1d1f]">
            Foundation of our Beliefs
          </h1>
          <p className="max-w-4xl text-center text-[#6A6A6A] text-lg font-medium leading-[28px]">
            Our foundation rooted in trust, innovation, and excellence, we are
            driven by a people-first mindset, collaborative spirit, and a deep
            commitment to sustainability. These core values shape everything we
            do—from how we build to how we grow.
          </p>
        </div>
      </div>
      <Feature />
    </div>
  );
};

export default Foundation;
