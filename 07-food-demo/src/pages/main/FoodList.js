import React,{memo} from "react";

import styled from "styled-components";

import mq from "../../components/MediaQuery";


import cherries from '../../assets/img/cherries.jpg';
import croissant from '../../assets/img/croissant.jpg';
import popsicle from '../../assets/img/popsicle.jpg';
import salmon from '../../assets/img/salmon.jpg';
import sandwich from '../../assets/img/sandwich.jpg';
import steak from '../../assets/img/steak.jpg';
import steak2 from '../../assets/img/steak2.jpg';
import wine from '../../assets/img/wine.jpg';

const FoodListContainer=styled.div`

   //background-color: #ff660055;
   /**gallery */

   .food-gallery{
    display: flex;
    flex-wrap: wrap;

    .food-item{
        flex:none;
        width: 25%;
        padding: 20px 10px;

        ${mq.maxWidth('md')`
          width:50%;
        `}

        ${mq.maxWidth('sm')`
          width:100%;
        `}

        a{
            display:block;

            .img-wrapper{
                width:100%;
                height:360px;

                overflow:hidden;

                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    transition:all 0.3s ease-in-out;
                }

             }

             &:hover img{
                transform:scale(1.1,1.1);
             }

             .food-content{
                padding:15px 10px;
                text-align:center;

                h2{
                    font-size:22px;
                    margin-bottom:12px;
                    line-height:130%;
                }


                p{
                    font-size:16px;
                    font-weight:300;
                    line-height:120%;
                }
             }

        }
    }
   }
`;


const FoodList=memo ( () =>{

    const images=[cherries,croissant,popsicle,salmon,sandwich,steak,steak2,wine];

    return(
        <FoodListContainer>
            <ul className="food-gallery">
                {images.map((v,i) => {
                    return (
                        <li   className="food-item" key={i}>
                            <a  href="#">
                                <div className="img-wrapper" >
                                    <img  src={images[i]} alt={`Food Item ${i+1}`} />
                                </div>
                                <div  className="food-content">
                                    <h2>Food Item {i+1}</h2>
                                    <p>
                                        jUst renaos lorem  ispumtext parsenr inci dei insp eire
                                    </p>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </FoodListContainer>
    );
});


export default FoodList;
