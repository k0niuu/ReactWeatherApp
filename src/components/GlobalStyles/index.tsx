import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    color: white;
    
  }

  #root {
    background: rgb(245,255,0);
    background: linear-gradient(140deg, rgba(245,255,0,0.8) 0%, rgba(0,212,255,1) 25%, rgba(16,16,191,0.8) 100%);
  }
`;

export default GlobalStyles;
