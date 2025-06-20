/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/app/custom-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileLock2 } from "lucide-react";

const wtFiles = [
  {
    fileName: "WT-400VP-DA",
    desc: "Digital - Analog Weight Transmitter Manual",
  },
  {
    fileName: "WT-400VP-D",
    desc: "Digital Weight Transmitter Manual",
  },
  {
    fileName: "WT-400VP-DWIFI",
    desc: "Digital - WIFI Weight Transmitter Manual",
  },
  {
    fileName: "WT-400VP-ETH",
    desc: "Digital - Ethernet Weight Transmitter Manual",
  },
  {
    fileName: "WT-50N-DA",
    desc: "Digital - Analog Weight Transmitter Manual",
  },
  {
    fileName: "WT-50N-ETH",
    desc: "Digital - Ethernet Weight Transmitter Manual",
  },
  {
    fileName: "WT-50NDIN-DA",
    desc: "Digital - Analog Weight Transmitter DIN Rail Mount Manual",
  },
  {
    fileName: "WT-10N-DA",
    desc: "Digital - Analog Weight Transmitter Manual",
  },
  {
    fileName: "WT-10N-ETH",
    desc: "Digital - Ethernet Weight Transmitter Manual",
  },
  {
    fileName: "WT-10NDIN-DA",
    desc: "Digital - Analog Weight Transmitter DIN Rail Mount Manual",
  },
];

const wiFiles = [
  {
    fileName: "WI-400VP-DA",
    desc: "Digital - Analog Weight Indicator Manual",
  },
  {
    fileName: "WI-400VP-D",
    desc: "Digital Weight Indicator Manual",
  },
  {
    fileName: "WI-400VP-DWIFI",
    desc: "Digital - WIFI Weight Indicator Manual",
  },
  {
    fileName: "WI-400VP-ETH",
    desc: "Digital - Ethernet Weight Indicator Manual",
  },
  {
    fileName: "WI-50N-DA",
    desc: "Digital - Analog Weight Indicator Manual",
  },
  {
    fileName: "WI-50N-ETH",
    desc: "Digital - Ethernet Weight Indicator Manual",
  },
  {
    fileName: "WI-50NDIN-DA",
    desc: "Digital - Analog Weight Indicator DIN Rail Mount Manual",
  },
  {
    fileName: "WI-10N-DA",
    desc: "Digital - Analog Weight Indicator Manual",
  },
  {
    fileName: "WI-10N-ETH",
    desc: "Digital - Ethernet Weight Indicator Manual",
  },
  {
    fileName: "WI-10NDIN-DA",
    desc: "Digital - Analog Weight Indicator DIN Rail Mount Manual",
  },
];

const TabsSection = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="max-w-5xl mx-4 w-full flex justify-center py-10">
        <div className="flex w-full flex-col gap-6">
          <Tabs defaultValue="Weight-Transmitter">
            <div className="flex justify-center mb-10">
              <TabsList className="">
                <CustomTrigger
                  label="Weight Transmitter"
                  value="Weight-Transmitter"
                />
                <CustomTrigger
                  label="Weight Indicator"
                  value="Weight-Indicator"
                />
              </TabsList>
            </div>

            <CustomTabContent value="Weight-Transmitter" files={wtFiles} />
            <CustomTabContent value="Weight-Indicator" files={wiFiles} />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

const CustomTrigger = ({ label, value }: any) => {
  return (
    <TabsTrigger
      className="data-[state=active]:bg-black data-[state=active]:text-white cursor-pointer"
      value={value}
    >
      {label}
    </TabsTrigger>
  );
};

const CustomTabContent = ({ value, files }: any) => {
  return (
    <TabsContent value={value}>
      <div className="grid grid-cols-2 place-items-baseline md:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-10">
        {files.map((file: any) => {
          return <File key={file.fileName} file={file} />;
        })}
      </div>
    </TabsContent>
  );
};
const File = ({ file }: any) => {
  return (
    <div className="flex flex-col gap-3 justify-between items-center h-full">
      <div className="flex flex-col justify-center text-center items-center max-w-[200px] gap-4">
        <FileLock2 strokeWidth={1} stroke="red" size={50} />
        <span className="sm:text-xl font-semibold">{file.fileName}</span>
        <span className="sm:text-base font-normal text-[#6A6A6A]">
          {file.desc}
        </span>
      </div>
      <a
        target="_blank"
        href="https://lcscon.myfreshworks.com/crm/sales/web_forms/3e5c17e1b1a4eb8159413c4d05874962c620de98bb622178745602ffbd834d94/form.html"
      >
        <CustomButton className="text-nowrap">Request Access</CustomButton>
      </a>
    </div>
  );
};
export default TabsSection;
