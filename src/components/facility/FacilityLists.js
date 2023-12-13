import React from 'react'
import Col from 'react-bootstrap/Col';
import FormatLst from "../../assets/images/format-list-checks 1.svg"
import styles from "./styles.module.scss"

const FacilityLists = ({ img, head, desp, showmore}) => {
    return (
        <>
                <img className='mb-4' src={img} alt="" />
                <p className={styles.head}>{head}</p>
                <p className={styles.desp}>{desp}</p>
                <p className={styles.showmore}>{showmore}</p>
        </>
    )
}

export default FacilityLists