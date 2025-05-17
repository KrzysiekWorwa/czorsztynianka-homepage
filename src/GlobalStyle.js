import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        padding-top: 60px;
        background: #FBFBFE;
        font-family: "Poppins", sans-serif;
        color: #252525;
        overflow-x: hidden;
    }
`;