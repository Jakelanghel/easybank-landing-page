import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        /* Primary  */
        --dark-blue: hsl(233, 26%, 24%);
        --lime-green: hsl(136, 65%, 51%);
        --bright-cyan: hsl(192, 70%, 51%);
        /* Neutral */
        --grayish-blue: hsl(233, 8%, 62%);
        --lt-grayish-blue: hsl(220, 16%, 96%);
        --xlt-grayish-blue: hsl(0, 0%, 98%);
        --white: hsl(0, 0%, 100%);
        }

        * {
            font-family: 'Public Sans', sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-size: 16px;
            color: var(--grayish-blue);
            text-align: center;

        }

        h1,h2,h3,h4 {
            font-weight: 400;
            color: var(--dark-blue);
            margin: 0 auto;
            margin-bottom: 1rem;

        }

        h1 {
            font-size: 2.5rem;
            max-width: 300px;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.25rem;
            text-transform: capitalize;
        }

        p {
            line-height: 1.75rem;
            max-width: 350px;
            margin: 0 auto;
        }

        .section-padding {
            padding: 4rem 1.5rem;
        }
        @media screen and (min-width: 950px){
            body {
                text-align: left;
            }

            h1,h2,h3,h4,p {
                margin: 0;
            }

            h1,h2,h3,h4 {
                margin-bottom: 1rem;
            }

            p {
                max-width: 400px;
            }
        }
       
`;

export default GlobalStyles;
