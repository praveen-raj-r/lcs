import ImageCard from "./image-card";

const leaders = [
  [
    {
      name: "Mr. Gowri Sankar",
      role: "Chief Executive Officer",
      imageUrl: "/about-us/img-1.png",
    },
    {
      name: "Mr. Venkatesh",
      role: "Chief Operating Officer",
      imageUrl: "/about-us/img-1.png",
    },
    {
      name: "Mr. Sai Krishnan",
      role: "Sales Head Indicators & Controllers",
      imageUrl: "/about-us/img-1.png",
    },
  ],
  [
    {
      name: "Mr. Gowri Sankar",
      role: "Chief Executive Officer",
      imageUrl: "/about-us/img-1.png",
    },
    {
      name: "Mr. Sai Krishnan",
      role: "Sales Head Indicators & Controllers",
      imageUrl: "/about-us/img-1.png",
    },
  ],
];
const Leadership = () => {
  return (
    <div className="w-full flex justify-center pb-10">
      <div className="max-w-5xl w-full mx-4">
        <h1 className="text-center text-[#D90429] text-2xl sm:text-[36px] sm:leading-[36px] font-medium">
          Leadership
        </h1>

        <div className="flex flex-col items-center justify-center mt-4">
          <div className="grid lg:grid-cols-3 place-items-center gap-4 max-w-4xl mt-5">
            {leaders[0].map((founder) => (
              <ImageCard
                key={`${founder.role}${founder.name}`}
                image={founder}
              />
            ))}
          </div>
          <div className="grid lg:grid-cols-2 place-items-center gap-4 max-w-4xl mt-5">
            {leaders[1].map((founder) => (
              <ImageCard
                key={`${founder.imageUrl}${founder.name}${founder.role}`}
                image={founder}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
