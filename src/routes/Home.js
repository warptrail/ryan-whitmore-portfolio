import React from 'react';

import ImageFrame from '../components/ImageFrame/ImageFrame';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import ProjectsGallery from '../components/ProjectsGallery/ProjectsGallery';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className="Home">
      <Hero />
      <ImageFrame headerText="About" />
      <AboutMe />
      <ImageFrame headerText="Projects" />
      <ProjectsGallery />
      <ImageFrame headerText="Contact" />
      <Contact />
    </div>
  );
}

export default Home;
