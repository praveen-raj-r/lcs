import heroBg from "@/assets/onboard-weighing/home/hero-bg.png";
import payloadVehicles from "@/assets/onboard-weighing/home/payload-vehicles.png";
import icon from "@/assets/icon.png";
import CustomButton from "@/components/app/custom-button";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="max-w-5xl w-full px-4 mx-auto md:-mb-30">
        <div className="text-lg items-center font-semibold leading-[28px] text-[#D90429] pt-10 md:pt-20 flex justify-center gap-1">
          <img className="size-6" src={icon} />
          <span>Automotive</span>
        </div>
        <h3 className="text-center font-semibold md:text-[56px] md:leading-[68px] text-[#1D1D1F] mt-4 text-3xl">
          Payload Monitoring
          <br />
          System
        </h3>
        <p className="text-center max-w-[422px] mx-auto text-lg font-medium leading-[28px] text-[#6A6A6A] mt-4">
          suggests the ruggedness and suitability for use in demanding
          industrial or harsh environments.
        </p>

        <div className="flex sm:flex-row flex-col items-center justify-center mx-auto mt-10 gap-4 sm:gap-10">
          <CustomButton>Request a quote</CustomButton>
          <CustomButton className="bg-transparent hover:bg-transparent text-[#D90429] hover:text-[#D90429]">
            Download Brochure
          </CustomButton>
        </div>
      </div>
      <img src={heroBg} className="w-full" />
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <img src={payloadVehicles} className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
