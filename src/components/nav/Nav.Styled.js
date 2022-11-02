import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 2;

  padding: 0.75rem 2rem;
  padding-right: 1rem;
  background-color: var(--white);

  .container-btn {
    display: none;
  }

  .container-menu-btn {
    z-index: 3;
  }

  .menu-btn {
    padding: 1rem;
  }

  /* ======================================== */
  /* MOBILE DROP DOWN MENU ================== */
  /* ======================================== */

  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: var(--overlay);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .container-menu {
    width: 90%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 2rem 0;
    background: var(--white);

    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav-link {
    font-size: 1.15rem;
    text-transform: capitalize;
    text-decoration: none;
    padding: 1rem;
    margin-bottom: 0.5rem;
    color: var(--dark-blue);
  }

  @media screen and (min-width: 950px) {
    padding: 2rem 4rem;

    .overlay {
      width: 350px;
      height: auto;
      background-color: transparent;
      position: static;
      top: 0;
      left: 0;
      z-index: 2;
    }

    .container-menu-btn {
      display: none;
    }

    .container-btn {
      display: block;
    }

    .container-menu {
      position: static;
      width: 350px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
      background: transparent;
      transform: translateX(0%);

      margin: 0;
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
