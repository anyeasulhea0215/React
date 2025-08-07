import React,{memo} from "react";

import styled from 'styled-components';
import mq from './MediaQuery';

const HeaderContainer=styled.header`

//background-color:#ffff0055;


  .jumbotron{
    padding: 80px;
    text-align: center;
    background-color: #1abc9c;
    color: white;

    h1{
        font-size: 46px;
        font-weight: 700;
        margin-bottom: 15px;
    }

    p{
        font-size: 20px;
    }

    ${mq.maxWidth('sm') `

      padding:40px;

      h1{
         font-size:32px;
         margin-bottom:7px;
      }

      p{
       font-size:12px;
      }
    `}
  }
`;

const Header= memo ( () =>{
    return(
        <HeaderContainer>
           <div className="jumbotron">
                <h1>My Website</h1>
                <p>React.js layout Tmplate </p>
           </div>
        </HeaderContainer>
    );
});


export default Header;
