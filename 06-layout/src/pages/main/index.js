import React,{memo} from "react";

import styled from 'styled-components';
import mq from '../../components/MediaQuery';


import Side from './Side';
import Post from './Post';

const MainContainer = styled.section`
  //    background-color: #ff660077;

  max-width:1200px;
  margin:auto;

  border-left:1px solid #d5d5d5;
  border-right:1px solid #d5d5d5;
  display: flex;

   ${mq.maxWidth('sm')`
   flex-direction:column-reverse;
   `}
`;


const Main = memo(()=>{
    return(
        <MainContainer>
            <Side />
             <Post />
        </MainContainer>
    );
});


export default Main;