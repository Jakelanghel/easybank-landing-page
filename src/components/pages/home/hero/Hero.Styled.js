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
    /* z-index: -1; */
  }

  .img-phones {
    width: 325px;
    position: absolute;
    top: -105px;
    left: 50%;
    transform: translateX(-50%);
  }

  .container-hero-copy {
    order: 2;
    padding: 2rem 1.5rem;
    padding-bottom: 6rem;
  }

  p {
    margin-bottom: 2rem;
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

  @media screen and (min-width: 950px) {
    .container-hero {
      flex-direction: row;
      position: relative;
      height: 515px;
    }

    .container-hero-copy {
      width: 50%;
      order: 1;
      padding: 5rem 0;
      padding-left: 4rem;
    }

    .container-hero-background {
      order: 2;
      max-width: 600px;
      height: 650px;
      background-image: url(${images.backgrounds.bgIntroDesktop});
      background-size: cover;
      background-position: bottom -30px left -30px;
      position: absolute;
      right: -75px;
      top: -115px;
    }

    .img-phones {
      width: 550px;
      position: absolute;
      top: 60px;
      left: 12%;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 1100px) {
    .container-hero-copy {
      padding-left: 7rem;
    }
  }

  @media screen and (min-width: 1200px) {
    height: 630px;

    .container-hero-background {
      max-width: 700px;
      height: 790px;
      right: -75px;
      top: -130px;
    }

    .img-phones {
      width: 650px;
      top: 65px;
      left: 15%;
    }

    .container-hero-copy {
      padding: 10rem 0;
      padding-left: 9rem;
    }
  }

  @media screen and (min-width: 1400px) {
    height: 625px;

    .container-hero-background {
      max-width: 900px;
      background-position: bottom 10px left 60px;

      height: 828px;
      right: -75px;
      top: -130px;
    }

    .img-phones {
      width: 700px;
      top: 40px;
      left: 22%;
    }
    .container-hero-copy {
      padding-left: 12rem;
    }
    p {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 1700px) {
    height: 715px;

    .container-hero-background {
      max-width: 1100px;
      background-position: bottom -10px left 200px;
      height: 900px;
      right: -75px;
      top: -130px;
    }

    .img-phones {
      width: 750px;
      top: 65px;
      left: 35%;
    }

    .container-hero-copy {
      padding-left: 12rem;
    }
  }
`;
