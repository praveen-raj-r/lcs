/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import featureImg1 from "@/assets/safety-critical-sensors/tiltswitch/feature-images/feature-img-1.png";
import featureImg2 from "@/assets/safety-critical-sensors/tiltswitch/feature-images/feature-img-2.png";
import featureImg3 from "@/assets/safety-critical-sensors/tiltswitch/feature-images/feature-img-3.png";
import featureImg4 from "@/assets/safety-critical-sensors/tiltswitch/feature-images/feature-img-4.png";

const Heading = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="mx-4 max-w-5xl w-full z-1 border-t pt-10">
        <div className="flex flex-col gap-4">
          <div className="space-y-2.5 text-[#1D1D1F]">
            <h3 className="sm:text-[38px] font-semibold sm:leading-[48px] text-3xl z-1 pb-7">
              Product Specifications
            </h3>
            <p className="max-w-[563px] font-normal leading-[28px] text-lg z-1">
              Manage payload distribution and Improve Productivity with our
              Advanced Dumper Onboard Weighing system, designed for Reliability
              and Accuracy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const carouselSlides = [
  {
    image: featureImg1,
    heading: "Tilt Switch Sensor - x1",
    description: [
      {
        text: "Take control of safety and precision with our Tilt Switch Sensor. Safeguard equipment, monitor angles, and ensure Reliable Operation in critical applications",
        highlight: false,
      },
    ],
  },
  {
    image: featureImg2,
    heading: "Solenoid Valve- x1",
    description: [
      {
        text: "Converting the signal coming from the vibrating sensor into digital output is done by the",
        highlight: false,
      },
      {
        text: "Mechanical Sensor. Communication between the Operator and the various parts of the weighing",
        highlight: true,
      },
      {
        text: "system is critical to efficient processing and MSR allows for that",
        highlight: false,
      },
    ],
  },
  {
    image: featureImg3,
    heading: "Buzzer - x1",
    description: [
      {
        text: "Buzzers are the other part of non verbal communication. The buzzer will go off when the machine hits the threshold inclination to signal the entire crew. This allows for efficient load transportation and safe environment for the workers and the operator/driver",
        highlight: false,
      },
    ],
  },
  {
    image: featureImg4,
    heading: "Wiring Harness with Protection Hose - x1",
    description: [
      {
        text: "Protecting the inner workings of the monitoring system is crucial in the long run. Thus our monitoring system comes with a wiring harness and protection hose to ensure the wear and tear over time is kept in check. It also protects our system from getting damaged from harsh environments",
        highlight: false,
      },
    ],
  },
];

const FeaturesSection = () => {
  return (
    <div>
      <Heading />

      <div className="flex w-full justify-center sticky top-0">
        <div className="mx-4 w-full pt-10">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 my-10 sm:ml-100">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 1200,
                  }),
                ]}
                opts={{ loop: true, align: "start" }}
              >
                <CarouselContent>
                  {carouselSlides.map((card, idx) => (
                    <Card key={`${card.image}-${idx}`} cardDetails={card} />
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ cardDetails }: any) => {
  return (
    <CarouselItem className="basis-2/5">
      <div className="mx-4 max-w-[300px] min-w-[240px] sm:max-w-[487px] sm:min-w-[487px] flex flex-col gap-7.5">
        <div className="flex justify-center items-center p-4 bg-white shadow-[0px_25px_28.3px_-16px_#00000033]">
          <img src={cardDetails.image} className="" />
        </div>
        <div className="space-y-7.5 relative">
          <span className="absolute left-0 top-0 h-10 w-1 border-l-3 rounded-2xl border-[#D90429]"></span>
          <h4 className="px-4.5 text-truncate text-[#1d1d1f] font-semibold leading-[40px] text-[28px]">
            {cardDetails.heading}
          </h4>
          <p className="px-4.5 text-[#6A6A6A] font-medium text-lg leading-[28px]">
            {cardDetails.description.map((curr: any, idx: any) => (
              <span
                key={`${curr.text}-${idx}`}
                className={cn(curr.highlight && "text-[#D90429]")}
              >
                {curr.text}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </CarouselItem>
  );
};

export default FeaturesSection;
