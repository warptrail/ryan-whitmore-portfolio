import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>
          <a href="https://www.linkedin.com/in/whitmorespaceindustries/">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/warptrail">Github</a>
        </p>
      </div>
    );
  }
}
