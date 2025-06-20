import HeroSection from "@/components/app/compare/hero-section";
import ComparisionTable from "@/components/app/compare/comparision-table";
import DifferenceSection from "@/components/app/compare/difference-section";

const CompareWTWI = () => {
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center my-5 sm:my-10">
        <div className="max-w-5xl mx-4 w-full">
          <ComparisionTable />
        </div>
      </div>

      <div className="flex justify-center bg-[#F8F7F5]">
        <div className="max-w-5xl mx-4 py-10 w-full">
          <div className="text-center font-bold text-2xl sm:text-5xl">
            <h1>
              Weight Transmitter
              <br className="md:hidden" />
              {" vs "}
              <br className="md:hidden" />
              Weight Indicator
            </h1>
          </div>

          <DifferenceSection />
        </div>
      </div>
    </div>
  );
};

export default CompareWTWI;
