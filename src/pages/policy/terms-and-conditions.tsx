import PolicyHeader from "@/components/app/policy-header";
import LeftSide from "@/components/app/terms-and-conditions/left-side";
import RightSide from "@/components/app/terms-and-conditions/right-side";
import ChangesToOurPrivacyPolicy from "@/components/app/terms-and-conditions/sections/changes-to-our-privacy-policy";
import Definitions from "@/components/app/terms-and-conditions/sections/definitions";
import ForceMajeure from "@/components/app/terms-and-conditions/sections/force-majeure";
import Pricing from "@/components/app/terms-and-conditions/sections/pricing";
import ProductOrderPlacing from "@/components/app/terms-and-conditions/sections/product-order-placing";
import RefundsAndCancellation from "@/components/app/terms-and-conditions/sections/refunds-and-cancellation";
import ShipsAndDelivery from "@/components/app/terms-and-conditions/sections/ships-and-delivery";
import Termination from "@/components/app/terms-and-conditions/sections/termination";
import TermsAndConditionsSection from "@/components/app/terms-and-conditions/sections/terms-and-conditions-section";
import TermsOfPayment from "@/components/app/terms-and-conditions/sections/terms-of-payment";
import WarrantiesAndDisclaimerOfWarranties from "@/components/app/terms-and-conditions/sections/warranties-and-disclaimer-of-warranties";

const sections = [
  {
    id: "terms-and-conditions",
    label: "Terms and Conditions",
    element: <TermsAndConditionsSection />,
  },
  { id: "definitons", label: "Definitions", element: <Definitions /> },
  {
    id: "product-order-placing",
    label: "Product Order Placing",
    element: <ProductOrderPlacing />,
  },
  { id: "pricing", label: "Pricing", element: <Pricing /> },
  {
    id: "terms-of-payment",
    label: "Terms of Payment",
    element: <TermsOfPayment />,
  },
  {
    id: "shipment-and-delivery",
    label: "Shipment and Delivery",
    element: <ShipsAndDelivery />,
  },
  {
    id: "changes-to-our-privacy-policy",
    label: "Changes To Our Privacy Policy",
    element: <ChangesToOurPrivacyPolicy />,
  },
  {
    id: "refunds-and-cancellation",
    label: "Refunds & Cancellation",
    element: <RefundsAndCancellation />,
  },
  {
    id: "warranties-and-disclaimer-of-warranties",
    label: "Warranties and Disclaimer of Warranties",
    element: <WarrantiesAndDisclaimerOfWarranties />,
  },
  { id: "force-majeure", label: "Force Majeure", element: <ForceMajeure /> },
  { id: "termination", label: "Termination", element: <Termination /> },
];

const TermsAndConditions = () => {
  return (
    <div className="mt-[-64px] relative">
      <div className="bg-black w-full pt-[64px]">
        <PolicyHeader heading="Terms & Conditions" />
      </div>
      <div className="bg-white w-full flex justify-center **:[border-color:#e5e5e5]">
        <div className="max-w-5xl mx-4 w-full flex border relative">
          <LeftSide sections={sections} />
          <RightSide sections={sections} />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
