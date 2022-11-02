import styled from "styled-components";
import images from "../../../../constants/images";

export const StyledHero = styled.section`
  .container-hero {
    display: flex;
    flex-direction: column;
  }

  .container-hero-background {
    order: 1;
    width: 100%;
    height: 300px;
    background-image: url(${images.backgrounds.bgIntroMobile});
    background-size: 100%;
    background-position: top -75px center;
    background-repeat: no-repeat;
    position: relative;
  }

  .img-phones {
    width: 325px;
    position: absolute;
    top: -105px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 400px) {
    .img-phones {
      width: 375px;
      top: -125px;
    }

    .container-hero-background {
      width: 100%;
      height: 325px;
      background-position: top -55px center;
    }
  }

  .container-hero-copy {
    order: 2;
    padding: 2rem 1.5rem;
    padding-bottom: 6rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 950px) {
    .container-hero {
      flex-direction: row;
      position: relative;
    }

    .container-hero-copy {
      width: 50%;
      order: 1;
      padding: 5rem 0;
      padding-left: 4rem;
    }

    .container-hero-background {
      order: 2;
      max-width: 550px;
      height: 555px;
      background-image: url(${images.backgrounds.bgIntroDesktop});
      background-size: cover;
      background-position: bottom -30px left -30px;
      position: absolute;
      right: -75px;
      top: -115px;
    }

    .img-phones {
      width: 450px;
      position: absolute;
      top: 75px;
      left: 20%;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 1100px) {
    .container-hero-copy {
      padding-left: 10rem;
    }
  }
`;
