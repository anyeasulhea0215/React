import React,{memo, useState,useEffect,useCallback,useRef} from "react";
import  {Link} from 'react-router-dom';

import styled from "styled-components";

import {Table,Buttons} from '../components/Styled';
import Spinner from '../components/Spinner';
import fetchHelper from '../helpers/FetchHelper';

const DepartmentListContainer=styled.div`
  .search-form{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    input[type="search"]{
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px;
        box-sizing: border-box;
        width: 300px;
        font-size: 14px;
    }
  }
`;

const DepartmentList=memo(() =>{

    const [data,setData]=useState([]);
    const [keyword,setKeyword]=useState('');
    const [loading,setLoading]=useState('false');

    const searchInputRef=useRef();

    useEffect(() =>{
        (async () =>{
            let result=null;
            setLoading(true);

            try{
                result=await fetchHelper.get('/departments',{
                    dname_like:keyword
                });
            } catch (e) {
                console.error(e);
                alert(e.message);
                return;
            } finally{
                setLoading(false);
            }

            setData(result.item || []);
        }) ();
    },[keyword]);

    const onSearchSubmit =useCallback((e) =>{
        e.preventDefault();
        setKeyword(searchInputRef.current.value.trim());
    },[]);

    return(
        <DepartmentListContainer>
            <h2>학과목록</h2>

            <Spinner loading={loading} />

            <form className="search-form" onSubmit={onSearchSubmit} >
                <input type="search" ref={searchInputRef}  placeholder="학과이름 검색" />
                <Buttons>
                    <button type="submit" >검색</button>
                    <Link to="/add" >신규 학생 등록</Link>
                </Buttons>

            </form>

            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((v,i) =>(
                        <tr key={v.id} >
                             <td>{v.id}</td>
                             <td><Link to={`/view/${v.id}`} > {v.dname} </Link></td>
                             <td>{v.loc}</td>
                             <td>{v.phone && (<a href={`tel:${v.phone}`} >{v.phone}</a>)}</td>
                             <td>{v.email && (<a href={`mailto:${v.email}`} >{v.email}</a>)}</td>
                             <td>{v.established}</td>
                             <td>{v.homepage && (<a href={v.homepage} target="_blank"  >{v.homepage}</a>)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </DepartmentListContainer>
    );
});

export default DepartmentList;