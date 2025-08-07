import React from "react";

import {useLocation} from 'react-router-dom';

//get 파라미터 추출기능을 갖는 useLocation()함수를 react-router-dom 패키지로부터 참조함

const DepartmentGet= ()=>{

    //1)요청 데이터 확인하기
    //  --> {pathname: '/department_get' , search:'?id=101&msg=hello',
    //   hash: '',state : null, key:'5i2zz1lo'}
    //리턴 객체의 `search` 프로퍼티로부터 변수를 추출해야 한다
    const location=useLocation();
    console.group("useLocation()의 리턴값 확인");
    console.debug(location);
    console.groupEnd();

    //2)QueryString문자열을  JSON 객체로 변환
    const query=new URLSearchParams(location.search);
    const params=Object.fromEntries(query);
    console.group("파라미터 처리 결과 확인");
    console.debug(params);
    console.debug('요청된 학과번호 값 =%s (%s)', params.id , typeof params.id);
    console.debug('요청된 메세지 내용 =%s (%s)', params.msg , typeof params.msg);
    console.groupEnd();


    // 3)한 페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
    //   ==> 실전에서는 이 값에 해당하는 jSON을 백엔드로 부터 받아와야 한다 => Ajax
    const departmentList={
        item: [
            {id:101,dname:'컴퓨터공학과', loc:'1호관'},
            {id:102,dname:'컴퓨터공학과', loc:'2호관'}

        ]
    };


     /** 4) 주어진 데이터에서 QueryString 변수와 id와 일칳나느 항목 찾기 */
    let departmentItem=departmentList.item.find((v,i)=> v.id == params.id);

    if(!departmentItem){
        return (<h3>존재하지 않는 데이터에 대한 요청입니다</h3>);
    }

    return(
       <div>
          <h1>DepartmentGet</h1>
          <h2>{departmentItem.dname}</h2>
          <ul>
             <li> 학과번호:{departmentItem.id}</li>
             <li> 학과위치:{departmentItem.loc}</li>
          </ul>
       </div>
    );
};

export default DepartmentGet;
