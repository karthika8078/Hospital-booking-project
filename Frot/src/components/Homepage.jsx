// src/components/HomePage.js
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
//import './HomePage.css';
import appStore from '../assets/download.png'; // Add your app store image
import googlePlay from '../assets/Googleplay.webp'; // Add your Google Play image
import doctorImage from '../assets/doctor.webp'; // Add your main image

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <img src={doctorImage} alt="Doctor" className="doctor-image" />
          <div className="appointment-banner">
            <h1>Book an Appointment</h1>
          </div>
          <p>
            For same-day and next-day appointments, please call us at 0471 2941400, WhatsApp Number +919072881666 or download our app:
          </p>
          <div className="app-links">
            <img src={appStore} alt="App Store" className="app-icon" />
            <img src={googlePlay} alt="Google Play" className="app-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
