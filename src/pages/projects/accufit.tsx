import HeroSection from "@/components/app/projects/accufit/hero-section";

const AccuFit = () => {
  return (
    <div className="mt-[-64px] relative bg-[#F8F7F5] overflow-hidden">
      <HeroSection />
      <img
        src="/dumper-page-bg.png"
        className="w-full h-80 sm:h-auto mt-20 lg:-mt-40 z-1 relative"
      />
    </div>
  );
};
export default AccuFit;
