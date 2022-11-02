import React from "react";
import { StyledFooter } from "./Footer.Styled";
import Button from "../shared/button/Button";
import images from "../../constants/images";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-footer-links">
        <div className="container-left">
          <div className="container">
            <div className="container-logo">
              <img src={images.logos.logo} alt="" className="footer-logo" />
              <img src={images.logos.brand} alt="" className="footer-brand" />
            </div>

            <div className="container-soc-links">
              <a href="https://www.facebook.com/" className="soc-link">
                <img src={images.icons.facebook} alt="facebook link" />
              </a>
              <a href="https://www.youtube.com/" className="soc-link">
                <img src={images.icons.youtube} alt="youtube link" />
              </a>
              <a href="https://twitter.com/" className="soc-link">
                <img src={images.icons.twitter} alt="twitter link" />
              </a>
              <a href="https://www.pinterest.com/" className="soc-link">
                <img src={images.icons.pinterest} alt="pinterest link" />
              </a>
              <a href="https://www.instagram.com/" className="soc-link">
                <img src={images.icons.instagram} alt="instagram link" />
              </a>
            </div>
          </div>

          <nav className="container">
            <a href="#" className="footer-nav-link">
              about us
            </a>
            <a href="#" className="footer-nav-link">
              contact
            </a>
            <a href="#" className="footer-nav-link">
              blog
            </a>
          </nav>

          <nav className="container">
            <a href="#" className="footer-nav-link">
              careers
            </a>
            <a href="#" className="footer-nav-link">
              support
            </a>
            <a href="#" className="footer-nav-link">
              privacy policy
            </a>
          </nav>
        </div>
      </div>

      <div className="container-right">
        <div className="footer-cta">
          <div className="container-btn">
            <Button />
          </div>
          <p className="copyright">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
