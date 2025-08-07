import React,{memo} from 'react';
import {Routes,Route} from "react-router-dom";
import GlobalStyles from './components/GlobalStyles';

import MenuLink from './components/MenuLink';

import Counter from './pages/Counter';
import Grade  from './pages/Grade';
import TrafficAccTypeA from "./pages/TrafficAccTypeA";
import TrafficAccTypeB from './pages/TrafficAccTypeB';

const App= memo(() =>{
    return(
        <>
           <GlobalStyles />
           <h1>12-simple-redux</h1>

           <nav>
             <MenuLink to="/counter" >Counter</MenuLink>
             <MenuLink to="/grade" >Grade</MenuLink>
             <MenuLink to="/traffic_acc_type_a" >TrafficAccTypeA</MenuLink>
             <MenuLink to="/traffic_acc_type_b" >TrafficAccTypeB</MenuLink>
           </nav>

           <Routes>
              <Route  path="/counter" element={ <Counter /> }/>
              <Route  path="/grade" element={<Grade />} />
              <Route  path="/traffic_acc_type_a" element={ <TrafficAccTypeA /> }/>
              <Route  path="/traffic_acc_type_b" element={<TrafficAccTypeB />} />
           </Routes>
        </>
    );
});


export default App;
