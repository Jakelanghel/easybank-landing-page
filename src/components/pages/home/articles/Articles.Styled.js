import styled from "styled-components";

export const StyledArticles = styled.section`
  width: 100%;
  background-color: var(--xlt-grayish-blue);

  h2 {
    text-transform: capitalize;
    padding: 1.5rem 0;
  }

  h3 {
  }

  .container-article {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 5px;
    background-color: var(--white);
  }

  img {
    width: 100%;
    border-radius: 5px;
  }

  @media screen and (min-width: 950px) {
    img {
      height: 150px;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1200px) {
    img {
      height: 200px;
    }
  }
  @media screen and (min-width: 1700px) {
    img {
      height: 250px;
    }
  }

  .container-copy {
    text-align: left;
    padding: 1.5rem 2rem;
    padding-bottom: 2.5rem;
  }

  .author {
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    max-width: 350px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.25rem;
  }
`;
