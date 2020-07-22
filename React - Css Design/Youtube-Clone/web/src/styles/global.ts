import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    font-size: 16px;
    color: #333;
  }

  body, #root {
    min-height: 100vh;
  }

  *, button, input {
    background: none;
    border: 0;
    outline: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    font-family: Arial, Helvetica, sans-serif;

    cursor: pointer;
  }

`;
