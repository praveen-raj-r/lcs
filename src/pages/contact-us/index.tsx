import FormContainer from "@/components/app/contact-us/form-container";
import LocationMap from "@/components/app/contact-us/location-map";
import Partners from "@/components/app/contact-us/partners";
import TalkToOurTeam from "@/components/app/contact-us/talk-to-our-team";
import Design from "@/components/app/design";

const ContactUs = () => {
  return (
    <div className="mt-[-64px] relative">
      <div
        className="h-50 absolute w-full top-0 bg-no-repeat bg-cover z-1"
        style={{ backgroundImage: "url(/contact-us-bg.png)" }}
      ></div>
      <div className="relative flex justify-center z-2">
        <div className="max-w-5xl w-full grid sm:grid-cols-2 mx-4 mt-30  bg-[#F8F7F5] rounded-[10px]">
          <div className="flex flex-col justify-between">
            <div>
              <TalkToOurTeam />
              <div className="relative border-t border-dashed border-[#C5C4C4]">
                <Design />
              </div>
            </div>
            <div className="block sm:hidden">
              <FormContainer />
            </div>
            <div className="sm:block hidden">
              <Partners />
            </div>
          </div>
          <div className="block sm:hidden">
            <Partners />
          </div>
          <div className="sm:block hidden">
            <FormContainer />
          </div>
        </div>
      </div>
      <LocationMap />
    </div>
  );
};

export default ContactUs;
