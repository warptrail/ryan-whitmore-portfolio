import React from 'react';

import './ContactForm.css';

function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xjvprdkd"
      method="POST"
      className="item"
    >
      <div className="group">
        <div className="txt-input item">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" placeholder="Ron Swanson" />
        </div>
        <div className="txt-input item">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            name="phone"
            pattern="\d{3}[\-]\d{3}[\-]\d{4}"
            placeholder="xxx-xxx-xxxx"
          />
        </div>
      </div>
      <div className="group">
        <div className="txt-input item">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="group">
        <div className="item">
          <label className="center text-area-label" htmlFor="message">
            What's on your mind?
          </label>
        </div>
      </div>
      <div className="group">
        <div className="item">
          <textarea id="message" name="message" />
        </div>
      </div>
      <div className="group">
        <div className="buttons item">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
