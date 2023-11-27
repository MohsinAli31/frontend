import React from 'react'
import styles from "./styles.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
        <ul>
            <li>Works</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}

export default Header