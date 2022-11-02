import React from "react";
import images from "../../constants/images";
import { StyledNav } from "./Nav.Styled";
import Button from "../shared/button/Button";

const Nav = () => {
  return (
    <StyledNav>
      <div className="container-logo">
        <img src={images.logos.logo_brand} alt="easy bank" />
      </div>

      <div className="container-menu">
        <a className="nav-link" href="#">
          home
        </a>
        <a className="nav-link" href="#">
          about
        </a>
        <a className="nav-link" href="#">
          contact
        </a>
        <a className="nav-link" href="#">
          blog
        </a>
        <a className="nav-link" href="#">
          carrers
        </a>
      </div>

      <div className="container-btn">
        <Button />
      </div>

      <div className="container-menu-btn">
        <img
          src={images.icons.hamburger}
          alt="open mobile menu btn"
          className="menu-btn"
        />
      </div>
    </StyledNav>
  );
};

export default Nav;
