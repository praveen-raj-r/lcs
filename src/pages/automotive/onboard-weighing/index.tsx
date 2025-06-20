import HeroSection from "@/components/app/automotive/onboard-weighing/onboard-home/hero-section";
import payloadVehicles from "@/assets/onboard-weighing/home/payload-vehicles.png";
import VideoSection from "@/components/app/automotive/onboard-weighing/onboard-home/video-section";
import GridSection from "@/components/app/automotive/onboard-weighing/onboard-home/grid-section";
import FactsSection from "@/components/app/automotive/onboard-weighing/onboard-home/facts-section";
import tipperSpec from "@/assets/onboard-weighing/home/tipper-spec.png";
import dumperSpec from "@/assets/onboard-weighing/home/dumper-spec.png";
import wheelLoaderSpec from "@/assets/onboard-weighing/home/wheel-loader-spec.png";
import AllVehiclesSection from "@/components/app/automotive/onboard-weighing/onboard-home/all-vehicles-section";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import PartnersScroll from "@/components/app/partners-scroll";

const allSections = [
  {
    img: tipperSpec,
    heading: "Tipper",
    textColor: "#D90429",
    description:
      "Trucks are majorly used in mining, construction, steel plant, transportation & blue metal industries.",
  },
  {
    img: dumperSpec,
    heading: "Dumper",
    textColor: "#0792B4",
    description:
      "Dump trucks are used in mining & construction sector. Load measuring system(LMS) is a production monitoring tool designed to maximize the efficiency and productivity of the dump truck.",
  },
  {
    img: wheelLoaderSpec,
    heading: "Wheel Loader",
    textColor: "#D90429",
    description:
      "PAYLOAD-WL is an onboard weighing device to measure the weight of material that is lifted by the wheel loader. The system captures the weight during lifting of the bucket.",
  },
];

const OnboardWeighing = () => {
  return (
    <div className="bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img src={payloadVehicles} className="w-full" />
      <GridSection />
      <VideoSection />
      <FactsSection />
      {allSections.map((section) => (
        <AllVehiclesSection key={section.description} section={section} />
      ))}
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

export default OnboardWeighing;
