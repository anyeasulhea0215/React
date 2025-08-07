import React, { memo, useEffect ,useState,useMemo} from "react";

import styled from "styled-components";

// Slice에 정의된 액션함수를 참조 --> Slice에 구현된 내용에 따라 달라짐
import { getList } from "../slices/TrafficAccSlice";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조 --> 고정코드
import { useSelector, useDispatch } from "react-redux";

import { Table } from "../components/Styled";
import Spinner from "../components/Spinner";

const TrafficAccTypeAContainer = styled.div`

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


const TrafficAccTypeA=memo(()=>{
    const {loading,status,message,item}= useSelector((state) => state.TrafficAccSlice);

    const [year,setYear]=useState(2018);

    const dispatch=useDispatch();

    useEffect(() => {
        console.log("year changed:", year);
        if(!year)
            return;
        dispatch(getList({year}));
    } , [year]);

    return(
        <TrafficAccTypeAContainer>

         <h2> Traffic ACc Type A- 백엔드로부터 데이터 받아오기</h2>

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

                    const yearValue=2014+i;
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
                {item && item.map((v,i) => {
                    return(
                        <tr key={i} >
                           <td>{ v.id}</td>
                           <td>{ v.year}</td>
                           <td>{ v.month}</td>
                            <td>{v.accident?.toLocaleString() || '0'}</td>
                           <td>{v.death?.toLocaleString() || '0'}</td>
                           <td>{v.injury?.toLocaleString() || '0'}</td>
                        </tr>
                    );
                })}

            </tbody>
         </Table>
        </TrafficAccTypeAContainer>
    )
})


export default TrafficAccTypeA;
