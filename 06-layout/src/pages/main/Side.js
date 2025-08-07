import React,{memo} from "react";

import styled from "styled-components";

import FakeImg from '../../components/FakeImg.js';
import mq from '../../components/MediaQuery';


const SideContainer=styled.div`

  box-sizing: border-box;
  flex: 0 0 360px;
  border-right: 1px solid #d5d5d5;
  background-color: #eeeeee;
  padding: 20px;

  h2{
    font-size: 24px;
    font-weight: 700;
    margin: 10px auto;

  }


  h3{
    font-size: 18px;
    font-weight: 500;
    margin: 10px auto;
  }

  p{
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }


  ${mq.maxWidth('sm')`
     flex:0 0 100%;
     border-right:0px;
  `}
`;



const Side=memo ( () =>{
    return(
        <SideContainer>
             <h2>About me</h2>
             <h3>Photo of me ;</h3>
             <FakeImg   height='200'  >Image</FakeImg>
             <p>  some tect aboyt me cuplpde deserund molliasd</p>

             <hr />
             <h2> More text </h2>
             <p> Lorem ispeu doloier  asd</p>

             <FakeImg height='60' >Image</FakeImg>
             <br />
              <FakeImg height='60' >Image</FakeImg>
             <br />
              <FakeImg height='60' >Image</FakeImg>
             <br />
        </SideContainer>
    )
});


export default Side;