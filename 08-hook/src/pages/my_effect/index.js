/**
 * useEffect
 * useEffect는 기본적으로 랜더링 직후마다 실행되며, 두번쨰 파라미터 배여렝 무엇을 넣는지에 따라 실행되는 조건이 달라진다
 */

import React,{memo,useState,useEffect} from "react";

import styled from 'styled-components';

//예제 확인을 위한 이미지 참조
import sample from "../../assets/img/sample.png";


const MyEffectContainer=styled.div`

`;

const MyEffect= memo ( () => {

    //예제 확인을 위한 상태값
    const [myBrightness,setBrigthness]=useState(100);


    const [myWidth,setMyWidth]=useState(window.innerWidth);

    const onMyResize= (e) =>{
        console.log(`창 사이즈 변경됨 >>${window.innerWidth}`);
        setMyWidth(window.innerWidth);
    }

    /**
     * CASE1 =>콜백함수만 파라미터로 전달
     * 이 컴포넌트가 화면에 막 등장할때와 state,props값이 변경될때마다 매번 실행됨
     */
    useEffect (() =>{
        console.debug('[Case1] %s ::: 화면에 컴포넌트가 처음 로드되거나 state,props 중 하나라도 변경될 경우 호출됨',
            new Date());
    });

    /**
     * CASE2  ==>모니터링할 상태변수를 두 번째 파라미터로 전달되는 배열에 명시
     * 이 컴포넌트가 화면에 막 등장할때와 특정 state,props값이 변경될떄만 실행됨
     */
    useEffect (() =>{
        console.warn('[Case2] %s ::: myBrigthness값이 변경됨 ',new Date());
    },[myBrightness]);


    useEffect (() =>{
        console.error('[Case3] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야할 기능',new Date());


        window.addEventListener("resize",onMyResize);

        return () =>{
            console.log('[case4] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능',new Date());

            window.removeEventListener('resize',onMyResize);
        }
    },[]);

    return(
        <MyEffectContainer>

            <h2> MyEffect</h2>

            <img   alt="HelloReact" src={sample} width={myWidth*0.3}
            style={{
                filter:"brightness(" + myBrightness + "%)",
            }}
            />

            <div>
                <input type="range" min={0} max={200} step={1} value={myBrightness}
                onChange={ (e) =>{
                    setBrigthness(e.currentTarget.value);
                 }}
                />
            </div>
        </MyEffectContainer>
    );
});


export default MyEffect;