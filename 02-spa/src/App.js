import React  from "react";

{/**링크와 페이지 구성에 필요한 컴포넌트 참조 */}
import {Link,Routes,Route} from "react-router-dom";

//하위 페이지를 담당하는 컴포넌트 참조
//import경로가 폴더를 의미할 경우 그 안의  index.js를 참조한다.
import Home from './pages/home';
import About from './pages/about';
import Main from './pages/main';
import Error404 from './pages/error404';
import DepartmentGet from "./pages/department_get";
import DepartmentPath from "./pages/department_path";

const App=() => {
  return (
    <div>
        <h1>02-simple-spa</h1>
        {/**---링크 구성 부분 ---- */}

        <nav>
            {/**기본 라우팅 구성 */}
            <Link to="/">[Home]</Link>
            <Link to="/about">[About]</Link>
            {/** 서브라우팅 사용 */}
            <Link to="/main">[Main]</Link>

            <Link to="/department_get?id=101&msg=hello">[컴퓨터 공학과]</Link>
             <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>

              <Link to="/department_path/201/hello">[전자 공학과]</Link>

               <Link to="/department_path/202/world">[기계 공학과]</Link>
        </nav>

        <a href="/about">일반링크</a>

        <Routes>
            <Route path="/" element={<Home/> }  />  {/**첫 페이지로 사용되는 컴포넌트는 path에 "/"를 권장 */}
            <Route path="/about" element={<About/>}  />
             <Route path="/main/*" element={<Main/>}  />  {/** 서브라우팅 사용 */}
             <Route path="/department_get" element={  <DepartmentGet /> } />
             <Route  path='/department_path/:id/:msg' element={<DepartmentPath/> } />  {/**Path파라미터는 URL 형식에 변수의 위치와 이름을 ':'을 사용해서 지정해줘야 한다 */}
              <Route path="/*" element={<Error404 />}  />   {/** 지정되지 않은 모든 요청에 반응.단 Routes블록의 맨 마지막에 배치해야 함 */}
        </Routes>
    </div>
  )
};

export default App;
