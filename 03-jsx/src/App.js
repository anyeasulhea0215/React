import React from "react";

import {Link,Routes,Route} from "react-router-dom"


import Expr from './pages/Expr';
import If1 from './pages/If1';
import If2 from './pages/If2';
import Loop1 from './pages/Loop1';
import Loop2 from './pages/Loop2';


function App() {
  return (
      <div>
        <h1>03-jsx</h1>

        <nav>
            <Link to="/expr">[Expr]</Link>

            <Link to="/if1">[If1]</Link>
            <Link to="/if2">[If2]</Link>

            <Link to="/loop1">[Loop1]</Link>
            <Link to="/loop2">[Loop2]</Link>
        </nav>

        <hr />

        <Routes>
            <Route path="/expr" element={<Expr /> } />

            <Route path="/if1" element={<If1 /> } />
            <Route path="/if2" element={<If2 /> } />

            <Route path="/loop1" element={<Loop1 /> } />
            <Route path="/loop2" element={<Loop2 /> } />
        </Routes>
      </div>
  );
}

export default App;
