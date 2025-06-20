/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";

function HoverCard({ card }: any) {
  return (
    <>
      <div className="w-[90%]] h-[600px] group mx-auto dark:bg-[#252525] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black ">
        <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
          <div
            style={{
              background:
                "linear-gradient(123.9deg, #0B65ED 1.52%, rgba(0, 0, 0, 0) 68.91%)",
            }}
            className="absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300"
          ></div>
          <img
            src={"/dashboard.jpg"}
            alt="shoes"
            width={600}
            height={600}
            className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
          />
        </figure>
        <article className="p-4 space-y-4">
          <h1 className="text-xl font-semibold capitalize">
            {card.productName}
          </h1>
          <span className="w-auto bg-[#f6f9fc] p-1 px-2 rounded-md">
            {card.badge}
          </span>
          <p className="text-base leading-[120%]">{card.description}</p>
          <a
            href="#"
            className=" text-base dark:text-white text-blue-600 font-normal  group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1  transition-all duration-300  "
          >
            Learn More
            <span>
              <ChevronRight />
            </span>
          </a>
        </article>
      </div>
    </>
  );
}

export default HoverCard;
