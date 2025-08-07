import React,{memo} from 'react';

import styled from "styled-components";

import {plus,minus} from '../slices/CounterSlice';
import {useSelector,useDispatch} from "react-redux";

const CounterContainer=styled.div`
  .counter-box{
    display: inline-flex;
    border: 3px solid #06f;
    padding: 10px;

    button{
        padding: 10px;
        font-size: 24px;
        background-color: #06f;
        color: #fff;
        border: none;
        flex:0 0 50px;
    }

    .number{
        color: ${(props) => props?.color || "#000"};
        margin: 0 20px;
        font-size: 48px;
        text-align: center;
        width: 150px;
    }
  }
`;

const Counter = memo(() =>{
    const {number,color} = useSelector((state) => state.CounterSlice);

    const dispatch=useDispatch();

    return(
        <CounterContainer>
             <h2>Counter</h2>

             <div className='counter-box' >
                 <button onClick={() => dispatch(plus(5))} > +5</button>
                 <h2  className='number'  color={color}>{number}</h2>
                 <button onClick={() => dispatch(minus(3))} > -3</button>
             </div>
        </CounterContainer>
    );
});


export default Counter;