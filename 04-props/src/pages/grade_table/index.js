import React from 'react';

// 데이터 파일 참조 --> 추후 이 부분은 백엔드에서 데이터를 가져오는 형태로 변경되어야 함.
import GradeData from '../../data/GradeData';

// 직접 정의한 컴포넌트 참조
import GradeItem from './Gradeitem';

const GradeTable = () => {
  return (
    <div>
      <h2>GradeTable</h2>

      <table border="1" cellPadding="7">
        <thead>
          <tr align="center">
            <th>이름</th>
            <th>학년</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          {GradeData.map((v, i) => {
            // { "이름": "철수", "학년": 1, "성별": "남자", "국어": 98, "영어": 78, "수학": 88, "과학": 64 },
           return(  <GradeItem key={i}
              name={v.이름}
              level={v.학년}
              sex={v.성별}
              kor={v.국어}
              eng={v.영어}
              math={v.수학}
              sinc={v.과학}
            />);
              })}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
