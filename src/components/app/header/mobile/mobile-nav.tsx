/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ArrowRight, ChevronDown, ChevronRight, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../custom-button";
import headerData from "@/data/header-data";

const { mobile } = headerData;

const MobileNav = ({ setDrawerOpen }: any) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <DrawerContent className="max-h-[80svh] h-full p-0">
      <ScrollArea className="overflow-auto p-3 h-full">
        <DrawerHeader className="p-0">
          <DrawerTitle> </DrawerTitle>
        </DrawerHeader>
        <div className="h-full">
          <div className="flex flex-col gap-1.5">
            <div className="space-y-1">
              {mobile.dropdowns.map((section, index) => {
                return (
                  <Dropdown
                    key={section.heading}
                    setDrawerOpen={setDrawerOpen}
                    index={index}
                    section={section}
                    openDropdownIndex={openDropdownIndex}
                    setOpenDropdownIndex={setOpenDropdownIndex}
                  />
                );
              })}
            </div>
            {mobile.singlePage.map((i, idx) => {
              return (
                <div
                  onClick={() => {
                    navigate(i.link);
                    setDrawerOpen(false);
                  }}
                  key={idx}
                  className="bg-[#FFEFCF80] text-[#d41436] py-2 px-3 rounded-lg flex justify-between items-center gap-3"
                >
                  {/* <img src={`/header/${i.icon}.svg`} /> */}
                  <span className=" flex items-center justify-between gap-3">
                    <span>•</span>
                    <span className="text-sm font-semibold">{i.label}</span>
                  </span>
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              );
            })}

            <div className="flex items-center gap-2 justify-center my-10">
              <div
                className="flex justify-center"
                onClick={() => {
                  navigate("/contact-us");
                  setDrawerOpen(false);
                }}
              >
                <CustomButton>Contact us</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </DrawerContent>
  );
};

const Dropdown = ({
  setDrawerOpen,
  index,
  section,
  openDropdownIndex,
  setOpenDropdownIndex,
}: any) => {
  const open = openDropdownIndex === index;

  return (
    <Collapsible
      open={open}
      onOpenChange={() => {
        setOpenDropdownIndex(open ? null : index);
      }}
    >
      <CollapsibleTrigger className="w-full mb-1">
        <div
          className={cn(
            "text-lg font-medium flex justify-between px-5 py-4 items-center w-full border-dashed border border-[#111B29]/50 rounded-lg",
            open && "border-solid bg-[#111B29]/10"
          )}
        >
          <div className="flex items-center gap-3">
            <img src={`/header/${section.mobileIcon}.svg`} alt="" />

            <h6 className="text-[16px] text-[#044151]">{section.heading}</h6>
          </div>
          <span>
            <ChevronDown
              className={cn("transition-transform", open && "rotate-180")}
            />
          </span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-5">
        <ul className="flex flex-col gap-4 mt-3">
          <ListItemsSection setDrawerOpen={setDrawerOpen} sections={section} />
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const ListItemsSection = ({ sections, setDrawerOpen }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return sections.items.map((product: any, index: any) => (
    <ListItem
      setDrawerOpen={setDrawerOpen}
      key={`${product.heading}-${product.description}`}
      index={index}
      openIndex={openIndex}
      setOpenIndex={setOpenIndex}
      product={product}
    />
  ));
};

const ListItem = ({
  product,
  index,
  openIndex,
  setOpenIndex,
  setDrawerOpen,
}: any) => {
  const open = openIndex === index;
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const navigate = useNavigate();

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  return (
    <li className="rounded-xl">
      <Collapsible
        open={open}
        onOpenChange={() => {
          setOpenIndex(open ? null : index);
        }}
      >
        <CollapsibleTrigger className="w-full">
          <div
            className={cn(
              "text-left w-full p-3 border-l-2 border-transparent",
              open && "border-[#D41638] shadow-[0px_0px_4.2px_0px_#00000026]"
            )}
          >
            <span className="flex flex-col gap-1">
              <span className="text-[16px] font-semibold uppercase flex items-center gap-3">
                <img src="/chart-icon.svg" alt="" />
                {product.heading}
              </span>
              <span className="text-xs">{product.description}</span>
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent
          style={{ height }}
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            "border-l border-b rounded-bl-2xl border-dashed border-[#b94343] "
          )}
        >
          <div
            ref={contentRef}
            className="flex gap-5 w-full pt-3 pl-2 flex-col  pb-4"
          >
            {product?.items?.map((i: any) => (
              <div
                key={`${i.link}-${i.title}`}
                className="flex flex-col w-full"
              >
                <div
                  onClick={() => {
                    navigate(i.link);
                    setDrawerOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <span className="capitalize font-normal px-1 rounded-[2px] text-[#111B29] py-0.5 text-[16px] flex items-center gap-3">
                    <Truck size={18} />
                    <span className="flex items-center gap-1 flex-nowrap">
                      <span>{i.title}</span>
                      <ArrowRight className="ch evronright" size={16} />
                    </span>
                  </span>
                </div>

                {i?.items?.length && (
                  <ul className="flex flex-wrap gap-4 mt-3 ml-3">
                    {i?.items?.map((app: any) => (
                      <li
                        key={`${app.label}-${app.link}`}
                        onClick={() => {
                          navigate(app.link);
                          setDrawerOpen(false);
                        }}
                      >
                        <span className="flex items-center gap-1 px-3 py-0.5 rounded-[4px] text-sm bg-[#FFEFCF80] text-[#D41436]">
                          <span className="flex items-center gap-1">
                            <span>•</span> <span>{app.label}</span>
                          </span>
                          <ChevronRight size={15} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
};
export default MobileNav;
