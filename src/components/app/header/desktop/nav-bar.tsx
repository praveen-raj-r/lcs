/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SingleNavItem from "./navbar/single-nav-item";
import headerData from "@/data/header-data";
import { cn } from "@/lib/utils";
import DropdownNav from "./navbar/drop-down-nav";

const { desktop } = headerData;

const Navbar = ({ navColor }: any) => {
  return (
    <div className="flex items-center gap-1">
      <NavigationMenu className="[--popover:#FAFBFD]">
        <NavigationMenuList>
          {desktop.map((navItem) => {
            if (navItem.type === "dropdown")
              return navItem.items.map((i: any) => (
                <NavigationMenuItem key={i.heading}>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent font-normal text-[17px]",
                      navColor
                    )}
                  >
                    {i.heading}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <DropdownNav sections={i.items} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ));
            else if (navItem.type === "singlePage")
              return navItem.items.map((si: any) => (
                <SingleNavItem
                  key={si.label}
                  navColor={navColor}
                  label={si.label}
                  link={si.link}
                />
              ));
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
