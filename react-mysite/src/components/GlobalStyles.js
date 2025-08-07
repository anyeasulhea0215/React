import { createGlobalStyle } from "styled-components";

const GlobalStyles=createGlobalStyle`

    *:not(.fa){
        font-family:"Noto Sans KR", "NaumGothic", "Malgun Gothic";
    box-sizing: border-box;
    font-size: 16px;
    }

    *{
        box-sizing:border-box;
    }

    q{
        text-decoration: none;
        color: #000;
    }

    ul{
        list-style: none;
        padding:0;
        margin: 0;
    }

    :root{
    --my-color-black:#000000;
    --my-color-dark-grey:#444444;
    --my-color-gray:#616161;
    --my-color-gray-op:#61616177;
    --my-color-light-gray:#eeeeee;
    --my-color-white:#f1f1f1;
    --my-color-black-op:#00000011;
    --my-color-green:#0f0;
}

a{
    text-decoration: none;
    color: var(--my-color-black);
}

.social-list{
    display: flex;
    justify-content: center;

    a{
        color: var(--my-color-white);
        display: block;
        font-size: 35px;
        margin: 20px 10px 40px 10px;
        &:hover{
            color: var(--my-color-green);
        }
    }
}

address{
    color: var(--my-color-white);
    font-size: 18px;
}

`;


export default GlobalStyles;