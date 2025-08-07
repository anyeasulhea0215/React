import React from "react";


const If1= () => {
    const btnLogin = (isLogin) => {

        if(isLogin === true){
            //단일 태그 반환은 소괄호 생략 가능
             return <button type="button">Logout</button>;
        } else{
            return(
                //여러 태그의 묶음을 반환할때는 소괄호 생략 불가
                <div>
                    <button type="button">Login</button>
                    <p>로그인 되셨습니다.</p>
                </div>
            );
        }
    };



    return(
        //무분별한 div를 피하기 위해 React.fragment사용
        //React.Fragment는 <> , </>로 표현한다
        <>
          <h1>If1</h1>
          {btnLogin(true)}
        </>
    );
};


export default If1;