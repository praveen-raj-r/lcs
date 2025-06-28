import HeroSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/hero-section";
import Specifications from "@/components/app/automotive/safety-critical-sensors/tilt-switch/specifications";
import VideoSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/video-section";
import Metrics from "@/components/app/automotive/safety-critical-sensors/tilt-switch/metrics";
import PartnersScroll from "@/components/app/partners-scroll";
import FeaturesSection from "@/components/app/automotive/safety-critical-sensors/tilt-switch/features-section";
import mobileImg from "@/assets/safety-critical-sensors/tiltswitch/mobile-app.png";
import tiltIllustration from "@/assets/safety-critical-sensors/tiltswitch/tilt-illustration.png";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";

const TiltSwitch = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />

      <div className="bg-[#FCE6EA] w-full my-10 mt-60 lg:mt-20 relative z-1">
        <div className="mx-auto max-w-5xl w-full px-4 pt-10 pb-20">
          <h1 className="text-[#1d1d1f] text-3xl sm:text-[38px] font-semibold sm:leading-[48px] pt-10 pb-5">
            Safety and Efficiency <br /> On the Fly
          </h1>
          <img src={tiltIllustration} />
        </div>
      </div>

      <div className="w-full lg:-mt-10 xl:-mt-0 relative pb-10 md:pb-20">
        <div className="w-full flex justify-center pb-10">
          <div className="max-w-5xl w-full mx-4">
            <div className="flex flex-col items-center justify-center text-[#1d1d1f] text-center relative z-2">
              <h2 className="sm:text-[38px] font-semibold sm:leading-[48px] max-w-[850px] text-3xl z-1 pb-7">
                Safe Tipping on Flat Gradients — Zero Risk of Toppling
              </h2>
              <h6 className="leading-[28px] max-w-[663px] text-lg z-1">
                Tipping on uneven ground is a major cause of accidents in mining
                and construction. Our intelligent Tilt Monitoring System uses
                dual-axis sensors to detect unsafe gradients in real time,
                allowing tipping only on level ground. If a slope is too steep,
                the system blocks tipping and alerts the operator — ensuring
                safe, stable, and controlled discharge every time.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <VideoSection />
      <FeaturesSection />
      <AdvancedTiltSection />
      <div className="bg-[linear-gradient(194.36deg,rgba(217,4,41,0.1)_48.69%,#FFFFFF_153.67%)]">
        <Metrics />
        <Specifications />
      </div>
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

const AdvancedTiltSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-[#BFBFBF] md:text-lg space-y-6">
          <h2 className="text-3xl md:text-[38px] md:leading-[48px] font-medium text-[#F8F7F5]">
            Tilt Switch Mobile Application Easy to Calibrate. Simple to Use.
          </h2>
          <p>
            Enhance operational safety and data accessibility with our Advanced
            Tilt Switch System, now equipped with a dedicated mobile
            application. Operators can monitor real-time tilt status, receive
            alerts, and view safe tipping conditions directly from their mobile
            devices — ensuring smarter, safer decisions on the go.
          </p>
          <p>
            Simple to Use. Our intuitive mobile application makes calibration
            effortless. Operators can quickly configure tilt thresholds, reset
            system values, and perform diagnostics — all through a user-friendly
            interface. Designed for field use, the app ensures smooth setup and
            real-time monitoring without the need for specialized tools or
            training.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="shadow-lg">
            <img
              src={mobileImg}
              alt="Onboard Weighing System"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltSwitch;
