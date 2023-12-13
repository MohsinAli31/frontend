import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./styles.module.scss"
import foreign from "../../assets/images/undraw_exploring_1l7f 1.svg"

const ProjList = ({img, ProjHeading, ProjPara, ProjDetails}) => {
    return (
        <>
            <div className={styles.ProjCard}>
                <img className={`${styles.ProjImg} mb-5 p-3`} src={img}></img>
                <div className={styles.projDesp}>
                    <p className={styles.ProjHeading}>{ProjHeading}</p>
                    <p className={styles.ProjPara}>{ProjPara}</p>
                    <p className={styles.ProjDetails}>{ProjDetails}</p>
                </div>
            </div>
        </>
    )
}

export default ProjList