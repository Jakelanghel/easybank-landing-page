import React from "react";
import { StyledFooter } from "./styled/Footer.Styled";
import { images } from "../constants/images";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-left">
        <div className="container">
          <img src={images.logo_icon} alt="" className="logo" />
          <img src={images.logo_txt} alt="" className="logo filter-white" />
          <div className="container-soc-links">
            <a href="https://www.facebook.com/">
              <img
                src={images.icon_facebook}
                alt="link to facebook"
                className="soc-link"
              />
            </a>

            <a href="https://www.youtube.com/">
              <img
                src={images.icon_youtube}
                alt="link to youtube"
                className="soc-link"
              />
            </a>

            <a href="https://www.twitter.com/">
              <img
                src={images.icon_twitter}
                alt="link to twitter"
                className="soc-link"
              />
            </a>

            <a href="https://www.pinterest.com/">
              <img
                src={images.icon_pinterest}
                alt="link to pinterest"
                className="soc-link"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src={images.icon_instagram}
                alt="link to instagram"
                className="soc-link"
              />
            </a>
          </div>
        </div>

        <div className="container-lists">
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
      </div>

      <div className="footer-right">
        <button className="green-btn">request invite</button>
        <p> © Easybank. All Rights Reserved</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
