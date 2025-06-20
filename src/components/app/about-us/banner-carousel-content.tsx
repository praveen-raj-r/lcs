import groupImg from "@/assets/group-photo.avif";
import cowrksImg from "@/assets/cowrks.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const BannerCarouselContent = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full "
      >
        <CarouselContent>
          {[cowrksImg, groupImg].map((img) => (
            <CarouselItem key={img}>
              <div className="p-1 md:px-20 flex items-center">
                <img src={img} className="md:h-150 w-full rounded-2xl h-50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BannerCarouselContent;
