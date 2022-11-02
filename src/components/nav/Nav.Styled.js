import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 2;
  overflow: hidden;

  padding: 0.75rem 2rem;
  padding-right: 1rem;
  background-color: var(--white);

  .container-menu,
  .container-btn {
    display: none;
  }

  .menu-btn {
    padding: 1rem;
  }

  @media screen and (min-width: 950px) {
    padding: 2rem 4rem;

    .container-menu-btn {
      display: none;
    }

    .container-btn {
      display: block;
    }

    .container-menu {
      width: 350px;
      display: flex;
      justify-content: space-between;
    }

    .nav-link {
      text-decoration: none;
      color: var(--grayish-blue);
    }

    .nav-link:hover {
      cursor: pointer;
    }
  }
`;
