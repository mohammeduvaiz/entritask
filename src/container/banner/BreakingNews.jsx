import React from 'react'
import './BreakingNews.scss'
import Weather from '../weather/Weather'
import { useSelector } from 'react-redux'
import { fetchNews } from '../../action/newsAction'
const BreakingNews = () => {

    const { news } = useSelector(state => state.newsReducer)

    console.log("breaking news is", news[0])
    return (
        <div className="app__breaking">
            <Weather />
            <div className='app__item '>
                <h1 className="bold-text">Breaking News</h1>
                <div className="app__image app__flex">
                    <img src={news[0]?.image} alt={news[0]?.title} />
                </div>
                <div className="app__breaking-content app__flex">
                    <h4 className='bold-text'>{news[0]?.title}</h4>
                    <p className='p-text' style={{ marginTop: 10 }}>{news[0]?.content}</p>
                    <div className='app__breaking-src app__flex'>
                        <a className='p-text' href={news[0]?.source?.url}>{news[0]?.source?.url}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreakingNews
