import React from 'react';
import './Hero.css';
import Image from '../../img/whitmoreportrait.png';

function Hero() {
  return (
    <div className="Hero">
      <h1>Creative Developer</h1>
      <p>
        I’m a web developer and designer seeking to make the Internet a more
        beautiful and prosperous place. Lets connect through this weird and
        wonderful web.
      </p>
      <div className="Hero-image-frame">
        <img src={Image} alt="logo" />
      </div>
    </div>
  );
}

export default Hero;
