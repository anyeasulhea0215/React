/**
 * React count CountUp
 * http://www.npmjs.com/package/react-countup
 *
 * yarn add react-countup
 */

import React,{memo} from "react";

import CountUp from 'react-countup';
import styled from "styled-components";

const CountupContainer =styled.div`

  .counter-box{
    display: flex;
    padding: 100px 50px;

    justify-content: space-around;

    .my-counter{
        font-size: 80px;
        font-weight: bold;
        width: 300px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #555;
        columns: #fff;
    }
  }

`;


const CountUpEx=memo(() =>{
    return(
        <CountupContainer>

        <h1>CountupEx</h1>

        <hr />

        <div style={{
            height:"3000px",
            display:"flex",
            justifyContent:'center',
            alignItems:'start',
            fontSize:"32px"
        }} >
         dummy (아래로 스크롤 ~~)

        </div>


        <hr />


         <div className="counter-box" >
              <CountUp
                start={1}
                end={345}
                duration={5}
                enableScrollSpy={1000}
                className='my-counter'
              />

              <CountUp
               start={1}
               end={234}
               duration={5}
               enableScrollSpy
               scrollSpyDelay={500}
               className='my-counter'
              />

              <CountUp
               start={1}
               end={567}
               duration={5}
               enableScrollSpy
               scrollSpyDelay={1500}
               className='my-counter'
              />

         </div>
        </CountupContainer>
    );
} );

export default CountUpEx;