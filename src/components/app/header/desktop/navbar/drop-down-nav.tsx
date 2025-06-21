/* eslint-disable @typescript-eslint/no-explicit-any */

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownNav = ({ sections }: any) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(
    sections[0].heading
  );

  return (
    <div className="p-3">
      <div className="flex min-w-[900px] h-full gap-4">
        <Section1
          sections={sections}
          setHoveredSection={setHoveredSection}
          hoveredSection={hoveredSection}
        />
        <Section2 sections={sections} hoveredSection={hoveredSection} />
      </div>
    </div>
  );
};

const Section1 = ({ setHoveredSection, hoveredSection, sections }: any) => {
  return (
    <div className="flex flex-col gap-5">
      {sections.map((i: any) => (
        <NavItem
          hoveredSection={hoveredSection}
          setHoveredSection={setHoveredSection}
          data={i}
        />
      ))}
    </div>
  );
};

const Section2 = ({
  hoveredSection,
  sections,
}: {
  hoveredSection: string | null;
  sections: any[];
}) => {
  const data = sections.find((i) => i.heading === hoveredSection);

  return (
    <div className="w-full shadow-[0px_0px_4.2px_0px_#00000026] rounded-[6px] p-3">
      <div className="h-full p-4 px-6">
        {data?.items?.map((i: any, idx: any) => {
          return (
            <div key={i.title} className="flex flex-col">
              <div className="flex items-center gap-1.25">
                <img src="/chart-icon.svg" alt="chart icon" />

                <Link to={i.link}>
                  <h6 className="font-normal text-[16px] leading-[150%] text-[#111B29] flex items-center gap-1 cursor-pointer group hover:text-red-500 transition-colors duration-300 hover:underline hover:font-semibold">
                    <span>{i.title}</span>
                    <span>
                      <ChevronRight
                        className=" group-hover:translate-x-1 transition-transform duration-300"
                        size={15}
                      />
                    </span>
                  </h6>
                </Link>
              </div>

              <div className="relative pb-5">
                {data?.items && idx < data.items.length - 1 && (
                  <div className="absolute top-0 left-2.5 h-full py-1">
                    <div className="h-full w-1 border-l border-[#CCCCCC] border-dashed "></div>
                  </div>
                )}
                <ul className="flex gap-2.5 items-center ml-15 mt-2">
                  {i?.items?.map((i: any) => (
                    <LinkItem key={i.label} data={i} />
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownNav;

const LinkItem = ({ data }: any) => {
  return (
    <Link to={data.link}>
      <li>
        <button className="text-sm border-none px-5 py-1.5 pr-4 rounded-[4px] cursor-pointer flex items-center gap-2 transition-colors duration-450 focus:outline-offset-4 group bg-[#FFEFCF80] text-nowrap text-[#D41436] hover:bg-[#D41436] hover:text-[#ffffff]">
          {data.label}
          <svg
            className="size-2.5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="transition-transform duration-450 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-[-3px]"
              d="M8 15L14 8.5L8 2"
              stroke="currentColor"
              strokeWidth="3"
            />
            <line
              className="transition-opacity duration-450 opacity-0 group-hover:opacity-100"
              x1="13"
              y1="8.5"
              y2="8.5"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
        </button>
      </li>
    </Link>
  );
};

const NavItem = ({
  hoveredSection,
  data,
  setHoveredSection,
}: {
  data: { heading: string; description: string; id: string };
  setHoveredSection: any;
  hoveredSection: string | null;
}) => {
  const { heading, description } = data;

  return (
    <div
      onMouseOver={() => {
        setHoveredSection(heading);
      }}
      className={cn(
        "w-60 border-l-4 rounded-[6px] flex px-2 py-3 cursor-pointer transition-all duration-500",
        hoveredSection === heading
          ? "shadow-[0px_0px_4.2px_0px_#00000026] border-red-600 transition-all bg-[#FFEFCF80] duration-500 "
          : "border-transparent"
      )}
    >
      <div className="p-2">
        <img src="/icon.svg" alt="icon" />
      </div>
      <div className="w-full p-1 space-y-[6px]">
        <h4 className="uppercase text-[16px]  font-medium leading-[20px] text-[#111B29]">
          {heading}
        </h4>
        <h5 className="text-sm font-normal leading-[16px] text-[#677489]">
          {description}
        </h5>
      </div>
    </div>
  );
};
