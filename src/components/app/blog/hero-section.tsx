import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full justify-center items-center flex bg-black text-white">
      <div className="max-w-5xl w-full pt-20 pb-40">
        <div className="z-1 flex my-10 items-start justify-center">
          <div className="z-1 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full border text-xl text-white transition-all ease-in hover:cursor-pointer border-white/5 bg-neutral-800 hover:bg-neutral-700"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
                <span>✨ New Blogs</span>
                <ArrowDownIcon className="ml-1 size-4 transition-transform duration-200 ease-in-out group-hover:translate-y-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
        </div>
        <h1 className="mb-8 text-[30px] md:text-[60px] font-medium text-center">
          Coin vs QR Code Height Weight Automatic BMI Machines
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
