// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"></Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/Login" onClick={toggleMenu}>Login</Link></li>
        <li><Link to="/profile" onClick={toggleMenu}>Profile/About Us</Link></li>
        <li><Link to="/description" onClick={toggleMenu}>Description</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

