import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";
const HeroSection = () => {
  return (
    <div>
      <div className="pt-[64px] flex justify-center relative">
        <div className="absolute right-10 -bottom-100 md:bottom-0 md:rotate-0 rotate-45">
          <img src="/onboard-weighing/dumper/grid-lines.png" alt="" />
        </div>
        <div className="mt-10 max-w-5xl w-full mx-4 relative">
          <div className="lg:w-120 xl:w-150 space-y-[40px]">
                      <IconText color="red" text="Tower Testing" />
            <h3 className="text-3xl sm:text-5xl xl:text-[56px] xl:leading-[68px] font-semibold text-[#1D1D1F]">
              Transmission Tower Testing System
            </h3>
            <h6 className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              Tower Tester is an Integration of Distributed Controls
              System(DCS), SCADA PC, Loadcell Signal conditioner (62CH) panel,
              VFD panel to drive winches (62CH). It will used to test the
              balancing capacity of transmission towers. Our TTS is suitable for
              Tower manufacturer’s in the world.
            </h6>
            <CustomButton>Request a quote</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
