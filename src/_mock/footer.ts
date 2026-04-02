import { IconType } from "react-icons";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export interface FooterSection {
  title: string;
  links: string[];
}

export interface SocialLink {
  icon: IconType;
  href: string;
}

export const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { icon: FaTwitter, href: "#" },
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaGithub, href: "#" },
];
