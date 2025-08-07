import React,{memo,useEffect, useMemo} from "react";

import styled from "styled-components";

import { useSelector,useDispatch } from "react-redux";
import {getList} from "../slices/TitanicSlice";

import Spinner from "../components/Spinner";
import ErrorView  from "../components/ErrorView";

/** chart.js 관련 */
import{
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    //막대그래프
    BarElement,
} from "chart.js"

import {Bar} from "react-chartjs-2";

Chart.register(CategoryScale,LinearScale,Title,Tooltip,Legend,BarElement);


const Graph3Container=styled.div`

 // background-color:rgb(252, 109, 44);
//  padding: 20px;
  flex: 1 1 calc(50% - 20px);
    height: 300px;
  margin-bottom: 20px;
`;


const Graph3=memo(() => {

     //리덕스 슬라이스로부터 데이터 가져오기
        const {loading,status,message,item} = useSelector((state) => state.TitanicSlice);

        //리덕스 디스패치 함수
        const dispatch=useDispatch();

        //컴포넌트가 마운트될 때 데이터 요청
        useEffect(() => {
            //이미 데이터가 있다면 다시 요청하지 않도록 처리
            if(item && Array.isArray(item) && item.length >0 ){
                return;
            }
            dispatch(getList());
        }, []);

        const sex=useMemo(() => {
            if(!item){
                return [0,0];
            }

            const maleData=item.reduce((acc,cur) => {
                acc[cur.sex == 'male' ? 0 : 1]++;
                return acc;
            },[0,0]);

            console.group("Graph3");
            console.log(maleData);
            console.groupEnd();

            return maleData;
        },[item]);


    return(
        <Graph3Container>
             <Spinner loading={loading} />
             <ErrorView  status={status}  message={message} />

             {/*item && JSON.stringify(item).substring(0,300)*/}
             {/*sex && <div>sex: {JSON.stringify(sex)}</div>*/}

             {sex && (
                <Bar
                  data={{
                    labels:["male","female"],//x축
                    datasets: [
                        {
                           label:"명",
                           data:sex,
                           backgroundColor:[" #29ab3688", "#ed6b0e88"],
                           borderColor: [" #29ab36", "#ed6b02"],
                           borderWidth:1,
                        },
                    ],
                  }}
                  options={{
                    responsice:true,  //반응형 기능 사용
                    maintainAspectRatio:false,  //세로높이를 스스로 설정
                    indexAxis:"y",
                    plugins: {
                        legend: {
                            position:"bottom",  //범주의 위치
                        },
                        title: {
                           display:true,
                           text:"성별 생존여부 집계",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                        },
                    },
                  }}
                />
             )}


        </Graph3Container>
    );
});

export default Graph3;