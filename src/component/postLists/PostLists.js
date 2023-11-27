import React from 'react'
import styles from "./styles.module.scss"
import List1 from "../../assets/images/list1.svg"
import List2 from "../../assets/images/list2.svg"
import List3 from "../../assets/images/list3.svg"

const PostLists = () => {
    const list = [
        {
            imag: List1,
            title: 'Designing Dashboards',
            date: '2020',
            dSection: 'Dashboard',
            desp: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

        },
        {
            imag: List2,
            title: 'Vibrant Portraits of 2020',
            date: '2018',
            dSection: 'Illustration',
            desp: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            imag: List3,
            title: '36 Days of Malayalam type',
            date: '2018',
            dSection: 'Typography',
            desp: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
    ]
    return (
        <div className={styles.featureList}>
            <div className={styles.title}>
                <p>Featured works</p>
            </div>
            <div className={styles.ContentList}>
                {list.map((ls, i) => (
                    <div className={styles.mainList} key={i}>
                        <div>
                            <img className={styles.image} src={ls.imag} alt="list1" />
                        </div>
                        <div className={styles.content}>
                            <p className={styles.Listtitle}>{ls.title}</p>
                            <div className={styles.dateSection}>
                                <p className={styles.date}><span>{ls.date}</span></p>
                                <p className={styles.dashboard}>{ls.dSection}</p>
                            </div>
                            <p>{ls.desp}</p>
                        </div>
                    </div>
                    
                ))}

            </div>

        </div>
    )
}

export default PostLists