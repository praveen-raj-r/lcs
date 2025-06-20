/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import godrej from "@/assets/partners/godrej.png";
import henkel from "@/assets/partners/henkel.png";
import kinetic from "@/assets/partners/kinetic.png";
import mobil from "@/assets/partners/mobil.png";
import veedol from "@/assets/partners/veedol.png";
import harrisons from "@/assets/partners/harrisons.png";
import transline from "@/assets/partners/transline.png";
import wipro from "@/assets/partners/wipro.png";
import tiGlobal from "@/assets/partners/t-i-global.png";

const Partners = () => {
  return (
    <div>
      <h1 className="text-xl md:text-[38px] md:leading-[48px] font-semibold text-[#1D1D1F] p-6 pt-3">
        Partners
      </h1>
      <div className="border flex flex-wrap">
        {[
          [godrej, henkel, kinetic, mobil],
          [veedol, harrisons, transline, wipro],
          [tiGlobal, henkel, kinetic, mobil],
          [godrej, henkel, kinetic, mobil],
          [veedol, harrisons, transline, wipro],
          [tiGlobal, henkel, kinetic, mobil],
          [godrej, henkel, kinetic, mobil],
          [veedol, harrisons, transline, wipro],
        ].map((group, index) => (
          <div
            key={group.join(`${index}`)}
            className="w-1/2 h-24 flex flex-col justify-center items-center overflow-hidden  "
          >
            <Partner delay={index} group={group} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Partner = ({ group, delay }: any) => {
  return (
    <Carousel
      opts={{
        loop: true,
        dragFree: false,
      }}
      plugins={[
        Autoplay({
          delay: 4000 + delay * 300,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ]}
      orientation="vertical"
      className="w-full max-w-xs pointer-events-none select-none touch-auto"
    >
      <CarouselContent className="-mt-1 transition-transform duration-1000 ease-in-out h-[100px]">
        {group.map((img: any, index: any) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="flex justify-center items-center h-24 border">
              <img src={img} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default Partners;
