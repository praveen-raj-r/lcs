import React from "react";

const WheelLoaderProductShow: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Safety and Efficiency On The Fly – For Wheel Loaders
          </h2>
          <p className="text-lg mb-6">
            Maximize load accuracy and site productivity. Our Advanced Wheel
            Loader Onboard Weighing System is engineered to deliver precise
            payload distribution, boost operator efficiency, and ensure reliable
            performance in demanding work environments.
          </p>
          <p className="text-sm text-gray-300">
            To support seamless operator communication and regulatory
            compliance, the system provides real-time data including: Tare Load
            – Base weight for accurate net load calculation Target Load – Helps
            prevent overloading and underloading Cumulative Weight – Total
            weight handled during shifts or cycles Timer Values – Measures
            loading time to improve cycle efficiency
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="shadow-lg">
            <img
              src="/automotive/onboard-weighing/wheel-loader/device-display.png" // Replace with your actual image path
              alt="Onboard Weighing System"
              className="w-full max-w-md rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelLoaderProductShow;
