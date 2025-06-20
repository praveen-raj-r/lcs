/* eslint-disable @typescript-eslint/no-explicit-any */
import Design from "../design";

const LeftSide = ({ sections }: any) => {
  return (
    <div className="sm:w-[70%] border-r border-dashed py-10">
      {sections.map((i: any) => (
        <SectionTemplate id={i.id} heading={i.label}>
          {i.element}
        </SectionTemplate>
      ))}
    </div>
  );
};

const SectionTemplate = ({ id, children, heading }: any) => {
  return (
    <section
      id={id}
      className="relative border-b border-dashed p-6 scroll-mt-20"
    >
      <h1 className="text-[#1D1D1F] text-3xl sm:text-[46px] font-semibold sm:leading-[60px] mb-7.5">
        {heading}
      </h1>
      <div className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A] ">
        {children}
      </div>
      <Design />
    </section>
  );
};

export default LeftSide;
