/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomButton from "@/components/app/custom-button";

const AllVehiclesSection = ({ section }: any) => {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 space-y-10">
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
          <CustomButton
            className={`bg-[${section.textColor}] hover:bg-[${section.textColor}]`}
          >
            Request a quote
          </CustomButton>
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
