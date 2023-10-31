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
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.primary};
  min-height: 100dvh;
  background: ${(props) => props.theme.colors.background};
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

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-align: inherit;
}

.solutions__animate {
  position: absolute;
  right: 0;

  @media screen and (min-width: 1200px) {
    right: inherit;
  }
}

.language__animate {
  position: absolute;
  right: -50%;
}
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;