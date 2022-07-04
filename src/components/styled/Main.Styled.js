import styled from "styled-components";
import { images } from "../../constants/images";
const x = images.mobile_bgIntro;
console.log(x);

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  z-index: 1;

  .container-copy {
    order: 2;
  }

  .img-bg {
    order: 1;
    min-height: 300px;
    background-image: url(${images.mobile_bgIntro});
    background-repeat: no-repeat;
    background-position: center -45px;
    background-size: cover;
    margin-bottom: 1rem;
    position: relative;
  }

  .img-absolute {
    width: 100%;
    max-width: 415px;
    padding: 0 1rem;
    position: absolute;
    top: -36%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .container-copy {
    max-width: 400px;
    text-align: center;
    padding: 1rem;
    margin: 0 auto;

    h1 {
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 1.25rem;
    }

    p {
      margin-bottom: 2.5rem;
      line-height: 1.55rem;
    }

    button {
      margin-bottom: 5rem;
    }
  }

  @media screen and (min-width: 375px) {
    .img-bg {
      min-height: 325px;
    }
  }

  @media screen and (min-width: 400px) {
    .img-bg {
      min-height: 340px;
    }
  }
  @media screen and (min-width: 425px) {
    .img-bg {
      min-height: 350px;
    }
  }
`;
