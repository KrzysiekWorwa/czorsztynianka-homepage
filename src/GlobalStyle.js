import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        padding-top: 90px;
        background: #FBFBFE;
        font-family: "Poppins", sans-serif;
        color: #252525;
        overflow-x: hidden;

              @media (max-width: 767px) {
                padding-top: 60px;
  }
    }
`;