import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-right: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;

  background-color: var(--white);

  .logo {
    height: 100%;
  }

  .nav-toggle {
    width: 60px;
    padding: 1rem;
  }

  .nav-list {
    position: absolute;
    transform: translateY(-200%);
  }

  button {
    display: none;
  }
`;
