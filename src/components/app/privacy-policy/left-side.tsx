import AboutLcs from "./sections/about-lcs";
import Changes from "./sections/changes";
import Contact from "./sections/contact";
import CustomerRights from "./sections/customer-rights";
import InformationWeCollect from "./sections/information-we-collect";
import InformationWeProtect from "./sections/information-we-protect";
import InformationWeShare from "./sections/information-we-share";
import Links from "./sections/links";

const LeftSide = () => {
  return (
    <div className="sm:w-[70%] border-r border-dashed py-10">
      <AboutLcs />
      <InformationWeCollect />
      <InformationWeShare />
      <InformationWeProtect />
      <CustomerRights />
      <Links />
      <Changes />
      <Contact />
    </div>
  );
};

export default LeftSide;
