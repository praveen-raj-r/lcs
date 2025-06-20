import CarrersListHeroSection from "@/components/app/careers/carrers-list-hero-section";
import ListingHeader from "@/components/app/careers/listing-header";
import OpeningsList from "@/components/app/careers/openings-list";

const Careers = () => {
  return (
    <div className="mt-[-64px] relative overflow-hidden">
      <CarrersListHeroSection />
      <div className="w-full flex justify-center">
        <div className="max-w-5xl mx-4 w-full py-10">
          <ListingHeader />
          <OpeningsList />
        </div>
      </div>
    </div>
  );
};

export default Careers;
