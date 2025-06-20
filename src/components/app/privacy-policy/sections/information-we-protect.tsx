import Design from "../../design";

const InformationWeProtect = () => {
  return (
    <section
      id="info-protect"
      className="relative border-b border-dashed p-6  scroll-mt-16"
    >
      <h1 className="text-[#1D1D1F] text-3xl sm:text-[46px] font-semibold sm:leading-[60px] mb-7.5">
        How We Protect Information
      </h1>{" "}
      <p className="sm:text-lg font-normal sm:leading-[28px] text-[#4A4A4A] mb-7.5">
        We implement security measures designed to protect your information from
        unauthorized access. Your account is protected by your account password
        and we urge you to take steps to keep your personal information safe by
        not disclosing your password and by logging out 5 of your account after
        each use. We further protect your information from potential security
        breaches by implementing certain technological security measures
        including encryption, firewalls and secure socket layer technology.
        However, these measures do not guarantee that your information will not
        be accessed, disclosed, altered or destroyed by breach of such firewalls
        and secure server software. By using our Service, you acknowledge that
        you understand and agree to assume these risks.
      </p>
      <Design />
    </section>
  );
};
export default InformationWeProtect;
