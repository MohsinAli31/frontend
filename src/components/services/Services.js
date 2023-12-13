import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./styles.module.scss"
import WCR_Compare from "../../assets/images/WCR_Compare2-HighlightDiff-cont.svg"
import library_books from "../../assets/images/library_books.svg"
import WCRCompareHSV from "../../assets/images/WCR_Compare-HSV.svg"
import ServicesLists from './ServicesList';

const Services = () => {
    return (
        <Container className={`${styles.services} mb-5 pb-5`}>
            <p className={`${styles.title} mb-5`}>Our Advantages</p>
            <Row className="" >
                <Col md='12' lg='4' className={styles.main}>
                    <ServicesLists
                        img={WCR_Compare}
                        head='Convenience and Transparency'
                        desp='You don’t have to find out later or only after
                    camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin
                    a fixed commission on each transaction of 5'
                    />
                </Col>
                <Col md='12' lg='4' className={styles.main}>
                    <ServicesLists
                        img={library_books}
                        head='Digital marketing and editorial support'
                        desp='You don’t have to find out later or only after
                    camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin
                    a fixed commission on each transaction of 5'
                    />
                </Col>
                <Col md='12' lg='4' className={styles.main}>
                    <ServicesLists
                        img={WCRCompareHSV}
                        head='Community of services dedicated to campers'
                        desp='You don’t have to find out later or only after
                    camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin
                    a fixed commission on each transaction of 5'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Services