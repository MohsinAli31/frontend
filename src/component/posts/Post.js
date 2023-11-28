import React from 'react'
import PostReuse from '../postReuse/reuse'
import styles from "./styles.module.scss"

const Post = () => {
    return (
        <section className={styles.post}>
            <div className={styles.topHead}>
                <p >Recent posts</p>
                <button>View all</button>
            </div>
            <div className={styles.posts}>
                <PostReuse heading="Making a design system from scratch" date="12 Feb 2020" name="Design, Pattern" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
                <PostReuse heading="Making a design system from scratch" date="12 Feb 2020" name="Design, Pattern" desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
            </div>
        </section>
    )
}

export default Post