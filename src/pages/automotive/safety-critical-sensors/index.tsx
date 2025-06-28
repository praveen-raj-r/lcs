import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import PartnersScroll from "@/components/app/partners-scroll";
import Video from "@/assets/videos/tilt-switch.mp4";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";
import mobileImg from "@/assets/safety-critical-sensors/tiltswitch/mobile-app.png";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";
import heroBg from "@/assets/safety-critical-sensors/home/hero-bg.png";
import sensorsImages from "@/assets/safety-critical-sensors/home/safety-critical-sensors.png";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import tiltSensor from "@/assets/safety-critical-sensors/home/tilt-switch-system.png";
import inclinometer from "@/assets/safety-critical-sensors/home/inclinometer.png";
const SensorHome = () => {
  return (
    <div className="relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />

      <GridSection />
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
      <AdvancedTiltSection />
      <SensorCardHoverEffect />
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl w-full px-4 mx-auto md:-mb-30">
        <div className="flex justify-center mt-14">
          <IconText color="blue" text="Automotive" />
        </div>
        <h3 className="text-center font-semibold md:text-[56px] md:leading-[68px] text-[#1D1D1F] mt-4 text-3xl">
          Safety Critical
          <br />
          Sensors
        </h3>
        <p className="text-center max-w-[422px] mx-auto text-lg font-medium leading-[28px] text-[#6A6A6A] mt-4">
          ensure precise angle measurement and monitoring in equipment,
          safeguarding and enhancing overall safety
        </p>
        <div className="flex sm:flex-row flex-col items-center justify-center mx-auto mt-10 gap-4 sm:gap-10">
          <CustomButton background="#0792B4">Request a quote</CustomButton>
          <CustomButton background="" color="#0792B4">
            Download Brochure
          </CustomButton>
        </div>
      </div>
      <img src={heroBg} className="w-full mt-14" />
      <div className="max-w-5xl mx-auto px-4 pb-20 -mt-20">
        <img src={sensorsImages} className="w-full" />
      </div>
    </div>
  );
};

const GridSection = () => {
  return (
    <div className="max-w-5xl mx-auto w-full text-[#1d1d1f]">
      <div className="border-y [--border:#E5E5E5] flex">
        <div className="w-full">
          <div className="border-b px-2 py-6">
            <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
              Alert
            </h1>
            <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
              Visual and audio indication is ON when the vehicle angle is more
              than set point during tipping to alert the operator
            </p>
          </div>
          <div className="border-b px-2 py-6">
            <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
              Quick Response
            </h1>
            <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
              Loading Time
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
              Safety
            </h1>
            <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
              The output is used to stop tipping of the vehicle for safety
              purpose.
            </p>
          </div>

          <div className="border-b px-2 h-full flex justify-center items-center">
            <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
              Dual Axis Angel Measurement
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const SensorsOverview = () => {
  return (
    <div className="bg-[#E6F4F7] py-20">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="flex flex-wrap w-full justify-center">
          {[
            {
              img: tiltSensor,
              title: "Tilt Switch System",
              description:
                "Reliable Safety Trigger for Static and Harsh Environments The Tilt Switch System is engineered for rugged applications in factories, automotive platforms, and construction sites, where safety is critical. Designed to function effectively in static and harsh conditions, the system continuously monitors the vehicle or platform angle.",
            },
            {
              img: inclinometer,
              title: "Angle Sensor/ Inclinometer",
              description:
                "Precision Inclination Monitoring for Smarter, Safer Control Our high-performance Angle Sensors and Inclinometers are engineered for accurate tilt and slope measurement across a wide range of dynamic and static applications. These sensors enable intelligent automation, improved safety, and optimized system control in mobile and industrial platforms.",
            },
          ].map((sensor, index) => (
            <div key={index} className=" px-2 py-6">
              <div className="flex mb-4">
                <div className="p-4 w-full bg-white">
                  <img className="w-full" src={sensor.img} />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="p-4">
                  <h1 className="text-2xl md:text-[28px] font-semibold md:leading-[40px] mb-2">
                    {sensor.title}
                  </h1>
                  <p className="max-w-[422px] mx-auto text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
                    {sensor.description}
                  </p>
                </div>
                <div className="flex items-center mt-4 gap-4">
                  <CustomButton background="#0792B4">
                    Request a quote
                  </CustomButton>
                  <CustomButton color="#0792B4" background="">
                    Download brochure
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

function SensorCardHoverEffect() {
  const projects = [
    {
      title: " 🞂 Accurate Tilt Detection",
      description:
        "Detect angular deviations with high precision to prevent unsafe operations and ensure structural stability.",
    },
    {
      title: "🞂 Built for Rugged Conditions",
      description:
        "Designed for durability in high-vibration, dusty, or extreme temperature environments—ideal for off-road vehicles, construction machinery, and heavy equipment.",
    },
    {
      title: "🞂 Fail-Safe Alerts & Automation",
      description:
        "Integrated with control systems to trigger alerts, cutoffs, or emergency actions during unsafe tilt conditions.",
    },
    {
      title: "🞂 Compact & Easy Integration",
      description:
        "Lightweight, compact form factor with flexible mounting options and digital/analog output compatibility.",
    },
    {
      title: "🞂 Automatic Safety Response",
      description:
        "Integrated with control systems to trigger alarms, shutdowns, or corrective actions when critical tilt thresholds are breached.",
    },
    {
      title: "🞂 Robust & Maintenance-Free",
      description:
        "Encapsulated designs resist shock, vibration, dust, and moisture, ensuring long-lasting, trouble-free operation.",
    },
  ];
  return (
    <div className="max-w-5xl w-full mx-auto px-4">
      <HoverEffect items={projects} />
    </div>
  );
}

export default SensorHome;
