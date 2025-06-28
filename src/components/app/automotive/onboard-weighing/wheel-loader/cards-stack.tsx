import dumperDashboard from "@/assets/onboard-weighing/dumper/dumper-dashboard.png";
import CustomButton from "@/components/app/custom-button";
import IconText from "@/components/app/icon-text";

const CardsStack = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-5xl mx-4 w-full">
        <div className="shadow-[0px_13px_32px_5px_#00000026] flex flex-col-reverse md:flex-row p-9">
          <div className="flex justify-between flex-col w-full">
            <div className="flex flex-col gap-4">
              <IconText text="Automotive IoT" color="red" />
              <h3 className="text-[#1D1D1F] text-3xl md:text-[38px] font-semibold">
                Nex-Fleet-One
              </h3>
              <p className="text-[#6A6A6A] font-medium text-lg leading-[28px]">
                Enhance the safety, performance, and efficiency of your
                automotive operations with Nex-Fleet-One – your intelligent
                fleet monitoring and management solution.
              </p>
            </div>
            <div className="mt-4">
              <CustomButton>Learn More</CustomButton>
            </div>
          </div>
          <div className="bg-[#F7F7F7] w-full">
            <img src={dumperDashboard} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-[#1d1d1f] text-center relative z-2 py-30">
          <h2 className="sm:text-[38px] font-semibold sm:leading-[48px] max-w-[850px] text-3xl z-1 pb-7">
            Weigh on the Go and optimize your mining efficiency like never
            before!
          </h2>
          <h6 className="leading-[28px] max-w-[663px] text-lg z-1">
            Introducing Wheel Loader – the ultimate solution for monitoring your
            Wheel Loader’s payload, optimizing load cycles, and improving
            overall productivity. With real-time weighing, instant data access,
            and comprehensive reporting, Payload DT ensures accurate loading,
            better fleet coordination, and smarter decision-making in mining
            operations.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CardsStack;
