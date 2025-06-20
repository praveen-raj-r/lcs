import { Link, useLocation } from "react-router-dom";
import Navbar from "./nav-bar";
import CustomButton from "../../custom-button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navColors } from "@/lib/nav-colors";
import lcsLogo from "@/assets/lcs-logo.svg";

const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // change threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navColor = isScrolled
    ? "text-[#044151]"
    : navColors.find((c) => c.path === pathname)?.color || "text-[#044151]";

  return (
    <header
      className={cn(
        "hidden min-[1030px]:flex w-full justify-center fixed top-0 z-10 transition-colors duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-5xl w-full mx-4 flex items-center justify-between gap-10">
        <div className="flex items-center gap-10">
          <Link className="flex justify-center items-center h-[64px]" to="/">
            <img className="" src={lcsLogo}></img>
          </Link>

          <Navbar navColor={navColor} />
        </div>
        <div className="flex gap-3">
          <Link to="/contact-us">
            <CustomButton className="">Contact us</CustomButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
