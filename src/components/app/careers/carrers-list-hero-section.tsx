import CustomButton from "../custom-button";
import Design from "../design";

const CarrersListHeroSection = () => {
  return (
    <div>
      <div
        className=" sm:rotate-0 rotate-10 -mt-20 sm:mt-0 h-50 sm:h-30 w-full top-0 bg-no-repeat bg-cover z-1"
        style={{ backgroundImage: "url(/careers-bg.png)" }}
      ></div>
      <div className="w-full flex justify-center">
        <div className="max-w-5xl w-full mx-4">
          <div className="space-y-[30px] text-center py-10 flex flex-col items-center justify-center">
            <h1 className="max-w-[531px] font-semibold text-[#1d1d1f] text-4xl sm:text-[56px] sm:leading-[68px]">
              Build your future with us
            </h1>
            <p className="max-w-[442px] text-lg leading-[28px] text-[#6A6a6a] font-medium">
              Discover your potential and work on projects that create global
              impact with a world-class team of professionals
            </p>
            <CustomButton>See Open roles</CustomButton>
          </div>
          <div className="relative border-t w-full">
            <Design />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrersListHeroSection;
