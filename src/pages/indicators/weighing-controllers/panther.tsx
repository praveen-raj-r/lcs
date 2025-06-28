/* eslint-disable @typescript-eslint/no-explicit-any */
import highCapacityOnlineCheckweigher from "@/assets/panther/high-capacity-online-checkweigher.png";
import dashboards from "@/assets/panther/panther-dashboards.png";
import heroBg from "@/assets/panther/hero-bg.png";
import highspeedOnlineCheckweigher from "@/assets/panther/highspeed-online-checkweigher.png";
import IconText from "@/components/app/icon-text";
import bagging from "@/assets/panther/bagging.png";
import batchingSystem from "@/assets/panther/batching-system.png";
import staticCheckweigher from "@/assets/panther/static-checkweigher.png";
import truckLoadingCheckweigher from "@/assets/panther/truck-loading-checkweigher.png";
import CustomButton from "@/components/app/custom-button";
import CheckweigherDashboard from "@/assets/panther/Checkweigher-dashboard.png";
import detailedReportImg from "@/assets/panther/advanced-features/detailed-report.png";
import automatedEmailImg from "@/assets/panther/advanced-features/automated-email.png";
import multiAccessImg from "@/assets/panther/advanced-features/multi-access.png";
import serversImg from "@/assets/panther/advanced-features/servers.png";
import inbuiltStorageImg from "@/assets/panther/advanced-features/inbuilt-storage.png";
import barcodeScannerInterfaceImg from "@/assets/panther/advanced-features/barcode-scanner-interface.png";
import printerConnectivityImg from "@/assets/panther/advanced-features/printer-connectivity.png";
import cloudAccess from "@/assets/panther/advanced-features/cloud-access.png";
import improvesEfficiency from "@/assets/panther/advanced-features/improves-efficiency.png";
import usbDriveHdmi from "@/assets/panther/advanced-features/usb-drive-hdmi.png";
import sapErpInterface from "@/assets/panther/advanced-features/sap-erp-interface.png";
import protectedAccess from "@/assets/panther/advanced-features/protected-access.png";
import cloudSection from "@/assets/panther/cloud-section.png";
import blueGrid from "@/assets/panther/blue-grid.png";
import redGrid from "@/assets/panther/red-grid.png";
import { cn } from "@/lib/utils";
import dumperDashboard from "@/assets/onboard-weighing/dumper/dumper-dashboard.png";
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import ArrowIcon from "@/assets/arrow-right.png";
import PartnersScroll from "@/components/app/partners-scroll";

