const SchemaSection = () => {
  return (
    <div className="w-full lg:-mt-10 xl:-mt-20 relative pb-10 md:pb-20">
      {/* === Text Content === */}
      <div className="w-full flex justify-center pb-10">
        <div className="max-w-5xl w-full mx-4">
          <div className="flex flex-col items-center justify-center text-[#1d1d1f] text-center relative z-2">
            <h2 className="sm:text-[38px] font-semibold sm:leading-[48px] max-w-[850px] text-3xl z-1 pb-7">
              Introducing Tower Testing System (TTS) – Your Trusted Tower
              Testing Companion
            </h2>
            <h6 className="leading-[28px] max-w-[663px] text-lg z-1">
              Ensure structural integrity, safety, and regulatory compliance
              with TTS. Monitor real-time tower stress, deflection, and
              environmental parameters with precision. Access instant data,
              generate comprehensive reports, and streamline analysis for faster
              certification. Engineered for telecom and power infrastructure,
              TTS simplifies tower testing with accuracy, efficiency, and
              confidence.
            </h6>
          </div>
        </div>
      </div>

      {/* === Replace Video with Image(s) === */}
      <div className="w-full flex justify-center">
        <img
          src="/projects/tower-testing/Skipper-Test-Station.jpg"
          alt="Wheel Loader  Overview"
          className="w-full max-w-6xl rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default SchemaSection;
