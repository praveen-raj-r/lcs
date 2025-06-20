/* eslint-disable @typescript-eslint/no-explicit-any */
import { Separator } from "@/components/ui/separator";
import arrowRight from "@/assets/arrow-right.png";

const wtData = [
  {
    title: "Data Conversion",
    content:
      "Weight transmitters are devices that convert analog or digital weight signals from load cells or sensors into standardized electronic signals, there are different types of Analog units are available Eg. Analog Outputs: 0-5V / 0-10V, 1-5V / 2-10V, ± 5V, ± 10V, 0-20mA, 4-20mA.& The Digital Communications are available as RS485 (Half Duplex) / RS232 Ports & Ethernet with Protocols: LCS DUMP, MODBUS RTU, ASCII Protocol",
  },
  {
    title: "Precision Measurement",
    content:
      "Transmitters ensure precise weight measurement crucial for industry, logistics, and quality control, providing consistent, reliable data.",
  },
  {
    title: "Communication and Control",
    content:
      "Weight transmitters with RS232, RS-485, Modbus, or Ethernet interfaces enable real-time data transmission and remote system management, , boosting industrial efficiency",
  },
  {
    title: "Enclosure type",
    content: "Panel mount and Din Rail mount available",
  },
];

const wiData = [
  {
    title: "Digital Input and Output interface",
    content:
      "The Weight indicators are with Digital Input and Digital Output (2x & 3x) are widely used for the application-based requirement in the process industry. Eg: The Weigh indicators are used for the Batching, Bagging, Tank weighing, Loss in Weight batching, Checkweighing and Process Monitoring in weighing based industrial applications.",
  },
  {
    title: "Data Conversion",
    content:
      "Weight transmitters are devices that convert analog or digital weight signals from load cells or sensors into standardized electronic signals, there are different types of Analog units are available Eg. Analog Outputs: 0-5V / 0-10V, 1-5V / 2-10V, ± 5V, ± 10V, 0-20mA, 4-20mA. & The Digital Communications are available as RS485 (Half Duplex) / RS232 Ports & Ethernet with Protocols: LCS DUMP, MODBUS RTU, ASCII Protocol",
  },
  {
    title: "Precision Measurement",
    content:
      "Transmitters ensure precise weight measurement crucial for industry, logistics, and quality control, providing consistent, reliable data.",
  },
  {
    title: "Communication and Control",
    content:
      "Weight transmitters with RS232, RS-485, Modbus, or Ethernet interfaces enable real-time data transmission and remote system management , boosting industrial efficiency",
  },
  {
    title: "Enclosure type",
    content: "Panel mount and Din Rail mount available",
  },
];

const DifferenceSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 pt-10 rounded-lg">
      <Container data={wtData} title="Weight Transmitter" />
      <Container data={wiData} title="Weight Indicator" />
    </div>
  );
};

const Container = ({ title, data }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-[0px_13px_32px_0px_#00000026]">
      <div className="flex justify-center items-center py-6 sm:py-10">
        <h3 className="text-2xl font-semibold">
          <span className="text-[#D90429]">{title}</span>
          <Separator
            orientation="horizontal"
            className="!w-[80%] mt-2 bg-black/40 mx-auto"
          />
        </h3>
      </div>
      <ul className="p-5 flex flex-col gap-3">
        {data.map((j: any) => {
          return (
            <li key={`${j.title}-${j.content}`} className="flex flex-col gap-3">
              <span className="flex gap-3 items-center">
                <span className="flex justify-center items-center">
                  <img className="size-6" src={arrowRight} />
                </span>
                <span className="text-2xl font-semibold text-[#1D1D1F]">
                  {j.title}
                </span>
              </span>
              <span className="pl-10 sm:text-lg sm:leading-[28px] font-semibold text-[#6A6A6A]">
                {j.content}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DifferenceSection;
