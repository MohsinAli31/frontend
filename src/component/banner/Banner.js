import React from 'react'
import styles from "./styles.module.scss"
import Hero from "../../assets/images/hero.svg"

const Banner = () => {
  return (
        <section className={styles.banner}>
            <div className={styles.menu}>
                <h1>Hi, I am John, Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button>
                    Download Resume
                </button>
            </div>
            <div className={styles.hero}>
                <img src={Hero} alt="banner_avatar" />
            </div>
        </section>
  )
}

export default Banner