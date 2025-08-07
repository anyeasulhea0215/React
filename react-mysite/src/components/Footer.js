import React,{memo} from "react";

import styled from 'styled-components';

import mq from '../components/MediaQuery';


const FooterContainer=styled.div`

  /**footer영역 */

    background-color: var(--my-color-black);
    text-align: center;
    padding: 50px 10px;

    .to-the-top{
        display: inline-block;
        background-color: var(--my-color-light-gray);
        padding: 10px 25px;
        font-size: 18px;
        color: var(--my-color-gray);
        margin-bottom: 10px;
        i{
            margin-right: 10px;
        }

        &:hover{
            background-color: var(--my-color-green);
            color: var(--my-color-black);
        }
    }

`;


const Footer = memo(() => {

    return(
    <FooterContainer>
       <a href="#" className="to-the-top"><i className="fa-sharp fa-solid fa-arrow-up"></i>To the top</a>
                <ul className="social-list">
                    <li>
                        <a href="#"><i className="fa fa-home"></i> </a>
                    </li>

                    <li>
                        <a href="#"><i className="fa fa-user"></i> </a>
                    </li>

                    <li>
                        <a href="#"><i className="fa fa-th"></i></a>
                    </li>

                    <li>
                        <a href="#"><i className="fa fa-envelope"></i> </a>
                    </li>

                    <li>
                        <a href="#"><i className="fa fa-search"></i></a>
                    </li>
                </ul>
                <address>copyright&copy;megait</address>

    </FooterContainer>
    );
});

export default Footer;