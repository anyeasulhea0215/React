import React,{memo} from "react";

import styled from "styled-components";

import mq from '../components/MediaQuery';


const HeaderContainer=styled.div`

  /*
  Header 영역
*/
    position: absolute;
   top: 0;
    left: 0;
    right: 0;

    z-index: 999;
    width: 100%;

    .menu{
        max-width: 1800px;
        margin: auto;
        display: flex;

        li{
            text-align: center;

              ${mq.maxWidth('lg')`
                width:20%;
              `}

              /*li-search*/
            &:last-child{
                margin-left: auto;
                span{
                    display: none;

                    /* media
                    @media only screen and (max-width:992px){
                         display: block;
                    }*/

                    ${mq.maxWidth('lg')`
                     display:block;
                    `}
                }
            }

            a{
               display: block;
               font-size: 18px;
               font-weight: 500;
               padding: 20px;

               &:hover{
                background-color: var(--my-color-black-op);
               }

               span{
                margin-left: 10px;
                font-size: 17px;

                    /* media
                      span 태그가 block 요소로 작동해 한줄 전체를 차지함.
                    */
                    ${mq.maxWidth('lg')`
                        display: block;
                        margin-top: 5px;
                        margin-left: 0;
                        font-size: 12px;
                        font-weight: 400;
                    `}
               }
            }
        }

    }
`;


const Header=memo(()=>{

    return(
        <HeaderContainer>
           <ul className="menu">
            <li>
                <a href="#"><i className="fa fa-home"></i> <span>HOME</span></a>
            </li>

            <li>
                <a href="#"><i className="fa fa-user"></i> <span>ABOUT</span></a>
            </li>

            <li>
                <a href="#"><i className="fa fa-th"></i> <span>PORTFOLIO</span></a>
            </li>

            <li>
                <a href="#"><i className="fa fa-envelope"></i> <span>Concat</span></a>
            </li>

            <li>
                <a href="#"><i className="fa fa-search"></i> <span>SEARCH</span></a>
            </li>
        </ul>

        </HeaderContainer>
    );
});


export default Header;