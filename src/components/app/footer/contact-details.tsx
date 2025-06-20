import lcsLogo from "@/assets/lcs-logo.svg";

const ContactDetails = () => {
  return (
    <div className="w-full">
      <img src={lcsLogo} alt="" />
      <div className="">
        <div className="text-sm space-y-0.5 mt-4 font-normal tracking-wide flex flex-col">
          <span>
            <a
              className="text-blue-500 sm:text-white hover:text-[#0792B4] transition duration-300"
              href="tel:+91-44 35071115"
            >
              +91-44 35071115
            </a>
          </span>
          <span>
            <a
              className="text-[#0792B4] sm:text-white hover:text-[#0792B4] transition duration-300"
              href="mailto:sales@lcscon.com"
            >
              sales@lcscon.com
            </a>
          </span>
          <span>
            <a
              className="text-[#0792B4] sm:text-white hover:text-[#0792B4] transition duration-300"
              href="mailto:customercare@lcscon.com"
            >
              customercare@lcscon.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
