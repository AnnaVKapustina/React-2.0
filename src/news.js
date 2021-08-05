import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, setNewsList } from './action/news';
import { NEWS_REQUEST_STATUS } from './reduser/news';

export default function News (props) {
const { status, list } = useSelector((state) => state.news)
const dispatch = useDispatch()

const loadData = () => dispatch(fetchNews())
const clearData = () => dispatch(setNewsList([]))

if (status === NEWS_REQUEST_STATUS.LOADING) {
    return <p className="news_page_heading">Loading...</p>
}
    return (<div className='news_page'>
        <p className="news_page_heading">News</p>
        <div className='news_btn'>
        <Button variant="contained" color="primary" onClick={loadData}>Load News</Button>
        <Button variant="contained" color="primary" onClick={clearData}>Clear News</Button>
        </div>

        {status !== NEWS_REQUEST_STATUS.ERROR ? (
           <ol>
           {list.map((newsItem) => (
               <li>
                   <p>{newsItem.title}</p>
               </li>
           ))}
       </ol>
        ) : (<p style={{ color: 'red' }}>ERROR</p>)}
    </div>)
}