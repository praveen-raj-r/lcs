/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";

const ProductLinksSection = ({ section }: any) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="w-full border-b pb-4 border-dashed sm:border-transparent border-[#1B1C1E]">
      <h1 className="uppercase text-[#FFFFFF] text-[18.19px] font-medium leading-[29.11px] tracking-[0.26px] align-middle">
        {section.heading}
      </h1>
      <ul className="flex flex-col gap-3 sm:gap-3.5 sm:mt-6 mt-4">
        {section.items.map((i: any) => (
          <li className="select-none" key={`${i.link}-${i.label}`}>
            <span
              onClick={() => {
                navigate(i.link);
              }}
              className="text-[#9C9C9D] group cursor-pointer text-[16px] font-normal align-middle tracking-[0.26px]"
            >
              <span className="relative">
                <span
                  className={cn(
                    "group-hover:text-[#D90429] transition duration-300 leading-[10px]",
                    i.link === pathname && "text-[#D90429]"
                  )}
                >
                  {i.label}
                  <span className="text-[14px] ml-1">&#x2197;</span>
                </span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductLinksSection;
