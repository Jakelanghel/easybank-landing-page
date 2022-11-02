import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 700;
  color: var(--white);

  background: rgb(49, 211, 92);
  background: linear-gradient(
    90deg,
    rgba(49, 211, 92, 1) 35%,
    rgba(43, 183, 218, 1) 100%
  );

  padding: 1rem 2.5rem;
  margin: 0 auto;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  @media screen and (min-width: 950px) {
    margin: 0;
    /* font-size: 0.95rem;
    padding: 0.75rem 2rem; */
  }
`;
