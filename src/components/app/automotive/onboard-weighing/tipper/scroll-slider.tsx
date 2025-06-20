import { Carousel } from "@/components/app/automotive/onboard-weighing/dumper/carousel";

const slideData = [
  {
    title: "Enhanced Safety",
    description:
      "Designed for demanding environments such as coal mining, mineral mining, surface mining, and strip mining—ensuring reliable payload monitoring and enhanced operational efficiency across all methods.",
    src: "/automotive/onboard-weighing/dumper/scroll-img-1.png",
  },
  {
    title: "Driving Efficiency",
    description:
      "Real-time tracking of vehicle load to ensure safe operations, prevent overloading, and maintain efficiency.",
    src: "/automotive/onboard-weighing/dumper/scroll-img-2.png",
  },
  {
    title: "User Insight",
    description:
      "A universal payload monitoring system designed for all types of dumpers, enabling accurate load tracking, enhanced safety, and optimized vehicle performance across operations.",
    src: "/automotive/onboard-weighing/dumper/scroll-img-3.png",
  },
  {
    title: "Vehicle Insight",
    description:
      "Detailed monitoring of each trip's load weight and time, enabling better planning, accountability, and resource optimization.",
    src: "/automotive/onboard-weighing/dumper/scroll-img-4.png",
  },
  {
    title: "Payload Tipper",
    description:
      "Implementation of advanced protocols and technologies to ensure worker and equipment safety in high-risk environments.",
    src: "/automotive/onboard-weighing/dumper/scroll-img-5.png",
  },
  {
    title: "Application Sectors",
    description:
      "Optimizing operations through smart systems and real-time data to reduce downtime and improve workflow.",
    src: "/automotive/onboard-weighing/dumper/scroll-img-6.png",
  },
];
function ScrollSlider() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl mx-4 w-full">
        <div className="relative overflow-hidden w-full h-full pb-55">
          <Carousel slides={slideData} />
        </div>
      </div>
    </div>
  );
}

export default ScrollSlider;
