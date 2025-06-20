/* eslint-disable @typescript-eslint/no-explicit-any */
import { wrap } from "@motionone/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import { AuroraText } from "../magicui/aurora-text";
import chain from "@/assets/chain.svg";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function TogetherWeGrow() {
  function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((_t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="parallax overflow-hidden">
        <motion.div
          className="scroller text-center text-nowrap font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[6rem]"
          style={{ x }}
        >
          <CustomAuroraText>{children}</CustomAuroraText>
          <CustomAuroraText>{children}</CustomAuroraText>
          <CustomAuroraText>{children}</CustomAuroraText>
          <CustomAuroraText>{children}</CustomAuroraText>
          <CustomAuroraText>{children}</CustomAuroraText>
        </motion.div>
      </div>
    );
  }
  return (
    <section className="py-5 md:py-10">
      <ParallaxText baseVelocity={15}> Together We Grow </ParallaxText>
    </section>
  );
}

const CustomAuroraText = ({ children }: any) => {
  return (
    <AuroraText className="">
      <span className="flex items-center gap-5 md:gap-14">
        <AuroraText>{children}</AuroraText>
        <img src={chain} className="mr-14 size-10 md:size-auto " />
      </span>
    </AuroraText>
  );
};

export default TogetherWeGrow;
