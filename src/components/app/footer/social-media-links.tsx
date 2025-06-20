import { Facebook, Linkedin, Youtube } from "lucide-react";

const socialMediaLinks = [
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/company/lcs-controls-private-limited/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/LCSControls.in/",
    icon: Facebook,
  },
  {
    label: "Youtube",
    link: "https://www.youtube.com/@LCSControls/featured",
    icon: Youtube,
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="w-full flex max-h-10 justify-center sm:justify-end sm:mb-0 mb-3">
      {socialMediaLinks.map((sl) => (
        <a
          key={sl.label}
          target="_blank"
          href={sl.link}
          className="leading-[0] py-0.5 px-2"
        >
          <sl.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
