import React,{memo} from "react";

import styled from "styled-components";

import mq from '../../components/MediaQuery';

import parallax from '../../assets/img/parallax1.jpg';
import avatarHat from '../../assets/img/avatar_hat.jpg';

const IntroduceContainer=styled.div`


         .title{
           width: 100%;
            height: 40vh;
           display: flex;
           background-size: cover;
           background-position: center center;
            background-attachment: fixed;
           background-image: url(${parallax});

  .hello{
      /*  display:flex가 부모에 적용되 있으면 margin:auto는 세로축으로 작용*/
      margin: auto;

      color: var(--my-color-white);
      text-align: center;
      text-transform: uppercase;
      padding: 30px 50px;
       background-color: var(--my-color-gray);

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

    .title{
            height: 100vh;

            .hello{

            }
        }


         .about-me{
        max-width: 1100px;
        margin: auto;
        padding: 65px 40px;

        ${mq.maxWidth('lg')`
          padding:45px 20px;
        `}

        h2{
            font-size: 42px;
            color: var(--my-color-gray);
            margin-bottom: 40px;
            text-align: center;
        }

        h3{
            font-size: 30px;
            margin-bottom: 40px;
            color:var(--my-color-gray);
            text-align: center;
        }


        p{
            line-height: 1.5;
            font-size: 18px;
            margin-bottom: 45px;
            font-weight: 300;
        }

        .about-box{
            display: flex;
            flex-wrap: wrap;

            .photo-box{
                width: 50%;
                padding: 0 35px;

                h4{
                    font-size: 22px;
                    color: var(--my-color-gray);
                    margin-bottom: 20px;

                    i{
                        margin-right: 20px;
                    }
                }

                img{width: 100%; }
            }

            p{
                width: 50%;
                padding-top: 40px;
            }
        }
    }


    .skill{
        max-width: 1100px;
        margin: auto;
        padding: 40px 40px 50px 40px;

        h2{
           font-size: 32px;
           margin-bottom: 45px;
           text-align: center;
           color: var(--my-color-gray);
        }

        .skill-section{
            h3{
                font-size: 22px;
                margin-bottom: 15px;
                font-weight: 300;
                letter-spacing: 8px;
            }

            .bar-container{
                height: 35px;
                background-color: var(--my-color-gray);
                margin-bottom: 30px;

                 ${mq.maxWidth}

                .bar{
                height: 100%;
                background-color: var(--my-color-gray);
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;

                &.w90p{
                    width: 90%;
                }
                &.w85p{
                    width:85%;
                }
                &.w75p{
                    width: 75%;
                }
              }

            }
        }
    }


   .point{
    background-color: var(--my-color-gray);


    .point-container{
        max-width: 1200px;
        margin: auto;
        padding: 60px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;

        ${mq.maxWidth('lg')`
          paddgin:20px 10px;
        `}


        .point-item{
            width: 25%;
            text-align: center;
            color: var(--my-color-white);
            margin: 20px auto;

            ${mq.maxWidth('lg')`
              width:50%;
            `}

            .point-value{
                font-size: 45px;
                font-weight: 500;
                margin-bottom: 25px;

                ${mq.maxWidth('lg')`
                   font-size:38px;
                   font-weight:400;
                   margin-bottom:20px;
               `}
            }

            .point-text{
                font-size: 24px;
                font-weight: 300;

                ${mq.maxWidth('lg')`
                  font-size:16px;
             `}
            }
        }
     }

   }


`;



const Introduce= memo ( () => {
    return(
        <IntroduceContainer>
           <div className="title">
               <div className="hello">
                 <h1>안녕하세요 OOO입니다</h1>
                 <p> This is my website.</p>
               </div>
           </div>

        <div className="about-me">
            <h2>ABOUT ME</h2>
            <h3>I love my job</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type a
                 nd scrambled it to make a type specimen book. It has survived not only five c
                 enturies, but also the leap into electronic typesetting, remaining
                 essentially unchanged. It was popularised in the 1960s with the release of
                 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum
            </p>

            <div className="about-box">
                <div className="photo-box">
                    <h4><i className="fa solid fa-user">  </i>My name</h4>
                    <img src={avatarHat} />
                </div>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>

            </div>
      </div>

      <div className="skill">
        <h2>Im really good at </h2>

        <div className="skill-section">
            <h3>
                <i className="fa solid fa-camera"> </i>
                <span>photograph</span>
            </h3>
            <div className="bar-container">
                <div className="bar w90p">90%</div>
            </div>
        </div>

        <div className="skill-section">
            <h3>
                <i className="fa solid fa-laptop"> </i>
                <span>photograph</span>
            </h3>
            <div className="bar-container">
                <div className="bar w85p">80%</div>
            </div>
        </div>

        <div className="skill-section">
            <h3>
                <i className="fa solid fa-image"> </i>
                <span>photograph</span>
            </h3>
            <div className="bar-container">
                <div className="bar w75p">75%</div>
            </div>
        </div>

      </div>

      <div className="point">
         <div className="point-container">
            <div className="point-item">
                <div className="point-value">14+</div>
                <div className="point-text">partner</div>
            </div>

            <div className="point-item">
                <div className="point-value">55+</div>
                <div className="point-text">Project</div>
            </div>

            <div className="point-item">
                <div className="point-value">89+</div>
                <div className="point-text">Happy Clients</div>
            </div>

            <div className="point-item">
                <div className="point-value">150+</div>
                <div className="point-text">Meetings</div>
            </div>
         </div>
      </div>

        </IntroduceContainer>
    )
});


export default Introduce;