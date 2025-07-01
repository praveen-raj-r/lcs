import DumperWorkFlow from "@/components/app/automotive/onboard-weighing/dumper/dumper-workflow";
import FeaturesSection from "@/components/app/automotive/onboard-weighing/dumper/features-section";
import HeroSection from "@/components/app/automotive/onboard-weighing/dumper/hero-section";
import dumperMetrics from "@/assets/onboard-weighing/metrics.png";
import SafetyAndEfficiency from "@/components/app/automotive/onboard-weighing/dumper/safety-and-efficiency";
import ScrollSlider from "@/components/app/automotive/onboard-weighing/dumper/scroll-slider";
import Specifications from "@/components/app/automotive/onboard-weighing/dumper/specifications";
import VideoSection from "@/components/app/automotive/onboard-weighing/dumper/video-section";
import stripeBG from "@/assets/onboard-weighing/dumper/stripe-bg.png";
import CardsStack from "@/components/app/automotive/onboard-weighing/dumper/cards-stack";
import PartnersScroll from "@/components/app/partners-scroll";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import {
  VideoPlayer,
  VideoPlayerContent,
} from "@/components/ui/kibo-ui/video-player"; 

const Dumper = () => {
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
                Weigh on the Go and optimize your mining efficiency like never
                before!
              </h2>
              <h6 className="leading-[28px] max-w-[663px] text-lg z-1">
                Introducing Payload DT, the ultimate solution for monitoring
                your Dumper's payload, trips and ensure DGMS compliance. Real
                time tracking, instant data access, comprehensive report for
                efficient mining.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <DumperWorkFlow />
      <CardsStack />
      <div className="max-w-5xl mx-auto px-4 w-full relative py-10">
        <VideoPlayer className="overflow-hidden rounded-4xl border w-full">
          <VideoPlayerContent
            slot="media"
            src='https://github.com/praveen-raj-r/lcs/releases/download/v1.0.0-assets/tipper.mp4'
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
          <img src={dumperMetrics} className="mx-auto" />
        </div>
        <Specifications />
      </div>
      <VideoSection />
      <DownloadDataSheetSection></DownloadDataSheetSection>
      <PartnersScroll />
    </div>
  );
};

export default Dumper;
