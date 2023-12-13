import React from 'react'
import Col from 'react-bootstrap/Col';
import styles from "./styles.module.scss"
import BtnIcon from "../../assets/images/Icon.svg"
import Image1 from "../../assets/images/Rectangle 7.svg"

const CommList = ({ img, head, subhead, btn }) => {
    return (
        <>
            <div className={styles.imag}>
                <img src={img} />
            </div>
                <div className={`${styles.head} py-1`}>{head}</div>
                <div className={`${styles.subhead} py-1`}>{subhead}</div>
                <div className={`${styles.btn} py-1`}>{btn}</div>
        </>
    )
}

export default CommList