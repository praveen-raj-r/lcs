const HowItsStarted = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex justify-center max-w-5xl overflow-hidden w-full mx-4 relative py-10">
        <div className="absolute bottom-0 left-0">
          <div className="relative"></div>
        </div>
        <div className="border-3 w-full flex justify-center rounded-[50%] rotate-[-8deg] border-red-500 border-dashed">
          <div className="flex flex-col gap-4 max-w-[558px] items-center py-10 sm:py-30 px-10 rotate-[8deg]">
            <h1 className="text-center text-[#D90429] text-2xl sm:text-[36px] sm:leading-[36px] font-medium">
              How its Started
            </h1>
            <p className="text-center font-[400] sm:text-[26px] sm:leading-[36px]">
              LCS was founded in 1995. With a strong vision and unwavering
              commitment to excellence, our company has a rich history spanning
              over two decades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsStarted;
