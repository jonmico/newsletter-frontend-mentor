import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: hsl(4, 100%, 67%);
    --color-dark-slate-grey: hsl(234, 29%, 20%);
    --color-charcoal-grey: hsl(235, 18%, 26%);
    --color-grey: hsl(231, 7%, 60%);
    --color-grey-light: hsl(231, 7%, 85%);
    --color-white: hsl(0, 0%, 100%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--color-charcoal-grey);
  }

  input,
  button {
    font-family: 'Roboto', sans-serif;
  }

`;

export default GlobalStyles;
