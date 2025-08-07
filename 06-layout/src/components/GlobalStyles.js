import {createGlobalStyle} from "styled-components";



const GlobalStyles = createGlobalStyle`
  *:not(.fa){

    font-family: "Noto Sans KR","NaumGothic","Malgun Gothic";
  }


  *{
    box-sizing: border-box;
  }
`;


export default GlobalStyles;