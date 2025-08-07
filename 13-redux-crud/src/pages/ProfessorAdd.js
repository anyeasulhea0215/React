import React,{memo,useCallback} from "react";

import styled from 'styled-components';

import {Link,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { postItem } from "../slices/ProfessorSlice";

import Spinner from "../components/Spinner";
import ErrorView  from '../components/ErrorView';

import {TableInput,Buttons} from "../components/Styled";


const ProfessorAddContainer=styled.div`

`;

const ProfessorAdd=memo(() => {

    //리덕스 상태값을 가져오기
    const {loading,status,message}= useSelector((state) => state.ProfessorSlice);

     // 페이지 이동을 위한 navigate 함수 가져오기
    const navigate=useNavigate();

    //리덕스 액션함수를 가져오기
    const dispatch=useDispatch();

     const onHandleSubmit=useCallback((e) => {
        e.preventDefault();

        const formData=new FormData(e.target);

        (async () => {
            try{
                await dispatch(postItem(formData));
            } catch (err){
                console.error(" Error adding professor: ", err);
                alert("교수 추가 중에 오류 발생");
                return;
            }

            navigate("/");
        })();
     }, []);

    return(
        <ProfessorAddContainer>
             <Spinner  loading={loading} />
             <ErrorView status={status}  message={message}  />

            <form onSubmit={onHandleSubmit} >
                <TableInput>

                  <tbody>
                <tr>
                    <th>교수이름</th>
                    <td>
                        <input type="text"  name="name" placeholder="이름을 입력하세요." />
                    </td>
                </tr>
                <tr>
                    <th>사용자 아이디</th>
                    <td><input type="text" name="user_id"  placeholder="사용자 아이디를 입력하세요." /></td>
                </tr>


                <tr>
                    <th>직급</th>
                    <td>
                        <select name="position" >
                            <option value="교수"  >교수</option>
                            <option value="부교수" >부교수</option>
                            <option value="조교수" >조교수</option>
                            <option value="강사"  >강사</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>입사일</th>
                    <td><input type="date" name="hiredate" placeholder="입사일을 입력하세요." /></td>
                </tr>
                <tr>
                    <th>급여</th>
                    <td><input type="number" name="sal" placeholder="급여를 입력하세요"  /></td>
                </tr>
                <tr>
                    <th>보직수당</th>
                    <td><input type="number" name="comm"  /></td>
                </tr>

                 <tr>
                    <th>이메일</th>
                    <td><input type="email" name="email" /></td>
                </tr>

                <tr>
                    <th>연락처</th>
                    <td><input type="tel" name="phone"  /></td>
                </tr>

                <tr>
                    <th>상태</th>
                    <td>
                        <select name="status" >
                            <option value="재직">재직</option>
                            <option value="휴직">휴직</option>
                            <option value="퇴직">퇴직</option>
                        </select>
                    </td>
                </tr>


                <tr>
                    <th>소속학과</th>
                    <td>
                        <select name="department_id" >
                            <option value="101"  >컴퓨터공학과</option>
                            <option value="102"  >전자공학과</option>
                            <option value="103"  >기계공학과</option>
                        </select>
                    </td>
                </tr>
            </tbody>

             </TableInput>
               <Buttons>
                <button type="submit" >추가</button>
                <Link to="/" >취소</Link>
             </Buttons>

            </form>

        </ProfessorAddContainer>
    );
});

export default ProfessorAdd;