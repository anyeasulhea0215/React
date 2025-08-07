import React from 'react';

import MySubComponent from './MySubComponent';


const MyComponent1= ()=>{

    return(
    <div>

        <h2>안녕하세요 리액트</h2>
        <p> react compent structure</p>


        <MySubComponent/>
        <MySubComponent/>
        <MySubComponent/>

    </div>
    );
};

export default MyComponent1;
