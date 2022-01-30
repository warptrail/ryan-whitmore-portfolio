import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';

import Home from './routes';
import ProjectPage from './routes/ProjectPage';
import ContactPage from './routes/ContactPage';
import BioPage from './routes/BioPage';
import BlogPage from './routes/BlogPage';
import ProjectGalleryPage from './routes/ProjectGalleryPage';
import Footer from './components/Footer';

function App() {
  // state for the main menu being open in mobile
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Some links in Nav will toggle a route change to scroll to top
  const [toggleScrollUp, setToggleScrollUp] = useState(false);

  useEffect(() => {
    // nothing
  }, []);

  const handleToggleScrollUp = () => {
    setToggleScrollUp(true);
  };

  // toggle state function
  const toggle = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  };

  return (
    <Router>
      <Navbar
        toggle={toggle}
        id="top"
        handleToggleScrollUp={handleToggleScrollUp}
      />
      <MobileNav
        isNavOpen={isNavOpen}
        toggle={toggle}
        handleToggleScrollUp={handleToggleScrollUp}
      />

      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Home
              {...props}
              toggleScrollUp={toggleScrollUp}
              setToggleScrollUp={setToggleScrollUp}
            />
          )}
          exact
        />

        <Route path="/contact" component={ContactPage} />
        <Route path="/bio" component={BioPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/projects" exact component={ProjectGalleryPage} />
        <Route path="/projects/:projectId" component={ProjectPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
