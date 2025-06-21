/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/app/custom-button";

const AllVehiclesSection = ({ section }: any) => {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-20 space-y-10">
      <div className="space-y-4">
        <h3
          className="text-[38px] font-semibold leading-[48px] "
          style={{ color: section.textColor }}
        >
          {section.heading}
        </h3>
        <p className="max-w-[413px] font-medium text-lg text-[#6A6A6A] leading-[28px]">
          {section.description}
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="https://lcscon.myfreshworks.com/crm/sales/web_forms/3e5c17e1b1a4eb8159413c4d05874962c620de98bb622178745602ffbd834d94/form.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              className={`bg-[${section.textColor}] hover:bg-[${section.textColor}]`}
            >
              Request a quote
            </CustomButton>
          </a>
          <CustomButton
            className={`bg-transparent hover:bg-transparent text-[${section.textColor}] hover:text-[${section.textColor}]`}
          >
            Download Brochure
          </CustomButton>
        </div>
      </div>
      <img src={section.img} alt="" />
    </div>
  );
};

export default AllVehiclesSection;