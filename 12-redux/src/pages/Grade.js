import React, { memo, useEffect } from "react";
import styled from "styled-components";

// Slice에 정의된 액션함수를 참조 --> Slice에 구현된 내용에 따라 달라짐
import { getList } from "../slices/GradeSlice";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조 --> 고정코드
import { useSelector, useDispatch } from "react-redux";

import { Table } from "../components/Styled";
import Spinner from "../components/Spinner";

const GradeContainer = styled.div`
  .error-info {
    border: 2px solid #f06;
    padding: 10px 30px;
    background-color: #fee;

    h1 {
      color: #f06;
      margin-top: 0;
      margin-bottom: 10px;
    }

    p {
      color: #f06;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;

const Grade = memo(() => {
  // hook을 통해 slice가 관리하는 상태값 가져오기
  // --> 화면 출력에 필요한 항목만 선택적으로 구조분해 한다.
  const { loading, status, message, item } = useSelector( (state) => state.GradeSlice );

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  useEffect(() => {
    // 이미 데이터가 있다면 다시 조회하지 않음
    if (item && item.length > 0) return;

    dispatch(getList());
  }, []);

  return (
    <GradeContainer>
      <h2>Grade</h2>
      <Spinner loading={loading} />

      {status !== 200 && (
        <div className="error-info">
          <h1>{status} Error</h1>
          <p>{message}</p>
        </div>
      )}

      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>학년</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
          </tr>
        </thead>
        <tbody>
          {item &&
            item.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.level}</td>
                  <td>{v.sex}</td>
                  <td>{v.kor}</td>
                  <td>{v.math}</td>
                  <td>{v.eng}</td>
                  <td>{v.sci}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </GradeContainer>
  );
});

export default Grade;
