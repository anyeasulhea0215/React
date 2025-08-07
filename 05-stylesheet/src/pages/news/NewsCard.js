import React from "react";


import styled from "styled-components";
import breakpoints from "styled-components-breakpoints";

const sizes = {
    sm:600,
    md:768,
    lg:992,
    xl:1200,
};


const mq=breakpoints(sizes);


const NewsCardContainer=styled.ul`

  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .news-item{
    width: 100%;


    ${ mq.minWidth('sm')`
         width:50%
     `}

      ${ mq.minWidth('sm')`
         width:33.3%
     `}

      ${ mq.minWidth('sm')`
         width:25%
     `}

      ${ mq.minWidth('sm')`
         width:20%
     `}

     box-sizing:border-box;
     margin:10px 0;
     padding:0 5px;

     .list-item-link{
        display:block;
        text-decoration: none;
        width:100%;
        height:100%;
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        color: #000;
        transition:all 0.1s;

        &:hover{
            background-color: #eeeeee55;
        }

        .thumbnail{
            display:block;
            width:100%;
            height:150px;
            object-fit:cover;
        }

        .content{
            width:100%;
            box-sizing:border-box;
            padding:10px 15px;
            background-color:#ff01;

            h3{
                background-color:#ff01;
                box-sizing:border-box;
                font-size:18px;
                font-weight:bold;

                margin-top: 0;
                margin-bottom:10px;

               display:-webkit-box;
               overflow:hidden;
               text-overflow:ellipsis;
               -webkit-line-clamp:2;
               -webkit-box-orient:vertical;
            }


            p{

                background-color:#0601;
                font-size:14px;
                margin-top:0;
                margin-bottom:8px;

                display:-webkit-box;
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:3;
                -webkit-box-orient:vertical;
            }

            ul{
              background-color:#0601;
              list-style:none;;
              padding:0;
              margin:0;

              li{
                display:inline-block;
                font-size:12px;

                &:first-child:after{
                    content:'|';
                    display:inline-block;
                    color:#555;
                    padding: 0 5px;
                }
              }
            }
        }
     }

  }
`;


const NewsCard= ( {news} ) => {
    console.group("NewsCard");
    console.log(news);
    console.groupEnd();

    return(
        <NewsCardContainer>
              {news.map((v,i)=>{
                const {url,image,title,description,author,datetime } = v;

                return(
                    <li className="news-item" key={i} >
                             <a className="list-item-link" href={url} target="_blank" >
                                 <img   className="thumbnail" src={image} alt={title} />


                                 <div className="content" >
                                      <h3> {title} </h3>
                                      <p> {description} </p>
                                      <ul>
                                         <li>{author}</li>
                                         <li> {new Date(datetime).toLocaleString() }  </li>
                                      </ul>
                                 </div>
                             </a>
                    </li>
                );
              })}
        </NewsCardContainer>
    );
};


export default NewsCard;