import React  from "react";

import {Link,Routes,Route} from "react-router-dom";


import MainSub1 from './MainSub1';
import MainSub2 from './MainSub2';


const Main=()=>{
    return(
        <div>

            <h1>Main</h1>

                 {/* 링크 구성 부분 */}
            <nav>
                <Link to="/main/sub1">[MainSub1]</Link>
                 <Link to="/main/sub2">[MainSub1]</Link>  {/* sub2 -> MainSub2의 경로 */}
            </nav>

            {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
            {/* 서브라우팅인 상대경로로 path를 지정해야 한다 */}
            <Routes>
                 {/* http://localhost:3000/main/sub1 */}
                 <Route path="sub1" element={ <MainSub1 /> } />
                  <Route path="sub2" element={ <MainSub2 /> } />
            </Routes>
        </div>
    );
};


export default Main;