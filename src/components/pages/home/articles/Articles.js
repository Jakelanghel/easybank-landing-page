import React from "react";
import images from "../../../../constants/images";
import { ContainerFlex } from "../../../shared/containers/flex/ContainerFlex";
import { StyledArticles } from "./Articles.Styled.js";
const Articles = () => {
  return (
    <StyledArticles className="section-padding">
      <header>
        <h2>latest articles</h2>
      </header>
      <ContainerFlex>
        <div className="container-article">
          <img src={images.img.currency} alt="" />

          <div className="container-copy">
            <p className="author">By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p className="preview-txt">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="container-article">
          <img src={images.img.restaurant} alt="" />
          <div className="container-copy">
            <p className="author">By Wilson Hutton</p>
            <h3>Treat yourself without worrying about money</h3>
            <p className="preview-txt">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>
        <div className="container-article">
          <img src={images.img.plane} alt="" />
          <div className="container-copy">
            <p className="author">By Wilson Hutton</p>
            <h3>Take your Easybank card wherever you go</h3>
            <p className="preview-txt">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>
        <div className="container-article">
          <img src={images.img.confetti} alt="" />
          <div className="container-copy">
            <p className="author">By Claire Robinson</p>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p className="preview-txt">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </ContainerFlex>
    </StyledArticles>
  );
};

export default Articles;
