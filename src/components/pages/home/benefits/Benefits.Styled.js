import styled from "styled-components";

export const StyledBenefits = styled.section`
  width: 100%;
  background-color: var(--lt-grayish-blue);

  span {
    padding: 0 10px;
  }

  h2 {
    max-width: 200px;
  }

  header {
    margin-bottom: 2rem;
  }

  img {
    margin: 2rem 0;
  }

  @media screen and (min-width: 950px) {
    h2 {
      max-width: none;
    }

    p {
      max-width: 600px;
    }

    .container-perk > p {
      max-width: 300px;
    }

    span {
      padding: 0;
    }
  }
`;
