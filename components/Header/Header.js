import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>Tenter</div>
        <div className={styles.headerLink}>Home</div>
        <div className={styles.headerLink}>Feature</div>
        <div className={styles.headerLink}>News</div>
        <div className={styles.headerLink}>Videos</div>
    </div>
  )
}

export default Header