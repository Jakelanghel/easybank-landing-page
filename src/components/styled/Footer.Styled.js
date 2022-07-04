import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--darkBlue);
  text-align: center;
  padding: 2rem;

  .logo {
    margin-bottom: 1rem;
  }

  .container-soc-links {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .soc-link {
    padding: 1rem;
  }

  .container-lists {
    margin-bottom: 2.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 1.25rem;

      a {
        text-decoration: none;
        font-size: 1rem;
        text-transform: capitalize;
        font-weight: 400;
        color: var(--white);
      }
    }
  }

  .green-btn {
    margin-bottom: 2.5rem;
  }
`;
