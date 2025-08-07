import React,{useState,useEffect} from "react";



const useMyWidth= () =>{

    const [myWidth,setMyWidth]=useState(window.innerWidth);

    const onMyResize= () => setMyWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize',onMyResize);
        return() => window.removeEventListener('resize',onMyResize);
    } , []);
  return myWidth;
}
;

export {useMyWidth};