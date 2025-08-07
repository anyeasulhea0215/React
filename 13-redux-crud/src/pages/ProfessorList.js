import React,{memo,useEffect,useCallback} from 'react';

import styled from 'styled-components';
import dayjs from 'dayjs';

import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";

import Spinner from "../components/Spinner";
import {Table,Buttons} from "../components/Styled";
import ErrorView  from '../components/ErrorView';
import { getList } from '../slices/ProfessorSlice';

const ListContainer=styled.div`

  .search-container{

    padding: 10px 0;
    margin: 0;
    margin-bottom: 10px;
    input,button{
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }

  }

  tr{
    &:nth-child()even{
        background-color: #fff;
    }
    &:hover{
        background-color: #000;
    }
  }

  .search-form{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    input{
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px;
        box-sizing: border-box;
        width: 300px;
        font-size: 14px;
    }
  }

  table{
    td:first-child{
        width: 50px;
        height: 50px;
        padding: 0;

        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
        }
    }
  }
`;

const List=memo(() => {
    //리덕스 상태값을 가져오기
    const {loading,status,message,item}= useSelector((state) => state.ProfessorSlice);
    console.log(item);


    //리덕스 액션함수를 가져오기
    const dispatch=useDispatch();

    //교수 이름 검색어를 위한 상태값
    const [name,setName]=React.useState("");

    useEffect(() => {
         if(Array.isArray(item) && item.length > 0){
            return;
         }

        dispatch(getList({name}));
    },[name]);

    const hidingErrorImg=(e) => {
        e.target.onerror=null;
        e.target.style.display="none";
    };

    const handleSearchSubmit=useCallback((e) => {
        e.preventDefault();
        setName(e.currentTarget.name.value);
    }, []);

    return(
        <ListContainer>
             <Spinner  loading={loading} />
             <ErrorView status={status}  message={message}  />
             <form  className='search-form'  onSubmit={(e)=>{
                e.preventDefault();
                setName(e.target.name.value);
             }}>


                <input  type='search'  name='name'  placeholder='교수이름 검색...' />
                 <Buttons>
                    <button type='submit' >검색</button>
                    <Link to="/add" >교수추가</Link>
                 </Buttons>

             </form>

             <Table>
                <thead>
                    <tr>
                       <th>-</th>
                        <th>번호</th>
                         <th>이름</th>
                          <th>아이디</th>
                         <th>직급</th>
                         <th>입사일</th>
                          <th>급여</th>
                           <th>보직수당</th>
                         <th>이메일</th>
                          <th>연락처</th>
                         <th>상태</th>
                          <th>소속학과</th>

                    </tr>
                </thead>
                <tbody>
                    {item &&
                      item.map((v,i)=>{
                        return(
                            <tr key={i} >
                                 <td>
                                    <img  src={v.photo_url} onError={hidingErrorImg} />
                                </td>
                                <td>{v.id}</td>
                             <td><Link to={`/view/${v.id}`} > {v.name} </Link></td>
                             <td>{v.user_id}</td>
                             <td>{v.position}</td>
                             <td>{dayjs(v.hiredate).format("YYYY-MM-DD")}</td>
                             <td>{v.sal?.toLocaleString()}</td>
                             <td>{v.comm?.toLocaleString()}</td>
                             <td>{v.email && (<a href={`mailto:${v.email}`} >{v.email}</a>)}</td>
                             <td>{v.phone && (<a href={`tel:${v.phone}`} >{v.phone}</a>)}</td>
                             <td>{v.status}</td>
                             <td> {v.department_id} </td>
                            </tr>
                        )
                      })}
                </tbody>
             </Table>
        </ListContainer>
    );
});

export default List;
