import Fourtydegree from "@/assets/onboard-weighing/home/40deg.png";

const FactsSection = () => {
  return (
    <div className="bg-[#FCE6EA] max-w-5xl w-full mx-auto px-4">
      <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-10 py-10 md:py-20">
        <img src={Fourtydegree} alt="" />

        <div>
          <h1 className="text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2 text-[#1d1d1f] mt-10 md:mt-0 md:pt-10 md:pb-6 md:px-4 md:w-[422px] mx-auto">
            -40°C
          </h1>
          <p className="max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
            System that is designed to operate in very cold environments and
            using high-quality materials and proper insulation can help ensure
            that the system will function properly even at
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-4 md:gap-10 py-10 md:py-20">
        <div>
          <h1 className="text-2xl md:text-[56px] font-semibold md:leading-[68px] mb-2 text-[#1d1d1f] mt-10 md:mt-0 md:pt-10 md:pb-6 md:px-4 md:w-[422px] mx-auto">
            +105°C
          </h1>
          <p className="max-w-[422px] mx-auto md:text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
            System that is designed to operate in very hot environments and
            using high-quality materials and proper insulation can help ensure
            that the system will function properly even at
          </p>
        </div>
        <img src={Fourtydegree} alt="" />
      </div>
    </div>
  );
};

export default FactsSection;
