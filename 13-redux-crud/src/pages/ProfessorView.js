import React,{memo,useMemo} from "react";

import styled from 'styled-components';
import dayjs from 'dayjs';

import {Link,useParams,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { deleteItem } from "../slices/ProfessorSlice";

import Spinner from "../components/Spinner";
import {TableView,Buttons} from "../components/Styled";
import ErrorView  from '../components/ErrorView';


const ProfessorViewContainer=styled.div`

`;

const ProfessorView=memo(() => {


    //Path parameter
    const {id} =useParams();

    // 페이지 이동을 위한 navigate 함수 가져오기
    const navigate=useNavigate();

    //리덕스 상태값을 가져오기
    const {loading,status,message,item}= useSelector((state) => state.ProfessorSlice);

    //리덕스 액션함수를 가져오기
    const dispatch=useDispatch();

    const professorItem=useMemo(() =>{
        if( !id || !item || Object.keys(item).length === 0) return null;
        return item.find((v) => v.id === parseInt(id));
    }, [item,id]);

    return(
        <ProfessorViewContainer>
             <Spinner  loading={loading} />
             <ErrorView status={status}  message={message}  />



             <TableView>

                <tbody>
                      <tr>
                        <th>번호</th>
                        <td>{professorItem?.id}</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>{professorItem?.name}</td>
                    </tr>
                    <tr>
                        <th>아이디</th>
                        <td>{professorItem.user_id}</td>
                    </tr>
                    <tr>
                        <th>직급</th>
                        <td>{ professorItem.position}</td>
                    </tr>
                    <tr>
                        <th>입사일</th>
                        <td>{dayjs(professorItem?.hireDate).format("YYYY-MM-DD") }</td>
                    </tr>
                    <tr>
                        <th>급여</th>
                        <td >{ professorItem?.sal?.toLocaleString()}만원</td>
                    </tr>
                    <tr>
                        <th>보직수당</th>
                        <td>{professorItem?.comm?.toLocaleString()}만원</td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td>{professorItem?.email && <a href={`mailto:${professorItem.email}`} >{professorItem.email}</a> }</td>
                    </tr>
                     <tr>
                        <th>연락처</th>
                        <td>{professorItem?.phone && <a href={`tel:${professorItem.phone}`} >{professorItem.phone}</a> }</td>
                    </tr>
                     <tr>
                        <th>상태</th>
                        <td>{ professorItem.status}</td>
                    </tr>
                     <tr>
                        <th>소속학과</th>
                        <td>{ professorItem.departmnet_id}</td>
                    </tr>

                </tbody>
             </TableView>

             <Buttons>
                <Link to="/" >목록보기</Link>
                <Link to="/add" >신규등록</Link>
                <Link to={`/edit/${professorItem?.id}`} >수정하기</Link>

                <a
                  href="#"
                  onClick={async (e) =>{
                    e.preventDefault();

                    if(window.confirm("정말 삭제하시겠습니까?")){
                        await dispatch(deleteItem(professorItem?.id));

                        alert("교수 정보가 삭제됨");
                        navigate("/")
                    }
                  }} >
                        삭제하기
                </a>
             </Buttons>
        </ProfessorViewContainer>
    );
});

export default ProfessorView;