import React,{memo,useState,useEffect} from "react";
import {Link,Routes,Route} from 'react-router-dom';

import Spinner from '../../components/Spinner';
import NewsCard from './NewsCard';
import NewsList from './NewsList';

import NewsData from '../../data/NewsData';

import fetchHelper from '../../helpers/FetchHelper';

const News= memo (() =>{

    const [data,setData]=useState([] );

    const [loading,setLoading]=useState(false);

    useEffect(() => {
        (async() => {
            let data=null;
            setLoading(true);

            try{
                data=await fetchHelper.get("/news");
                console.log(data);
            } catch (e) {
               console.error(e);
               alert(e.message);
               return;
            }

            setData(data.item);
            setLoading(false);
        })();
    },[]);

    return(
        <div>
            <h2>News</h2>

            <nav>
                <Link to='/news/news_card'>카드형</Link>&nbsp;|&nbsp;
                <Link to='/news/news_list'>리스트형</Link>
            </nav>

            <Routes>
                <Route  path='news_card' element={<NewsCard news={data} />} />
                <Route  path='news_list' element={<NewsCard news={data} />} />
            </Routes>
        </div>
    )
});