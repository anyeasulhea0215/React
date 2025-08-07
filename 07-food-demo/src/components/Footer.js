import React,{memo} from "react";

import styled from 'styled-components';

import mq from '../components/MediaQuery';

import gondol from '../assets/img/gondol.jpg';
import workshop from '../assets/img/workshop.jpg';


const FooterContainer=styled.div`
  //  background-color:rgba(55, 212, 252, 0.33);


   border-top: 1px solid #dddddd;

   .container{

    max-width: 1200px;
    margin: auto;
    display: flex;


     ${mq.maxWidth('md')`
         flex-direction: column;
     `}

     .footer-item{
        flex: 1;
        padding: 16px;

        h3{
            font-size: 24px;
            font-weight: 700px;
            margin: 22px 0;
            text-transform: uppercase;

            ${mq.maxWidth('md')`
                font-size: 20px;
                font-weight: 500px;
                margin: 12px 0;
                `}
        }

        &:nth-child(1){
           p{
            font-size:15px;
            line-height: 150%;
            font-weight: 300;
           }
        }

        &:nth-child(2){
             a{
                display:flex;
                margin:20px 0;
                padding:0 10px;

                img{
                    width:65px;
                    height:65px;
                    object-fit: cover;
                    margin-right: 10px;
                }

                .blog-post-title{
                    font-weight: bold;
                    margin-bottom: 5px;
                    font-size: 15px;
                }


                .blog-post-content{
                    line-height:1.2%;
             }
        }
    }

     &:nth-child(3){

       .tags{
        li{
            display: inline-block;

            padding: 5px 10px;
            background-color: #616161;
            color: #ffffff;

            margin-bottom: 8px;
            margin-right: 5px;
            font-size: 14px;

            &.black{
                background-color: #000000;
            }

        }
       }
    }
  }

}
`;

 const Footer= memo(() => {
    const image=[workshop,gondol];
    const tags=[
        "New York","Dinner","Salmon","France","Drinks", "Ideas", "Flavoes" ,"Cuisine", "dressing","Fried", "fish","Duck"
        ]

    return (
        <FooterContainer>
             <div className="container">

                  {/** 왼쪽영역 */}
                <div  className="footer-item">
                   <h3>Footer</h3>
                   <p>
                     Prasent toncodunt sed tellus ut rutrum . SEr jssjdn porta lectus , ulticied congue gravida diam non fringll
                   </p>
                </div>

                {/** 가운데 영역 */}
                <div className="footer-item">
                    <h3>Tags</h3>
                    <ul className="blog-posts">

                        {image.map((v,i) => {
                            return (
                                <li key={i}>
                                    <a href="#">
                                        <img src={v} alt={`Blog post ${i+1}`} />
                                        <div className="text-box">
                                            <h4 className="blog-post-title" >{`Blog post ${i+1}`}</h4>
                                            <p className="blog-post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/** 오른쪽 영역 */}
                <div className="footer-item">
                    <h3>Popular Tags</h3>
                    <ul className="tags">
                         {tags.map((v,i)=>{
                            if( i == 0){
                                return(
                                    <li key={i} className="black" ></li>
                                )
                            } else{
                                return (
                                    <li key={i}>{v}</li>
                                )
                            }
                         })}
                    </ul>
                </div>

             </div>
        </FooterContainer>
    );

 });


 export default Footer;