import React from "react";

const If2= ()=>{
    const isLogin=true;
    const articleList=false;
    const point=90;

    return (
        <div>
            <h1>If2</h1>

            <h2>조건식과 '&&' 연산자 사용</h2>
            {isLogin && <p>로그인 되셧습니다. </p>}

             <h2>조건식과 '&&' 연산자 사용</h2>
            {articleList && <p>조회된 게시글이 없습니다. </p>}

             <h2>삼항 연산자를 사용한 조건 분기</h2>
            {
                point ===90 ? (
                    <p>포인트가 90점입니다</p>
                ) : (
                     <p>포인트가 90점이 아닙니다</p>
                )
            }
        </div>
    )
};

export default If2;