import ImageCard from "./image-card";

const Founders = () => {
  return (
    <div className="w-full flex justify-center pb-10">
      <div className="max-w-5xl w-full mx-4">
        <h1 className="text-center text-[#D90429] text-2xl sm:text-[36px] sm:leading-[36px] font-medium">
          Founders
        </h1>
        <p className="text-center font-[400] sm:text-[26px] sm:leading-[36px] mt-10 max-w-[800px] mx-auto">
          LCS was founded in 1995. With a strong vision and unwavering
          commitment to excellence, our company has a rich history spanning over
          two decades
        </p>
        <div className="flex justify-center">
          <div className="grid sm:grid-cols-2 place-items-center gap-10 max-w-4xl mt-5">
            {[
              {
                name: "Mr. Abdul Majeeth",
                role: "Co-Founder and Technical Director",
                imageUrl: "/about-us/img-1.png",
              },
              {
                name: "Mr. Gowri Sankar",
                role: "Co-Founder and Managing Director",
                imageUrl: "/about-us/img-1.png",
              },
            ].map((founder) => (
              <ImageCard
                key={`${founder.name}${founder.role}`}
                image={founder}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
