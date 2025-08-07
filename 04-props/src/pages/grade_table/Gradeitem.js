import React from 'react';

const GradeItem = ({ name, level, sex, kor = 0, eng = 0, math = 0, sinc = 0 }) => {
  const sum = parseInt(kor + eng + math + sinc);
  const avg = parseInt(sum / 4);

  return (
    <tr>
      <td><strong>{name}</strong></td>
      <td><strong>{level}</strong></td>
      <td>{sex}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{sinc}</td>
      <td><strong>{sum}</strong></td>
      <td><strong>{avg}</strong></td>
    </tr>
  );
};

export default GradeItem;
