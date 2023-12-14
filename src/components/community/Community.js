import React from 'react'
import Container from 'react-bootstrap/Container';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./styles.module.scss"
import BtnIcon from "../../assets/images/Icon.svg"
import Image1 from "../../assets/images/Rectangle 7.svg"
import Image2 from "../../assets/images/Rectangle 5.svg"
import Image3 from "../../assets/images/Rectangle 6.svg"
import CommList from './CommList';
// import FacilityLists from './FacilityLists';

const Community = () => {
    const settings = {
        infinite: true,
        speed: 1000, // Speed of the transition between slides
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        autoplay: true,
        centerPadding: '10px',
        // margin: '10px',
        autoplaySpeed: 3000, // Time between slides in milliseconds
        responsive: [
            {
                breakpoint: 990, // Breakpoint for small screens
                settings: {
                    slidesToShow: 1, // Show 1 item on small screens
                    slidesToScroll: 1, // Fix the typo here
                    centerMode: true, // Center mode
                },
            },
        ],
    };
    
    return (
        <Container className={`${styles.Community} mb-5 pb-5`}>
            <Row className='my-4' >
                <Col className={styles.joinCommunity} lg="3">
                    <div className={`${styles.head} pb-3`}>Join the community campervan sites managers.</div>
                    <div className={`${styles.desp} pb-3`}>Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.</div>
                    <div className={styles.btn}>
                        <img src={BtnIcon} alt="" />
                        <span>
                            Start
                        </span>
                    </div>
                </Col>
                <Col lg="9">
                    <Slider className='my-8' {...settings}>
                        <div className={styles.commList}>
                            <CommList
                                img={Image1}
                                head='Lucciano'
                                subhead='Rome'
                                btn='View the Site'
                            />
                        </div>
                        <div className={styles.commList}>
                            <CommList
                                img={Image2}
                                head='Cremonesi'
                                subhead='Florence'
                                btn='View the Site'
                            />
                        </div>
                        <div  className={styles.commList}>
                            <CommList
                                img={Image3}
                                head='Beneventi'
                                subhead='Venice'
                                btn='View the Site'
                            />
                        </div>
                        <div  className={styles.commList}>
                            <CommList
                                img={Image1}
                                head='Lucciano'
                                subhead='Rome'
                                btn='View the Site'
                            />
                        </div>
                        <div  className={styles.commList}>
                            <CommList
                                img={Image2}
                                head='Cremonesi'
                                subhead='Florence'
                                btn='View the Site'
                            />
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    )
}

export default Community