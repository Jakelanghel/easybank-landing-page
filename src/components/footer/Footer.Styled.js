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

  .container-footer-links {
    margin: 1.5rem 0;
  }

  .footer-nav-link {
    width: 150px;
    display: block;
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
  }
`;
