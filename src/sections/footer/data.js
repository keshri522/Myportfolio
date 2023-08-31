import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineDribbble } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.facebook.com/rahul.keshri.5011",
    icon: <AiOutlineFacebook />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/rahul-keshri-814bb8221/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 3, link: "https://github.com/keshri522", icon: <AiFillGithub /> },
];
