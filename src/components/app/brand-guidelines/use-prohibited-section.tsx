import { cn } from "@/lib/utils";

const UseProhibitedSection = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-5xl mx-4 w-full">
        <div className="flex md:flex-row flex-col gap-10 justify-between">
          <div className="w-full flex flex-col justify-between gap-10">
            <div>
              <h3 className="text-[30px] sm:text-[40px] font-medium text-[#CC0000]">
                Use Prohibited
              </h3>
              <p className="text-[20px] font-normal leading-[24px]">
                Our brand consists of a simple, geometric but modern wordmark
                with diagonal points that represent growth propelled.
              </p>
            </div>
            <div className="">
              <ul className="flex flex-col gap-3.5">
                {[
                  "Do not use stoked",
                  "Do not change brand colors",
                  "Do not squeeze out the logo",
                  "Do not change alignment",
                  "Do not use Drop shadow",
                  "Do not use typeface in the logo",
                ].map((quote, i) => (
                  <li className="flex gap-3.75 items-center" key={quote}>
                    <span className="rounded-[1px] text-xl leading-[20px] bg-red-600 text-white aspect-square size-6 flex justify-center items-center">
                      {i + 1}
                    </span>
                    <span>{quote}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full flex md:justify-end justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-10 content-center">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`prohibited-img-${i + 1}`}
                    className={cn("flex justify-center items-center")}
                  >
                    <img
                      src={`/brand-guidelines/prohibited/${i + 1}.png`}
                      className="sm:h-[90px]"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseProhibitedSection;
