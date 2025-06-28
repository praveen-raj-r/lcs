import FeaturesSection from "@/components/app/automotive/onboard-weighing/tipper/features-section";
import HeroSection from "@/components/app/automotive/onboard-weighing/tipper/hero-section";
import tipperMetrics from "@/assets/onboard-weighing/metrics.png";
import SafetyAndEfficiency from "@/components/app/automotive/onboard-weighing/tipper/safety-and-efficiency";
import ScrollSlider from "@/components/app/automotive/onboard-weighing/tipper/scroll-slider";
import Specifications from "@/components/app/automotive/onboard-weighing/tipper/specifications";
import stripeBG from "@/assets/onboard-weighing/tipper/stripe-bg.png";
import TipperWorkFlow from "@/components/app/automotive/onboard-weighing/tipper/tipper-workflow";
import CardsStack from "@/components/app/automotive/onboard-weighing/tipper/cards-stack";
import VideoSection from "@/components/app/automotive/onboard-weighing/tipper/video-section";
import PartnersScroll from "@/components/app/partners-scroll";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import {
  VideoPlayer,
  VideoPlayerContent,
} from "@/components/ui/kibo-ui/video-player";
import onboardWeighingVideo from "@/assets/videos/tipper.mp4";
const Tipper = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img
        src={stripeBG}
        className="w-full h-80 sm:h-auto mt-20 lg:-mt-40 z-1 relative"
      />

      <TipperWorkFlow />
      <CardsStack />
      <div className="max-w-5xl mx-auto px-4 w-full relative py-10">
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
      <div className="bg-[linear-gradient(194.37deg,rgba(7,146,180,0.1)_48.7%,#FFFFFF_153.66%)]">
        <div className="w-full max-w-5xl px-4 py-10 mx-auto md:py-40 mt-10 md:mt-30">
          <img src={tipperMetrics} className="mx-auto" />
        </div>
        <Specifications />
      </div>
      <VideoSection />
      <DownloadDataSheetSection></DownloadDataSheetSection>
      <PartnersScroll />
    </div>
  );
};

export default Tipper;
