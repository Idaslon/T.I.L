import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  *, input, button {
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

`;
