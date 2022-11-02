import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 3rem 0;

  .container-logo {
    margin-bottom: 1.5rem;
  }

  .footer-brand {
    filter: invert(92%) sepia(93%) saturate(0%) hue-rotate(202deg)
      brightness(106%) contrast(106%);
  }

  .container-soc-links {
    width: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .soc-link {
    padding: 1rem;
  }

  .footer-nav-link {
    width: 140px;
    display: block;
    /* justify-content: center;
    align-items: center; */
    font-size: 1rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--white);
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }

  .copyright {
    margin-top: 2rem;
    color: var(--grayish-blue);
  }

  @media screen and (min-width: 950px) {
    display: flex;
    justify-content: space-between;
    padding: 3rem;

    .container-left {
      display: flex;
      gap: 3rem;
    }

    .container-logo {
      width: 150px;
      margin: 0 auto;
      margin-bottom: 3.5rem;
      margin-top: 1rem;
    }

    .container-soc-links {
      width: 200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .soc-link {
      padding: 0.5rem;
    }

    .container-btn {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .copyright {
      margin-top: 1rem;
    }
  }
`;
