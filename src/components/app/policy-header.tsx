/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

function generateUniqueRandomIds(length: any, min = 1, max = 10000) {
  if (max - min + 1 < length) {
    throw new Error("Range too small for unique values of given length");
  }

  const ids = new Set();

  while (ids.size < length) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    ids.add(randomNum);
  }

  return Array.from(ids);
}

const ReviewCard = ({ direction, i }: any) => {
  function isInRange(i: any, start: any, end: any) {
    return i >= start && i <= end;
  }

  return (
    <div
      className={cn(
        `rounded`,
        direction === "left" &&
          isInRange(i, 38, 39) &&
          "p-[1px] animated-border bg-gradient-to-r from-[#2D2D2D] to-[#D90429]",
        direction === "right" &&
          isInRange(i, 0, 1) &&
          "p-[1px] bg-gradient-to-l animated-border from-[#2D2D2D] to-[#D90429]",
        direction === "down" &&
          isInRange(i, 14, 25) &&
          "p-[1px] bg-gradient-to-t animated-border from-[#07080A] via-[#0792B4] to-[#0792B4]",
        direction === "up" &&
          isInRange(i, 14, 25) &&
          "p-[1px] bg-gradient-to-b animated-border from-[#07080A] via-[#0792B4]  to-[#0792B4]"
      )}
    >
      <figure
        className={cn(
          "relative h-full w-16 sm:w-20 aspect-square cursor-pointer rounded bg-[#1B1918] overflow-hidden"
        )}
      ></figure>
    </div>
  );
};

const FirstRow = () => {
  return (
    <Marquee>
      {generateUniqueRandomIds(40).map((review: any, i: any) => (
        <ReviewCard i={i} direction="up" key={review} />
      ))}
    </Marquee>
  );
};

const LastRow = () => {
  return (
    <Marquee>
      {generateUniqueRandomIds(40).map((review: any, i: any) => (
        <ReviewCard i={i} direction="down" key={review} />
      ))}
    </Marquee>
  );
};

const LeftContent = () => {
  return (
    <div className="w-[30%] sm:block hidden">
      <Marquee className="flex-row-reverse">
        {generateUniqueRandomIds(40).map((review: any, i: any) => (
          <ReviewCard i={i} direction="left" key={review} />
        ))}
      </Marquee>
      <Marquee className="flex-row-reverse">
        {generateUniqueRandomIds(40).map((review: any, i: any) => (
          <ReviewCard i={i} direction="left" key={review} />
        ))}
      </Marquee>
    </div>
  );
};
const CenterContent = ({ heading }: any) => {
  return (
    <div className="w-full sm:w-[40%] flex items-center justify-center">
      <h1 className="text-3xl text-center sm:text-5xl md:text-7xl font-semibold text-[#ededed] sm:my-0 my-4">
        {heading}
      </h1>
    </div>
  );
};

const RightContent = () => {
  return (
    <div className="w-[30%] sm:block hidden">
      <Marquee className="![--gap:10px] ">
        {generateUniqueRandomIds(40).map((review: any, i: any) => (
          <ReviewCard i={i} direction="right" key={review} />
        ))}
      </Marquee>
      <Marquee>
        {generateUniqueRandomIds(40).map((review: any, i: any) => (
          <ReviewCard i={i} direction="right" key={review} />
        ))}
      </Marquee>
    </div>
  );
};

const PolicyHeader = ({ heading }: any) => {
  return (
    <div className="text-white policy-header-section relative flex w-full flex-col items-center justify-center overflow-hidden">
      <FirstRow />
      <div className="flex w-full">
        <LeftContent />
        <CenterContent heading={heading} />
        <RightContent />
      </div>
      <LastRow />
    </div>
  );
};

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  children: ReactNode;
}

function Marquee({ className, children }: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden pb-4 gap-2.5", className)}>
      <div className={cn("flex shrink-0 justify-around gap-2.5")}>
        {children}
      </div>
    </div>
  );
}

export default PolicyHeader;
