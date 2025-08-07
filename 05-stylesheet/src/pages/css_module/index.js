import React from "react";


import myStyles from '../../assets/css/mystyle.module.css';

const CssModule = () => {
    return(
        <div>
            <h1>CssModule</h1>


            <h3>변수에 저장된 css 클래스</h3>

            <div className={myStyles.myCssBox} />


            <h3>  독립 클래스</h3>
            <div   className="myBorderBox" />


            <h3>다중 클래스 적용 (1)</h3>
            <div  className={`${myStyles['my-size']}   ${myStyles['my-bg']}  `} />

            <h3>다중 클래스 적용 (2)</h3>
            <div  className={[myStyles['my-size'] , myStyles['my-bg']].join('   ')}  />



        </div>
    )
}

export default CssModule;