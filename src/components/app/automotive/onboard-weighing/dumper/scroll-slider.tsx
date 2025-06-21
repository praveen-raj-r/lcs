import { Carousel } from "@/components/app/automotive/onboard-weighing/dumper/carousel";
import ScrollImg1 from "@/assets/onboard-weighing/scroll-slider-images/scroll-img-1.png";
import ScrollImg2 from "@/assets/onboard-weighing/scroll-slider-images/scroll-img-2.png";
import ScrollImg3 from "@/assets/onboard-weighing/scroll-slider-images/scroll-img-3.png";
import ScrollImg4 from "@/assets/onboard-weighing/scroll-slider-images/scroll-img-4.png";
import ScrollImg5 from "@/assets/onboard-weighing/scroll-slider-images/scroll-img-5.png";
import ScrollImg6 from "@/assets/onboard-weighing/scroll-slider-images/scroll-img-6.png";

const slideData = [
  {
    title: "Enhanced Safety",
    description:
      "Designed for demanding environments such as coal mining, mineral mining, surface mining, and strip mining—ensuring reliable payload monitoring and enhanced operational efficiency across all methods.",
    src: ScrollImg1,
  },
  {
    title: "Driving Efficiency",
    description:
      "Real-time tracking of vehicle load to ensure safe operations, prevent overloading, and maintain efficiency.",
    src: ScrollImg2,
  },
  {
    title: "User Insight",
    description:
      "A universal payload monitoring system designed for all types of dumpers, enabling accurate load tracking, enhanced safety, and optimized vehicle performance across operations.",
    src: ScrollImg3,
  },
  {
    title: "Vehicle Insight",
    description:
      "Detailed monitoring of each trip's load weight and time, enabling better planning, accountability, and resource optimization.",
    src: ScrollImg4,
  },
  {
    title: "Payload Tipper",
    description:
      "Implementation of advanced protocols and technologies to ensure worker and equipment safety in high-risk environments.",
    src: ScrollImg5,
  },
  {
    title: "Application Sectors",
    description:
      "Heavy duty Construction work, Mining, Roadwork and Urban projects",
    src: ScrollImg6,
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
