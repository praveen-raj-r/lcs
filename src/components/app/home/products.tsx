import HoverCard from "./hover-card";

const Products = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#F8F7F5]">
      <div className="flex max-w-5xl mx-4 w-full py-10 flex-col">
        <HeadingSection />
        <ProductsGrid />
      </div>
    </div>
  );
};

const ProductsGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-10">
      {[
        {
          productName: "Wheel Loader",
          badge: "Off-Road Vehicles",
          description: `PAYLOAD-WL is an onboard weighing device to measure the weight of material that is lifted by the wheel loader. The system captures the weight during lifting of the bucket.`,
          link: "",
        },
        {
          productName: "Excavator",
          badge: "Heavy Machinery",
          description: `Payload-EX is an onboard weighing device to measure the weight of material that is lifted by the wheel loader. The system captures the weight during lifting of the bucket. The system operates through hydraulics of the lifting cylinder. An advance algorithm is used to measure the weight accurately`,
          link: "",
        },
        {
          productName: "Dumper",
          badge: "Off-Road Vehicles",
          description: `Dump trucks are used in mining & construction sector. Load measuring system(LMS) is a production monitoring tool designed to maximize the efficiency and productivity of the dump truck.`,
          link: "",
        },
        {
          productName: "Tipper",
          badge: "Off-Highway Vehicles",
          description:
            "Optimize payload management with our advanced tipper monitoring system. Real-time data for smarter decisions and efficient operations",
          link: "",
        },
      ].map((card) => (
        <HoverCard key={card.description} card={card} />
      ))}
    </div>
  );
};

const HeadingSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h4 className=" flex items-center gap-4.25">
        <span className="flex justify-center items-center size-9">
          <img src="/cpu.png" />
        </span>
        <span className="text-[#1D1D1F] font-medium text-3xl sm:text-4xl leading-[40px]">
          Products
        </span>
      </h4>
      <h6 className="text-[40px] sm:text-[56px] leading-[80px] font-medium text-center">
        Automotive
      </h6>
      <p className="text-center text-[#6A6A6A] text-[30px] leading-[36px]">
        OnBoard Monitoring, Weighing and Telematics
      </p>
    </div>
  );
};

export default Products;
