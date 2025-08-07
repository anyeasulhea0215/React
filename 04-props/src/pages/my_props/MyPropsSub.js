/**
 * 상위 컴포넌트로부터 속성값을 전달받는 컴포넌트
 */
import React from "react";

//함수 정의시 props라는 파라미터를 정의하면
//props 안에 상위 컴포넌트가 전달한 속성값들이 json으로 묶여서 전달됨

const MyPropsSub= (props) =>{
    console.group("MyPropsSub");
    console.log(props);
    console.log(typeof props.name);
    console.log(typeof props.age);
    console.groupEnd();


    return(
        <div>
            <h3>MyPropsSub</h3>

            <p>
                 제 이름은 <b>{props.name}</b>이고  나이는 <b> {props.age} </b>입니다.
            </p>
        </div>
    );
};


export default MyPropsSub;