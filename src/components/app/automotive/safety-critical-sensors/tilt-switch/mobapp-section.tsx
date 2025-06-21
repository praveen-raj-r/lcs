import mobileImg from "@/assets/safety-critical-sensors/tiltswitch/mobile-app.png";

const AdvancedTiltSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-[#BFBFBF] md:text-lg space-y-6">
          <h2 className="text-3xl md:text-[38px] md:leading-[48px] font-medium text-[#F8F7F5]">
            Tilt witch had a specific Mobile application
          </h2>
          <p>
            Manage payload distribution and improve productivity with our
            Advanced Dumper Onboard Weighing system, designed for reliability
            and accuracy.
          </p>
          <p>
            In order to communicate efficiently with the operator and maintain a
            government record, our onboard weighing system provides live data
            points like TareLoad, Target Load, Cumulation weight used, Timer
            values etc.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="shadow-lg">
            <img
              src={mobileImg}
              alt="Onboard Weighing System"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTiltSection;
