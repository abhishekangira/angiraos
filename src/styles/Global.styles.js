import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --taskbar-height: 3.5rem;
    --primary-dark: #2c2c2c;
    --text-dark: #dadada;
    --fsize-regular: 1.3rem;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-family: inherit;
    box-sizing: inherit;
  }
  html,
  body {
    box-sizing: border-box;
    font-family: "Open Sans Condensed", "Helvetica Neue", sans-serif;
    font-size: 62.5%;
    overflow: hidden;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
