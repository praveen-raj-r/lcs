import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

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

export default GridSection;
