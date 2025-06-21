import CustomButton from "@/components/app/custom-button";
import icon from "@/assets/blue-icon.png";
import heroBg from "@/assets/safety-critical-sensors/home/hero-bg.png";
import sensorsImages from "@/assets/safety-critical-sensors/home/safety-critical-sensors.png";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl w-full px-4 mx-auto md:-mb-30">
        <div className="text-lg items-center font-semibold leading-[28px] text-[#0792B4] pt-10 md:pt-20 flex justify-center gap-1">
          <img className="size-6" src={icon} />
          <span>Automotive</span>
        </div>
        <h3 className="text-center font-semibold md:text-[56px] md:leading-[68px] text-[#1D1D1F] mt-4 text-3xl">
          Safety Critical
          <br />
          Sensors
        </h3>
        <p className="text-center max-w-[422px] mx-auto text-lg font-medium leading-[28px] text-[#6A6A6A] mt-4">
          ensure precise angle measurement and monitoring in equipment,
          safeguarding and enhancing overall safety
        </p>

        <div className="flex sm:flex-row flex-col items-center justify-center mx-auto mt-10 gap-4 sm:gap-10">
          <CustomButton className="bg-[#0792B4] hover:bg-[#0792B4] text-white hover:text-white">
            Request a quote
          </CustomButton>
          <CustomButton className="bg-transparent hover:bg-transparent text-[#0792B4] hover:text-[#0792B4]">
            Download Brochure
          </CustomButton>
        </div>
      </div>
      <img src={heroBg} className="w-full mt-14" />
      <div className="max-w-5xl mx-auto px-4 pb-20 -mt-20">
        <img src={sensorsImages} className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
