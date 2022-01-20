import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';

import Home from './routes';
import ProjectPage from './routes/ProjectPage';
import ContactPage from './routes/ContactPage';
import Footer from './components/Footer';

function App() {
  // const { pathname, hash } = useLocation();
  // https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // state for the main menu being open in mobile
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      <Navbar toggle={toggle} id="top" />
      <MobileNav isNavOpen={isNavOpen} toggle={toggle} />

      <Switch>
        <Route
          path="/"
          render={(props) => <Home {...props} isNavOpen={isNavOpen} />}
          exact
        />

        <Route path="/contact" component={ContactPage} />

        <Route path="/projects/:projectId" component={ProjectPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
