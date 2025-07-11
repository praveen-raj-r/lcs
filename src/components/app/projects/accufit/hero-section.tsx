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
            <IconText color="red" text="Accu Fit" />
            <h3 className="text-3xl sm:text-5xl xl:text-[56px] xl:leading-[68px] font-semibold text-[#1D1D1F]">
              AccuFit Recruitment Scale
            </h3>
            <h6 className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
              Ensuring precise measurement and evaluation of body mass index for
              accurate fitness assessment in recruitment.
            </h6>
            <CustomButton>Request a quote</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
