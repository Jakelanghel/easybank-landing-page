import React from "react";
import { StyledAbout } from "./styled/About.Styled";
import { images } from "../constants/images";

const About = () => {
  return (
    <StyledAbout>
      <div className="container-about-header">
        <h2>Why choose Easybank?</h2>

        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="about-perks">
        <div className="container-perk">
          <img src={images.icon_online} alt="" className="perk-icon" />
          <h3>online banking</h3>
          <p className="perk-copy">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="container-perk">
          <img src={images.icon_online} alt="" className="perk-icon" />
          <h3>simple budgeting</h3>
          <p className="perk-copy">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="container-perk">
          <img src={images.icon_online} alt="" className="perk-icon" />
          <h3>fast onboarding</h3>
          <p className="perk-copy">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="container-perk">
          <img src={images.icon_online} alt="" className="perk-icon" />
          <h3>open API</h3>
          <p className="perk-copy">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
