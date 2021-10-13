import React from 'react';
import './App.css';
import logo from './img/ryanwhitmore.png';

const App = () => {
  return (
    <div className="App">
      <h1>Ryan Whitmore</h1>
      <h2>Web Developer</h2>
      <hr />
      <h3>
        <a href="https://www.linkedin.com/in/whitmorespaceindustries/">
          LinkedIn
        </a>
      </h3>
      <h3>
        <a href="https://github.com/warptrail">Github</a>
      </h3>
      <div className="frame">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default App;
