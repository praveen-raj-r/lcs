import HeroSection from "@/components/app/automotive/safety-critical-sensors/safety-sensor-home/hero-section";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import PartnersScroll from "@/components/app/partners-scroll";

import GridSection from "@/components/app/automotive/safety-critical-sensors/safety-sensor-home/grid-section";
import SensorsOverview from "@/components/app/automotive/safety-critical-sensors/safety-sensor-home/sensors-overview";

const SensorHome = () => {
  return (
    <div className="relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />

      <GridSection />
      <div className="h-100 bg-black flex justify-center items-center">
        <h1 className="text-center text-white text-7xl font-bold">Video</h1>
      </div>
      <SensorsOverview />

      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

export default SensorHome;
