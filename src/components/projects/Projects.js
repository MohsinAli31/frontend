import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./styles.module.scss"
import foreign from "../../assets/images/undraw_exploring_1l7f 1.svg"
import tourist from "../../assets/images/undraw_tourist_map_re_293e 1.svg"
import destination from "../../assets/images/undraw_Destination_re_sr74 1.svg"
import ProjList from './ProjList';

const Projects = () => {
    return (
        <Container className={styles.projects}>
            <Row className="d-flex justify-content-center">
                <Col lg='4'>
                    <ProjList
                        img={foreign}
                        ProjHeading='Promoting your territory towards foreign tourists'
                        ProjPara='EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy. '
                        ProjDetails='Discover the places linked to your area that you can link to your structure'
                    />
                </Col>
                <Col lg='4'>
                    <ProjList
                        img={tourist}
                        ProjHeading='Additional services designed for the needs of campers'
                        ProjPara='Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that! '
                        ProjDetails='Discover the Guided Tours and additional services that you can link to your structure'
                    />
                </Col>
                <Col lg='4'>
                    <ProjList
                        img={destination}
                        ProjHeading='Free online showcase with promotion in Italy and abroad'
                        ProjPara='Forget about the time and money spent on creating your own website or e-commerce system for bookings.'
                        ProjDetails='Easycamper creates your showcase. Discover the terms and conditions for joining the Network'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects