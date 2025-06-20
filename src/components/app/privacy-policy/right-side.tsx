/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ParaLink from "./para-link";

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
          <h4 className="text-[#1D1D1F] text-lg font-medium leading-[28px]">
            On this page
          </h4>
          <div className="text-xl font-normal text-[#4A4A4A] space-y-2 mt-3">
            <ParaLink
              activeId={activeId}
              link={{ id: "about-lcs", label: "About LCS" }}
            />

            <NestedLinks activeId={activeId} />

            {[
              { id: "info-protect", label: "Information We Protect" },
              { id: "rights", label: "Customer Rights" },
              { id: "links", label: "Links" },
              { id: "changes", label: "Changes" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <ParaLink activeId={activeId} key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NestedLinks = ({ activeId }: any) => {
  const linksDetails = [
    {
      label: "Information We Collect",
      id: "info-we-collect",
      sublinks: [
        {
          id: "info-we-collect-via-technology",
          label: "Via Technology",
        },
        {
          id: "info-we-collect-from-account",
          label: "From Account",
        },
        {
          id: "info-we-collect-children-privacy",
          label: "Children Privacy",
        },
      ],
    },
    {
      id: "info-we-share",
      label: "Information We Share",
      sublinks: [
        { id: "info-we-share-personal", label: "Personal" },
        { id: "info-we-share-non-personal", label: "Non Personal" },
      ],
    },
  ];

  return linksDetails.map((item) => (
    <div key={item.id}>
      <ParaLink
        activeId={activeId}
        link={{
          id: item.id,
          label: item.label,
        }}
        useIncludes={true}
      />
      <ul className="flex flex-col pl-10 gap-3 mt-3">
        {item.sublinks.map((link) => (
          <li key={link.id}>
            <ParaLink activeId={activeId} link={link} />
          </li>
        ))}
      </ul>
    </div>
  ));
};
export default RightSide;
