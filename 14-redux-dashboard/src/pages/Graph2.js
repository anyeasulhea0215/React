import React,{memo,useEffect,useMemo} from "react";

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

const Graph2Container=styled.div`

 // background-color:rgb(252, 109, 44);
//  padding: 20px;
  flex: 1 1 calc(50% - 20px);
    height: 300px;
  margin-bottom: 20px;
`;


const Graph2=memo(() => {

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

        /**item 데이터를 받아온 후 필요한 집계 데이터 생성  --> 연령별 탑승객 상황*/
        const {keys,survived,dead} = useMemo(() => {
            if (!item){
                return { keys: [], survived : [], dead: []};
            }

            const ageData=item.reduce((acc,cur)=> {
                const ageLevel =`${parseInt(cur.age/ 10) * 10}대`;

                if(acc[ageLevel] == undefined){
                    acc[ageLevel]= {survived: 0, dead: 0};
                }

                if(cur.survived){
                    acc[ageLevel].survived++;
                } else{
                    acc[ageLevel].dead++;
                }

                return acc;
            }, {});

            console.log(ageData);

             const keys=Object.keys(ageData).sort();
           console.log(keys);

           const survived=keys.map((v,i) => ageData[v].survived);
            console.log(survived);

            const dead=keys.map((v,i) => ageData[v].dead);
            console.log(dead);

            const result={keys,survived,dead};

           return result;
        }, [item]);

    return(
        <Graph2Container>
             <Spinner loading={loading} />
             <ErrorView  status={status}  message={message} />

             {/*item && JSON.stringify(item).substring(0,300)*/}

                {/*keys && <div>keys: {JSON.stringify(keys)}</div>}
                 {survived && <div>survived: {JSON.stringify(survived)}</div>}
                 {dead && <div>dead: {JSON.stringify(dead)}</div>*/}


             {keys && survived && dead && (
                <Bar
                  data={{
                    labels:keys ,//x축
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
                    responsice:true,
                    maintainAspectRatio:false,
                    plugins: {
                        legend: {
                            position:"bottom",
                        },
                        title: {
                           display:true,
                           text:"연령별 생존여부 집계",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                        },
                    },
                  }}
                />
             )}

        </Graph2Container>
    );
});

export default Graph2;