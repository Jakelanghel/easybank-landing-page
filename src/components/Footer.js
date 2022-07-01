import React from "react";
import { StyledFooter } from "./styled/Footer.Styled";
import { images } from "../constants/images";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-left">
        <div className="container">
          <img src={images.logo} alt="" className="logo" />
          <div className="container-soc-links">
            <img
              src={images.icon_facebook}
              alt="link to facebook"
              className="soc-link"
            />
            <img
              src={images.icon_youtube}
              alt="link to youtube"
              className="soc-link"
            />
            <img
              src={images.icon_twitter}
              alt="link to twitter"
              className="soc-link"
            />
            <img
              src={images.icon_pinterest}
              alt="link to pinterest"
              className="soc-link"
            />
            <img
              src={images.icon_instagram}
              alt="link to instagram"
              className="soc-link"
            />
          </div>
        </div>

        <ul>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">careers</a>
          </li>
          <li>
            <a href="#">support</a>
          </li>
          <li>
            <a href="#">privacy policy</a>
          </li>
        </ul>
      </div>

      <div className="footer-right">
        <button>request invite</button>
        <p> © Easybank. All Rights Reserved</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
