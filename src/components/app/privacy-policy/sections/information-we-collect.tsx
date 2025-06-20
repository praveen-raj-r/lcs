import Design from "../../design";

const InformationWeCollect = () => {
  return (
    <section
      id="info-we-collect"
      className="relative border-b border-dashed p-6 scroll-mt-16"
    >
      <h1 className="text-[#1D1D1F] text-3xl sm:text-[46px] font-semibold sm:leading-[60px] mb-7.5">
        How We Use and Share Information
      </h1>
      <div className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A]">
        <p className="mb-7.5">
          We collect “Non-Personal Information”. Non-Personal Information
          includes information that cannot be used to personally identify you,
          such as anonymous usage data, general demographic information we may
          collect, referring/exit pages and URLs, platform types, preferences
          you submit and preferences that are generated based on the data you
          submit and number of clicks.
        </p>
        <h6
          id="info-we-collect-via-technology"
          className="flex flex-wrap items-center gap-3 mb-4 scroll-mt-16"
        >
          <span className="rounded-full bg-[#4A4A4A] size-2"></span>
          <span className="font-semibold">
            Information collected via Technology
          </span>
        </h6>
        <p className="mb-7.5">
          To activate the Service you do not need to submit any Personal
          Information other than your email address. To use the Service
          thereafter, you do need to submit further Personal Information
          However, in an effort to improve the quality of the Service, we track
          information provided to us by your browser or by our software
          application when you view or use the Service, such as the website you
          came from (known as the “referring URL”), the type of browser you use,
          the device from which you connected to the Service, the time and date
          of access, and other information that does not personally identify
          you. We track this information using cookies, or small text files
          which include an anonymous unique identifier. Cookies are sent to a
          user’s browser from our servers and are stored on the user’s computer
          hard drive. Sending a cookie to a user’s browser enables us to collect
          Non Personal information about that user and keep a record of the
          user’s preferences when utilizing our services, both on an individual
          and aggregate basis. For example, the Company may use cookies to
          collect the following information: different web pages you visited,
          your location, duration spent on each web page, information you've
          volunteered, such as your name and interests, language you select, and
          so on The Company may use both persistent and session cookies;
          persistent cookies remain on your computer after you close your
          session and until you delete them, while session cookies expire when
          you close your browser. For example, we store a persistent cookie to
          track information, settings, preferences, or sign-on credentials that
          the user has previously saved
        </p>
        <h6
          id="info-we-collect-from-account"
          className="flex flex-wrap items-center gap-3 mb-4 scroll-mt-16"
        >
          <span className="rounded-full bg-[#4A4A4A] size-2"></span>
          <span className="font-semibold">
            Information you provide us by registering for an account
          </span>
        </h6>
        <p className="mb-7.5">
          In addition to the information provided automatically by your browser
          when you visit the Site, to become a subscriber to the Service you
          will need to create a personal profile. You can create a profile by
          registering with the Service and entering your email address, and 3
          creating a user name and a password. By registering, you are
          authorizing us to collect, store and use your email address in
          accordance with this Privacy Policy
        </p>
        <h6
          id="info-we-collect-children-privacy"
          className="flex flex-wrap items-center gap-3 mb-4 scroll-mt-16"
        >
          <span className="rounded-full bg-[#4A4A4A] size-2"></span>
          <span className="font-semibold">Children’s Privacy</span>
        </h6>
        <p className="mb-7.5">
          The Site and the Service are not directed to anyone under the age of
          13. The Site does not knowingly collect or solicit information from
          anyone under the age of 13, or allow anyone under the age of 13 to
          sign up for the Service. In the event that we learn that we have
          gathered personal information from anyone under the age of 13 without
          the consent of a parent or guardian, we will delete that information
          as soon as possible. If you believe we have collected such
          information, please contact us at
          <a className="text-[#0792B4]" href="mailto:sales@lcscon.com">
            {" "}
            sales@lcscon.com
          </a>
        </p>
      </div>
      <Design />
    </section>
  );
};

export default InformationWeCollect;
