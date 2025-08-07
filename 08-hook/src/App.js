import React,{memo} from "react";

import { BrowserRouter } from 'react-router-dom';

import {Routes,Route} from "react-router-dom";
import MenuLink from './components/MenuLink';

// import Meta
import {Reset} from "styled-reset";
import GlobalStyle  from "./components/GlobalStyles";

/** 하위 페이지를 담당하는 컴포넌트들 참조 */
import MyState from './pages/my_state';
import DateRange1 from './pages/date_range1';
import MyReducer from './pages/my_reducer';
import DateRange2 from "./pages/date_range2";
import MyEffect from "./pages/my_effect";
import MyRef from "./pages/my_ref";
import MyCallback from "./pages/my_callback";
import MyMemo from "./pages/my_memo";
import MyWidth from "./pages/my_width";


const App = memo(() => {
    return(
        <>

           <GlobalStyle />

           <h1> 08-hook-event</h1>

           <hr />

           <nav>
             <MenuLink to='/my_state' > MyState </MenuLink>
             <MenuLink to='/date_range1'>DateRange 1</MenuLink>


             <MenuLink to='/my_effect' > MyEffect</MenuLink>

             <MenuLink to='/my_memo' > MyMemo</MenuLink>

              <MenuLink to='/my_reducer' > MyReducer</MenuLink>
               <MenuLink to='/data_range2'> Daterange 2</MenuLink>


                <MenuLink to='/my_ref' > Myref </MenuLink>

                 <MenuLink to='/my_callback'> MyCallback</MenuLink>

                  <MenuLink to='/my_width'> MyWidth</MenuLink>

           </nav>

           <Routes>
              <Route path='/my_state' element={<MyState />}  />
              <Route path='/date_range1' element={<DateRange1 />}  />

              <Route path='/my_effect' element={<MyEffect />}  />

              <Route path='/my_memo' element={<MyMemo />}  />

              <Route path='/my_reducer' element={<MyReducer />}  />

              <Route path='/data_range2' element={<DateRange2 />}  />

              <Route path='/my_ref' element={<MyRef />}  />

              <Route path='/my_callback' element={<MyCallback />}  />

              <Route path='/my_width' element={<MyWidth />}  />

           </Routes>

        </>
    );
});


export default App;
