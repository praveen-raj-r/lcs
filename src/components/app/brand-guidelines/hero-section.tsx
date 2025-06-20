import CustomButton from "@/components/app/custom-button";
import lcsLogo from "@/assets/lcs-logo.svg";
const HeroSection = () => {
  const handleDownload = () => {
    console.log("test");

    const link = document.createElement("a");
    link.href = "/brand-guidelines/LCS+Media+Kit.zip"; // path relative to public folder
    link.download = "LCS+Media+Kit.zip";
    link.click();
  };

  return (
    <div className="relative">
      <div className="flex z-10">
        <div
          className="w-full bg-no-repeat bg-cover h-[500px] md:h-[708px] bg-center"
          style={{
            backgroundImage: `url(/brand-guidelines/brand-guidelines.svg)`,
          }}
        ></div>
      </div>

      <div className="top-[64px] absolute w-full h-[calc(100%-64px)]">
        <div className="flex justify-center size-full">
          <div className="max-w-5xl mx-4 w-full flex flex-col sm:flex-row justify-center">
            <div className="flex justify-center w-full text-white items-center">
              <div className="flex flex-col gap-10 items-center">
                <h1 className="text-[30px] md:text-[60px] font-medium text-center">
                  LCS Brand Guidelines
                </h1>
                <img className="h-[60px] md:h-[117.93px]" src={lcsLogo} />
                <p className="text-xl leading-6 text-center sm:w-[389px] font-normal">
                  This simple kit is for using the LCS logo in conjunction with
                  our trademark guidelines.
                </p>
                <div className="flex justify-center">
                  <CustomButton
                    onClick={() => handleDownload()}
                    rotate="rotate-90"
                    className="bg-white text-[#D90429] hover:bg-red-500 hover:text-white"
                  >
                    Download
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
