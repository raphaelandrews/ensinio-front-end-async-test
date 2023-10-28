'use client'

import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
  }
  h1, h2, p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;