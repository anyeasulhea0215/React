import React,{memo,useReducer} from "react";

import styled from 'styled-components';


const MyReducerContainer=styled.div`

`;


function setCounterValue(state,action){

    console.log("[%o]  %o",action,state);


    switch (action){
        case 'HELLO':
            return state+1;
        case 'WORLD':
            return state-1;
        default:
            return 0;
    }
}

const MyReducer= memo ( () => {

     /**
      * (갱신함수)setMYCounter를 직접 정의
      */
     const [myCounter,setMyCounter]= useReducer(setCounterValue,0);


    return(
        <MyReducerContainer>

            <h2> MyReducer</h2>

            <p>현재 카운트 값 :{myCounter}</p>
            <button type="button"  onClick={e => setMyCounter('HELLO')} >UP</button>
            <button type="button"  onClick={e => setMyCounter('WORLD')} >DOWN</button>
            <button type="button"  onClick={e => setMyCounter('')} >RESt</button>
        </MyReducerContainer>
    );
});


export default MyReducer;