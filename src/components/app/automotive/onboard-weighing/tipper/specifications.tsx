/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";
import specData from "./spec-data";

const gridData = specData;

const Specifications = () => {
  return (
    <div
      style={{
        clipPath: "polygon(0 0px, 50% 100px, 100% 0px, 100% 100%, 0% 100%)",
      }}
      className="bg-[#1D1D1F] w-full flex justify-center"
    >
      <div className="max-w-5xl mx-4 w-full mt-[100px] py-20">
        <h3 className="text-3xl md:text-[56px] font-semibold text-center text-white mb-20">
          Specifications
        </h3>
        <div
          className={cn(
            "grid grid-cols-1 grid-rows-11 sm:grid-cols-8 sm:grid-rows-4 md:grid-cols-10 md:grid-rows-3 gap-4"
          )}
        >
          {gridData.map((e, index) => {
            return (
              <div className={e.className} key={e.content}>
                <GridDataText index={index} gridContent={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function GridDataText({ gridContent, index }: any) {
  const gridDataTextRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(gridDataTextRef, { once: true });
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => {
        if (!hover) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        if (hover) {
          setHover(false);
        }
      }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : { opacity: 0, y: 100 }
      }
      transition={{
        scale: { duration: 0.2 },
        delay: (index + 1) * 0.1,
        damping: 40,
        stiffness: 160,
        duration: 0.5,
      }}
      ref={gridDataTextRef}
      className={`flex flex-col items-center max-w-[150px]  my-2 mx-auto sm:mx-0 text-white text-center gap-2 p-2`}
    >
      <AnimatedLogo hover={hover} paths={gridContent.paths} index={index} />
      <p className="text-[18px] text-[#B4B4B4] font-medium">
        {gridContent.content}
      </p>
    </motion.div>
  );
}

function AnimatedLogo({ hover, paths, index }: any) {
  return (
    <div>
      <div>
        <svg
          version="1.1"
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="25"
          height="25"
          xmlSpace="preserve"
          className="size-[45px] cursor-pointer transition-transform transform"
          viewBox="0 0 25 24"
        >
          <g>
            {paths.map((e: any, idx: any) => (
              <path key={`g-${e}, ${idx}`} d={e} fill="white" />
            ))}
          </g>
          <defs>
            <clipPath id={`clipPath-${index}`}>
              {paths.map((e: any, idx: any) => (
                <path key={`clippath-${e}, ${idx}`} d={e} fill="white" />
              ))}
            </clipPath>
          </defs>
          <defs>
            <linearGradient id="waveGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#D90429" />
              <stop offset="20%" stopColor="#E62E4F" />
              <stop offset="40%" stopColor="#E62E4F" />
              <stop offset="50%" stopColor="#F2576F" />
              <stop offset="60%" stopColor="#F2576F" />
              <stop offset="100%" stopColor="#FF8F9B" />
            </linearGradient>
            <clipPath id="wavePath">
              <path
                id="waveClipPath"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4 c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4 c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              />
            </clipPath>
          </defs>
          <g clipPath={`url(#clipPath-${index})`}>
            <motion.path
              fill="url(#waveGradient)"
              id="waveShape"
              d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4 c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4 c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              initial={{ y: 25 }}
              animate={hover ? { y: -4 } : { y: 25 }}
              transition={{ duration: 0.4, ease: [0.2, 0.6, 0.8, 0.4] }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Specifications;
