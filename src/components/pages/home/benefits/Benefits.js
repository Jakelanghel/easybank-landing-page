import React from "react";
import { ContainerFlex } from "../../../shared/containers/flex/ContainerFlex";
import { StyledBenefits } from "./Benefits.Styled";
import images from "../../../../constants/images";

const Benefits = () => {
  return (
    <StyledBenefits className="section-padding">
      <header>
        <h2>
          Why choose <span>Easybank?</span>
        </h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </header>
      <ContainerFlex>
        <div className="container-perk">
          <img src={images.icons.online} alt="online" />
          <h3>online banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="container-perk">
          <img src={images.icons.budgeting} alt="budgeting" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="container-perk">
          <img src={images.icons.onboarding} alt="onboarding" />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="container-perk">
          <img src={images.icons.api} alt="api" />
          <h3>Open API </h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </ContainerFlex>
    </StyledBenefits>
  );
};

export default Benefits;
