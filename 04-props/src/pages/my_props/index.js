import React from "react";



import MyPropsSub from "./MyPropsSub";


const MyProps = () => {

    return(
        <div>
            <h2>MyProps</h2>

            <MyPropsSub />

            {/**컴포넌트에 속성은 임의로 전달 가능함*/}
             {/** 문자열을 제외한 타입은 중괄호 {}로 감싸야 함 */}
            <MyPropsSub name='민호'   age='19' />

            <MyPropsSub  name='수영'  age='{20}' />
        </div>
    );
};


export default MyProps;