import mobileApp from "@/assets/safety-critical-sensors/inclinometer/mobile-app.png";
const MobileAppSection = () => {
  return (
    <div
      className="bg-black pt-30 pb-20"
      style={{
        clipPath:
          "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 90% 40px, 10% 40px)",
      }}
    >
      <div className="flex max-w-5xl mx-auto px-4 w-full justify-around items-center">
        <div className="space-y-6">
          <h3 className="text-[#F8F7F5] font-semibold text-[38px] leading-[48px] max-w-[416px]">
            Inclinometer with Dedicated Mobile Application
          </h3>
          <div className="text-[#BFBFBF] text-lg leading-[28px] space-y-6 font-medium max-w-[413px]">
            <p>
              Enhance operational safety and ensure precise tilt monitoring with
              our advanced Inclinometer system, designed for accurate angle
              detection and real-time feedback in demanding environments.
            </p>
            <p>
              Equipped with a dedicated mobile application, the system enables
              operators to monitor live tilt data, receive safety alerts, and
              access tipping status directly from their mobile device — ensuring
              smarter and safer decision-making in the field.
            </p>
          </div>
        </div>
        <div>
          <img src={mobileApp} />
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
