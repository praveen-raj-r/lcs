/* eslint-disable @typescript-eslint/no-explicit-any */
import IconText from "@/components/app/icon-text";
import dashboards from "@/assets/panther/panther-dashboards.png";

import heroBg from "@/assets/panther/hero-bg.png";
const HeroSection = () => {
  return (
    <Container>
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          <div className="text-[#1D1D1F] w-full">
            <IconText color="red" text="Indicators" />
            <h4 className="md:text-[56px] md:leading-[68px] font-semibold mt-4 text-3xl">
              Panther <br />
              WC1000PR
            </h4>
            <p className="text-[26px] leading-[32px] mt-5 font-semibold">
              Fast and powerful, like the Panther
            </p>
            <p className="text-lg font-medium leading-[28px] mt-4">
              The Panther Industrial Weighing Controller delivers high-speed
              performance and precision for critical industrial applications.
              Designed for accuracy, real-time control, and seamless
              integration, it ensures optimal performance even in the most
              demanding environments.
            </p>
          </div>
          <div className="w-full">
            <img src={dashboards} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = ({ children }: any) => {
  return (
    <div>
      <div
        className="md:block hidden bg-[#F8F7F5] py-10 md:py-[75px] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {children}
      </div>
      <div className="block md:hidden bg-[#F8F7F5] bg-no-repeat bg-right">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
