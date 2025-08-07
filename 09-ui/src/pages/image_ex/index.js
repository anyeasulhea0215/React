import React,{memo, useCallback,useState} from "react";

import styled from "styled-components";


import img01 from '../../assets/img/img01.jpg';
import img02 from '../../assets/img/img02.jpg';
import img03 from '../../assets/img/img03.jpg';
import img04 from '../../assets/img/img04.jpg';
import img05 from '../../assets/img/img05.jpg';

const ImageExContainer=styled.div`
   .list{
    list-style: none;
    padding: 0;
    margin: 0;
    width: 640px;
    margin: auto;
    display: flex;

    li{
        width: 20%;
        a{
            display: block;
            margin: 10px;
            img{
                width: 100%;
            }
        }
    }
   }

   .viewer{
    width: 640px;
    margin: auto;
    padding: 0 10px;

    img{
        width: 100%;
        object-fit: cover;
    }
   }
`;


const imgList=[


     {img:img01, alt: '테스트이미지 1'},
     {img:img02, alt: '테스트이미지 2'},
     {img:img03, alt: '테스트이미지 3'},
     {img:img04, alt: '테스트이미지 4'},
    {img:img05, alt: '테스트이미지 5'}

]

const ImageEx = memo (() =>{

    const [currentIndex,setCurrentIndex] = useState(0);

    //썸네일 이미지의 링크를 클릭했을 경우 동작할 리스너
    const onThumbnailClick=useCallback((e) => {
        //클릭된 링크의 주소값
        const href=e.currentTarget.getAttribute("href");
        console.log(href);

        //추출한 href로부터 #을 제거하고 숫자만 추출
        const idx=parseInt(href.substring(1));
        console.log(idx);
        console.log(imgList[idx].img);

        setCurrentIndex(idx);
    }, []);

    return(
        <ImageExContainer>
           <h2>CollapseEx</h2>


           <ul className="list" >
               {imgList.map((v,i) => {
                return(
                    <li key={i}>
                         <a href={`#${i}`} onClick={onThumbnailClick} >
                            <img  src={v.img} alt={v.alt} />
                         </a>
                    </li>
                )
               })}
           </ul>

           <div className="viewer" >
                <img  src={imgList[currentIndex].img} alt={imgList[currentIndex].alt} />
           </div>
        </ImageExContainer>
    );
});


export default ImageEx;