import React from 'react'
import styles from './newsItem.module.css'
import Link from 'next/link'


const NewsItem = ({news}) => {


  return (
    <div className={styles.container}>
        <img src={news.image} width={'400px'} height={'388px'}/>
        <Link href={`/description/${news.id}`}>
            <a>
            <span className={styles.titleSpan}>{news.title}</span><br/>

            </a>
        </Link>
        <div className={styles.descContainer}>
        <span className={styles.description}>{news.description}</span>
        </div>
    </div>
  )
}

export default NewsItem