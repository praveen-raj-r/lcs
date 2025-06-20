// import GradientCanvas from "@/components/app/gradient-bg";

const Typography = () => {
  return (
    <div // h-[500px] md:
      className="w-full bg-no-repeat bg-cover h-[540px] min-[640px]:h-[480px] min-[1019.5px]:h-[630px] min-[1100px]:h-[640px] bg-center mt-10 pt-10 !relative"
      style={{
        backgroundImage: `url(/brand-guidelines/typography.svg)`,
      }}
    >
      <div className="flex justify-center size-full">
        <div className="max-w-5xl mx-4 w-full flex flex-col">
          <div className="flex flex-col gap-3 text-white">
            <h3 className="font-medium text-[40px] leading-[36px]">
              Typography
            </h3>
            <p className="text-[20px] leading-6 font-normal min-w-[270px] max-w-[600px]">
              Our brand consists of a simple, geometric but modern wordmark with
              diagonal points that represent growth propelled.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col w-full gap-4 mt-10 ">
            <div className="rounded-xl w-full xl:h-100 flex justify-center items-center [background:radial-gradient(100%_100%_at_0%_0%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[42px] [box-shadow:inset_-5px_-5px_250px_0px_#FFFFFF05,_0_0_0_2px_rgba(255,255,255,0.4)]">
              <div className="flex flex-col justify-between p-4 md:px-10 size-full">
                <div className="flex justify-between">
                  <div className="flex flex-col md:gap-1 lg:gap-3 text-white">
                    <p className="md:text-lg lg:text-2xl lg:leading-[36px] font-medium">
                      Title
                    </p>
                    <h4 className="text-lg md:text-2xl lg:text-4xl lg:leading-[36px] font-medium">
                      Matter
                    </h4>
                  </div>
                  <div>
                    <p className="text-[#C9C9C9] font-medium text-lg lg:text-2xl lg:leading-[36px]">
                      Medium
                    </p>
                    <p className="text-[#C9C9C9] font-semibold text-lg lg:text-2xl lg:leading-[36px]">
                      SemiBold
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <h1 className="text-[30px] sm:text-[60px] md:text-[120px] lg:text-[200px] xl:text-[246px] text-[#C9C9C91A] font-medium text-center">
                    AaBb
                  </h1>
                </div>
              </div>
            </div>

            <div className="rounded-xl w-auto xl:h-100 flex items-center [background:radial-gradient(100%_100%_at_0%_0%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)] backdrop-blur-[42px] [box-shadow:inset_-5px_-5px_250px_0px_#FFFFFF05,_0_0_0_2px_rgba(255,255,255,0.4)]">
              <div className="flex flex-col justify-between p-4 md:px-10 size-full">
                <div className="flex justify-between md:gap-0 sm:gap-10">
                  <div className="flex flex-col md:gap-1 lg:gap-3 text-white">
                    <p className="md:text-lg lg:text-2xl lg:leading-[36px] font-medium">
                      Body
                    </p>
                    <h4 className="text-lg md:text-2xl lg:text-4xl lg:leading-[36px] font-medium">
                      Matter
                    </h4>
                  </div>
                  <div>
                    <p className="text-[#C9C9C9] font-normal text-lg lg:text-2xl lg:leading-[36px]">
                      Regular
                    </p>
                  </div>
                </div>
                <h1 className="text-[30px] sm:text-[60px] md:text-[120px] lg:text-[200px] xl:text-[246px] font-medium bg-[linear-gradient(90deg,rgba(201,201,201,0.1)_5.93%,rgba(54,54,54,0.1)_93.33%)] bg-clip-text text-transparent">
                  Aa
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <GradientCanvas /> */}
    </div>
  );
};
// background: linear-gradient(90deg, rgba(201, 201, 201, 0.1) 5.93%, rgba(54, 54, 54, 0.1) 93.33%);

export default Typography;
