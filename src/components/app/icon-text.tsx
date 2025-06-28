/* eslint-disable @typescript-eslint/no-explicit-any */
import redIcon from "@/assets/red-icon.png";
import blueIcon from "@/assets/blue-icon.png";
import { cn } from "@/lib/utils";

const IconText = ({ text, color }: any) => {
  const icon = color === "red" ? redIcon : blueIcon;

  return (
    <div className="flex items-center gap-2.75">
      <img src={icon} className="size-6" />
      <span
        className={cn(
          "text-lg font-semibold leading-[28px]",
          color === "red" ? "text-[#D90429]" : "text-[#0792B4]"
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default IconText;
