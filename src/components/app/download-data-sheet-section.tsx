/* eslint-disable @typescript-eslint/no-explicit-any */
import bg from "@/assets/download-data-sheet-section-bg.png";

const DownloadDataSheetSection = ({
  description = "Access the latest Data Sheet and GA (General Arrangement) Diagram to explore detailed technical specifications, dimensions, and key features of the system. Ensure informed decision-making with all the information at your fingertips.",
  heading = "Download Brochure & GA Diagram",
  children,
}: any) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover bg-center py-20 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-5xl mx-auto w-full px-4">
        <div className="space-y-[50px]">
          <h4 className="text-center font-semibold max-w-[450px] mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
            {heading}
          </h4>

          <p className="text-center text-[#9C9C9D] mt-4 max-w-[650px] mx-auto text-lg">
            {description}
          </p>

          <div className="w-full flex justify-center gap-10 mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadDataSheetSection;
