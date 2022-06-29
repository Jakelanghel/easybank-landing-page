import React from "react";
import { images } from "../constants/images";
import { StyledMain } from "./styled/Main.Styled";

export const Main = () => {
  return (
    <StyledMain>
      <div className="container-copy">
        <h1>next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
      </div>

      <div className="container-main-img">
        <img src={images.img_mockups} alt="" className="img-absolute" />
      </div>
    </StyledMain>
  );
};
