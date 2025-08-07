/**
 *
 *
 */

import React,{memo, useCallback} from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import img1 from "../../assets/img/img1.png";


const SweetAlertExContainer =styled.div`
.btn{
    border: 1px solid #d5d5d5;
    padding: 10px 20px;
    margin:  0 10px;
    font-size: 16px;


    &:first-child{
        margin-left:0;
    }

    &:hover{
        background-color: #aaa;
    }

    &:active{
        background-color: #ccc;
        transform: scale(0.9,0.9);
    }
}

`;


const SweetAlertEx=memo(() =>{

    const MySwal=withReactContent(Swal);

    const onButton1Click=useCallback(() =>{
        MySwal.fire({
            title:"Promise",
            text:"Sweet Alert ~~~",
            icon:"info",
            footer:'<a  href="http://sweetalert2.github.io/" > SweetAlert에대해 궁금한가요?<a/>'
        }).then((result) =>{
            console.debug(result);

            if(result.isConfirmed){
                MySwal.fire("확인 버튼을 눌럿음");
            } else if(result.isDismissed && ReadableStreamDefaultController.dismiss == 'backdrop'){
                MySwal.fire("화면의 빈 공간을 눌렀습니다");
            }
        });
    }, []);


    //Async~Await 방식을 사용한 다이얼 로그

    const onButton2Click=useCallback( async () =>{
       const result=await MySwal.fire({
        title:"Async Await",
        text:"SweetAlert을 활용한 메시지 박스 테스트",
        icon:"success",
        footer:'<a  href="http://sweetalert2.github.io/" > SweetAlert에대해 궁금한가요?<a/>',
       });

       console.debug(result);

        if(result.isConfirmed){
                MySwal.fire("확인 버튼을 눌럿음");
            } else if(result.isDismissed && ReadableStreamDefaultController.dismiss == 'backdrop'){
                MySwal.fire("화면의 빈 공간을 눌렀습니다");
            }

    },  []);

    //아이콘 대신 이미지를 사용하는 다이얼로그
    const onButton3Click=useCallback( async () =>{
       const result=await MySwal.fire({

        imageUrl:img1,
        imageWidth:"95%",
        imageAlt:"Photographic",
        title:"My Photo",
        text:"Hello?",
       });

       console.debug(result);

        if(result.isConfirmed){
                MySwal.fire("확인 버튼을 눌럿음");
            } else if(result.isDismissed && ReadableStreamDefaultController.dismiss == 'backdrop'){
                MySwal.fire("화면의 빈 공간을 눌렀습니다");
            }

    },  []);

    //다양한 버튼 사용
    const onButton4Click=useCallback( async () =>{
       const result=await MySwal.fire({
        title:"확인",
        text:"변경사항을 저장하시겟습니가?",
        icon:"question",
        showCloseButton:true,
        showDenyButton:true,
        showCancelButton:true,
        confirmButtonText:'네',
        denyButtonText:'아니오',
        cancelButtonText:"나중에"

       });

       console.debug(result);

        if(result.isConfirmed){
                MySwal.fire("네를 선택하엿음");
            } else if(result.isDenied){
                MySwal.fire("아니오를 눌렀습니다");
            } else if (result.isDismissed && result.dismiss == 'cancel'){
                MySwal.fire("나중에를 선택하엿스빈다")
            }
             else if (result.isDismissed && result.dismiss == 'close'){
                MySwal.fire("닫기버튼을 눌렀습니다")
            }
             else if (result.isDismissed && result.dismiss == 'backdrop'){
                MySwal.fire("화면에 빈공간을 눌렀습니다")
            }

    },  []);

    const onButton5Click=useCallback( async () =>{
       const result=await MySwal.fire({

        title:'<strong style="color:#fff"> html <u> example</u> </strong>',
        icon:"info",
        html: '<p style="color:#fff">  You cans use <b> bold text</b>, <a href="//sweetalert2.github.io">links</a> and other html tags  </p>',
        background:`url(${img1})`,
        showCloseButton:true,
        showDenyButton:true,
        focusConfirm:true,
        confirmButtonText:'네',
        denyButtonText:'아니오',

       });

       console.debug(result);

        if(result.isConfirmed){
                MySwal.fire("긍정 버튼을눌렀습니다");
            } else if(result.isDenied){
                MySwal.fire("부정 버튼을  눌렀습니다");
            } else if (result.isDismissed && result.dismiss == 'close'){
                MySwal.fire("닫기버튼을 눌렀습니다")
            }
             else if (result.isDismissed && result.dismiss == 'backdrop'){
                MySwal.fire("화면에 빈공간을 눌렀습니다")
            }

    },  []);

    return(
        <SweetAlertExContainer>
            <h1>Sweet Alert2Ex</h1>

            <button  className="btn"  onClick={onButton1Click} >Button1</button>
            <button  className="btn"  onClick={onButton2Click} >Button2</button>
            <button  className="btn"  onClick={onButton3Click} >Button3</button>
            <button  className="btn"  onClick={onButton4Click} >Button4</button>
            <button  className="btn"  onClick={onButton5Click} >Button5</button>
        </SweetAlertExContainer>
    )



} );

export default SweetAlertEx;