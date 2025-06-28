import CustomButton from "@/components/app/custom-button";
import gridLines from "@/assets/onboard-weighing/grid-lines.png";
import tiltSwitch from "@/assets/safety-critical-sensors/tiltswitch/tiltswitch-bg.png";
import IconText from "@/components/app/icon-text";

const HeroSection = () => {
  return (
    <div>
      <div className="pt-[64px] flex justify-center relative">
        <div className="absolute right-10 z-0 -bottom-100 md:bottom-0 md:rotate-0 rotate-45">
          <img src={gridLines} />
        </div>
        <div className="mt-10 max-w-5xl w-full mx-4 relative z-1">
          <div className="lg:w-120 xl:w-150 space-y-[40px]">
            <IconText text="Tilt Switch" color="red" />
            <h3 className="text-3xl sm:text-5xl xl:text-[56px] xl:leading-[68px] font-semibold text-[#1D1D1F]">
              Navigating Precision and Safety with Tilt Switch solutions
            </h3>
            <h6 className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              Elevate safety and accuracy with our Dual Axis Tilt Switch.
              Experience reliable tilt sensing for a wide range of applications.
              Our Dual Axis Tilt Switch is designed to monitor angular position
              and detect unsafe tilt conditions with exceptional precision. It’s
              an essential component for enhancing safety, stability, and
              control in mobile machinery, industrial equipment, and structural
              monitoring applications.
            </h6>
            <CustomButton>Request a quote</CustomButton>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center h-full z-1 px-4">
        <img
          className="absolute right-10 top-5 md:-top-20 lg:-top-80 h-40 md:h-65 lg:h-70 xl:h-80"
          src={tiltSwitch}
        />
      </div>
    </div>
  );
};

export default HeroSection;
