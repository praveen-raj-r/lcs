import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";
import gridLines from "@/assets/onboard-weighing/grid-lines.png";
import tipperImg from "@/assets/onboard-weighing/tipper/tipper.png";

const HeroSection = () => {
  return (
    <div>
      <div className="pt-[64px] flex justify-center relative">
        <div className="absolute right-10 -bottom-100 md:bottom-0 md:rotate-0 rotate-45">
          <img src={gridLines} />
        </div>
        <div className="mt-10 max-w-5xl w-full mx-4 relative">
          <div className="lg:w-120 xl:w-150 space-y-[40px]">
           <IconText text="Tipper" color="red" />
            <h3 className="text-3xl sm:text-5xl xl:text-[56px] xl:leading-[68px] font-semibold text-[#1D1D1F]">
              Enhance Efficiency with Precise Payload Management for Tipper
              Trucks
            </h3>
            <h6 className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              Efficiently manage load distribution and maximize productivity
              with our advanced tipper onboard weighing system, designed for
              seamless integration into your operations
            </h6>
            <CustomButton>Request a quote</CustomButton>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center h-full z-3 px-4">
        <img
          className="absolute right-10 md:-top-10 min-[1024px]:!-top-100 xl:-top-120 2xl:h-auto h-60 sm:h-75 min-[1000px]:h-90 lg:h-100"
          src={tipperImg}
        />
      </div>
    </div>
  );
};

export default HeroSection;
