import ScrollSlider from "@/components/app/automotive/onboard-weighing/dumper/scroll-slider";
import stripeBG from "@/assets/onboard-weighing/wheel-loader/stripe-bg.png";
import HeroSection from "@/components/app/automotive/onboard-weighing/wheel-loader/hero-section";
import SafetyAndEfficiency from "@/components/app/automotive/onboard-weighing/wheel-loader/safety-and-efficiency";
import Specifications from "@/components/app/automotive/onboard-weighing/wheel-loader/specifications";
import CardsStack from "@/components/app/automotive/onboard-weighing/wheel-loader/cards-stack";
import VideoSection from "@/components/app/automotive/onboard-weighing/wheel-loader/video-section";
import FeaturesSection from "@/components/app/automotive/onboard-weighing/wheel-loader/features-section";
import WheelLoaderMetrics from "@/assets/onboard-weighing/metrics.png";
import PartnersScroll from "@/components/app/partners-scroll";
import WheelLoaderProductShow from "@/components/app/automotive/onboard-weighing/wheel-loader/productshow";
import WheelLoaderWorkFlow from "@/components/app/automotive/onboard-weighing/wheel-loader/wheel-loader-workflow";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import onboardWeighingVideo from "@/assets/videos/onboard-weighing.mp4";
import {
  VideoPlayer,
  VideoPlayerContent,
} from "@/components/ui/kibo-ui/video-player";
const WheelLoader = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img
        src={stripeBG}
        className="w-full h-80 sm:h-auto mt-5 sm:mt-40 lg:-mt-40 z-1 relative"
      />
      <div className="w-full lg:-mt-10 xl:-mt-20 relative pb-10 md:pb-20">
        <div className="w-full flex justify-center pb-10">
          <div className="max-w-5xl w-full mx-4">
            <div className="flex flex-col items-center justify-center text-[#1d1d1f] text-center relative z-2">
              <h2 className="sm:text-[38px] font-semibold sm:leading-[48px] max-w-[850px] text-3xl z-1 pb-7">
                Weigh as You Load – Maximize Efficiency with Every Bucket!
              </h2>
              <h6 className="leading-[28px] max-w-[663px] text-lg z-1">
                Introducing Payload WL – the advanced payload monitoring
                solution designed specifically for Wheel Loaders in mining and
                construction operations.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <WheelLoaderWorkFlow />
      <CardsStack />
      <div className="max-w-7xl mx-auto px-4 w-full relative py-10">
        <VideoPlayer className="overflow-hidden rounded-4xl border w-full">
          <VideoPlayerContent
            slot="media"
            src={onboardWeighingVideo}
            preload="auto"
            muted
            crossOrigin=""
            loop
            autoPlay
          />
        </VideoPlayer>
      </div>
      <SafetyAndEfficiency />
      <ScrollSlider />
      <FeaturesSection />
      <WheelLoaderProductShow />
      <div className="bg-[linear-gradient(194.37deg,rgba(7,146,180,0.1)_48.7%,#FFFFFF_153.66%)]">
        <div className="w-full max-w-5xl mx-auto px-4 py-10 md:py-40 mt-10 md:mt-30">
          <img src={WheelLoaderMetrics} className="mx-auto" />
        </div>
        <Specifications />
      </div>
      <VideoSection />
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

export default WheelLoader;
