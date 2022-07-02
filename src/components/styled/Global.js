import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --darkBlue: hsl(233, 26%, 24%);
        --limeGreen: hsl(136, 65%, 51%);
        --brightCyan: hsl(192, 70%, 51%);
        --grayishBlue: hsl(233, 8%, 62%);
        --lightGrayish: hsl(220, 16%, 96%);
        --veryLight: hsl(0, 0%, 98%);
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

    h1,
    h2,
    h3,
    h4,
    p {
        margin: 0;
        padding: 0;
    }
`;

// Typography
// Body Copy
// Font size: 18px
// Font Family: Public Sans
// Weights: 300, 400, 700
