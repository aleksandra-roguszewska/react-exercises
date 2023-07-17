import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
}

body{
  background: #fff;
  color: hsl(192, 100%, 9%);
  font-family: "Poppins", sans-serif;
  font-size: 1.15em;
  margin: 0;

}
`;

export default GlobalStyles;
