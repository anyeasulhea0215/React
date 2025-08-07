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
    //파이그래프
    ArcElement,
} from "chart.js"

import {Pie} from "react-chartjs-2";

Chart.register(CategoryScale,LinearScale,Title,Tooltip,Legend,ArcElement);


const Graph5Container=styled.div`

  // background-color:rgb(252, 109, 44);
//  padding: 20px;
  flex: 1 1 100%;
    height: 300px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap:nowrap;
  justify-content: space-between;
  gap: 20px;

  .container{
    flex: 1 1 calc(33.333% - 20px);
  }
`;


const Graph5=memo(() => {

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

        const {passingers,survived,dead} = useMemo(() => {
            if (!item){
                return { passingers: [0,0,0], survived : [0,0,0], dead: [0,0,0]};
            }

            const pclassData=item.reduce((acc,cur)=> {
               const pclass=cur.pclass;
               acc.passingers[pclass-1]++;

                if(cur.survived){
                    acc.survived[pclass-1]++;
                } else{
                    acc.dead[pclass-1]++;
                }

                return acc;
            }, {passingers: [0,0,0], survived: [0,0,0], dead: [0,0,0] }  );

             console.group("Graph5");
            console.log(pclassData);
            console.groupEnd();

       return pclassData;
        }, [item]);


    return(
        <Graph5Container>
           <Spinner loading={loading} />
             <ErrorView  status={status}  message={message} />

             {/*passingers && <div>Passingers: {JSON.stringify(passingers)}</div>}
              {survived && <div>Survived: {JSON.stringify(survived)}</div>}
               {dead && <div>Dead: {JSON.stringify(dead)}</div>*/}

            <div className="container">
                 {passingers && (
                    <Pie
                      data={{
                         labels: ["1등급","2등급","3등급"],  //x축
                         datasets: [
                            {
                                label:"명",
                                data:passingers,
                                backgroundColor:["rgba(255,99,132,0.6)"," rgba(54,162,235,0.6)", "rgba(255,206,86,0.6)"],
                                borderColor:["rgba(255,99,132,1)"," rgba(54,162,235,1)", "rgba(255,206,86,1)"],
                                borderWidth:1,

                            },
                         ],
                      }}

                      options={{
                         responsice:true,   //반응형 기능 사용
                         maintainAspectRatio:false,
                        plugins: {
                        legend: {
                            position:"left", //범주의 위치
                        },
                        title: {
                           display:true,
                           text:"객실 등급별 탑승객 비율",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                         },
                        },
                      }}


                    />
                 )}
            </div>

            <div className="container">
                 {survived && (
                    <Pie
                      data={{
                         labels: ["1등급","2등급","3등급"],  //x축
                         datasets: [
                            {
                                label:"명",
                                data:survived,
                                backgroundColor:["rgba(255,99,132,0.6)"," rgba(54,162,235,0.6)", "rgba(255,206,86,0.6)"],
                                borderColor:["rgba(255,99,132,1)"," rgba(54,162,235,1)", "rgba(255,206,86,1)"],
                                borderWidth:1,

                            },
                         ],
                      }}

                      options={{
                         responsice:true,   //반응형 기능 사용
                         maintainAspectRatio:false,
                        plugins: {
                        legend: {
                            position:"left", //범주의 위치
                        },
                        title: {
                           display:true,
                           text:"객실 등급별 생존 비율 ",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                         },
                        },
                      }}


                    />
                 )}
            </div>

            <div className="container">
                 {dead && (
                    <Pie
                      data={{
                         labels: ["1등급","2등급","3등급"],  //x축
                         datasets: [
                            {
                                label:"명",
                                data:dead,
                                backgroundColor:["rgba(255,99,132,0.6)"," rgba(54,162,235,0.6)", "rgba(255,206,86,0.6)"],
                                borderColor:["rgba(255,99,132,1)"," rgba(54,162,235,1)", "rgba(255,206,86,1)"],
                                borderWidth:1,

                            },
                         ],
                      }}

                      options={{
                         responsice:true,   //반응형 기능 사용
                         maintainAspectRatio:false,
                        plugins: {
                        legend: {
                            position:"left", //범주의 위치
                        },
                        title: {
                           display:true,
                           text:"객실 등급별 사망 비율",
                           font: {
                            size: 18,
                            color:"#000",
                           },
                         },
                        },
                      }}


                    />
                 )}
            </div>

        </Graph5Container>
    );
});

export default Graph5;