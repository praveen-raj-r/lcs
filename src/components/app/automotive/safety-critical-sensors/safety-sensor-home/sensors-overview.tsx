import tiltSensor from "@/assets/safety-critical-sensors/home/tilt-switch-system.png";
import inclinometer from "@/assets/safety-critical-sensors/home/inclinometer.png";
import CustomButton from "@/components/app/custom-button";

const SensorsOverview = () => {
  return (
    <div className="bg-[#E6F4F7] py-20">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="flex w-full justify-between">
          {[
            {
              img: tiltSensor,
              title: "Tilt Switch System",
              description:
                "It can be used in static and harsh environments as factories, automotive or construction sites. The system provides an output when the vehicle angle is more than the set limit. The output is used to stop tipping of the vehicle for safety purpose.",
            },
            {
              img: inclinometer,
              title: "Angle Sensor/ Inclinometer",
              description:
                "Application, Platform Leveling, Truck and on-road vehicle cabin or tool leveling, Inclination dependent engine control",
            },
          ].map((sensor, index) => (
            <div key={index} className=" px-2 py-6">
              <div className="flex mb-4">
                <div className="p-4 w-full bg-white">
                  <img className="w-full" src={sensor.img} />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="p-4">
                  <h1 className="text-2xl md:text-[28px] font-semibold md:leading-[40px] mb-2">
                    {sensor.title}
                  </h1>
                  <p className="max-w-[422px] mx-auto text-lg font-medium md:leading-[28px] text-[#6a6a6a]">
                    {sensor.description}
                  </p>
                </div>
                <div className="flex items-center mt-4 gap-4">
                  <CustomButton className="text-white hover:text-white bg-[#0792B4] hover:bg-[#0792B4]">
                    Request a quote
                  </CustomButton>
                  <CustomButton className="text-[#0792B4] hover:text-[#0792B4] bg-transparent hover:bg-transparent">
                    Download brochure
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SensorsOverview;
