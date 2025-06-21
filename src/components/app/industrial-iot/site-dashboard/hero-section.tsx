import CustomButton from "@/components/app/custom-button";
import icon from "@/assets/red-icon.png";
const HeroSection = () => {
  return (
    <div>
      <div className="pt-[64px] flex justify-center relative">
        <div className="absolute right-10 -bottom-100 md:bottom-0 md:rotate-0 rotate-45">
          <img src="/onboard-weighing/dumper/grid-lines.png" alt="" />
        </div>
        <div className="mt-10 max-w-5xl w-full mx-4 relative">
          <div className="lg:w-120 xl:w-150 space-y-[40px]">
            <div className="flex items-center gap-2.75">
              <div className="flex justify-center items-center">
                <img className="size-9" src={icon} alt="" />
              </div>
              <span className="font-medium text-[36px] leading-[36px] text-[#D90429]">
                SiteDashboard
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl xl:text-[56px] xl:leading-[68px] font-semibold text-[#1D1D1F]">
              Navigating Precision and Safety with Tilt Switch solutions
            </h3>
            <h6 className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              Elevate safety and accuracy with our Dual Axis Tilt Switch.
              Experience reliable tilt sensing for a wide range of applications
            </h6>
            <CustomButton>Request a quote</CustomButton>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center h-full z-3 px-4">
        <img
          className="absolute right-10 md:-top-30 min-[1024px]:!-top-100 xl:-top-120 2xl:h-auto h-60 sm:h-75 min-[1000px]:h-90 lg:h-100"
          src="/automotive/onboard-weighing/dumper/dumper.png"
        />
      </div>
    </div>
  );
};

export default HeroSection;
