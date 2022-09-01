import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './NewsArticle.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../../action/newsAction'

const NewsArticles = () => {
    // const [news, setNews] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    const { news } = useSelector(state => state.newsReducer)
    
    console.log(news)
    return (
        <>
            <h1 className="app__heading">Latest News</h1>
            <div
                className='app__articles'>
                {news?.map((article, index) => (
                    <div className='app__item app__flex' key={index}>
                        <div className="app__image app__flex">
                            <img src={article?.image} alt={article?.title} />
                        </div>
                        <div className="app__article-content app__flex">
                            <h4 className='bold-text'>{article?.title}</h4>
                            <p className='p-text' style={{ marginTop: 10 }}>Source: {article?.source?.name}</p>
                            <div className='app__article-src app__flex'>
                                <a className='p-text' href={article?.source?.url}>{article?.source?.url}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewsArticles
