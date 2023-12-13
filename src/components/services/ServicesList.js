import React from 'react'
import Col from 'react-bootstrap/Col';
import styles from "./styles.module.scss"

const ServicesList = ({ img, head, desp }) => {
  return (
    <>
        <img className='mb-4' src={img} alt="" />
        <p className={styles.head}>{head}</p>
        <p className={styles.desp}>{desp}</p>
    </>
  )
}

export default ServicesList
