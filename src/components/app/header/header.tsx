import DesktopHeader from "./desktop/desktop-header";
import MobileHeader from "./mobile/mobile-header";

const Header = () => {
  return (
    <div>
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};

export default Header;
