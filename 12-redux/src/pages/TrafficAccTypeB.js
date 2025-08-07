import React, { memo, useEffect ,useState,useMemo} from "react";

import styled from "styled-components";

// Slice에 정의된 액션함수를 참조 --> Slice에 구현된 내용에 따라 달라짐
import { getList } from "../slices/TrafficAccSlice";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조 --> 고정코드
import { useSelector, useDispatch } from "react-redux";

import { Table } from "../components/Styled";
import Spinner from "../components/Spinner";

const TrafficAccTypeBContainer = styled.div`

.error-info{
    border: 2px solid #f06;
    padding: 10px 30px;
    background-color: #fee;

    h1{
        color: #f06;
        margin-top: 0;
        margin-bottom: 10px;
    }

    p{
        color: #f06;
        margin: 0;
        margin-bottom: 10px;
    }
}

.search-form{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    select{
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px;
        box-sizing: border-box;
        width: 300px;
        font-size: 14px;
    }
}

`;


const TrafficAccTypeB=memo(()=>{
    const {loading,status,message,item}= useSelector((state) => state.TrafficAccSlice);

    const [year,setYear]=useState(2018);

    const dispatch=useDispatch();

    useEffect(() => {

        dispatch(getList(  ));
    } , [ ]);

    const trafficData=useMemo(() =>{
        if(!item || item.length === 0 ) return [];
        return item.filter((v) => v.year === year);
    }, [item,year]);

    return(
        <TrafficAccTypeBContainer>

         <h2> Traffic ACc Type B- 백엔드로부터 최초 1회만 데이터를 받아온 후 프론트엔드가 필터링</h2>

         <Spinner  loading={loading} />

         {status !== 200 && (
            <div className="error-info">
                <h1>{status} Error</h1>
                <p> {message}</p>
            </div>
         )}

         <div className="search-form" >
            <select value={year} onChange={(e) => setYear(Number(e.target.value))} >
                {[...Array(14)].map((_,i)=>{

                    const yearValue=2025+i;
                    return(
                        <option key={yearValue}  value={yearValue} >
                            {yearValue}
                        </option>
                    )
                })}
            </select>
         </div>
         <Table>

            <thead>
                <tr>
                    <th>번호</th>
                     <th>년도</th>
                     <th>월</th>
                     <th>교통사고</th>
                     <th>사망자 수</th>
                     <th>부상자 수</th>

                </tr>
            </thead>


            <tbody>
                {trafficData && trafficData.map((v,i) => {
                    return(
                        <tr key={i} >
                           <td>{ v.id}</td>
                           <td>{ v.year}</td>
                           <td>{ v.month}</td>
                           <td>{ v.accident.toLocaleString()}</td>
                           <td>{ v.death.toLocaleString()}</td>
                           <td>{ v.injury.toLocaleString()}</td>
                        </tr>
                    );
                })}

            </tbody>
         </Table>
        </TrafficAccTypeBContainer>
    )
})


export default TrafficAccTypeB;
