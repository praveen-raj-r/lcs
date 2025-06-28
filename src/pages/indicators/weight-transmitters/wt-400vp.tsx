/* eslint-disable @typescript-eslint/no-explicit-any */
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import IconText from "@/components/app/icon-text";
import PartnersScroll from "@/components/app/partners-scroll";
import wtImgSpecs from "@/assets/indicators/weight-transmitter-specs.png";
import wtImg from "@/assets/indicators/wt-400vp/weight-transmitter.png";
import wtImgGradient from "@/assets/indicators/wt-400vp/wt-400vp-gradient.png";
import wtCard from "@/assets/indicators/wt-card.png";
import CustomButton from "@/components/app/custom-button";
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
} from "@/components/ui/kibo-ui/video-player";
import Video from "@/assets/videos/wt-50n.mp4";
import heroBg from "@/assets/indicators/grid.png";
import da1 from "@/assets/indicators/wt-400vp/da-1.png";
import da2 from "@/assets/indicators/wt-400vp/da-2.png";
import da3 from "@/assets/indicators/wt-400vp/da-3.png";
import da4 from "@/assets/indicators/wt-400vp/da-4.png";
import da5 from "@/assets/indicators/wt-400vp/da-5.png";
import da6 from "@/assets/indicators/wt-400vp/da-6.png";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const WT400VP = () => {
  return (
    <div className="relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <SpecsSection />
      <BlackSection />
      <OverviewSection />
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div>
      <div className="bg-repeat-x relative">
        <img src={heroBg} className="absolute top-0 w-full h-[50%] z-0" />
        <div
          className={cn(
            "py-5 md:py-24 pb-40 md:pb-50 mx-2 rounded-b-2xl flex justify-center bg-[radial-gradient(150.19%_150.19%_at_48.9%_-6.21%,#FFFFFF_0%,#FFFFFF_28.85%,#FFF1D0_52.88%,#0792B4_82.69%)]"
          )}
        >
          <div className="flex md:flex-row flex-col items-center gap-3 relative w-full max-w-5xl mx-auto px-4">
            <div className="flex flex-col gap-5 max-w-[565px] w-full">
              <IconText color="blue" text="Transmitter" />

              <div className="font-semibold text-[#1d1d1f] lg:text-[56px] lg:leading-[68px] md:text-5xl text-3xl">
                <h2>Weight</h2>
                <h2>Transmitters - 400VP</h2>
              </div>
              <p className="max-w-[449px] w-full text-[#6A6A6A] text-lg font-medium">
                Accurate data transmission in real time, precise monitoring and
                control
              </p>
              <div>
                <CustomButton background="#0792B4">
                  Request a quote
                </CustomButton>
              </div>
            </div>
            <div>
              <img src={wtImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto px-4 -mt-30 relative">
        <VideoPlayer className="overflow-hidden rounded-4xl border w-full">
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
    </div>
  );
};

const SpecsSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 w-full">
      <div className="py-10 md:py-30">
        <div className="space-y-6">
          <IconText color="blue" text="Industrial" />
          <h3 className="text-[#1D1D1F] font-semibold text-[38px] leading-[48px]">
            Weight Transmitters
          </h3>
          <p className="text-[#6A6A6A] font-medium text-lg max-w-[413px]">
            Ensure efficient load management with our high accuracy Weight
            Transmitters for real-time weight monitoring.
          </p>
        </div>

        <img src={wtImgSpecs} className="mt-10" />
      </div>
    </div>
  );
};

const firstGridItems = [
  { description: "400\n samples/sec", title: "Conversion Rate" },
  { description: "6 Digit LED \n Display", title: "±199999" },
  {
    description: "Max upto 8 \n (350 Ω; 5VDC)",
    title: "Loadcells",
  },
];

const secondGridItems = [
  { description: "32-bit, ADC", title: "A/D Convertor" },
  { description: "24VDC / 2 A", title: "Power Supply" },
];

