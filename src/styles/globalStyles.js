import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
* {
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  a:-webkit-any-link {
    text-decoration: none;
}


`;
export default GlobalStyle;
