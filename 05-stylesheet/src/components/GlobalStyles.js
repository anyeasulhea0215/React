import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`



   /** 이 안에는 CSS 순정 코드를 작성*/


   *:not(.fa){
      font-family:"Noto Sans KR", "NaumGothic", "Malgun Gothic";
   }


   body{
    padding: 10px 20px;
    margin: 0;
   }
`;


export default GlobalStyles;
