const UsageGuidelinesSection = () => {
  return (
    <div className="flex justify-center pt-10 sm:pt-20">
      <div className="max-w-5xl mx-4 w-full">
        <div className="flex md:flex-row flex-col-reverse gap-10 justify-between">
          <div className="w-full flex md:justify-start justify-center">
            <img src="/brand-guidelines/logo.svg" className="h-[200px]" />
          </div>

          <div className="w-full">
            <h3 className="text-[30px] sm:text-[40px] font-medium text-left sm:text-right text-[#CC0000]">
              Usage Guidelines
            </h3>
            <p className="text-[20px] font-normal leading-[24px] text-left sm:text-right">
              In order to ensure the prominence and legibility of the identity,
              a clear space around the identity is required at all times. The
              '8px' height of the identity 8px equals '8, and the clear space
              around all four sides of the identity is determined by '1x'.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageGuidelinesSection;
