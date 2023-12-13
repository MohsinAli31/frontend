import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./styles.module.scss"
import FormatLst from "../../assets/images/format-list-checks 1.svg"
import SpellCheck from "../../assets/images/spellcheck.svg"
import TxtFrame from "../../assets/images/WCR_Text-Frame-Add.svg"
import Calendar from "../../assets/images/WCR_Calendar-Today.svg"
import FacilityLists from './FacilityLists';

const Facility = () => {
    return (
        <Container className={`${styles.Facility} mb-5 pb-5`}>
            <p className={`${styles.title} mb-5`}>Making your facility known is our priority</p>
            <Row>
                <Col lg='3' className={styles.main}>
                    <FacilityLists
                        img={FormatLst}
                        head='Choose the type of stop'
                        desp='Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping'
                        showmore='Show me more'
                    />
                </Col>
                <Col lg='3' className={styles.main}>
                    <FacilityLists
                        img={SpellCheck}
                        head='Describe your structure'
                        desp='Describe thee property, location and nearby attractions'
                        showmore='Show me more'
                    />
                </Col>

                <Col lg='3' className={styles.main}>
                    <FacilityLists
                        img={TxtFrame}
                        head='Build your showcase'
                        desp='Add photos, videos and descriptions Define the price of each type of that make your propety truly'
                        showmore='Show me more'
                    />
                </Col>
                <Col lg='3' className={styles.main}>
                    <FacilityLists
                        img={Calendar}
                        head='Prices and Availability'
                        desp='pitch and configure the availablity
                    calendar.'
                        showmore='Show me more'
                    />
                </Col>

            </Row>
        </Container>
    )
}

export default Facility