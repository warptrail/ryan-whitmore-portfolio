import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import Projects from '../routes/Projects';
import ContactPage from '../routes/ContactPage';
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
