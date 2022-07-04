import React from "react";
import { images } from "../constants/images";
import { StyledArticles } from "./styled/Articles.Styled";

const Articles = () => {
  return (
    <StyledArticles>
      <h2>latest articles</h2>

      <div className="container-articles">
        <div className="container-article">
          <img src={images.img_currency} alt="" />

          <div className="container-copy">
            <p className="author">By Claire Robinson</p>
            <h4>Receive money in any currency with no fees</h4>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
      </div>
      <div className="container-articles">
        <div className="container-article">
          <img src={images.img_restaurant} alt="" />
          <div className="container-copy">
            <p className="author">By Wilson Hutton</p>
            <h4>Treat yourself without worrying about money</h4>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>
      </div>
      <div className="container-articles">
        <div className="container-article">
          <img src={images.img_plane} alt="" />
          <div className="container-copy">
            <p className="author">By Wilson Hutton</p>
            <h4>Take your Easybank card wherever you go</h4>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>
      </div>
      <div className="container-articles">
        <div className="container-article">
          <img src={images.img_confetti} alt="" />
          <div className="container-copy">
            <p className="author">By Claire Robinson</p>
            <h4>Our invite-only Beta accounts are now live!</h4>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </StyledArticles>
  );
};

export default Articles;
