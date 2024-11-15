// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <div className="contact-header">
        {/* <h1>B.planet</h1> */}
        <h2>Contact us</h2>
      </div>
      <div className="contact-content">
        <div className="stay-updated">
          <h3>Stay Updated</h3>
          <p>Need to get in touch with us?</p>
          <Link to="/facebook">Facebook</Link><br />
          <Link to="/instagram">Instagram</Link>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name"/><br />
            <input type="email" placeholder="Email"/><br />
            <textarea placeholder="Your message"></textarea><br />
            <button type="submit" style={{backgroundColor:'blue'}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;