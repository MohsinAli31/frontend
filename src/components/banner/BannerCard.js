import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./styles.module.scss"
import Button from 'react-bootstrap/esm/Button';
import ButnIcon from "../../assets/images/CL_Site-Globe.svg"

const BannerCard = () => {
  return (
    <>
      <div className={styles.BannerCard} >
        <div className={styles.cardArea}>
          <div className={styles.heading}>
            <p>Find out how we can
              <span className={styles.headSpan}> save your time </span>
              in Backpacking in Europe
            </p>
          </div>
          <p className={styles.desp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.
          </p>
          <div className={styles.cardBtn}>
            <img src={ButnIcon} alt="ButnIcon" />
            <div>Explore</div>
          </div>

        </div>
      </div>
    </>
  );
}

export default BannerCard;