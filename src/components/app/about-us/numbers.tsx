const Numbers = () => {
  return (
    <div className="bg-[#FFF1D0] w-full flex justify-center">
      <div className="max-w-5xl w-full flex justify-center">
        <div className="grid sm:grid-cols-3 py-10 sm:py-4 gap-10">
          {[
            { text1: "1995", text2: "Incorporate year" },
            {
              text1: new Date().getFullYear() - 1995,
              text2: "Years of Service",
            },
            {
              text1: "110+",
              text2: "Members in Organization",
            },
          ].map((number) => (
            <div key={number.text2} className="flex flex-col items-center">
              <span className="font-medium text-[36px] leading-[36px] bg-clip-text text-transparent bg-[linear-gradient(90deg,#D90429_28.31%,#0792B4_76.1%)]">
                {number.text1}
              </span>
              <span className="font-normal text-[18px] leading-[18px] text-center">
                {number.text2}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
