import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  }, [pathname, setToggleScrollUp, toggleScrollUp]);
  const renderHomePage = (
    <div
      id="top"
      className="home-container"
      style={{ overflow: 'hidden', width: '100vw' }}
    >
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
