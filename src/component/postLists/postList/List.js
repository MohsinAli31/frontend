import React from 'react'
import styles from "./styles.module.scss"

const PostList = ({imag, title, date, dSection, desp}) => {
    return (
            <div className={styles.mainList}>
                <div>
                    <img className={styles.image} src={imag} alt="list1" />
                </div>
                <div className={styles.content}>
                    <p className={styles.Listtitle}>{title}</p>
                    <div className={styles.dateSection}>
                        <p className={styles.date}><span>{date}</span></p>
                        <p className={styles.dashboard}>{dSection}</p>
                    </div>
                    <p className={styles.desp}>{desp}</p>
                </div>
            </div>
    )
}

export default PostList