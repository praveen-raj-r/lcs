import { Info, Phone } from "lucide-react";

const TalkToOurTeam = () => {
  return (
    <div className="p-6 mb-4">
      <h1 className="text-xl md:text-[38px] md:leading-[48px] font-semibold text-[#1D1D1F]">
        Talk to our team
      </h1>
      <ul className="mt-7 flex flex-col gap-4 sm:text-lg text-[#4A4A4A]">
        <li className="flex items-start gap-5">
          <span>
            <Phone className="size-5" />
          </span>

          <span>
            <span className="font-semibold text-[#1D1D1F]">
              Get a Custom demo.
            </span>{" "}
            Discover the value of LCS for Your enterprise and explore our custom
            plan and pricing.
          </span>
        </li>
        <li className="flex items-start gap-5">
          <span>
            <Info className="size-5" />
          </span>

          <span>
            <span className="font-semibold text-[#1D1D1F]">
              Set up your Enterprise trial.
            </span>{" "}
            See for yourself how LCS Product add value to your organization.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TalkToOurTeam;
