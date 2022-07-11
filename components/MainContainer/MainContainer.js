import React, {useState, useEffect} from 'react'
import styles from './mainContainer.module.css'
import NewsItem from '../NewsItem/NewsItem'
import axios from 'axios'



const MainContainer = () => {

    const [news, setNews] = useState([])
    
    useEffect(() => {
        getNews()
    },[])

    const getNews = async() => {
        await axios.get(`https://fakestoreapi.com/products`,{
        })
        .then(res => {
            const {data} = res
            setNews(data)
        })
    }

    console.log(news)


  return (
    <div className={styles.container}>
        <div className={styles.firstRow}>
            <span>Latest Article</span>
            <button className={styles.moreBtn}>More</button>
        </div>
        <div className={styles.newsContainer}>
            {news?.map((newss) => (
                <NewsItem news={newss}/>
            ))}
        </div>
    </div>
  )
}

export default MainContainer