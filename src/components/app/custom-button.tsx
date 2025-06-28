/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";

const CustomButton = ({
  background = "#D90429",
  color = "#FFFFFF",
  className = "",
  children,
  rotate = "",
  onClick = () => {},
}: any) => {
  return (
    <button
      style={{ backgroundColor: background, color: color }}
      onClick={onClick}
      className={cn(
        "text-sm border-none px-5 py-1.5 pr-4 rounded-full cursor-pointer flex items-center gap-2 transition-colors duration-150 focus:outline-offset-4 group",

        className
      )}
    >
      {children}
      <svg
        className={cn("size-2.5", rotate)}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="transition-transform duration-150 group-hover:translate-x-0 translate-x-[-3px]"
          d="M8 15L14 8.5L8 2"
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          className="transition-opacity duration-150 opacity-0 group-hover:opacity-100"
          x1="13"
          y1="8.5"
          y2="8.5"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </button>
  );
};

export default CustomButton;
