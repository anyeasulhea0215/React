import React,{memo} from "react";

import  {Routes,Route} from "react-router-dom";

import {Reset} from 'styled-reset';
import GlobalStyles from './components/GlobalStyles';


import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Main from './pages/main';

const App = memo(() => {

    return(
        <>

          <Reset/>
          <GlobalStyles />
          <Header />
          <Navbar />

          <Routes>
               <Route   path='/'  exact={true}  element={<Main />} />

          </Routes>

          <Footer />
        </>
    )
})

export default App;
