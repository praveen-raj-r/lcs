import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  description: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}
interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, description, title } = slide;

  return (
    <div>
      <li
        ref={slideRef}
        className={cn(
          "flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[100vmin] h-[70vmin] mx-[1vmin] z-10 "
        )}
        onClick={() => handleSlideClick(index)}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out">
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>
      </li>
      <div className="sm:w-[600px]  w-[300px]">
        <article
          className={`relative py-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold relative">
            {title}
          </h2>
          <p className="md:text-xl mt-3 font-medium">{description}</p>
        </article>
      </div>
    </div>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={cn(
        "cursor-pointer w-10 h-10 flex items-center mx-1 justify-center bg-white border-1 border-[#eb5959] rounded-full group focus:border-[#D90429] focus:bg-[#D904291A] transition-colors duration-200",
        type === "previous" ? "rotate-180" : ""
      )}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="text-[#eb5959] group-focus:text-[#D90429]" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-full h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={`${slide.description}-${slide.src}-${slide.title}`}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-end w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />

        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
      </div>
    </div>
  );
}
