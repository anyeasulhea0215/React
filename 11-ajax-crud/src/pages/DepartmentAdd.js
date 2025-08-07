import React,{memo, useState,useCallback} from "react";
import  {useNavigate} from 'react-router-dom';

import styled from "styled-components";

import {TableInput,Buttons} from '../components/Styled';
import Spinner from '../components/Spinner';
import fetchHelper from '../helpers/FetchHelper';
import regexHelper from '../helpers/RegexHelper';

const DepartmentAddContainer=styled.div`

`;

const DepartmentAdd=memo(() =>{

    //페이지 이동 처리 함수 생성
   const navigate=useNavigate();


   //로딩 상태 변수 선언
   const [loading,setLoading]=React.useState(false);



    //폼 제출 처리 이벤트 핸들러
    const handleSubmit =useCallback(async (e) =>{
        e.preventDefault();

        try{
            regexHelper.value('#dname','학과명을 입력하세요');
            regexHelper.value('#loc','위치를 입력하세요');
            regexHelper.value('#phone','전화번호를 입력하세요');
            regexHelper.value('#email','이메일을 입력하세요');
            regexHelper.value('#established','설립년도를 입력하세요');
            regexHelper.value('#homepage','홈페이지 url을 입력하세요');

            regexHelper.maxLength('#dname', 50, ' 학과명은 최대 50자까지 입력할수 있습니다');
            regexHelper.maxLength('#loc', 100, '위치는 최대 100자까지 입력할수 있습니다');
            regexHelper.maxLength('#phone', 20, '전화번호는 최대 20자까지 입력할수 있스빈다');
            regexHelper.maxLength('#email', 100, ' 이메이릉 최대 100자');
            regexHelper.maxLength('#established', 4, ' 살립년도는 최소 4자리숫자');
            regexHelper.maxLength('#homepage', 200, '홈페이지는 최대 200자  ');

        } catch (e){
            alert(e.message);
            e.element.focus();
            return;
        }

        setLoading(true);
        let result=null;

        try{
            result=await fetchHelper.post(`/departments/${params.id}`,e.currentTarget);
            alert('학과가 등록되었습니다');
        } catch(e){
            console.error(e);
            alert(e.message);
        } finally{
            setLoading(false);
        }


        navigate(`/view/${result.item.id}`);
    },[]);


    return(
        <DepartmentAddContainer>
            <h2>학과 등록</h2>

            <Spinner loading={loading} />

            <form id="my-form"  onSubmit={handleSubmit}>
                <TableInput>
                    <tbody>
                  <tr>
                    <th>학과명</th>
                    <td><input type="text" name="dname" id="dname" placeholder="학과명 입력"  /></td>
                  </tr>
                  <tr>
                    <th>위치</th>
                    <td><input type="text" name="loc" id="loc" placeholder="위치를 입력하세요"   /></td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td><input type="text" name="phone" id="phone" placeholder="전화번호를 입력하세요"   /></td>
                  </tr>
                  <tr>
                    <th>이메일</th>
                    <td><input type="email" name="email" id="email" placeholder="이메일을 입력하세요"  /></td>
                  </tr>
                  <tr>
                    <th>설립년도</th>
                    <td><input type="number" name="established" id="established" placeholder="설립연도를 입력"   /></td>
                  </tr>
                  <tr>
                    <th>홈페이지</th>
                    <td><input type="url" name="homepage" id="homepage" placeholder="홈페이지url을 입력." /></td>
                  </tr>

                  </tbody>
                </TableInput>
            </form>



            <Buttons>
                <button type="submit" >등록</button>
                <button type="reset" >초기화</button>
            </Buttons>
        </DepartmentAddContainer>
    );
});

export default DepartmentAdd;