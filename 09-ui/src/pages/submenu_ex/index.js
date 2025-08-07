import React,{memo,useCallback} from "react";

import styled from "styled-components";
import {Link} from 'react-router-dom';

import { menuData } from "../../dataset";

const SubmenuExContainer=styled.div`
  .menu-container{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    .menu-item{
        position: relative;

        .sub{
        list-style: none;
        padding: 0;
        margin: 0;

        height: 0;
        overflow: hidden;
        transition: height 180ms ease-out;

        position: absolute;
        z-index: 99999;
        left: 0px;
        top: 48px;
        }
    }


  .link{
    background-color: #6b9428ff;
    display: flex;
    width: 179px;
    height: 48px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #cfdfb5;
    text-decoration: none;

    &:hover{
        background-color: #5a7d1f;
        color: #ffffff;
     }
   }


  }

`;

const SubmenuEx = memo (() =>{

   const onMenuItemOver =useCallback((e) =>{

    const current=e.currentTarget;   //이벤트가 발생한 자신 ->마우스가 올라간 1depth

    const sub=current.querySelector(".sub");   //자신의 자식요소중에서 .sub를 찾는다

    sub.style.height=`${sub.scrollHeight}px`;   //scrollHeight 는 overflow:hidden에 의해 잘려진 옾이를 의미함
   },[]);

   const onMenuItemOut=useCallback((e) =>{

    e.currentTarget.querySelector(".sub").style.height="0px";
   },[]);

    return(
        <SubmenuExContainer>
           <h2>SubmenuEx</h2>
           <ul className="menu-container" >
               {menuData.map((v,i) =>{
                return(
                    <li  key={v.id}  className="menu-item"  onMouseOver={onMenuItemOver} onMouseOut={onMenuItemOut} >
                        <Link   to={v.url} className="link" >{v.label}</Link>

                        {v.children && (
                            <ul  className="sub">
                               {v.children.map((vv,ii) => {
                                return(
                                    <li  key={vv.id} >
                                         <Link  to={vv.url}  className="link" >{vv.label}</Link>
                                    </li>
                                )
                               })}
                            </ul>
                        )}
                    </li>
                )
               })}
           </ul>

           <h2>안녕하세요 리액트</h2>

        </SubmenuExContainer>
    );
});


export default SubmenuEx;