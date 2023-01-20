import React, { FC } from "react";
import emailIcon from "../../Static/img/email-icon2.png";
import linkedInIcon from "../../Static/img/linkedin-icon-circle2.png";
import githubIcon from "../../Static/img/github-icon2.png";
import "./Footer.css";

const Footer: FC = () => (
  <div className="footer-container">
    <div className="footer-subtitle">
      <p>Designed and Built by Jason Kobuchi</p>
    </div>
    <div className="foot-contact-links">
      <div className="email-link foot-single-link">
        <a href="mailto:jekobuchi@gmail.com">
          <img
            src={emailIcon}
            className="email-icon foot-icon"
            alt="email-icon"
          />
        </a>
      </div>

      <div className="linkedin-link foot-single-link">
        <a href="https://www.linkedin.com/in/jason-kobuchi/">
          <img
            src={linkedInIcon}
            className="linkedin-icon foot-icon"
            alt="linkedin-icon"
          />
        </a>
      </div>

      <div className="github-link foot-single-link">
        <a href="https://github.com/kabocha23">
          <img
            src={githubIcon}
            className="github-icon2 foot-icon"
            alt="github-icon2"
          />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
