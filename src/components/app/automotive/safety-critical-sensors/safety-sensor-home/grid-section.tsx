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
          Alert
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          Visual and audio indication is ON when the vehicle angle is more than
          set point during tipping to alert the operator
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
          Safety
        </h1>
        <p className="text-center max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
          The output is used to stop tipping of the vehicle for safety purpose.
        </p>
      </div>

      <div className="border-b px-2 h-full flex justify-center items-center">
        <h1 className="text-center text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2">
          Dual Axis Angel Measurement
        </h1>
      </div>
    </div>
  );
};

export default GridSection;
