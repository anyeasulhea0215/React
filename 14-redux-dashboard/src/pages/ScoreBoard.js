import React,{memo,useEffect, useMemo} from "react";

import styled from "styled-components";

import { useSelector,useDispatch } from "react-redux";
import {getList} from "../slices/TitanicSlice";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

import CountUp from "react-countup";

const ScoreBoardContainer=styled.div`

 //  background-color:#e5ff00a6;
  //padding: 20px;
  flex: 1 1 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .my-counter{
    box-sizing: border-box;
    width: 23%;
    height: 140px;
    background-color: #06f6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child{
        margin-left: 0;
    }

    &:last-child{
        margin-right: 0;
    }

    h2{
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        font-weight: normal;
        color: #fff;
        margin-bottom: 10px;
    }

    .my-counter-number{
        font-size: 45px;
        font-weight: 700;
        margin: 0;
        color: #fff;

        &.per:after{
            content: "%";
        }
    }

  }
`;


const ScoreBoard=memo(() => {
    //리덕스 슬라이스로부터 데이터 가져오기
   const {loading ,status,message,item}= useSelector((state) => state.TitanicSlice);

   //리덕스 디스패치 함수
   const dispatch=useDispatch();


   //컴포넌트가 마운트 될때 데이터 요청
   useEffect(() => {
    if(item && Array.isArray(item) && item.length >0){
        return;
    }
    dispatch(getList());
   },[]);

   const [totalPassenger,totalSurvived,totalDead,survivalRate]= useMemo(() => {
     if(!item){
        return [0,0,0,0];
     }

      const totalPassenger =item.length;

        const totalSurvived=item.filter((v,i) => v.survived).length;

        const totalDead=totalPassenger - totalSurvived;

        const survivalRate=(totalSurvived/totalPassenger) * 100;

        return [
            totalPassenger,
            totalSurvived,
            totalDead,
            survivalRate,
        ];

   }, [item]);

    return(
        <ScoreBoardContainer>
            <Spinner loading={loading} />
            <ErrorView status={status} message={message} />


            {/*item && JSON.stringify(item).substring(0,300)*/}
            {/*totalPassenger && (<p> 전체 탑승객 수: {totalPassenger}명</p>)*/}
             {/*totalSurvived && (<p> 전체 생존자 수: {totalSurvived}명</p>)*/}
             {/*totalDead && (<p> 전체 사망자 수: {totalDead}명</p>)}
             {survivalRate && (<p> 생존율: {survivalRate.toFixed(2)}%</p>)*/}

             <div  className="my-counter">
                 <h2>w전체 탑승객 수</h2>
                 <CountUp
                   start={1}  //시작값
                   end={totalPassenger}  //종료값
                   duration={5}  //3초동안 애니메이션가공/ 기본값=2
                   enableScrollSpy={false}  //스크롤에 반응해라~
                   scrollSpyDelay={1000}  //스크롤에 의해 화면에 표시된 후 딜레이 시간
                   className="my-counter-number"
                 />

             </div>

             <div  className="my-counter">
                 <h2>생존자 수</h2>
                 <CountUp
                   start={1}
                   end={totalSurvived}
                   duration={5}
                   enableScrollSpy={false}
                   scrollSpyDelay={1000}
                   className="my-counter-number"
                 />

             </div>

             <div  className="my-counter">
                 <h2>사망자수 </h2>
                 <CountUp
                   start={1} //시작값
                   end={totalPassenger}
                   duration={5}
                   enableScrollSpy={false}
                   className="my-counter-number"
                 />

             </div>

             <div  className="my-counter">
                 <h2>생존율</h2>
                 <CountUp
                   start={1}
                   end={totalPassenger}
                   duration={5}
                   enableScrollSpy={false}
                   className="my-counter-number"
                 />

             </div>
        </ScoreBoardContainer>
    );
});

export default ScoreBoard;