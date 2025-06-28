/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import rightArrow from "@/assets/arrow-right.png";

const dualAxisData = [
  {
    title: "Measurement Ranges",
    description:
      "Offers ±25°, ±45°, and ±90° ranges for versatile angle measurement applications",
  },
  {
    title: "Output Modes",
    description:
      " Supports Current, Voltage, CAN, and WiFi output modes, ensuring compatibility with diverse systems",
  },
  {
    title: "Customization",
    description:
      "Wide range of models tailored to specific customer requirements, enhancing adaptability across industries",
  },
  {
    title: "Durability",
    description:
      "IP67 rating ensures resilience in static and harsh environments, guaranteeing reliability and longevity",
  },
  {
    title: "Advanced Sensing Methods",
    description:
      "Utilizes advanced techniques for improved accuracy in measuring roll and pitch angles",
  },
  {
    title: "Market Differentiation",
    description:
      "Comprehensive feature set, durability, and advanced sensing capabilities position it as a leading choice in angle measurement solutions",
  },
];

const singleAxisData = [
  {
    title: "CUB Pro",
    description:
      "A high-end Single Axis Inclinometer designed for Roll/Pitch angle measurements",
  },
  {
    title: "Measurement Capability",
    description: " Can accurately measure angles up to ±180° in a single axis",
  },
  {
    title: "Output Modes",
    description:
      "Offers multiple output options including Current, Voltage, CAN, and Wifi for enhanced flexibility",
  },
  {
    title: "Versatility",
    description:
      "Wide range of models available to cater to diverse customer requirements.",
  },
  {
    title: "Durability",
    description:
      "IP67-rated design ensures reliable performance in both static and harsh environmental conditions.",
  },
  {
    title: "Advanced Technology",
    description:
      "Incorporates advanced sensing methods and diverse output communication capabilities, setting a new standard in the market",
  },
];

const TabsSection = () => {
  const tabClass =
    "text-xl text-[#0792B4] rounded-full font-medium md:text-[26px] md:leading-[32px] data-[state=active]:bg-[#0792B4] data-[state=active]:text-white py-[21.33px] px-4 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#0792B4]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0792B4]";

  return (
    <div className="bg-[#E6F4F7] clip-path-for-inclinometer-section">
      <div className="mx-auto px-4 max-w-5xl w-full pt-10 md:pt-44 pb-20 md:mt-[-70px]">
        <Tabs className="space-y-6" defaultValue="single-axis">
          <TabsList className="mx-auto h-[69px] border border-[#D5D3D3] p-2.5 rounded-[40px] gap-2.5">
            {[
              { label: "Single Axis", value: "single-axis" },
              { label: "Dual Axis", value: "dual-axis" },
            ].map((tabTrigger) => (
              <TabsTrigger
                key={`${tabTrigger.label}-tabTrigger`}
                className={tabClass}
                value={tabTrigger.value}
              >
                {tabTrigger.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {[
            { list: singleAxisData, value: "single-axis" },
            { list: dualAxisData, value: "dual-axis" },
          ].map((tabContent) => (
            <TabsContent
              key={`${tabContent.value}-tabContent`}
              value={tabContent.value}
            >
              <ul className="flex flex-col gap-10">
                {tabContent.list.map((li) => (
                  <ListItem item={li} key={li.title + li.description} />
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

const ListItem = ({ item }: any) => {
  return (
    <li className="flex items-start gap-4 md:text-[20px] md:leading-[24px] text-[#333333] font-normal">
      <img className="size-6" src={rightArrow} />

      <span className="text-[#1D1D1F] font-medium">
        <span className="font-semibold">{item.title}</span> :{" "}
        <span>{item.description}</span>
      </span>
    </li>
  );
};

export default TabsSection;
