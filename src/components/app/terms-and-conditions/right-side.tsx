/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ParaLink from "../privacy-policy/para-link";

const RightSide = ({ sections }: any) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }: { id: string }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sm:block hidden w-[30%] pl-5">
      <div className="w-full mb-20 sticky top-10 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
        <div className="p-6">
          <h4 className="text-[#1D1D1F] text-[24px] font-medium leading-[36px]">
            On this page
          </h4>
          <div className="text-xl font-normal text-[#4A4A4A] space-y-2 mt-3">
            {sections.map((link: any) => (
              <ParaLink activeId={activeId} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
