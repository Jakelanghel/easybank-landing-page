import { StyledNav } from "./styled/Nav.Styled";
import { images } from "../constants/images";

import React from "react";

const Nav = () => {
  return (
    <StyledNav>
      <img src={images.logo} alt="easy bank" className="logo" />

      <ul className="nav-list">
        <li className="nav-link">home</li>
        <li className="nav-link">about</li>
        <li className="nav-link">contact</li>
        <li className="nav-link">blog</li>
        <li className="nav-link">careers</li>
      </ul>

      <button className="nav-cta">request invite</button>
    </StyledNav>
  );
};

export default Nav;
