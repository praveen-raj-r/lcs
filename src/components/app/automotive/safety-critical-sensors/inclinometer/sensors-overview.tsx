import angleSensor from "@/assets/safety-critical-sensors/inclinometer/angle-sensor.png";
import mechanicalEnclosure from "@/assets/safety-critical-sensors/inclinometer/mechanical-enclosure.png";
import IconText from "@/components/app/icon-text";

const sensors = [
  {
    img: angleSensor,
    title: "Angle Sensor - x1",
    description:
      "Take control of safety and precision with our Angle Sensor. Safeguard equipment, monitor angles, and ensure Reliable Operation in critical applications",
  },
  {
    img: mechanicalEnclosure,
    title: "Mechanical Enclosure - x1",
    description:
      "Shield your angle sensor with our robust mechanical enclosure, designed for Precision and Durability. Engineered to protect and extend the lifespan of critical sensors in Challenging Environments",
  },
];

const SensorsOverview = () => {
  return (
    <div className="bg-[#F8F7F5] py-10">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="space-y-6">
          <IconText color="blue" text="Dual Axis Sensor" />
          <h1 className="text-[#1D1D1F] font-semibold text-[38px] leading-[48px] max-w-[416px]">
            Safety and Efficiency On The Fly
          </h1>
          <p className="text-[#6A6A6A] text-lg leading-[28px] font-medium max-w-[413px]">
            Achieve real-time tilt monitoring and load stability with our
            advanced Dual Axis Sensors. Designed for precision and rugged
            performance, these sensors enhance payload distribution and maximize
            operational productivity in challenging environments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          {sensors.map((sensor) => (
            <div className="flex flex-col space-y-[22px]">
              <img
                src={sensor.img}
                className="py-[17.5px] px-[11px] shadow-[0_25px_28.3px_-16px_#00000033] bg-white"
              />
              <h4 className="px-[11px] border-l-3  border-red-500 text-[#1D1D1F] font-semibold text-[28px] leading-[32px] ">
                {sensor.title}
              </h4>
              <p className="px-[11px] font-medium text-[#6A6A6A] text-lg leading-[28px]">
                {sensor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SensorsOverview;
