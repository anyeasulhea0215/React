import React,{memo, useEffect} from "react";
import  {Link,useNavigate,useParams} from 'react-router-dom';

import styled from "styled-components";

import {TableView,Buttons} from '../components/Styled';
import Spinner from '../components/Spinner';
import fetchHelper from '../helpers/FetchHelper';

const DepartmentViewContainer=styled.div`

`;

const DepartmentView=memo(() =>{
    //페이지 이동 처리 함수 생성
   const navigate=useNavigate();
    //url로부터 path파라미터 추출
   const params=useParams();
   //로딩 상태 변수 선언
   const [loading,setLoading]=React.useState(false);
   //학과 데이터를 저장할 변수 선언
   const [data,setData]=React.useState({});

   //학과 정보 조회하기
    useEffect(() =>{
        if(!params?.id){
            return;
        }

        (async () =>{
            let result=null;
            setLoading(true);

            try{
                result=await fetchHelper.get(`/departments/${params.id}`);
            } catch (e) {
                console.error(e);
                alert(e.message);
                return;
            } finally {
                setLoading(false);
            }

            setData(result.item || {});
        })();
    },[params.id]);


    return(
        <DepartmentViewContainer>
            <h2>학과 상세 정보</h2>

            <Spinner loading={loading} />


            <TableView>

                <tbody>
                    <tr>
                        <th>학과번호</th>
                        <td id="id" >{data?.id}</td>
                    </tr>
                    <tr>
                        <th>학과명</th>
                        <td id="dname" >{data?.dname}</td>
                    </tr>
                    <tr>
                        <th>위치</th>
                        <td id="loc" >{data?.loc}</td>
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td id="phone" >{data?.phone && <a href={`tel:${data.phone}`} >{data.phone}</a> }</td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td id="email" >{data?.email && <a href={`mailto:${data.email}`} >{data.email}</a> }</td>
                    </tr>
                    <tr>
                        <th>설립년도</th>
                        <td id="established" >{data?.established}</td>
                    </tr>
                    <tr>
                        <th>홈페이지</th>
                        <td id="homepage" >{data?.homepage && <a href={data.homepage} target="_blank" >{data.homepage}</a> }</td>
                    </tr>
                </tbody>
            </TableView>

            <Buttons>
                <Link to="/" >목록보기</Link>
                <Link to="/add" >신규등록</Link>
                <Link to={`/edit/${data?.id}`} >
                   수정하기
                </Link>

                <a
                  href="#"
                  onClick={async (e) => {
                    e.preventDefault();

                    if(window.confirm("정말 삭ㅈ[하시겠습니다")){
                        setLoading(true);
                        try{
                            await fetchHelper.delete(`/departments/${data.id}`);
                        } catch (e){
                            console.error(e);
                            alert(e.message);
                            return;
                        } finally{
                            setLoading(false);
                        }

                        alert("학과가 삭제되었습니다");
                        navigate("/");
                    }
                  }}
                >
                    삭제하기
                </a>
            </Buttons>
        </DepartmentViewContainer>
    );
});

export default DepartmentView;