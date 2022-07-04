import React from "react";
import { images } from "../constants/images";
import { StyledMain } from "./styled/Main.Styled";

const Main = () => {
  return (
    <StyledMain>
      <div className="container-copy">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="green-btn">request invite</button>
      </div>

      <div className="img-bg">
        <div className="container-main-img">
          <img src={images.img_mockups} alt="" className="img-absolute" />
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
