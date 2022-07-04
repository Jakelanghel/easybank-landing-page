import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --darkBlue: hsl(233, 26%, 24%);
        --limeGreen: hsl(136, 65%, 51%);
        --brightCyan: hsl(192, 70%, 51%);
        --grayishBlue: hsl(233, 8%, 62%);
        --lightGrayish: hsl(220, 16%, 96%);
        --veryLightGray: hsl(0, 0%, 98%);
        --white: hsl(0, 0%, 100%);

    }

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Public Sans', sans-serif;
        }

    * {
        box-sizing: border-box;
    }

    img {
        display: inline-block;
    }

    h1,
    h2,
    h3,
    h4 {
        margin: 0;
        padding: 0;
        color: var(--darkBlue);

    }

    p {
        color: var(--grayishBlue);
        margin: 0;
        padding: 0;
    }

    button:hover {
        cursor: pointer;
    }

    .green-btn {
        width: 200px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        text-transform: capitalize;
        font-weight: 700;
        color: var(--white);
        border: none;
        border-radius: 25px;
        background: rgb(49, 211, 92);
        background: linear-gradient(
          90deg,
          rgba(49, 211, 92, 1) 35%,
          rgba(43, 183, 218, 1) 100%
        );
        margin: 0 auto;
    }

    .filter-white {
        filter: invert(100%) sepia(79%) saturate(13%) hue-rotate(183deg) brightness(103%) contrast(103%);
    }

    
`;

// Typography
// Body Copy
// Font size: 18px
// Font Family: Public Sans
// Weights: 300, 400, 700
