import React from 'react';
import Banner from '../components/banner/Banner';
import Footer from '../components/common/footer/Footer';
import Community from '../components/community/Community';
import Facility from '../components/facility/Facility';
import Projects from '../components/projects/Projects';
import Services from '../components/services/Services';

const HomePage = () => {
  return (
      <>
        <Banner />
        <Projects />
        <Facility />
        <Community />
        <Services />
        <Footer />
      </>
  );
};

export default HomePage;
