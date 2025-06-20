import { Marquee } from "../magicui/marquee";
import godrej from "@/assets/partners/godrej.png";
import henkel from "@/assets/partners/henkel.png";
import harrisons from "@/assets/partners/harrisons.png";
import kinetic from "@/assets/partners/kinetic.png";
import mobil from "@/assets/partners/mobil.png";
import tiGlobal from "@/assets/partners/t-i-global.png";
import transline from "@/assets/partners/transline.png";
import wipro from "@/assets/partners/wipro.png";
import veedol from "@/assets/partners/veedol.png";

const partners = [
  godrej,
  henkel,
  harrisons,
  kinetic,
  mobil,
  tiGlobal,
  transline,
  wipro,
  veedol,
];

const PartnersScroll = () => {
  return (
    <div className="my-10 text-[#1D1D1F]">
      <p className="text-center text-2xl md:text-4xl capitalize font-semibold ">
        Our Happy Customers
      </p>

      <p className="text-center text-lg md:text-xl mt-2">
        We are proud to be associated with these esteemed companies
      </p>
      <div className="pt-10 overflow-hidden">
        <Marquee className="[--duration:20s]">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex w-40 sm:w-64 justify-center items-center gap-2"
            >
              <img src={partner} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default PartnersScroll;
