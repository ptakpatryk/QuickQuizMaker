import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Happy REM's */
html {
    font-size: 62.5%;
}

/* Set core body defaults */
body {
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color: #252C4A;
  color: #9EA3BC;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a {
    text-decoration: none;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
`;

export default GlobalStyle;
