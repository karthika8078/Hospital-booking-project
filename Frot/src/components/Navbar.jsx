// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';
import logo from '../assets/logo.jpg'; // replace with your logo image path

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
      <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/contact-us">Contact Us</Link>
        
        
        
        <span>EMERGENCY +91 471 294 1101 | AMBULANCE +91 9633009616</span>
      </div>
      <div className="navbar-main">
        <img src={logo} alt="KIMS Health Logo" className="logo" />
        <a href="#">eCare</a>   <br></br>
        
       
        <div className="menu-icon">Menu</div> <br></br>
      </div>
    </div>
  );
}

export default Navbar;
