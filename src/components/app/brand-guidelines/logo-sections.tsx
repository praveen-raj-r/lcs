import { cn } from "@/lib/utils";
import lcsLogo from "@/assets/lcs-logo.svg";
const LogoSections = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="max-w-5xl mx-4 w-full">
        <div className="flex md:flex-row flex-col gap-10 justify-between">
          <div className="w-full">
            <h3 className="text-[30px] sm:text-[40px] font-medium text-[#CC0000]">
              Logos
            </h3>
            <p className="text-[20px] font-normal leading-[24px]">
              Our brand consists of a simple, geometric but modern wordmark with
              diagonal points that represent growth propelled.
            </p>
          </div>
          <div className="w-full flex md:justify-end justify-center">
            <div className="grid grid-cols-2 gap-1 aspect-square size-65 min-[400px]:size-70 content-center md:size-96">
              {[
                "bg-[#1D1D1F]",
                "bg-[#D90429]",
                "bg-[#0792B4]",
                "bg-[#FFF1D0]",
              ].map((color) => (
                <div
                  key={color}
                  className={cn(
                    "size-full aspect-square rounded-lg flex justify-center items-center",
                    color
                  )}
                >
                  <img src={lcsLogo} className="h-10 md:h-15" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSections;
