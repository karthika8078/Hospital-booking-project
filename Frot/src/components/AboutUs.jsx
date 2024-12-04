import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Replace with your actual logo path

function AboutUs() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar1">
        <div className="navbar-top1">
          <Link to="/about-us">About Us</Link>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/contact-us">Contact Us</Link>
          <span>EMERGENCY +91 471 294 1101 | AMBULANCE +91 9633009616</span>
        </div>
        
      </div>

      {/* About Us Content */}
      <div className="about-us">
        <h1>About Us</h1>
        <p>
        At eCare, we are committed to revolutionizing the healthcare experience through innovative digital solutions that prioritize accessibility, efficiency, and patient empowerment. 
        Our platform brings together healthcare providers, patients, and cutting-edge technology to create a seamless ecosystem for managing health and wellness.

    <p>Founded on the principles of innovation, care, and inclusivity, eHealth offers a comprehensive suite of services, including:</p>

  <ul> <b>Telemedicine:</b> Enabling remote consultations with certified healthcare professionals, ensuring timely and convenient care from the comfort of your home.<br></br> </ul>

  <ul> <b>Electronic Health Records (EHRs):</b> Securely storing and managing patient data for easy access, better coordination, and informed decision-making.<br></br>  </ul>

  <ul> <b>Mobile Health Applications:</b> Empowering users with tools to monitor their health, set goals, and track progress through personalized insights.<br></br>  </ul>

  <ul> <b>Health Information Systems:</b> Simplifying administrative tasks and improving operational efficiency for healthcare providers.<br></br>  </ul>

<p> At eCare, we believe in making healthcare accessible to everyone, regardless of location or circumstance. 
Our solutions are designed to break down barriers, reduce costs, and improve outcomes by leveraging advanced technologies like artificial intelligence, big data analytics, and cloud computing.
We are passionate about fostering trust and security in healthcare. With stringent data protection policies and adherence to global standards, 
we ensure that every interaction on our platform is safe and reliable.</p>

<strong>Our Mission </strong>
To deliver innovative digital healthcare solutions that enhance quality of life, empower patients, and support healthcare providers worldwide.<br></br>

<p><strong>Our Vision</strong>
To be a global leader in digital healthcare, connecting people and providers through technology for a healthier and more equitable world.
Join us in our journey to shape the future of healthcare—accessible, efficient, and patient-focused. Welcome to eHealth, where technology meets care.</p>




        </p>
        <p>
          Contact us for more information about our hospital, services, and
          facilities.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h4>Contact Us</h4>
            <p>Email: info@eCare.org</p>
            <p>Phone: +91 471 294 0010</p>
          </div>
          <div className="footer-right">
            <h4>Follow Us</h4>
            <p>
              <a href="#">Facebook</a> | <a href="#">Twitter</a> |{' '}
              <a href="#">Instagram</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} eCare Health. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
