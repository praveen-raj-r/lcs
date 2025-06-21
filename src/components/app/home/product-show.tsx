import { LampContainer } from "@/components/aceternity-ui/lamp";
import { motion } from "motion/react";

const ProductShow = () => {
  return (
    <LampContainer className="rounded-none">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-red-300 to-red-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        High-Precision Controls <br /> for Peak Performance{" "}
      </motion.h1>
    </LampContainer>
  );
};

export default ProductShow;
