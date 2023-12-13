import React from 'react'
import styles from "./styles.module.scss"

const FAQList = ({ head, list1, list2, list3, list4 }) => {
  return (
    <>
    <div className={styles.head}>{head}</div>
    <div className={styles.list}>{list1}</div>
    <div className={styles.list}>{list2}</div>
    <div className={styles.list}>{list3}</div>
    </>
  )
}

export default FAQList