import React, { useEffect } from 'react';

import BioSection from '../components/BioSection/BioSection';
import AltHero from '../components/HeroSection/AltHero';

const BioPage = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }, []);

  return (
    <>
      <AltHero />
      <BioSection />
    </>
  );
};

export default BioPage;
