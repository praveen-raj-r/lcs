import bg from "@/assets/download-data-sheet-section-bg.png";
import CustomButton from "./custom-button";

const DownloadDataSheetSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-no-repeat bg-cover bg-center py-20 px-4 md:px-8 lg:px-16 xl:px-24"
    >
      <div className="max-w-5xl mx-auto w-full px-4">
        <div className="space-y-[50px]">
          <h4 className="text-center font-semibold max-w-[450px] mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
            Download your Data sheet and GA Diagram Here..!
          </h4>
          <p className="text-center text-[#9C9C9D] mt-4 max-w-[450px] mx-auto text-lg">
            Accurate data transmission in real time, precise monitoring and
            control
          </p>
          <div className="w-full flex justify-center gap-10 mt-8">
            <CustomButton>Data Sheet</CustomButton>
            <CustomButton>GA Diagram</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadDataSheetSection;
