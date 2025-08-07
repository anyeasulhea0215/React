//리액트의 기본을 구성하는 패키지 참조 /모든 js파일의 최상단에 필수 명시

import React from 'react';

//리액트가 DOM을 구성하기 위한 기능참조
import ReactDOM from 'react-dom/client';

//이 소스파일과 동일한 위치의 App.js("./App")을 App이라는 이름으로 가져온다
import App from './App';

//컴포넌트를 페이지에 랜더링한다
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);
