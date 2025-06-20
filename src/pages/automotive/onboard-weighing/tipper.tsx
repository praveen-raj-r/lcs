import FeaturesSection from "@/components/app/automotive/onboard-weighing/tipper/features-section";
import HeroSection from "@/components/app/automotive/onboard-weighing/tipper/hero-section";
import Metrics from "@/components/app/automotive/onboard-weighing/tipper/metrics";
import SafetyAndEfficiency from "@/components/app/automotive/onboard-weighing/tipper/safety-and-efficiency";
import ScrollSlider from "@/components/app/automotive/onboard-weighing/tipper/scroll-slider";
import Specifications from "@/components/app/automotive/onboard-weighing/tipper/specifications";
import stripeBG from "@/assets/onboard-weighing/tipper/stripe-bg.png";
import TipperWorkFlow from "@/components/app/automotive/onboard-weighing/tipper/tipper-workflow";
import CardsStack from "@/components/app/automotive/onboard-weighing/tipper/cards-stack";
import VideoSection from "@/components/app/automotive/onboard-weighing/tipper/video-section";
import PartnersScroll from "@/components/app/partners-scroll";

const Tipper = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img
        src={stripeBG}
        className="w-full h-80 sm:h-auto mt-20 lg:-mt-40 z-1 relative"
      />
      <div className="w-full lg:-mt-10 xl:-mt-20 relative pb-10 md:pb-20">
        <div className="w-full flex justify-center pb-10">
          <div className="max-w-5xl w-full mx-4">
            <div className="flex flex-col items-center justify-center text-[#1d1d1f] text-center relative z-2">
              <h2 className="sm:text-[38px] font-semibold sm:leading-[48px] max-w-[850px] text-3xl z-1 pb-7">
                Weigh on the Go with Payload TMS – The Smarter Way to Monitor
                Tippers
              </h2>
              <h6 className="leading-[28px] max-w-[663px] text-lg z-1">
                Smarter Tipper Monitoring for Safer, More Efficient Mining
                Payload Tipper is your go-to solution for accurately monitoring
                tipper payloads, tracking trips, and ensuring DGMS compliance —
                all with real-time intell
              </h6>
            </div>
          </div>
        </div>
      </div>
      <TipperWorkFlow />
      <CardsStack />
      <VideoSection />
      <SafetyAndEfficiency />
      <ScrollSlider />
      <FeaturesSection />
      <div className="bg-[linear-gradient(194.37deg,rgba(7,146,180,0.1)_48.7%,#FFFFFF_153.66%)]">
        <Metrics />
        <Specifications />
      </div>
      <PartnersScroll />
    </div>
  );
};

export default Tipper;
