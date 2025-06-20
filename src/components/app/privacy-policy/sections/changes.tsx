import Design from "../../design";

const Changes = () => {
  return (
    <section
      id="changes"
      className="relative border-b border-dashed p-6 scroll-mt-16"
    >
      <h1 className="text-[#1D1D1F] text-3xl sm:text-[46px] font-semibold sm:leading-[60px] mb-7.5">
        Changes To Our Privacy Policy
      </h1>{" "}
      <p className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A] mb-7.5">
        The Company reserves the right to change this policy and our Terms of
        Service at any time. We will notify you of significant changes to our
        Privacy Policy by sending a notice to the primary email address
        specified in your account or by placing a prominent notice on our site.
        Significant changes will go into effect 30 days following such
        notification. Non-material changes or clarifications will take effect
        immediately. You should periodically check the Site and this privacy
        page for updates.
      </p>
      <Design />
    </section>
  );
};

export default Changes;
