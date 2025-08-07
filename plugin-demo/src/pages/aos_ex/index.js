
/**
 * AOS
 * Animation on Scroll
 */
import React,{memo,useEffect} from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"


const AosExContainer =styled.div`

  .box{
    width: 300px;
    height: 200px;
    font-size: 40px;
    color: white;
    background-color: #f60;
    text-align: center;
    line-height:200px;
    margin: 250px auto;
  }

`;


const AosEx=memo(() =>{
  useEffect (() =>{
    AOS.init();
  }, []);

  return(
      <AosExContainer>

        <h1>AosEx</h1>

        <div  className="box"
        data-aos="fade-zoom-in"
        data-aos-anchor-placement="top-center"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600" >
          AOS
        </div>

        <div  className="box"
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600" >
          AOS
        </div>

        <div  className="box"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600" >
          AOS
        </div>

        <div  id="example-anchor1" >example-anchor1</div>

        <div  className="box"
        data-aos="fade-up"
        data-aos-anchor="#example-anchor1"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600" >
          AOS
        </div>

        <div id="example-anchor2" >
           <div  className="box"
        data-aos="fade-down"
        //data-aos-anchor-placement="top-center"
        data-aos-anchor="#example-anchor2"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600" >
          AOS
        </div>
        </div>
      </AosExContainer>
  )


} );

export default AosEx;