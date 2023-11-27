import React from 'react'
import styles from "./styles.module.scss"

const Post = () => {
    return (
        <section className={styles.post}>
            <div className={styles.topHead}>
                <p >Recent posts</p>
                <button>View all</button>
            </div>
            <div className={styles.posts}>
                <div className={styles.postMenu}>
                    <div className={styles.a}>
                        <h2>Making a design system from scratch</h2>
                        <div>
                            <span>12 Feb 2020  |  Design, Pattern  </span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className={styles.postMenu}>
                    <div className={styles.b}>
                        <h2>Creating pixel perfect icons in Figma</h2>
                        <div>
                            <span>12 Feb 2020  |  Design, Pattern  </span>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Post