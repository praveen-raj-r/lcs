import Design from "../../design";

const CustomerRights = () => {
  return (
    <section
      id="rights"
      className="relative border-b border-dashed p-6  scroll-mt-16"
    >
      <h1 className="text-[#1D1D1F] text-3xl sm:text-[46px] font-semibold sm:leading-[60px] mb-7.5">
        Your Rights Regarding The Use Of Your Personal Information
      </h1>
      <div className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A]">
        <p className="mb-7.5">
          You have the right at any time to prevent us from contacting you for
          marketing purposes. When we send a promotional communication to a
          user, the user can opt out of further promotional communications by
          following the unsubscribe instructions provided in each promotional
          e-mail. You can also indicate that you do not wish to receive
          marketing communications from us in the{" "}
          <a
            className="text-[#0792B4]"
            href="https://www.lcscon.com/contact-us"
            target="_blank"
          >
            https://www.lcscon.com/contact-us
          </a>{" "}
          of the Site. Please note that notwithstanding the promotional
          preferences you indicate by either unsubscribing or opting out in the
          <a
            className="text-[#0792B4]"
            href="https://www.lcscon.com/contact-us"
            target="_blank"
          >
            https://www.lcscon.com/contact-us
          </a>{" "}
          of the Site, we may continue to send you administrative emails
          including, for example, periodic updates to our Privacy Policy.
        </p>
      </div>
      <Design />
    </section>
  );
};

export default CustomerRights;
