import React,{memo} from "react";

import {Routes,Route} from "react-router-dom";
import GlobalStyles  from "./components/GlobalStyles";


import DepartmentList from "./pages/DepartmentList";
import DepartmentAdd from './pages/DepartmentAdd';
import DepartmentView from './pages/DepartmentView';
import DepartmentEdit from './pages/DepartmentEdit';

const App = memo(() => {
    return(
        <>
          <GlobalStyles />
          <h1>11-ajax-crud</h1>

          <Routes>
             <Route path='/' element={<DepartmentList />} />
             <Route path='/list' element={<DepartmentList />} />
             <Route path='/add' element={<DepartmentAdd />} />
             <Route path='/view/:id' element={<DepartmentView />} />
             <Route path='/edit/:id' element={<DepartmentEdit />} />
          </Routes>
        </>
    )
});



export default App;
