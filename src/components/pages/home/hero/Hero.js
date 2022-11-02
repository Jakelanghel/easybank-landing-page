import React from "react";
import images from "../../../../constants/images";
import Button from "../../../shared/button/Button";
import { StyledHero } from "./Hero.Styled";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container-hero">
        <div className="container-hero-copy">
          <h1 className="title">Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>

        <div className="container-hero-background">
          <img
            src={images.img.mockups}
            alt="smartphones"
            className="img-phones"
          />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
