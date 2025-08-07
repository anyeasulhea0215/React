import React,{memo} from "react";

import styled from "styled-components";

import chef from "../../assets/img/chef.jpg"; // Assuming you have a chef image in assets folder


const AboutMeContainer=styled.div`

   //background-color: #ff660055;

   text-aligh:center;

   h2{
    font-size:32px;
    margin-bottom:32px;
    font-weight:400;
   }


   img{
    max-width:100%;
    height:auto;
    margin-bottom:26px;
   }

   h3{
    font-size:26px;
    margin-bottom:16px;
    font-weight:400;
   }

   h4{
    font-size:18px;
    margin-bottom:16px;
    font-weight:400;
   }

   p{
    font-size:16px;
    line-height: 1.5;
    font-weight:300;
    margin-bottom: 30px;
    padding: 0 25px;
   }
`;



const AboutMe=memo ( () =>{
    return(
        <AboutMeContainer>
            <h2>About Me, The Food Man</h2>
            <img src={chef} />
            <h3>I am Who I Am!</h3>
            <h4>With Passion For Real, Good Food</h4>
            <p>
                Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
            </p>
        </AboutMeContainer>
    );
});

export default AboutMe;
