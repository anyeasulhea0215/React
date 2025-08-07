import React,{memo, useEffect,useMemo} from "react";

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

const Graph1Container=styled.div`

  //background-color:rgb(84, 240, 175);
 // padding: 20px;
  flex: 1 1 calc(50% - 20px);
  height: 300px;
  margin-bottom: 20px;
`;


const Graph1=memo(() => {
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

    const {keys,values} = useMemo(() => {
        if(!item){
            return { keys:null, values:null };
        }

        const ageData=item.reduce((acc,cur) => {
            const ageLevel=`${parseInt(cur.age/10) *10}대`;

            if(acc[ageLevel] == undefined){
                acc[ageLevel]=1;
            } else{
                acc[ageLevel]++;
            }

            return acc;
        }, {});

        console.log(ageData);

        const keys=Object.keys(ageData).sort();
        console.log(keys);

        const values=keys.map((v,i) => ageData[v]);
        console.log(values);

        const result={keys,values};
        console.log(result);

        return result;
    },[item]);

    return(
        <Graph1Container>
             <Spinner loading={loading} />
             <ErrorView  status={status}  message={message} />

             {/*item && JSON.stringify(item).substring(0,300)*/}

             {/*keys && <div>keys: {JSON.stringify(keys)}</div>}
             {values && <div>value : {JSON.stringify(values)}</div>*/}

             {keys && values && (
                <Bar
                  data={{
                    labels:keys ,//x축
                    datasets: [
                        {
                           label:"명",
                           data:values,
                           backgroundColor:"rgba(255,99,132,0.5)",
                           borderColor:"rgba(255,99,132,1)",
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
                           text:"연령별 탑승객 집계",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                        },
                    },
                  }}
                />
             )}
        </Graph1Container>
    );
});

export default Graph1;