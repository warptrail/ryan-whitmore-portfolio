import React, { Component } from 'react';

import './AboutMe.css';
import { about1, about2, about3 } from './aboutMeText';

export default class AboutMe extends Component {
  render() {
    return (
      <section className="AboutMe">
        <p>{about1}</p>
        <p>{about2}</p>
        <p>{about3}</p>
      </section>
    );
  }
}
