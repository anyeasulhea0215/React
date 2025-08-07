import React,{memo} from "react";

import styled from "styled-components";

import Introduce from './Introduce';
import Portfolio  from "./Portfolio";
import Contact from "./Contact";

import mq from '../../components/MediaQuery'


const MainContainer=styled.div`


`;


const Main=memo (() =>{

    return(
        <MainContainer>
            <Introduce />
            <Portfolio />
            <Contact />

        </MainContainer>
    );
});


export default Main;