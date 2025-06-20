import PolicyHeader from "../policy-header";

const HeroSection = () => {
  return (
    <div className="bg-black w-full pt-[64px]">
      <PolicyHeader heading="Privacy Policy" />
      <div className="flex justify-center">
        <div className="max-w-5xl w-full mx-4 py-10">
          <p className="text-[#848484] text-lg sm:text-2xl text-center">
            <span className="text-white">Last Updated:</span> This Privacy
            Policy was last updated on{" "}
            <span className="text-white">February 17, 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
