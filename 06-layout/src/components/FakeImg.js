import React,{memo} from "react";

import styled from 'styled-components';


const FakeImgContainer =styled.div`
   background-color: #aaa;
   width: auto;
   padding: 20px;
   margin: 10px auto;
   height: ${props => `${props.height}px`}
`;

const FakeImg=memo( ({height,children}) => {
    return (
        <FakeImgContainer height={height} >
           {children}
        </FakeImgContainer>
    );
} );


export default FakeImg;