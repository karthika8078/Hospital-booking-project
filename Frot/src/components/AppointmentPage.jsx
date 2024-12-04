import React from "react";
import { Link } from "react-router-dom";
//import "./AppointmentPage.css";

const AppointmentPage = () => {
  return (
    <div className="appointment-page">
      <h2>Login or Register to Book an Appointment</h2>
      <div className="card-container">
        <Link to="/login" className="card">
          Login
        </Link>
        <Link to="/register" className="card">
          Register
        </Link>
      </div>
    </div>
  );
};

export default AppointmentPage;
