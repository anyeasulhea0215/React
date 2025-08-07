import React from "react";



import MyShildrenSub from './MyChildrenSub';


const MyChildren= () => {
    return(
        <div>
            <h2>MyProps</h2>

            <MyChildren color="red" size={7}> 안녕 리액트</MyChildren>
            <MyChildren color="green" size={5}> 안녕 리액트</MyChildren>
            <MyChildren color="blue" > 안녕 리액트</MyChildren>
        </div>
    )
};


export default MyChildren;