/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "../custom-button";

const Img = ({ index }: any) => {
  return (
    <div
      className="h-[708px] w-full bg-no-repeat bg-cover bg-center animate-pulse "
      style={{
        backgroundImage: `url(/hero/Rectangle-${index}.svg)`,
        animationDelay: `${index * 100}ms`,
      }}
    ></div>
  );
};

const HeroComp = () => {
  const arrays = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div className="relative">
      <div className="flex z-10">
        {arrays.map((_, index) => {
          return <Img index={index + 1} key={index} />;
        })}
      </div>

      <div className="top-[64px] absolute w-full h-[calc(100%-64px)]">
        <div className="flex justify-center size-full">
          <div className="max-w-5xl mx-4 w-full flex flex-col sm:flex-row ">
            <div className="sm:w-[50%] mt-20">
              <h1 className="font-semibold text-[40px] leading-[40px] sm:text-[80px] text-[#044151] sm:leading-[80px] sm:max-w-[500px]">
                Weigh anything on this planet
              </h1>
              <p className="text-3xl text-[#044151] font-medium leading-[36px] mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                aut obcaecati ab eos voluptatibus ducimus,
              </p>
              <div className="sm:mt-20 mt-10">
                <CustomButton>Explore More</CustomButton>
              </div>
            </div>
            <div className="sm:w-[50%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
