/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import tipperSpec from "@/assets/onboard-weighing/home/tipper-spec.png";
import dumperSpec from "@/assets/onboard-weighing/home/dumper-spec.png";
import wheelLoaderSpec from "@/assets/onboard-weighing/home/wheel-loader-spec.png";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import PartnersScroll from "@/components/app/partners-scroll";
import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";
import heroBg from "@/assets/onboard-weighing/home/hero-bg.png";
import payloadVehicles from "@/assets/onboard-weighing/home/payload-vehicles.png";
import onboardWeighingVideo from "@/assets/videos/tipper.mp4";
import {
  VideoPlayer,
  VideoPlayerContent,
} from "@/components/ui/kibo-ui/video-player";
import Fourtydegree from "@/assets/onboard-weighing/home/minus40deg.png";
import oneZeroFivedegree from "@/assets/onboard-weighing/home/105deg.png";

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
      <GridSection />
      <VideoSection />
      <FactsSection />

      {allSections.map((section) => (
        <AllVehiclesSection key={section.description} section={section} />
      ))}

      <DownloadDataSheetSection
        heading="Download Brochure & GA Diagram"
        description="Access the latest Catalogue and Data Sheet to explore detailed technical specifications, dimensions, and key features of the system. Make informed decisions with all the essential information at your fingertips."
      >
        <CustomButton>Data Sheet</CustomButton>
        <CustomButton>GA Diagram</CustomButton>
      </DownloadDataSheetSection>
      <PartnersScroll />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl w-full px-4 mx-auto md:-mb-30">
        <div className="flex justify-center mt-14">
          <IconText text="Automotive" color="red" />
        </div>

        <h3 className="text-center font-semibold md:text-[56px] md:leading-[68px] text-[#1D1D1F] mt-4 text-3xl">
          Payload Monitoring
          <br />
          System
        </h3>
        <p className="text-center max-w-[422px] mx-auto text-lg font-medium leading-[28px] text-[#6A6A6A] mt-4">
          suggests the ruggedness and suitability for use in demanding
          industrial or harsh environments.
        </p>

        <div className="flex sm:flex-row flex-col items-center justify-center mx-auto mt-10 gap-4 sm:gap-10">
          <CustomButton>Request a quote</CustomButton>
          <CustomButton background="" color="#D90429">
            Download Brochure
          </CustomButton>
        </div>
      </div>
      <img src={heroBg} className="w-full mt-14" />
      <div className="max-w-5xl mx-auto px-4 pb-20 -mt-20">
        <img src={payloadVehicles} className="w-full" />
      </div>
    </div>
  );
};

const GridSection = () => {
  return (
    <div className="max-w-5xl mx-auto w-full text-[#1d1d1f]">
      <div className="border-y [--border:#E5E5E5] flex">
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
};

const SectionOne = () => {
  return (
    <div className="w-full">
      <div className="border-b px-2 py-6">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          Low-Power
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          highlights the energy efficiency and low power consumption of computer
          on module and system on module products.
        </p>
      </div>
      <div className="border-b px-2 py-6">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          03:00:00 to 03:00:10
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          Loading Time
        </p>
      </div>
      <div className="border-b px-2 py-6">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          16
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          Trip Count
        </p>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden h-20">
        <GridPattern
          x={-1}
          y={-1}
          className={cn(
            "h-full w-full [mask-image:linear-gradient(to_bottom_right,white,#000,#000)] "
          )}
        />
      </div>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className="w-full border-l flex flex-col">
      <div className="relative flex items-center justify-center overflow-hidden h-50">
        <GridPattern
          x={-1}
          y={-1}
          className={cn(
            "h-full w-full [mask-image:linear-gradient(to_bottom_right,white,#000,#000)] "
          )}
        />
      </div>
      <div className="border-y px-2 py-6">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          2 Km
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          Return Distance
        </p>
      </div>
      <div className="border-b px-2 py-6">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          Easy-to-Integrate
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          emphasizes the simplicity and ease of integrating the embedded system
          into existing hardware or software solutions.
        </p>
      </div>
      <div className="border-b px-2 h-full flex justify-center items-center">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          Overload Alert
        </h1>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
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
  );
};

const FactsSection = () => {
  return (
    <div className="bg-[#FCE6EA] pb-10">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-10 py-10 md:py-20">
          <img src={Fourtydegree} alt="" />

          <div>
            <h1 className="text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2 text-[#1d1d1f] mt-10 md:mt-0 md:pt-10 md:pb-6 md:px-4 md:w-[422px] mx-auto">
              -40°C
            </h1>
            <p className="max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
              System that is designed to operate in very cold environments and
              using high-quality materials and proper insulation can help ensure
              that the system will function properly even at
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-10 py-10 md:py-20">
          <div>
            <h1 className="text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2 text-[#1d1d1f] mt-10 md:mt-0 md:pt-10 md:pb-6 md:px-4 md:w-[422px] mx-auto">
              +105°C
            </h1>
            <p className="max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
              System that is designed to operate in very hot environments and
              using high-quality materials and proper insulation can help ensure
              that the system will function properly even at
            </p>
          </div>
          <img src={oneZeroFivedegree} alt="" />
        </div>
      </div>
    </div>
  );
};

const AllVehiclesSection = ({ section }: any) => {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-20 space-y-10">
      <div className="space-y-4">
        <h3
          className="text-[38px] font-semibold leading-[48px] "
          style={{ color: section.textColor }}
        >
          {section.heading}
        </h3>
        <p className="max-w-[413px] font-medium text-lg text-[#6A6A6A] leading-[28px]">
          {section.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="https://lcscon.myfreshworks.com/crm/sales/web_forms/3e5c17e1b1a4eb8159413c4d05874962c620de98bb622178745602ffbd834d94/form.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton background={section.textColor}>
              Request a quote
            </CustomButton>
          </a>
          <CustomButton color={section.textColor} background="">
            Download Brochure
          </CustomButton>
        </div>
      </div>
      <img src={section.img} alt="" />
    </div>
  );
};

export default OnboardWeighing;
