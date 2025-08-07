import React,{memo} from "react";

import {Routes,Route} from "react-router-dom"
import MenuLink from './components/MenuLink';

import {Reset} from 'styled-reset';
import GlobalStyles from './components/GlobalStyles';


import ImageEx from './pages/image_ex';
import StyleEx  from "./pages/style_ex";
import TabEx from "./pages/tab_ex";
import SubmenuEx from "./pages/submenu_ex";
import CoollapseEx from "./pages/collapse_ex";
import CreateElementEx from "./pages/create_element_ex";

const App = memo(()=>{
    return(
         <>

         <GlobalStyles />

         <h1> 09-demo</h1>
         <hr />

         <nav>

            <MenuLink to="/image_ex" >ImageEx</MenuLink>
            <MenuLink to="/style_ex" >StyleEx</MenuLink>
            <MenuLink to="/tab_ex" >TabEx</MenuLink>
            <MenuLink to="/submenu_ex" >SubmenuEx</MenuLink>
            <MenuLink to="/collapse_ex" >CollapseEx</MenuLink>
            <MenuLink to="/create_element_ex">CreateElementEx</MenuLink>
         </nav>

         <Routes>
             <Route  path="/image_ex" element={< ImageEx/>} />
             <Route  path="/style_ex" element={< StyleEx/>} />
             <Route   path="/tab_ex"  element={<TabEx/>} />
             <Route   path="/submenu_ex"  element={<SubmenuEx/>} />
             <Route   path="/collapse_ex"  element={< CoollapseEx/>} />
             <Route   path="/create_element_ex"  element={<CreateElementEx/>} />
         </Routes>

         </>
    );
});

export default App;
