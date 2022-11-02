import styled from "styled-components";

export const ContainerFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1400px) {
    gap: 2rem;
  }
`;
