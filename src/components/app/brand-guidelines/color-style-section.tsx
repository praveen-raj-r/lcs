/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import CopyToClipboard from "./copy-to-clipboard";

const ColorStyleSection = () => {
  return (
    <div className="flex justify-center pt-10 sm:pt-20">
      <div className="max-w-5xl mx-4 w-full">
        <div className="flex flex-col items-center gap-10 justify-between">
          <div className="md:w-[700px]">
            <h3 className="text-[30px] md:text-[40px] text-center font-medium text-[#CC0000]">
              Color Style
            </h3>
            <p className="text-[20px] font-normal leading-[24px] text-center">
              In order to ensure the prominence and legibility of the identity,
              a clear space around the identity is required at all times. The
              '8px' height of the identity 8px equals '8, and the clear space
              around all four sides of the identity is determined by '1x'.
            </p>
          </div>

          <div className="flex md:flex-row flex-col md:h-[600px] max-w-[1055px] w-full gap-3 md:gap-0">
            <div className="flex flex-col h-full md:w-[35%] gap-3 md:gap-0">
              <FloralWhite className="h-[50%] w-full" />
              <EerieBlack className="h-[50%] w-full" />
            </div>
            <div className="flex flex-col md:w-[48%] h-full gap-3 md:gap-0">
              <FireEngineRed className="h-[60%] w-full" />
              <PapayaWhip className="h-[40%] w-full" />
            </div>
            <BondiBlue className="h-full md:w-[17%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const EerieBlack = ({ className }: any) => {
  return (
    <div
      className={cn(
        "bg-[#1D1D1F] gap-5 md:gap-0 text-white border border-[#CFCFCF] px-5 py-10 rounded-[16px] flex flex-col justify-between",
        className
      )}
    >
      <p className="text-[32px] font-normal leading-[32px]">Eerie Black</p>
      <div className="flex justify-center">
        <CopyToClipboard text="#1D1D1F" />
      </div>
      <div className="text-[20px] leading-[20px] space-y-3">
        <p>#1D1D1F</p>
        <p>Dark Shade Color</p>
      </div>
    </div>
  );
};

const FloralWhite = ({ className }: any) => {
  return (
    <div
      className={cn(
        "bg-[#FCF9F1] gap-5 md:gap-0 text-[#1D1D1F] border border-[#CFCFCF] px-5 py-10 rounded-[16px] flex flex-col justify-between",
        className
      )}
    >
      <p className="text-[32px] font-normal leading-[32px]">Floral White</p>
      <div className="flex justify-center">
        <CopyToClipboard text="#FCF9F1" />
      </div>
      <div className="text-[20px] leading-[20px] space-y-3">
        <p>#FCF9F1</p>
        <p>Light Shade Color</p>
      </div>
    </div>
  );
};

const PapayaWhip = ({ className }: any) => {
  return (
    <div
      className={cn(
        "bg-[#FFF1D0] text-[#1D1D1F] border border-[#D2D2D2] px-5 py-10 rounded-[16px] flex flex-col justify-between gap-4",
        className
      )}
    >
      <p className="text-[32px] font-normal leading-[32px]">Papaya Whip</p>
      <div className="flex justify-center">
        <CopyToClipboard text="#FFF1D0" />
      </div>
      <div className="text-[20px] leading-[20px] space-y-3">
        <p>#FFF1D0</p>
        <p>Accent Color </p>
      </div>
    </div>
  );
};

const FireEngineRed = ({ className }: any) => {
  return (
    <div
      className={cn(
        "bg-[#D90429] gap-5 md:gap-0 text-white rounded-[16px] px-5 py-10 flex flex-col justify-between",
        className
      )}
    >
      <div className="flex flex-col gap-3 md:justify-between">
        <h4 className="text-[32px] leading-[32px] font-normal">
          Fire Engine <br className="md:block hidden" /> Red
        </h4>
        <p className="text-left">
          Primary Brand <br /> Color
        </p>
      </div>
      <div className="flex justify-center">
        <CopyToClipboard text="#D90429" />
      </div>
      <div>
        <p className="font-normal text-xl">#D90429</p>
      </div>
    </div>
  );
};

const BondiBlue = ({ className }: any) => {
  return (
    <div
      className={cn(
        "bg-[#0792B4] text-white px-5 gap-5 md:gap-0 py-10 rounded-[16px] flex flex-col justify-between",
        className
      )}
    >
      <p className="text-[32px] font-normal leading-[32px]">
        Bondi <br /> Blue
      </p>
      <div className="flex justify-center items-center">
        <CopyToClipboard text="#0792B4" />
      </div>
      <div className="text-[20px] leading-[20px] space-y-3">
        <p>#0792B4</p>
        <p>Secondary color</p>
      </div>
    </div>
  );
};
export default ColorStyleSection;