const Panther = () => {
  return (
    <div className="relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <GridSection />
      <div className="bg-[#FFF1D0] h-100 w-full flex justify-center items-center">
        <h1 className="text-[56px] font-medium">Video Section </h1>
      </div>
      <BlackSection />
      <AdvancedFeaturesSection />
      <CloudFeaturesSection />
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};
const HeroSection = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <div className="text-[#1D1D1F] w-full">
            <IconText color="red" text="Indicators" />
            <h4 className="md:text-[56px] md:leading-[68px] font-semibold mt-4 text-3xl">
              Panther <br />
              WC1000PR
            </h4>
            <p className="text-[26px] leading-[32px] mt-5 font-semibold">
              Fast and powerful, like the Panther
            </p>
            <p className="text-lg font-medium leading-[28px] mt-4">
              The Panther Industrial Weighing Controller delivers high-speed
              performance and precision for critical industrial applications.
              Designed for accuracy, real-time control, and seamless
              integration, it ensures optimal performance even in the most
              demanding environments.
            </p>
          </div>
          <div className="w-full">
            <img src={dashboards} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = ({ children }: any) => {
  return (
    <div>
      <div
        className="md:block hidden bg-[#F8F7F5] py-10 md:py-[75px] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {children}
      </div>
      <div className="block md:hidden bg-[#F8F7F5] bg-no-repeat bg-right">
        {children}
      </div>
    </div>
  );
};
const AdvancedFeaturesSection = () => {
  return (
    <div className="my-25 max-w-5xl px-4 mx-auto">
      <IconText color="red" text="Indicators" />
      <h3 className="mt-7.5 text-[#1D1D1F] text-[38px] leading-[48px] font-semibold">
        Advanced Features
      </h3>
      <p className="text-[#6A6A6A] font-medium text-lg leading-[28px] max-w-[467px] mt-[22px]">
        Our industrial weighing systems are equipped with cutting-edge features
        to streamline operations, enhance traceability, boost productivity, and
        ensure seamless data integration into modern industrial workflows. These
        features are engineered to meet the demands of dynamic industries such
        as manufacturing, logistics, mining, food processing, and more.
      </p>
      <CustomButton className="mt-5.5">Learn more</CustomButton>
      <img src={CheckweigherDashboard} className="mx-auto my-25" />
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[43px] gap-y-[33px] pb-25 *:mx-auto">
        {[
          { img: detailedReportImg, label: "Detailed Report" },
          { img: automatedEmailImg, label: "Automated Email" },
          { img: multiAccessImg, label: "Multi Access" },
          { img: serversImg, label: "Multi Access" },
          { img: inbuiltStorageImg, label: "Inbuilt Storage" },
          {
            img: barcodeScannerInterfaceImg,
            label: "Barcode Scanner Interface",
          },
          { img: printerConnectivityImg, label: "Printer Connectivity" },
          { img: cloudAccess, label: "Cloud Access" },
          { img: improvesEfficiency, label: "Improves Efficiency" },
          { img: usbDriveHdmi, label: "USB Drive / HDMI" },
          { img: sapErpInterface, label: "SAP / ERP Interface" },
          { img: protectedAccess, label: "Protected access" },
        ].map((gridItem, idx) => (
          <div
            key={`${gridItem.label}-${idx}`}
            className="bg-[#F8F7F5] shadow-[0px_13px_32px_5px_#00000026] rounded-[10px] h-[231px] w-[241px] flex justify-center items-center"
          >
            <div className="flex flex-col items-center gap-5">
              <img src={gridItem.img} />
              <p className="text-black font-semibold text-[22px] leading-[34px] text-center">
                {gridItem.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <IconText color="red" text="Indicators" />
      <h3 className="mt-7.5 text-[#1D1D1F] text-[38px] leading-[48px] font-semibold">
        Cloud features
      </h3>
      <p className="text-[#6A6A6A] font-medium text-lg leading-[28px] max-w-[467px] mt-[22px]">
        Take your weighing operations to the next level with intelligent cloud
        integration. Our system architecture is built to support modern,
        scalable, and secure cloud environments that enable real-time data flow,
        application control, and decision-making — anytime, anywhere.
      </p>
    </div>
  );
};

const BlackSection = () => {
  const gradientTextClass =
    "text-xl md:text-2xl  xl:text-[36px] xl:leading-[48px] font-semibold bg-clip-text text-transparent bg-[linear-gradient(90deg,#D90429_2.4%,#FFF1D0_100%)]";
  const titleTextClass = "text-[#9C9C9D] text-lg leading-[28px]";
  return (
    <div className="bg-black py-25">
      <div className="max-w-5xl mx-auto w-full px-4">
        <h4 className="text-white font-semibold text-[38px] leading-[48px] text-center">
          Specification
        </h4>
        <img
          className="block md:hidden shadow-[0px_4px_83px_-24px_#D90429] mx-auto mt-10"
          src={CheckweigherDashboard}
        />
        <div className="mt-25 relative">
          <img
            className="absolute md:block hidden xl:w-auto w-[300px] md:w-[400px] lg:w-[600px] top-60 lg:top-34 xl:top-[200px] left-[24%] lg:left-[205px] shadow-[0px_4px_83px_-24px_#D90429]"
            src={CheckweigherDashboard}
          />
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-7 *:border *:border-[#6A6A6A] *:rounded-[10px] *:bg-[#1F1E1E] *:py-6 *:px-[19px]">
            <div className="flex flex-col justify-between gap-7">
              <div className="flex flex-col gap-3.25">
                <span className={cn(titleTextClass)}>Display</span>
                <span className={cn(gradientTextClass)}>
                  10 inch TFT touch screen
                </span>
              </div>
              <div className="flex flex-col gap-3.25">
                <span className={cn(titleTextClass)}>Display Resolution</span>
                <span className={cn(gradientTextClass)}>1/10,000</span>
              </div>
              <div className="flex flex-col gap-3.25">
                <span className={cn(titleTextClass)}>Power Supply</span>
                <span className={cn(gradientTextClass)}>
                  24V DC / <br />
                  2.5 Amps
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-7 items-end text-right">
              <div className="flex flex-col gap-3.25">
                <span className={cn(titleTextClass)}>Loadcells</span>
                <span className={cn(gradientTextClass)}>6 Loadcell 350 Ω</span>
              </div>
              <div className="flex flex-col gap-3.25">
                <span className={cn(titleTextClass)}>Memory</span>
                <span className={cn(gradientTextClass)}>
                  SD-upto <br />
                  16GB
                </span>
              </div>
              <div className="flex flex-col gap-3.25">
                <span className={cn(titleTextClass)}>IP Rating</span>
                <span className={cn(gradientTextClass)}>
                  Front Panel / <br />
                  IP 55
                </span>
              </div>
            </div>
            <div className="md:col-span-2 flex items-end">
              <div className="flex md:flex-row flex-col *:mx-auto items-start justify-between gap-12">
                <div className="flex flex-col gap-3.25">
                  <span className={cn(titleTextClass)}>Interface</span>
                  <span className={cn(gradientTextClass)}>
                    RS232C <br /> RS485 for PC / PLC <br /> Printer interface
                    <br />
                    (local / remote)
                  </span>
                </div>
                <div className="flex flex-col gap-3.25">
                  <span className={cn(titleTextClass)}>
                    Digital Input/Output
                  </span>
                  <span className={cn(gradientTextClass)}>
                    8 isolated inputs
                    <br />
                    for 24 VDC max
                    <br /> 8 isolated open
                    <br /> collector outputs
                    <br />
                    for 500mA
                  </span>
                </div>
                <div className="flex flex-col gap-3.25">
                  <span className={cn(titleTextClass, "xl:text-right")}>
                    AD Conversion
                  </span>
                  <span className={cn(gradientTextClass)}>
                    400 Samples/Sec <br />
                    (Type-32 bit Delta <br />
                    sigma)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GridSection = () => {
  return (
    <div className="my-25">
      <div className="max-w-5xl w-full px-4 mx-auto">
        <IconText color="red" text="Panther WC1000PR" />
        <h3 className="mt-7.5 text-[#1D1D1F] font-semibold text-[38px] leading-[48px]">
          Application Suitable For
        </h3>
        <p className="mt-5.5 text-[#6A6A6A] max-w-[467px] font-medium text-lg leading-[28px]">
          Our advanced weighing solutions are engineered to deliver high
          precision, reliability, and long-term performance across a diverse
          range of industrial and commercial environments. Whether in motion or
          at rest, our systems adapt to your workflow and boost operational
          efficiency at every stage.
        </p>
        <div className="mt-17.5">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6.25 gap-y-7.5">
            {[
              { img: bagging, title: "Bagging", link: "" },
              { img: batchingSystem, title: "Batching System", link: "" },
              {
                img: truckLoadingCheckweigher,
                title: "Truck Loading Checkweigher",
                link: "",
              },
              {
                img: highCapacityOnlineCheckweigher,
                title: "High Capacity Online Checkweigher",
                link: "",
              },
              {
                img: highspeedOnlineCheckweigher,
                title: "Highspeed Online Checkweigher",
                link: "",
              },
              {
                img: staticCheckweigher,
                title: "Static Checkweigher",
                link: "",
              },
            ].map((gridItem) => (
              <div key={gridItem.title} className="relative mx-auto">
                <div className="absolute top-0 left-0 px-6 py-7.5">
                  <h5 className="text-[#1D1D1F] font-semibold text-[22px] leading-[34px] mb-2.5">
                    {gridItem.title}
                  </h5>
                  <CustomButton>Learn more</CustomButton>
                </div>
                <img className="bg-white px-2.5 py-3.75" src={gridItem.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CloudFeaturesSection = () => {
  return (
    <div>
      <div className="bg-[#07080A] py-25 relative">
        <img
          src={blueGrid}
          className="lg:h-auto sm:h-30 h-15 absolute bottom-10"
        />
        <img
          src={redGrid}
          className="lg:h-auto sm:h-30 h-15 absolute top-10 right-0"
        />
        <div className="max-w-5xl mx-auto px-4 w-full">
          <img src={cloudSection} alt="" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 w-full py-25">
        <div className="shadow-[0px_13px_32px_5px_#00000026] flex flex-col-reverse md:flex-row p-9">
          <div className="flex justify-between flex-col w-full">
            <div className="flex flex-col gap-4">
              <IconText text="Automotive IoT" color="red" />
              <h3 className="text-[#1D1D1F] text-3xl md:text-[38px] font-semibold">
                Nex-Fleet-One
              </h3>
              <p className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
                Enhance the safety, performance, and efficiency of your
                automotive operations with Nex-Fleet-One – your intelligent
                fleet monitoring and management solution.
              </p>
            </div>
            <div className="mt-4">
              <CustomButton>Learn More</CustomButton>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-full">
            <img src={dumperDashboard} alt="" />
          </div>
        </div>
        <div className="mt-25">
          <div>
            <h4 className="text-[#1D1D1F] font-semibold text-[38px] leading-[48px]">
              Cloud Application Access
            </h4>
            <p className="text-[#6A6A6A] max-w-[467px] font-medium text-lg leading-[28px] mt-[22px]">
              Empower users and managers to interact with your weighing systems
              via secure, intuitive cloud apps:
            </p>
          </div>
          <div className="mt-[25px]">
            <ul className="grid md:grid-cols-2 gap-x-[174px] gap-y-4">
              {[
                {
                  heading: "Web & Mobile Access",
                  description:
                    "Access dashboards, reports, and live data from any browser or mobile app — compatible across platforms (Android/iOS/Desktop).",
                },
                {
                  heading: "Live Monitoring Dashboard",
                  description:
                    "Visualize equipment performance, weight trends, and material movement with customizable widgets and real-time data charts.",
                },
                {
                  heading: "Role-Based Access Control",
                  description:
                    "Define permissions for operators, supervisors, managers, and clients — ensuring the right access for the right people.",
                },
                {
                  heading: "Instant Alerts & Notifications",
                  description:
                    "SMS, email, or in-app alerts for exceptions, overloads, underfills, or missed schedules.",
                },
                {
                  heading: "Device Health & Diagnostic Tools",
                  description:
                    "View system uptime, error logs, firmware versions, and perform remote diagnostics or updates directly from the cloud.",
                },
                {
                  heading: "Offline Sync & Data Recovery",
                  description:
                    "Temporary offline data is automatically synchronized once connectivity is restored — ensuring no data",
                },
                {
                  heading: "Downloadable Reports & Logs",
                  description:
                    "Export data in PDF, Excel, or CSV formats for audits, MIS, and offline records.",
                },
              ].map((cloudFeatures) => (
                <li className="flex relative border p-6 rounded-lg shadow-[0px_13px_32px_5px_#00000026] gap-3">
                  <img className="size-6" src={ArrowIcon} />

                  <div className="font-medium">
                    <h4 className="text-[#1D1D1F] text-lg">
                      {cloudFeatures.heading}
                    </h4>
                    <p className="text-[#6A6A6A] mt-2">
                      {cloudFeatures.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panther;