const BlackSection = () => {
  return (
    <div className="bg-black text-center text-white">
      <div className="max-w-5xl mx-auto px-4 w-full py-10 space-y-10">
        <h3 className="font-semibold text-[38px] leading-[48px]">
          Weight Transmitters
        </h3>
        <p className="text-[#9C9C9D] font-medium mx-auto max-w-[800px]">
          Deliver precise weight data by converting load cell signals ensuring
          accurate load monitoring, efficient load distribution, and seamless
          integration with onboard displays, controllers, PLCs, and data
          systems. Designed for rugged industrial environments, they support
          smarter decision-making and enhanced operational safety.
        </p>
        <img src={wtImgGradient} className="mx-auto" />
        <div className="space-y-17">
          <div className="grid md:grid-cols-3 gap-10">
            {firstGridItems.map((grid) => (
              <GridItem
                key={`${grid.description}${grid.title}`}
                gridItem={grid}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-2 mx-auto gap-10">
            {secondGridItems.map((grid) => (
              <GridItem
                key={`${grid.description}${grid.title}`}
                gridItem={grid}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridItem = ({ gridItem }: any) => {
  return (
    <div>
      <div className="bg-clip-text font-semibold text-[36px] text-transparent bg-[linear-gradient(90deg,#0792B4_0%,#FFF1D0_100%)]">
        {gridItem.description.split("\n").map((text: any) => (
          <div key={text}>{text}</div>
        ))}
      </div>
      <p className="text-[#9C9C9D] text-lg font-medium">{gridItem.title}</p>
    </div>
  );
};

const overviewCards = [
  {
    title: "WT-400VP-DA",
    fullName: "[Digital - Analog Weight Transmitter]",
    img: wtCard,
    features: [
      {
        img: da1,
        value: "32bit",
        label: "A/D Converter",
      },
      {
        img: da2,
        value: "400",
        label: "samples / sec",
      },
      {
        img: da3,
        value: "RS485/ RS232",
        label: "Communication",
      },
      {
        img: da4,
        value: "MODBUS / ASCII",
        label: "Protocols",
      },
      {
        img: da5,
        value: "24V DC / 2A",
        label: "Voltage",
      },
      {
        img: da6,
        value: "6 Digit",
        label: "Display",
      },
    ],
    specifications: [
      {
        label: "Analog Outputs :",
        value:
          "0-5V/ 0-10V/ 1-5V/ 2-10V/ ± 5V/ ± 10V/ 0-20mA/ 4-20mA (16 bit) ",
      },
      { label: "Communication", value: "RS485 (Half Duplex) / RS232 Port" },
      {
        label: "Protocols",
        value: "LCS REQUEST/ LCS DUMP/ MODBUS RTU / MODBUS TCP/ ASCII Protocol",
      },
      { label: "Class / Division", value: "III / 1 in 10000" },
      { label: "Display Range", value: "±199999 ( 6 Digit )" },
      { label: "Conversion Speed", value: "38.4kHz" },
      { label: "A/D Converter", value: "32bit" },
      { label: "Operating Voltage", value: "24V DC / 2A" },
      { label: "Number of Loadcell", value: "up to 8 (350 Ω)" },
      { label: "Loadcell Supply", value: "5VDC / 100 mA " },
      { label: "Mounting type", value: "Panel Mount" },
    ],
  },
  {
    title: "WT-400VP-DWIFI",
    fullName: "[Digital - WIFI Weight Transmitter]",
    img: wtCard,
    features: [
      {
        img: da1,
        value: "32bit",
        label: "A/D Converter",
      },
      {
        img: da2,
        value: "400",
        label: "samples / sec",
      },
      {
        img: da3,
        value: "WIFI / RS485 / RS232",
        label: "Communication",
      },
      {
        img: da4,
        value: "MODBUS / ASCII",
        label: "Protocols",
      },
      {
        img: da5,
        value: "24V DC / 2A",
        label: "Voltage",
      },
      {
        img: da6,
        value: "6 Digit",
        label: "Display",
      },
    ],
    specifications: [
      {
        label: "Communication",
        value: "WIFI / RS485 (Half Duplex) / RS232Ports",
      },
      {
        label: "Protocols",
        value: "LCS DUMP/ MODBUS RTU / MODBUS TCP / ASCII Protocol",
      },
      { label: "Class / Division", value: "III / 1 in 10000" },
      { label: "Display Range", value: "±199999 ( 6 Digit )" },
      { label: "Conversion Speed", value: "38.4kHz" },
      { label: "A/D Converter", value: "32bit" },
      { label: "Operating Voltage", value: "24V DC / 2A" },
      { label: "Number of Loadcell", value: "up to 8 (350 Ω)" },
      { label: "Loadcell Supply", value: "5VDC / 100 mA " },
      { label: "Mounting type", value: "Panel Mount" },
    ],
  },
  {
    title: "WT-400VP-ETH",
    fullName: "[Digital - Ethernet Weight Transmitter]",
    img: wtCard,
    features: [
      {
        img: da1,
        value: "32bit",
        label: "A/D Converter",
      },
      {
        img: da2,
        value: "400",
        label: "samples / sec",
      },
      {
        img: da3,
        value: "RJ45",
        label: "Communication",
      },
      {
        img: da4,
        value: "MODBUS / ASCII",
        label: "Protocols",
      },
      {
        img: da5,
        value: "24V DC / 2A",
        label: "Voltage",
      },
      {
        img: da6,
        value: "6 Digit",
        label: "Display",
      },
    ],
    specifications: [
      { label: "Communication", value: "Ethenet ( RJ45 )" },
      {
        label: "Protocols",
        value: "LCS DUMP/ MODBUS RTU/ MODBUS TCP / ASCII Protocol",
      },
      { label: "Class / Division", value: "III / 1 in 10000" },
      { label: "Display Range", value: "±199999 ( 6 Digit )" },
      { label: "Conversion Speed", value: "38.4kHz" },
      { label: "A/D Converter", value: "32bit" },
      { label: "Operating Voltage", value: "24V DC / 2A" },
      { label: "Number of Loadcell", value: "up to 8 (350 Ω)" },
      { label: "Loadcell Supply", value: "5VDC / 100 mA " },
      { label: "Mounting type", value: "Panel Mount" },
    ],
  },
];

const OverviewSection = () => {
  return (
    <div className="max-w-5xl py-10 md:py-30 w-full mx-auto px-4">
      <div className="space-y-6">
        <IconText color="blue" text="Industrial" />
        <h3 className="text-[#1D1D1F] font-semibold text-[38px] leading-[48px]">
          Weight Transmitters
        </h3>
        <p className="text-[#6A6A6A] font-medium text-lg max-w-[480px]">
          Accurate Conversion. Reliable Control. Convert load cell signals into
          precise, actionable data with our rugged weight transmitters. Built
          for tough environments, they ensure real-time accuracy and seamless
          integration with your control systems.
        </p>
      </div>
      <div className="flex flex-col gap-25 mt-10">
        {overviewCards.map((overviewCard) => (
          <OverviewSectionCard
            key={`${overviewCard.title}-overviewCards`}
            card={overviewCard}
          />
        ))}
      </div>
    </div>
  );
};

const OverviewSectionCard = ({ card }: any) => {
  return (
    <div className="shadow-[0px_13px_32px_5px_#00000026] bg-[#F8F7F5] text-[#1D1D1F]">
      <div className="flex lg:flex-row flex-col justify-between">
        <img src={card.img} className="bg-white p-4 mx-auto" />

        <div className="w-full flex flex-col gap-4 p-4">
          <div>
            <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-3 font-semibold leading-[40px] text-[28px]">
              <h5 className="pl-4 border-l-3 border-[#0792B4]">{card.title}</h5>
              <div>
                <CustomButton background="#0792B4">Legacy</CustomButton>
              </div>
            </div>
            <h6 className="pl-4 font-semibold leading-[34px] text-[22px] mt-[15px]">
              {card.fullName}
            </h6>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-[13px] gap-y-[19px]">
            {card.features.map((feature: any) => {
              return (
                <div
                  key={`${feature.img}+${feature.label}+${feature.value}`}
                  className="p-3 border border-[#B4B4B4] rounded-[10px] flex flex-col gap-[5px] items-center justify-center"
                >
                  <img src={feature.img} />
                  <div className="text-center">
                    <h5 className="bg-clip-text text-transparent font-medium text-[15px] leading-[24px] bg-[linear-gradient(91.09deg,#D90429_31.58%,#0792B4_68.07%)]">
                      {feature.value}
                    </h5>
                    <h6 className="font-medium text-[15px] leading-[24px]">
                      {feature.label}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="bg-white">
          <h4 className="md:pt-[35px] md:pl-[29px] font-semibold text-[26px] leading-[32px] p-2">
            Specification :
          </h4>
          <div className="mx-2 md:mx-[29px] pb-[35px]">
            <Table className="md:mt-[35px] border">
              <TableBody>
                {card.specifications.map((spec: any, idx: any) => {
                  return (
                    <TableRow
                      key={`${card.title}-${spec.label}-${spec.value}-${card.fullName}-${card.img}-${idx}`}
                      className="even:bg-[#fffbf4] text-[#6A6A6A]"
                    >
                      <TableCell className="sm:text-lg sm:leading-[28px] font-semibold md:py-4 text-sm text-black">
                        {spec.label} :
                      </TableCell>

                      <TableCell className="text-left w-full sm:text-lg sm:leading-[28px] font-medium text-sm">
                        <span className="text-wrap"> {spec.value}</span>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WT400VP;
