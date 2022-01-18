import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import { aboutObject } from '../Data';
import HelloForm from '../components/HelloForm';

const Home = ({ isNavOpen }) => {
  // https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
  const [scrollPosition, setScrollPosition] = useState(0);

  const { pathname, hash } = useLocation();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
  // Code to scroll to specific id when changing route
  // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash]); // do this on route change
  */

  /*
  const hideOverflow = (bool) => {
    if (bool) {
      return 'hide';
    }
    return '';
  };
*/

  const renderHomePage = (
    <div id="top" className="home-container">
      <HeroSection />
      <InfoSection {...aboutObject} />

      <ProjectSection />
      <HelloForm id="helloForm" />
      <Footer />
    </div>
  );

  return <>{renderHomePage}</>;
};

export default Home;
