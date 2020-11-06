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
      <ImageFrame headerText="About" anchorId="about" />
      <AboutMe />
      <ImageFrame headerText="Projects" anchorId="projects" />
      <ProjectsGallery />
      <ImageFrame headerText="Contact" anchorId="contact" />
      <Contact />
    </div>
  );
}

export default Home;
