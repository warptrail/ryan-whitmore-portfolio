import React, { useEffect } from 'react';

import BioSection from '../components/BioSection/BioSection';
import AltHero from '../components/HeroSection/AltHero';

const BioPage = ({ setToggleScrollUp }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div style={{ background: '#091200' }}>
      <AltHero />
      <BioSection />
    </div>
  );
};

export default BioPage;
