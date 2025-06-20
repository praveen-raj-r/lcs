import Design from "../../design";

const AboutLcs = () => {
  return (
    <section
      id="about-lcs"
      className="relative border-b border-dashed p-6 scroll-mt-20"
    >
      <p className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A]">
        LCS Controls.is committed to maintaining robust privacy protections for
        its users. Our Privacy Policy is designed to help you understand how we
        collect, use and safeguard the information you provide to us and to
        assist you in making informed decisions when using our Service. For
        purposes of this Agreement, “Site” refers to the Company’s website,
        which can be accessed at
        <span className="px-1">
          <a
            target="_blank"
            className="text-[#0792B4]"
            href="https://www.lcscon.com/"
          >
            https://www.lcscon.com/.
          </a>
        </span>{" "}
        “Service” refers to the Company’s services accessed via the Site, in
        which users can order system-on-modules and cloud based applications.
        The terms “we,” “us,” and “our” refer to the Company. “You” refers to
        you, as a user of our Site or our Service. By accessing our Site or our
        Service, you accept our Privacy Policy and Terms of Use found here:
        <span className="px-1">
          <a
            target="_blank"
            className="text-[#0792B4]"
            href="https://www.lcscon.com/privacy-policy"
          >
            https://www.lcscon.com/privacy-policy
          </a>
        </span>
        and you consent to our collection, storage, use and disclosure of your
        Personal Information as described in this Privacy Policy.
      </p>
      <Design />
    </section>
  );
};

export default AboutLcs;
