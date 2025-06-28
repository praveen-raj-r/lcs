import React from "react";
import deviceDisplay from "@/assets/onboard-weighing/wheel-loader/device-display.png";

const WheelLoaderProductShow: React.FC = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-[#BFBFBF] md:text-lg space-y-6">
          <h2 className="text-3xl md:text-[38px] md:leading-[48px] font-medium text-[#F8F7F5]">
            Safety and Efficiency On The Fly – For Wheel Loaders
          </h2>
          <p>
            Maximize load accuracy and site productivity. Our Advanced Wheel
            Loader Onboard Weighing System is engineered to deliver precise
            payload distribution, boost operator efficiency, and ensure reliable
            performance in demanding work environments.
          </p>
          <p>
            To support seamless operator communication and regulatory
            compliance, the system provides real-time data including: Tare Load
            – Base weight for accurate net load calculation Target Load – Helps
            prevent overloading and underloading Cumulative Weight – Total
            weight handled during shifts or cycles Timer Values – Measures
            loading time to improve cycle efficiency
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="shadow-lg">
            <img src={deviceDisplay} className="w-full max-w-md rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelLoaderProductShow;
