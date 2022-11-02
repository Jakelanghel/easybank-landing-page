import React, { useState, useEffect } from "react";
import images from "../../constants/images";
import { StyledNav } from "./Nav.Styled";
import Button from "../shared/button/Button";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((oldState) => !oldState);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.screen.width;
      width > 950 ? setNavIsOpen(true) : setNavIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    console.log(navIsOpen);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledNav>
      <div className="container-logo">
        <img src={images.logos.logo_brand} alt="easy bank" />
      </div>

      {navIsOpen && (
        <div className="overlay">
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
        </div>
      )}

      <div className="container-btn">
        <Button />
      </div>

      <div className="container-menu-btn">
        <img
          src={navIsOpen ? images.icons.closeIcon : images.icons.hamburger}
          alt="open mobile menu btn"
          className="menu-btn"
          onClick={toggleNav}
        />
      </div>
    </StyledNav>
  );
};

export default Nav;
