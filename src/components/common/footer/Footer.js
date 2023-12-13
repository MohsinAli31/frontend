import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./styles.module.scss"
import FAQList from './FAQList';
// import FacilityLists from './FacilityLists';

const Footer = () => {
  return (
    <Container className={`${styles.Footer} mb-5 pb-5`}>
      <Row className={`${styles.list} my-5`} >
        <Col className={styles.easyComfrt} lg="4">
          <div className={`${styles.head} pb-3`}>Easy Camper</div>
          <div className={`${styles.desp} pb-3`}>When Passion Meets Comfort.</div>
        </Col>
        <Col className={styles.FAQlist}>
          <FAQList
            head='Discover the Network'
            list1='Where to shop'
            list2='Tour Guided'
            list3='Our Tours'
            list4='About Us'
          />
        </Col>
        <Col className={styles.FAQlist}>
          <FAQList
            head='Become a Manager'
            list1='Join your Pairing'
            list2='Offer your Service'
            list3='Are you a guide?'
          />
        </Col>
        <Col className={styles.FAQlist}>
          <FAQList
            head='Assistance'
            list1='Support Center'
            list2='FAQs'
            list3='Cancallation Options'
            list4='Reliablity and Sequrity'
          />
        </Col>
      </Row>
      <hr className={styles.footerLine}/>
      <Row className={styles.footerList}>
          <Col md={8}>
            <p className="mb-0">EazyCamper. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-md-right">
            <ul className="list-inline mb-0 ml-auto">
              <li className="list-inline-item"><a href="#">About</a></li>
              <li className="list-inline-item"><a href="#">Site Map</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Teams</a></li>
            </ul>
          </Col>
        </Row>
    </Container>
  )
}

export default Footer