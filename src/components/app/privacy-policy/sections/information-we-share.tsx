import Design from "../../design";

const InformationWeShare = () => {
  return (
    <section
      id="info-we-share"
      className="relative border-b border-dashed p-6 scroll-mt-16"
    >
      <h1 className="text-[#1D1D1F] text-3xl sm:text-[46px] font-semibold sm:leading-[60px] mb-7.5">
        Information We Share
      </h1>
      <div className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A]">
        <h6
          id="info-we-share-personal"
          className="flex flex-wrap items-center gap-3 text-[#4A4A4A] mb-4 scroll-mt-16"
        >
          <span className="rounded-full bg-[#4A4A4A] size-2"></span>
          <span className="font-semibold">Personal Information</span>
        </h6>
        <p className="mb-4">
          Except as otherwise stated in this Privacy Policy, we do not sell,
          trade, rent or otherwise share for marketing purposes your Personal
          Information with third parties without your consent. We do share
          Personal Information with vendors who are performing services for the
          Company, such as the servers for our email communications who are
          provided access to user’s email address for purposes of sending emails
          from us. Those vendors use your Personal Information only at our
          direction and in accordance with our Privacy Policy. In general, the
          Personal Information you provide to us is used to help us communicate
          with you. For example, we use Personal Information to contact users in
          response to questions, solicit feedback from users, provide technical
          support, and inform users about promotional offers.
        </p>
        <p className="mb-4">
          We may share Personal Information with outside parties if we have a
          good-faith belief that access, use, preservation or disclosure of the
          information is reasonably necessary to meet 4 any applicable legal
          process or enforceable governmental request; to enforce applicable
          Terms of Service, including investigation of potential violations;
          address fraud, security or technical concerns; or to protect against
          harm to the rights, property, or safety of our users or the public as
          required or permitted by law.
        </p>
        <h6
          id="info-we-share-non-personal"
          className="flex flex-wrap items-center gap-3 mb-4 scroll-mt-16"
        >
          <span className="rounded-full bg-[#4A4A4A] size-2"></span>
          <span className="font-semibold">Non-Personal Information</span>
        </h6>
        <p className="mb-4">
          In general, we use Non-Personal Information to help us improve the
          Service and customize the user experience. We also aggregate
          Non-Personal Information in order to track trends and analyze use
          patterns on the Site. This Privacy Policy does not limit in any way
          our use or disclosure of Non-Personal Information and we reserve the
          right to use and disclose such Non-Personal Information to our
          partners, advertisers and other third parties at our discretion.
        </p>
        <p className="mb-4">
          In the event we undergo a business transaction such as a merger,
          acquisition by another company, or sale of all or a portion of our
          assets, your Personal Information may be among the assets transferred.
          You acknowledge and consent that such transfers may occur and are
          permitted by this Privacy Policy, and that any acquirer of our assets
          may continue to process your Personal Information as set forth in this
          Privacy Policy. If our information practices change at any time in the
          future, we will post the policy changes to the Site so that you may
          opt out of the new information practices. We suggest that you check
          the Site periodically if you are concerned about how your information
          is used.
        </p>
      </div>
      <Design />
    </section>
  );
};

export default InformationWeShare;
