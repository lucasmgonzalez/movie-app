import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
