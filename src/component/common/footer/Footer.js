import React from 'react'
import styles from "./styles.module.scss"
import FB from "../../../assets/images/fb.svg"
import Linkedin from "../../../assets/images/Linkedin.svg"
import Insta from "../../../assets/images/insta.svg"
import Group from "../../../assets/images/Group.svg"


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
          <img className={styles.image} src={FB} alt="list1" />
          <img className={styles.image} src={Insta} alt="list1" />
          <img className={styles.image} src={Group} alt="list1" />
          <img className={styles.image} src={Linkedin} alt="list1" />
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  )
}

export default Footer