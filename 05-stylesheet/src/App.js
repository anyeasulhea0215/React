import React from "react";
import styled from "styled-components";


import { NavLink,Routes,Route } from "react-router-dom";


import { Reset } from "styled-reset";

// 전역 SCSS 적용을 위한 StyledComponent
import GlobalStyles from "./components/GlobalStyles";


import InlineCss from './pages/inline_css';
import CssClass from './pages/css_class';
import CssModule from './pages/css_module';
import StyledComponent from './pages/styled_component';
import Responsive from './pages/responsive';
import News from "./pages/news/News";


/** 메뉴링크 컨테이너용 */
const MenuBar = styled.nav`

   .menu-item{
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;


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
   }
`;


const App = ()=>{

    return(

        <>
        {/** reset.css 적용하기 ->여기서는 사용안함 */}
        {/** <Reset /> */}
        <GlobalStyles />

        <h1> 05-stylesheet</h1>

        <MenuBar>
            <NavLink className='menu-item' to='/inline_css' > Inlinecss </NavLink>
             <NavLink className='menu-item' to='/css_class' > CssClass </NavLink>
             <NavLink className='menu-item' to='/css_module' > CssModule </NavLink>
             <NavLink className='menu-item' to='/styled_component' > StyledComponent </NavLink>
              <NavLink className='menu-item' to='/responsive' > Responsive </NavLink>
               <NavLink className='menu-item' to='/news' > newsDemo </NavLink>
        </MenuBar>


        <hr />

        <Routes>
            <Route path='/inline_css' element={<InlineCss />} />
            <Route path='/css_class' element={<CssClass />} />
            <Route path='/css_module' element={<CssModule />} />
            <Route path='/styled_component' element={<StyledComponent />} />
            <Route path='/responsive' element={<Responsive />} />
            <Route path='/news/*' element={<News />} />
        </Routes>

        </>
    );
}


export default App;