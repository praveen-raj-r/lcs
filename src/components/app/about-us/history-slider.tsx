import image1995 from "@/assets/about-us/history-slider/1995.avif";
import image2001 from "@/assets/about-us/history-slider/2001.webp";
import image2003 from "@/assets/about-us/history-slider/2003.webp";
import image2004 from "@/assets/about-us/history-slider/2004.webp";
import image2010 from "@/assets/about-us/history-slider/2010.webp";
import image2013 from "@/assets/about-us/history-slider/2013.avif";
import image2015 from "@/assets/about-us/history-slider/2015.webp";
import image2020 from "@/assets/about-us/history-slider/2020.webp";
import image2022 from "@/assets/about-us/history-slider/2022.webp";
import image2023 from "@/assets/about-us/history-slider/2023.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const slides = [
  {
    image: image1995,
    year: "1995",
    description:
      "LCS was founded with a clear vision and commitment to excellence, laying the foundation for decades of innovation.",
  },
  {
    image: image2001,
    year: "2001",
    description:
      "We relocated to an industrial zone to accommodate our growing team and expand operations.",
  },
  {
    image: image2003,
    year: "2003",
    description:
      "Expanded our network and began construction of our own manufacturing facility.",
  },
  {
    image: image2004,
    year: "2004",
    description:
      "Launched the LCS Payload vertical, marking a major milestone in our growth.",
  },
  {
    image: image2010,
    year: "2010",
    description:
      "Following extensive R&D, we introduced Payload DT and UC 100, advancing our product line.",
  },
  {
    image: image2013,
    year: "2013",
    description:
      "Unveiled the LCS WT-10N weight transmitter and AccuFit, reinforcing our innovation-driven approach.",
  },
  {
    image: image2015,
    year: "2015",
    description:
      "Established the Industrial Weighing & Automation vertical, offering check weighing, bagging, and batch systems.",
  },
  {
    image: image2020,
    year: "2020",
    description:
      "In our Silver Jubilee year, we launched AWEW 2020 and Payload WL, strengthening our market leadership.",
  },
  {
    image: image2022,
    year: "2022",
    description:
      "Upgraded to a new R&D workspace, enhancing our innovation capabilities.",
  },
  {
    image: image2023,
    year: "2023",
    description:
      "Introduced six new products: CHEETAH, PANTHER, VIPER, CUB, and SCORPION, expanding our portfolio across verticals.",
  },
];

const HistorySlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-5xl mx-4 w-full">
        <div className="p-3 font-medium text-4xl sm:text-[50px]">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(102.95deg,#D90429_3.07%,#0792B4_98.25%)] mr-3">
            Our
          </span>

          <span className="bg-clip-text text-transparent bg-[linear-gradient(102.95deg,#D90429_3.07%,#0792B4_98.25%)]">
            Journey
          </span>
        </div>
        <Carousel setApi={setApi}>
          <div className="w-full flex justify-center items-center">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.image}
                  className="w-full flex items-center"
                >
                  <img
                    src={slide.image}
                    className="h-full rounded-[20px] border"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <div className="text-[48px] font-medium flex items-center justify-between mt-3">
            <h1> {slides[current - 1].year}</h1>
            <div className="flex gap-3">
              <CarouselPrevious className="static cursor-pointer" />
              <CarouselNext className="static cursor-pointer" />
            </div>
          </div>

          <p className="sm:text-xl font-normal">
            {slides[current - 1].description}
          </p>
        </Carousel>
      </div>
    </div>
  );
};

export default HistorySlider;
