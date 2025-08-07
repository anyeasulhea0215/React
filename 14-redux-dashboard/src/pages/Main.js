import React,{memo} from "react";

import styled from "styled-components";

import Spinner from "../components/Spinner";
import ScoreBoard from "./ScoreBoard";
import Graph1 from './Graph1';
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";
import Graph5 from "./Graph5";

const PagesContainer=styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;


const Pages=memo(() => {
    return(
        <PagesContainer>
           <ScoreBoard />
           <Graph1 />
           <Graph2 />
           <Graph3 />
           <Graph4 />
           <Graph5 />
        </PagesContainer>
    );
});

export default Pages;