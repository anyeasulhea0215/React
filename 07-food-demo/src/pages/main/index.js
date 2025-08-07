import React,{memo} from "react";

import styled from "styled-components";


import FoodList from "./FoodList";
import AboutMe  from "./AboutMe";



const MainContainer=styled.div`

// background-color: #ff660055;

  padding-top:57px;

  max-width: 1200px;
  margin:auto;

  .divider{
    margin: 60px 0;
    border-top:1px solid #ddd;
    width: auto;
    border-bottom: 0;
  }
`;

const Main = memo(() => {
    return (
        <MainContainer>
            <FoodList />
            <hr  className="divider" />
            <AboutMe />
          </MainContainer>
    );
});

export default Main;
