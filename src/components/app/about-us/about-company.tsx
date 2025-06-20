const AboutCompany = () => {
  return (
    <div
      className="relative w-full flex justify-center my-5 md:max-h-[950px] bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/about-us/Rectangle.png)" }}
    >
      <div className="max-w-5xl w-full mx-4 flex items-center md:items-end md:flex-row flex-col gap-10 py-50">
        <div className="flex justify-end sm:w-auto w-full">
          <div className="bg-[#D9D9D9] h-[400px] sm:h-[545px] w-[80%] sm:w-[402px] rounded-[40px] relative">
            <div
              className={`absolute border-[22px] border-white bg-[#D9D9D9] size-[80%] aspect-square 
                rounded-[40px] left-[-40px] bottom-[10%]`}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4 sm:text-white pb-10">
            <h5 className="flex items-center gap-2">
              <span className="bg-[#0792B4] rounded-full size-7.5 flex justify-center items-center">
                <img
                  className="size-6"
                  src="/about-us/about-company-icon.png"
                />
              </span>
              <span className="text-[24px] leading-[36px] font-medium">
                About Company
              </span>
            </h5>
            <p className="text-left max-w-[568px] text-[20px] sm:text-[30px] sm:leading-[36px]">
              Since our inception in 1995, LCS Controls has been on a remarkable
              journey of growth and success. Over the years, we have evolved
              from a small startup to a renowned industry player, serving a
              diverse range of clients and industries.
            </p>
            <ul className="flex flex-col gap-4.25">
              {[
                "Our strong technical and domain application expertise in automation",
                "Trusted partners - not just capable but reliable - proven, word of mouth reference",
                `We have a strong technology "partner" relationship with our customers with inhouse R&D dept rather than a typical vendor / buyer relationship`,
                "Commitment and dedication to quality and reliability second to none.",
                "Industry leading make with best in class build quality for all our products",
              ].map((o) => (
                <li key={o} className="flex items-center gap-4">
                  <span className="size-4 sm:size-7.5 rounded-full aspect-square bg-[#CC0000] md:bg-[#D9D9D9]"></span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
