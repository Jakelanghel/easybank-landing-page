import styled from "styled-components";

export const StyledArticles = styled.section`
  text-align: center;
  padding: 5em 1rem;
  padding-bottom: 3rem;
  background-color: var(--veryLightGray);

  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  .container-articles {
    text-align: left;

    .container-article {
      background-color: var(--white);
      border-radius: 10px;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 5px;
      }

      .container-copy {
        padding: 2rem;
        padding-right: 1rem;
        margin-bottom: 2rem;

        .author {
          font-size: 0.75rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        h4 {
          font-size: 1.1rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.85rem;
        }
      }
    }
  }
`;
