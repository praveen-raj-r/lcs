/* eslint-disable @typescript-eslint/no-explicit-any */
const HamBurgerMenu = ({ isOpen, setIsOpen }: any) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-0.75 size-7 focus:outline-none bg-destructive rounded-full justify-center items-center cursor-pointer"
    >
      <span
        className={`h-0.5 w-3.5 bg-white rounded transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-[5px]" : ""
        }`}
      />
      <span
        className={`h-0.5 w-3.5 bg-white rounded transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`h-0.5 w-3.5 bg-white rounded transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-[5px]" : ""
        }`}
      />
    </div>
  );
};

export default HamBurgerMenu;
