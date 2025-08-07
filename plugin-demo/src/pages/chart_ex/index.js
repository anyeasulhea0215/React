/**
 * ChartEx.js
 * Chart.js로 막대 그래프를 그리기 위한 기능을 예제
 * ReactChartjs2 Wrapper 라이브러리를 통해 React에서 사용 가능하다.
 * https://react-chartjs-2.js.org/
 *
 * yarn add chart.js react-chartjs-2
 */

import React,{memo} from "react";
import styled from "styled-components";


import{
    Chart,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
    Filler
} from 'chart.js';

import {Bar,Line,Scatter,Pie,Radar} from 'react-chartjs-2';

Chart.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Filler
);

const ChartContainer =styled.div`
 .chart-wrapper{
    display: flex;
    flex-wrap: wrap;

    .chart-item{
        width: 33.3%;
        padding: 20px;
        box-sizing: border-box;
        height: 400px;
    }
 }

`;


const CountUpEx=memo(() =>{
  return(
    <ChartContainer>
         <h2>Chart</h2>

         <div className="chart-wrapper" >
            <div  className="chart-item">
                <h3>세로 막대 그래프</h3>
                <Bar  options={{
                    responsive:true,
                    maintainAspectRatio:true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    },
                }} data={{
                    labels:['철수', '영희' ,'민수', '수현'  ,'호영'],
                    datasets: [{
                        label:'국어',
                        data:[98,88,92,63,100],
                        backgroundColor:'rgba(255,99,132,0.5)',
                        borderColor:'rgba(255,99,132,1)',
                        borderWidth:1
                    }, {
                       label:'영어',
                        data:[98,90,99,50],
                        backgroundColor:'rgba(208, 230, 17, 0.5)',
                        borderColor:'rgb(70, 65, 2)',
                        borderWidth:1
                    },{
                        label:'수학',
                        data:[98,34,22,73,100],
                        backgroundColor:'rgba(80, 77, 206, 0.5)',
                        borderColor:'rgb(27, 28, 124)',
                        borderWidth:1
                    }]
                }}

                />
            </div>

            <div  className="chart-item">
                <h3>가로 막대 그래프</h3>
                <Bar  options={{
                    responsive:true,
                    maintainAspectRatio:true,
                    indexAxis:'y',
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    },
                }} data={{
                    labels:['철수', '영희' ,'민수', '수현'  ,'호영'],
                    datasets: [{
                        label:'국어',
                        data:[98,88,92,63,100],
                        backgroundColor:'rgba(255,99,132,0.5)',
                        borderColor:'rgba(255,99,132,1)',
                        borderWidth:1
                    }, {
                       label:'영어',
                        data:[98,90,99,50],
                        backgroundColor:'rgba(208, 230, 17, 0.5)',
                        borderColor:'rgb(70, 65, 2)',
                        borderWidth:1
                    },{
                        label:'수학',
                        data:[98,34,22,73,100],
                        backgroundColor:'rgba(80, 77, 206, 0.5)',
                        borderColor:'rgb(27, 28, 124)',
                        borderWidth:1
                    }]
                }}

                />
            </div>

            {/**선 그래프 */}
            <div  className="chart-item">
                <h3>선그래프</h3>
                <Bar  options={{
                    responsive:true,
                    maintainAspectRatio:true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    },
                }} data={{
                    labels:['06/18', '06/19' ,'06-20', '06,21'  ,'06/22', '06/23', '06/24'],
                    datasets: [{
                        label:'서울시 확진자',
                        data:[2323,3343,1012,2233,150,2223,1101],
                        backgroundColor:'rgba(255,99,132,0.5)',
                        borderColor:'rgba(255,99,132,1)',
                        borderWidth:1
                    },{
                        label:'인천시 확진자',
                        data:[2321,1343,1232,3433,450,1223,1401],
                        backgroundColor:'rgba(36, 214, 190, 0.5)',
                        borderColor:'rgb(8, 69, 85)',
                        borderWidth:1
                    }]
                }}

                />
            </div>

            {/**산점도 그래프 */}
            <div  className="chart-item">
                <h3>선그래프</h3>
                <Bar  options={{
                    responsive:true,
                    maintainAspectRatio:true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    },
                }} data={{
                    labels:['06/18', '06/19' ,'06-20', '06,21'  ,'06/22', '06/23', '06/24'],
                    datasets: [{
                        label:'서울시 확진자',
                        data:[2323,3343,1012,2233,150,2223,1101],
                        backgroundColor:'rgba(255,99,132,0.5)',
                        borderColor:'rgba(255,99,132,1)',
                        borderWidth:1
                    },{
                        label:'인천시 확진자',
                        data:[2321,1343,1232,3433,450,1223,1401],
                        backgroundColor:'rgba(36, 214, 190, 0.5)',
                        borderColor:'rgb(8, 69, 85)',
                        borderWidth:1
                    }]
                }}

                />
            </div>

             <div className="chart-item">
                <h3>수평 막대그래프</h3>
                <Bar
                    options={{
                        indexAxis: 'y',
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: {
                                position: 'bottom',
                            },
                        },
                    }}
                    data={{
                        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
                        datasets: [
                            {
                                label: '데이터1',
                                data: [65, 59, 80, 81, 56, 55],
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1,
                            },
                            {
                                label: '데이터2',
                                data: [28, 48, 40, 19, 86, 27],
                                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                                borderColor: 'rgba(54, 162, 235, 1)',
                                borderWidth: 1,
                            },
                        ],
                    }}
                />
            </div>



         </div>

    </ChartContainer>
  )
} );

export default CountUpEx;