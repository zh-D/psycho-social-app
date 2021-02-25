import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
li,
ol,
ul {
  list-style: none;
}
button,
input[type="button"] {
  cursor: pointer;
  border: 0 none;
}

a {
  text-decoration: none;
  color: #000;
}
`;
