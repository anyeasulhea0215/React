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


const Graph4Container=styled.div`

  // background-color:rgb(252, 109, 44);
//  padding: 20px;
  flex: 1 1 calc(50% - 20px);
 height: 300px;
  margin-bottom: 20px;
`;


const Graph4=memo(() => {

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

        const {survived, dead}= useMemo(() => {
            if( !item ){
                return {survived: [0,0], dead: [0,0]};
            }

            const maleData=item.reduce(
                (acc,cur) => {
                const idx=cur.sex == 'male' ? 0 : 1;
                const key=cur.survived ? 'survived' : 'dead';
                acc[key][idx]++;

                return acc;

            }, {survived: [0,0], dead: [0,0] });

              console.group("Graph4");
            console.log(maleData);
            console.groupEnd();

            return maleData;
        },[item]);

    return(
        <Graph4Container>
             <Spinner loading={loading} />
             <ErrorView  status={status}  message={message} />

             {/*item && JSON.stringify(item).substring(0,300)*/}

              {/*survived && <div>Survived: {JSON.stringify(survived)}</div>}
            {dead && <div>dead: {JSON.stringify(dead)}</div>*/}


             {survived && dead && (
                <Bar
                  data={{
                    labels:["male","female"],  //x축
                    datasets: [
                        {
                           label:"생존",
                           data:survived,
                           backgroundColor:"rgba(53,162,235,0.5)",
                           borderColor:"rgba(53,162,235,1)",
                           borderWidth:1,
                        },
                         {
                           label:"사망",
                           data:dead,
                           backgroundColor:"rgba(46, 243, 88, 0.5)",
                           borderColor:"rgb(3, 77, 13)",
                           borderWidth:1,
                        },
                    ],
                  }}
                  options={{
                    responsice:true,   //반응형 기능 사용
                    maintainAspectRatio:false,
                    indexAxis: "y",
                    plugins: {
                        legend: {
                            position:"bottom",
                        },
                        title: {
                           display:true,
                           text:"성별 생존 여부 집계",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                        },
                    },
                  }}
                />
             )}

        </Graph4Container>
    );
});

export default Graph4;