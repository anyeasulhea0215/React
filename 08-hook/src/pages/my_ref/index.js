import React,{memo, useRef} from "react";

import styled from 'styled-components';

import MyBox from "./MyBox";

const MyRefContainer=styled.div`

`;

const MyRef= memo ( () => {

    const myDname=useRef();
    const myLoc=useRef();
    const myResult=useRef();

    const myBoxRef=useRef();

    return(
        <MyRefContainer>

            <h2> MyRef</h2>

            <div>
                <label htmlFor="dname" >학과명: </label>
                <input  type="text"  ref={myDname}  id="dname" />
            </div>

            <div>
                <label htmlFor="dname" >학과위치: </label>
                <input  type="text"  ref={myLoc}  id="loc" />
            </div>

            <p>
              입력값 확인: <span  ref={myResult}  id='result'> </span>
            </p>

            <button onClick={e=> {

                console.log(myDname);
                console.log(myLoc);
                console.log(myResult);

                const dname=myDname.current.value;
                const loc=myLoc.current.value;
                myResult.current.innerHTML= dname+ "," + loc;
            }} >  클릭  </button>

            <hr />

            <h3> 컴포넌트에 ref 적용하기</h3>

            <MyBox  a={100} b={200} ref={myBoxRef} />

            <button type="button"  onClick={() => {
                myBoxRef.current.style.backgroundColor='#f00';
            }} >
                Red
            </button>

             <button type="button"  onClick={() => {
                myBoxRef.current.style.backgroundColor='#00f';
            }} >
                Blue
            </button>


        </MyRefContainer>
    );
});


export default MyRef;