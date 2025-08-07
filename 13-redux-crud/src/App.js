import React,{memo} from "react";


import {Routes,Route} from "react-router-dom";
import  GlobalStyles  from "./components/GlobalStyles";

import ProfessorList from './pages/ProfessorList';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorView from './pages/ProfessorView';
import ProfessorEdit from './pages/ProfessorEdit';

const App= memo(() => {
    return(
        <>
          <GlobalStyles />

          <h1> 13-redux-crud</h1>

            <Routes>
                 {/** --페이지 역할을 할 컴포넌트를 명시하기 ----------- */}
                <Route  path='/'  element={<ProfessorList/>} />
                <Route  path='/list'  element={<ProfessorList/>} />
                <Route  path='/add'  element={<ProfessorAdd/>} />
                <Route  path='/view/:id'  element={<ProfessorView/>} />
                <Route  path='/edit/:id'  element={<ProfessorEdit/>} />
            </Routes>

        </>
    )
});

export default App;
