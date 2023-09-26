import { links, socials } from "./data";
import "./footer.css";
import { React } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container" data-aos="fade-up">
        {/* <ul className="nav__menu">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}>{fLink.title}</a>
            </li>
          ))}
        </ul> */}
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>
          Made with <span style={{ color: "red" }}>❤</span> by Rahul keshri
        </small>
      </div>
    </footer>
  );
};

export default Footer;
