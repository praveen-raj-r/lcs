/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import bgImg from "@/assets/safety-critical-sensors/inclinometer/hero-section-bg.png";
import cubmini from "@/assets/safety-critical-sensors/inclinometer/cub-mini.png";
import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";

const Container = ({ children }: any) => {
  return (
    <div>
      <div
        className="md:block hidden bg-[#F8F7F5] bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {children}
      </div>
      <div className="block md:hidden bg-[#F8F7F5] bg-no-repeat bg-right">
        {children}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Container>
      <div className="max-w-5xl w-full mx-auto px-4 md:py-20 py-10">
        <div className="flex md:flex-row md:items-center md:justify-between flex-col gap-10">
          <div className="max-w-[563px] space-y-10">
            <IconText color="blue" text="Inclinometer" />
            <h4 className="md:text-[56px] md:leading-[68px] font-semibold text-3xl text-[#1D1D1F]">
              Precision in Every Angle
            </h4>
            <p className="text-[#6A6A6A] text-lg leading-[28px]">
              Unlock real-time tilt and angle monitoring with our advanced
              Inclinometer sensors — engineered for precision, reliability, and
              seamless integration across both industrial and mobile
              applications.
              <br />
              🞂 Enhance Control  🞂 Improve Safety  🞂 Maximize Efficiency
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton background="#0792B4">Request a quote</CustomButton>
              <CustomButton background="" color="#0792b4">
                Download brochure
              </CustomButton>
            </div>
          </div>
          <div className="flex justify-center size-full items-center">
            <img src={cubmini} className="size-full" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
