import React,{memo} from "react";

import styled from "styled-components";

import mq from '../../components/MediaQuery';

import p1 from '../../assets/img/p1.jpg';
import p2 from '../../assets/img/p2.jpg';
import p3 from '../../assets/img/p3.jpg';
import p4 from '../../assets/img/p4.jpg';
import p5 from '../../assets/img/p5.jpg';
import p6 from '../../assets/img/p6.jpg';
import p7 from '../../assets/img/p7.jpg';
import p8 from '../../assets/img/p8.jpg';

import parallax2 from '../../assets/img/parallax2.jpg';


const PortfolidContainer=styled.div`

          .title{
              width: 100%;
               height: 40vh;
              display: flex;
              background-size: cover;
              background-position: center center;
               background-attachment: fixed;
              background-image: url(${parallax2});

     .hello{
         /*  display:flex가 부모에 적용되 있으면 margin:auto는 세로축으로 작용*/
         margin: auto;

         color: var(--my-color-white);
         text-align: center;
         text-transform: uppercase;
         padding: 30px 50px;

         /*@media only screen and (max-width:992px) {
             padding: 20px 30px;
         }*/
         ${mq.maxWidth('lg')`
            padding:20px 30px;
         `}

         h1{
             font-size: 36px;
             font-weight: 600;
             white-space: nowrap;
             margin-bottom: 10px;

             /*media*/
             ${mq.maxWidth('lg')`
                 font-size:26px;
             `}

         }

         p{
             font-size: 20px;
             font-weight: 300;

             /*media */
             ${mq.maxWidth('lg')`
              font-size:16px;
           `}

          }
       }

     }


     .content{
        max-width: 1200px;
        margin: auto;
        padding: 60px 20px;

        @media lg{
            padding:30px 10px;
        }

        h1{
            text-align: center;
            font-size: 40px;
            margin-bottom: 32px;
            color: var(--my-color-gray);


            @media lh{
               font-size: 30px;
               margin-bottom: 24px;
            }
         }

         p{
            text-align: center;
            margin-bottom: 24px;
            font-style: 20px;
            color: var(--my-color-gray);
            font-weight: 300;
            font-style: italic;

            @media lg {
                font-size: 16px;
                margin-bottom: 20px;
            }
         }

         .gallery{
            display: flex;
            flex-wrap: wrap;
            margin-top: 50px;

            li{
                width: 25%;
                padding: 10px;

                ${mq.maxWidth('lg')`
                width:50%;
                `}

                a{
                    display: block;
                    overflow: hidden;

                    img{
                        width: 100%;
                        transform: all 0.3s ease-in-out;

                        &:hover{
                            transform: scale(1.2,1.2);
                        }
                    }
                }
            }
         }
       }



`;


const Portfolio=memo (() =>{

    return(
        <PortfolidContainer>
            <div class="title">
               <div class="hello">
                <h1>portfolio</h1>
                <p> This is my work.</p>
               </div>
             </div>


         <div class="content">


            <h1>MyWorkd</h1>

            <p> here are some og my ltes lroer lorler </p>

            <p>Click on th eimage to make bigger</p>

            <ul class="gallery">
                <li>
                    <a href="#"><img src={p1} /></a>
                </li>
                <li>
                    <a href="#"><img src={p2} /></a>
                </li>
                <li>
                    <a href="#"><img src={p3} /></a>
                </li>
                <li>
                    <a href="#"><img src={p4}  /></a>
                </li>
                <li>
                    <a href="#"><img src={p5} /></a>
                </li>
                <li>
                    <a href="#"><img src={p6} /></a>
                </li>
                <li>
                    <a href="#"><img src={p7} /></a>
                </li>
                <li>
                    <a href="#"><img src={p8} /></a>
                </li>
            </ul>
         </div>
        </PortfolidContainer>
    );
});

export default  Portfolio;