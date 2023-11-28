import React from 'react'
import styles from "./styles.module.scss"

const PostReuse = ({ heading, date, name, desc }) => {
    return (

        <div className={styles.postMenu}>
            <div className={styles.a}>
                <h2>
                    {heading}
                </h2>
                <div className={styles.date}>
                    <span>
                        {date}
                    </span>
                    <span>| </span>
                    <span>
                        {name}
                    </span>
                </div>
                <p>
                    {desc}
                </p>
            </div>
        </div>



    )
}

export default PostReuse