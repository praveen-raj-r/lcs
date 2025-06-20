import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const SingleNavItem = ({
  label,
  link,
  navColor,
}: {
  label: string;
  link: string;
  navColor: string;
}) => {
  return (
    <NavigationMenuItem>
      <Link to={link}>
        <NavigationMenuLink
          asChild
          className={cn(
            navigationMenuTriggerStyle(),
            "font-normal text-[17px]",
            navColor
          )}
        >
          <span>{label}</span>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
export default SingleNavItem;
