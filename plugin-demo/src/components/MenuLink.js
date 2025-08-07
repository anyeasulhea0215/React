import React, { Children } from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const MenuLinkContainer= styled(NavLink)`
  font-size: 20px;
  padding-bottom: 2px;

  &:hover{
    color: #22b8cf;
  }

  &:after{
    content: '|';
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child{
    &:after{
        color: #fff;
    }
  }

  &.active{
    text-decoration: underline;
    color: #22b8cf;
  }
`;

const MenuLink=({to,children})  => <MenuLinkContainer to={to} >{children} </MenuLinkContainer>;

export default MenuLink;