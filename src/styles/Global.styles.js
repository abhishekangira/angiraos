import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --taskbar-height: 3.5rem;
    --primary-dark: rgba(44, 44, 44, .7);
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
    width: 100%;
    height: 100%;
    color: var(--text-dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    color: inherit;
  }
  .cover {
    width: 100%;
    height: 100%;
  }
`;
