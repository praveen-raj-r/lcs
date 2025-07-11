import CustomButton from "@/components/app/custom-button";
import wheelLoaderImg from "@/assets/onboard-weighing/wheel-loader/wheel-loader.png";
import gridLines from "@/assets/onboard-weighing/grid-lines.png";
import IconText from "@/components/app/icon-text";

const HeroSection = () => {
  return (
    <div>
      <div className="pt-[64px] flex justify-center relative">
        <div className="absolute right-10 -bottom-100 md:bottom-0 md:rotate-0 rotate-45">
          <img src={gridLines} />
        </div>
        <div className="mt-10 max-w-5xl w-full mx-4 relative">
          <div className="lg:w-100 xl:w-130 space-y-[40px]">
            <IconText text="Wheel Loader" color="red" />
            <h3 className="text-3xl sm:text-5xl xl:text-[56px] xl:leading-[68px] font-semibold text-[#1D1D1F]">
              Improve Loading and Unloading efficiency of your Wheel Loader
            </h3>
            <h6 className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              Loading and Unloading has never been more Easy and Efficient
              thanks to our advanced Wheel Loader Onboard Weighing system built
              for Safety and Productivity
            </h6>
            <CustomButton background="#0792B4">Request a quote</CustomButton>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center h-full z-3 px-4">
        <img
          className="absolute right-10 top-5 lg:-top-50 min-[1024px]:!-top-100 xl:-top-120 2xl:h-auto h-45 sm:h-75 min-[1000px]:h-90 lg:h-100"
          src={wheelLoaderImg}
        />
      </div>
    </div>
  );
};

export default HeroSection;
