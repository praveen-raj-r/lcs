@/assets/red-icon.pngimport comparePageBG from "@/assets/compare-hero-bg.png";
import icon from "@/assets/icon.png";
import CustomButton from "@/components/app/custom-button";
import compareWtWi from "@/assets/compare-wt-wi.png";

const HeroSection = () => {
  return (
    <div className="bg-[#F8F7F5] overflow-hidden">
      <div className="w-full flex justify-center text-[#1D1D1F] relative">
        <div
          className="absolute lg:block hidden h-full w-full bg-no-repeat top-100 md:top-0 right-0 bg-right"
          style={{ backgroundImage: `url(${comparePageBG})` }}
        ></div>
        <div className="max-w-5xl w-full mx-4 py-20 flex flex-col lg:flex-row z-1 relative">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center gap-2.75">
              <div className="flex justify-center items-center">
                <img className="size-6" src={icon} />
              </div>
              <span className="font-medium text-lg leading-[28px] text-[#D90429]">
                Comparison
              </span>
            </div>
            <div className="font-semibold sm:text-[56px] sm:leading-[68px] text-3xl">
              <p>
                Weight Transmitters
                <br />
                vs
                <br />
                Weight Indicators
              </p>
            </div>
            <p className="max-w-[410px] text-[#6A6A6A] text-lg leading-[28px] font-medium">
              Compare weight transmitters and weight indicators for your
              industrial needs. Find the perfect solution for accurate weight
              measurement and monitoring.
            </p>
            <div className="flex flex-row gap-3 flex-wrap">
              <CustomButton>Request a quote</CustomButton>
              <CustomButton className="bg-white hover:bg-white hover:text-[#D90429] text-[#D90429]">
                Download Brochure
              </CustomButton>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={compareWtWi} className="xl:mr-[-200px] " />
          </div>
        </div>
      </div>
      <div className="bg-white w-[200%] h-40 -rotate-3 mt-[-40px] "></div>
    </div>
  );
};

export default HeroSection;
