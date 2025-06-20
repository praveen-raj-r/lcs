import { Link } from "react-router-dom";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import HamBurgerMenu from "./ham-burger-menu";
import MobileNav from "./mobile-nav";
import { cn } from "@/lib/utils";
import lcsLogo from "@/assets/lcs-logo.svg";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // change threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full flex min-[1030px]:hidden justify-center bg-transparent z-10 fixed top-0",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-5xl w-full mx-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-10">
          <Link className="flex justify-center items-center h-[64px]" to="/">
            <img src={lcsLogo}></img>
          </Link>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger>
            <HamBurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </DrawerTrigger>
          <MobileNav setDrawerOpen={setIsOpen} />
        </Drawer>
      </div>
    </header>
  );
};

export default MobileHeader;
