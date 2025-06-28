import inclinometer from "@/assets/safety-critical-sensors/inclinometer/inclino-meter.png";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
const GridSection = () => {
  return (
    <div className="max-w-5xl w-full mx-auto px-4">
      <img src={inclinometer} className="w-full py-10" />
      <div className="border-y pb-30 [--border:#E5E5E5] flex">
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
};
const SectionOne = () => {
  return (
    <div className="w-full">
      <div className="border-b px-2 pt-6 pb-3">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          0.5 - 4.5 V
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-[26px] font-semibold md:leading-[32px] text-[#6a6a6a]">
          Voltage
        </p>
        <p className="text-right font-medium text-[#6a6a6a] mr-3">
          Analog Model
        </p>
      </div>
      <div className="border-b px-2 pt-6 pb-3">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          4 - 20 mA
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-[26px] font-semibold md:leading-[32px] text-[#6a6a6a]">
          current
        </p>
        <p className="text-right font-medium text-[#6a6a6a] mr-3">
          Analog Model
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
      <div className="relative flex items-center justify-center overflow-hidden h-20">
        <GridPattern
          x={-1}
          y={-1}
          className={cn(
            "h-full w-full [mask-image:linear-gradient(to_bottom_right,white,#000,#000)] "
          )}
        />
      </div>
      <div className="border-b px-2 pt-6 pb-3">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          CAN (SAEJ1939)
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-[26px] font-semibold md:leading-[32px] text-[#6a6a6a]">
          Standard
        </p>{" "}
        <p className="text-right font-medium text-[#6a6a6a] mr-3">
          Digital Model
        </p>
      </div>
      <div className="px-2 pt-6 pb-3">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          WIFI
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-[26px] font-semibold md:leading-[32px] text-[#6a6a6a]">
          Remote Monitoring & Dynamic Configuration
        </p>{" "}
        <p className="text-right font-medium text-[#6a6a6a] mr-3">
          Digital Model
        </p>
      </div>
    </div>
  );
};
export default GridSection;
