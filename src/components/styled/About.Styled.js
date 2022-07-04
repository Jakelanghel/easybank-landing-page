import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: var(--lightGrayish);
  text-align: center;
  padding: 3.5rem 1rem;

  .container-about-header {
    h2 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 1.25rem;
    }

    p {
      margin-bottom: 3.5rem;
      line-height: 1.55rem;
    }
  }

  .about-perks {
    h3 {
      font-weight: 400;
      text-transform: capitalize;
      margin: 1rem 0;
    }

    p {
      margin-bottom: 2.5rem;
      line-height: 1.55rem;
    }
  }
`;
