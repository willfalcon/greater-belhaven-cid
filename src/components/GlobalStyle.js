import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
    min-width: initial !important;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: 1.6rem;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, textarea, select, button {
    font-family: ${({ theme }) => theme.font.family};
  }

  a {
    color: ${({ theme }) => theme.red};
  }

`;

export default GlobalStyle;