import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import User from "../../assets/images/CL_Type-User.svg"
import ExpandLess from "../../assets/images/expand_less.svg"
import Cube from "../../assets/images/cube 1.svg"
import styles from "./styles.module.scss"
import BannerCard from './BannerCard';

const Banner = () => {
  return (
    <>
      <Navbar className={`${styles.banner} bg-body-tertiary`} collapseOnSelect expand="lg" align="start">
        <Container>
          <Navbar.Brand>
            <img className={styles.icon} src={Cube} alt="bannericon1" />
          </Navbar.Brand>
          <Navbar.Brand className={`${styles.icons} d-flex justify-content-center`}>
            <img className={styles.expand} src={ExpandLess} alt="bannericonless" />
            <img className={styles.user} src={User} alt="bannericonUser" />
          </Navbar.Brand>
        </Container>
        <BannerCard />
      </Navbar>

    </>
  );
}

export default Banner;
