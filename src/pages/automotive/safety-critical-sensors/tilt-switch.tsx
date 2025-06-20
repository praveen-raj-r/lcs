import HeroSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/hero-section";
import Specifications from "@/components/app/automotive/safety-critical-sensors/tilt-switch/specifications";
import VideoSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/video-section";
import Metrics from "@/components/app/automotive/safety-critical-sensors/tilt-switch/metrics";
import PartnersScroll from "@/components/app/partners-scroll";
import FeaturesSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/features-section";
import AdvancedTiltSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/mobapp-section";

const TiltSwitch = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img
        src="/automotive/safety-critical-sensors/tiltswitch/tiltschema-bg.png"
        className="w-full h-60 sm:h-auto mt-20 lg:-mt-1 z-1 relative"
      />
      <div className="w-full lg:-mt-10 xl:-mt-0 relative pb-10 md:pb-20">
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
      <VideoSection />
      <FeaturesSection />
      <AdvancedTiltSection />
      <Metrics />
      <Specifications />
      <PartnersScroll />
    </div>
  );
};

export default TiltSwitch;
