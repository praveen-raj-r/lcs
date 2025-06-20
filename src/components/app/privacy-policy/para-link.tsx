import { cn } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ParaLink = ({ activeId, link, useIncludes = false }: any) => {
  const handleClick = (e: any, id: any) => {
    e.preventDefault();

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <p>
      <a
        onClick={(e) => handleClick(e, link.id)}
        href={`#${link.id}`}
        className={cn(
          (useIncludes ? activeId.includes(link.id) : activeId === link.id)
            ? "font-semibold text-black"
            : "text-[#4A4A4A]",
          "transition-colors duration-150 text-lg leading-[28px]"
        )}
      >
        {link.label}
      </a>
    </p>
  );
};

export default ParaLink;
