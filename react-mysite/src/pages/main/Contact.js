import React,{memo} from "react";

import styled from "styled-components";

import mq from '../../components/MediaQuery';

import parallax3 from '../../assets/img/parallax3.jpg';

const ContactContainer=styled.div`
           .title{
             width: 100%;
              height: 40vh;
             display: flex;
             background-size: cover;
             background-position: center center;
              background-attachment: fixed;
              background-image:url(${parallax3});

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
        margin: 30px auto;
        display: flex;
        flex-wrap: wrap;

        .map{
            width: 50%;
            height: 50vh;
            padding: 20px;

          /*  @media lg{
                width: 100%;
            }*/

            img{
                width: 100%;
            }
         }

         .contact-info{
            width: 50%;
            padding: 20px;

            ${mq.maxWidth('lg')`
            width:100%;
            `}

            ul{
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                height: 100%;

                li{
                    font-size: 26px;
                    color: var(--my-color-gray);
                    padding-left: 35px;
                    line-height: 1.5;

                    i{
                        margin-right: 15px;
                    }
                }
            }
         }
       }

`;


const Contact=memo ( () =>{
     return(
        <ContactContainer>
           <div className="title">
            <div className="hello">
                <h1>contact</h1>
                <p> Address,Email,Phone</p>
            </div>
         </div>


         <div className="content">
            <div className="map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.354808830913!2d127.02583067632077!3d37.499549027965585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca145f1cb8b83%3A0x4c0cbabb56df1e93!2z66mU6rCA7Iqk7YSw65SUSVTslYTsubTrjbDrr7g!5e0!3m2!1sko!2skr!4v1753429529967!5m2!1sko!2skr"
    style={{ border: 0, width: '100%', height: '100%' }}
   allowFullScreen  loading="lazy"  referrerPolicy="no-referrer-when-downgrade" ></iframe>
            </div>

            <div className="contact-info">
                <ul>
                     <li>
                        <i className="fa-solid fa-location-dot"></i>
                        서울시 강남구 저꺼 어쩌구
                     </li>
                     <li>
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:02-588-9991">Phone: 02-588-0001</a>
                     </li>
                     <li>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="tel:02-588-9991">Phone: 02-588-0001</a>
                     </li>
                </ul>
            </div>
         </div>

        </ContactContainer>
     );
});

export default Contact;