import React,{memo, useState} from "react";

import styled from 'styled-components';


const MyStateContainer=styled.div`

`;

const MyState= memo ( () => {
  /**
   * state값 정의
   * -이 페이지 안에서 유효한 전역변수 개념
   * -화면에 출력할 용도의 변수.
   *
   */
    const [myName, setMyName] =useState('');
    const [myPoint,setMypoint] = useState(50);

    const onMyNameChange = e => {
        /**
         * 리액트는 상태변수의 값을 변경하기 위해 setter함수를 사용해야함
         * myName=e.currentTarget.value;
         * setter함수를 통해 변경된 상태 변수는 모든 출력 위치에 자동 반영된다
         */
        setMyName(e.currentTarget.value);
    };

    return(
        <MyStateContainer>

            <h2> MyState </h2>

            <div>
                <label htmlFor="myNameInput" >이름:</label>

                <input  type="text" id="myNameInput" value={myName} onChange={onMyNameChange} />
            </div>

            <div>
                <label htmlFor='myPointInput' >점수: </label>
                <input
                  id='myPointInput'
                  type="range"
                  min='0'
                  max='100'
                  value={myPoint}
                  step='1'
                  onChange={e => setMypoint(e.currentTarget.value)}
                />
            </div>

            <h2>{myName}님의 점수는 {myPoint}점 입니다 </h2>
        </MyStateContainer>
    );
});


export default MyState;