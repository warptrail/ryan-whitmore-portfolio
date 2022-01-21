import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ProjectSection from '../components/ProjectSection';
import { aboutObject } from '../Data';
import HelloForm from '../components/HelloForm';

const Home = ({ toggleScrollUp, setToggleScrollUp }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (toggleScrollUp) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setToggleScrollUp(false);
    }
  }, [pathname]);
  const renderHomePage = (
    <div id="top" className="home-container" style={{ overflow: 'hidden' }}>
      <HeroSection />
      <InfoSection {...aboutObject} />

      <ProjectSection />
      <HelloForm id="helloForm" />
      {/* <Footer /> */}
    </div>
  );

  return <>{renderHomePage}</>;
};

export default Home;
