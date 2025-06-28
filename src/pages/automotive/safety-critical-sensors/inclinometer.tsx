import HeroSection from "@/components/app/automotive/safety-critical-sensors/inclinometer/hero-section";
import TabsSection from "@/components/app/automotive/safety-critical-sensors/inclinometer/tabs-section";
import SensorsOverview from "@/components/app/automotive/safety-critical-sensors/inclinometer/sensors-overview";
import MobileAppSection from "@/components/app/automotive/safety-critical-sensors/inclinometer/mobile-app-section";

import metrics from "@/assets/safety-critical-sensors/tiltswitch/metrics.png";

import GridSection from "@/components/app/automotive/safety-critical-sensors/inclinometer/grid-section";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import PartnersScroll from "@/components/app/partners-scroll";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";
import Video from "@/assets/videos/tilt-switch.mp4";

const InclinoMeter = () => {
  return (
    <div className="relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <TabsSection />
      <div className="max-w-5xl mx-auto px-4 w-full relative py-10">
        <VideoPlayer className="overflow-hidden rounded-2xl  border w-full mt-10">
          <VideoPlayerContent
            slot="media"
            src={Video}
            preload="auto"
            muted
            crossOrigin=""
            loop
            autoPlay
          />
          <VideoPlayerControlBar></VideoPlayerControlBar>
        </VideoPlayer>
      </div>
      <SensorsOverview />
      <MobileAppSection />
      <div className="bg-[linear-gradient(194.36deg,rgba(7,146,180,.1)_48.69%,#FFFFFF_153.67%)] py-10 md:py-30">
        <img src={metrics} className="max-w-5xl mx-auto px-4 w-full" />
      </div>
      <GridSection />
      <DownloadDataSheetSection description="Accurate data transmission in real time, precise monitoring and control" />
      <PartnersScroll />
    </div>
  );
};

export default InclinoMeter;
