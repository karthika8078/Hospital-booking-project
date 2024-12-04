import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Adjust the path to your logo image

function AppointmentPage() {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    gender: '',
    dateOfBirth: '',
    hospital: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const [doctors, setDoctors] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [tokenNumber, setTokenNumber] = useState(null); // State to store token number
  
  const hospitals = [
       "AL ARIF Hospital", "AJ Hospital", "ANANTHAPURI Hospital", "CHAITHANYA EYE Hospital", " DISTRICT HOSPITAL NEDUMANGAD", "DR GOVINDANS Hospital", "GENERAL Hospital",
"GOVT. AYURVEDA Hospital"," GOVT. FORT Hospital"," GOWREESHA Hospital","JUBILEE MEMORIAL Hospital"," KIMS Hospital"," MEDICAL COLLEGE Hospital",
" NEYYATINKARA GENERAL Hospital", "NIMS Hospital", " PRS Hospital", " REGIONAL CANCER CENTER TVM", "SK Hospital",
"   SP FORT Hospital", " SREE RAMAKRISHNA MISSION Hospital", " SUT Hospital", " WOMEN AND CHILD Hospital"
   
  ];

  const departments = [ "Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics", "Oncology", "Ophthalmology", "Gynecology", "ENT (Ear, Nose, Throat)", 
    "Gastroenterology", "Psychiatry", "Endocrinology", "Urology", "Nephrology", "Pulmonology", "Rheumatology",
    " General Medicine", "Surgery", "Emergency Medicine", "Radiology","GG"];
  const doctorList = {
    Cardiology: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
    Dermatology: ['Dr. Brown', 'Dr. Harris', 'Dr. Walker'],
    Neurology: ['Dr. Green', 'Dr. White', 'Dr. King'],
    Orthopedics:['Dr. Adams', 'Dr. Carter', 'Dr. Davis'],
Pediatrics: ['Dr. Evans', 'Dr. Taylor', 'Dr. Moore'],
Oncology: ['Dr. Clark', 'Dr. Wright', 'Dr. Rodriguez'],
Ophthalmology: ['Dr. Lewis', 'Dr. Walker', 'Dr. Hall'],
Gynecology: ['Dr. Allen', 'Dr. Young', 'Dr. Hernandez'],

Gastroenterology: ['Dr. Perez', 'Dr. Hill', 'Dr. Scott'],
Psychiatry: ['Dr. Adams', 'Dr. Baker', 'Dr. Nelson'],
Endocrinology: ['Dr. Campbell', 'Dr. Mitchell', 'Dr. Roberts'],
Urology:[ 'Dr. Carter', 'Dr. Phillips', 'Dr. Parker'],
Nephrology: ['Dr. Evans', 'Dr. Murphy', 'Dr. Hughes'],
Pulmonology: ['Dr. Cooper', 'Dr. Richardson', 'Dr. Ward'],
Rheumatology:[ 'Dr. Sanchez', 'Dr. Peterson', 'Dr. Howard'],

Surgery: ['Dr. Morgan', 'Dr. Kelly', 'Dr. Brooks'],

Radiology: ['Dr. Rivera', 'Dr. Morris', 'Dr. Foster']
  







  };

  useEffect(() => {
    // Initialize available time slots (9:00 AM - 1:00 PM)
    setAvailableTimeSlots([
      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM'
    ]);
  }, []);

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setFormData({ ...formData, department, doctor: '' });
    setDoctors(doctorList[department] || []);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submitting
    if (!formData.patientName || !formData.phoneNumber || !formData.gender || !formData.hospital || !formData.department || !formData.doctor || !formData.appointmentDate || !formData.appointmentTime) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      console.log(formData);
      const response = await axios.post('http://localhost:5000/api/appointments', formData);
      if (response.status === 201) {
        alert('Appointment successfully booked');
        setTokenNumber(response.data.tokenNumber); // Set the token number from the response
        setFormData({
          patientName: '',
          phoneNumber: '',
          gender: '',
          dateOfBirth: '',
          hospital: '',
          department: '',
          doctor: '',
          appointmentDate: '',
          appointmentTime: '',
        });
      }
    } catch (error) {
      console.error('Error during form submission:', error.response?.data || error.message);
      alert('Failed to submit appointment. Please try again.');
    }
  };

  const disablePastDates = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-top">
          <Link to="/about-us">About Us</Link>
          <Link to="/">Home</Link>
          <Link to="/sign-out">Sign-out</Link>
        </div>
        <div className="navbar-main">
          <img src={logo} alt="Hospital Logo" className="logo" />
          <a href="#">eCare</a>
        </div>
      </nav>

      {/* Appointment Form Section */}
      <div className="appointment-page">
        <h1>Book an Appointment</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Patient Name:
            <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
          </label>

          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>

          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          </label>

          <label>
            Hospital:
            <select name="hospital" value={formData.hospital} onChange={handleChange} required>
              <option value="">Select</option>
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital}>
                  {hospital}
                </option>
              ))}
            </select>
          </label>

          <label>
            Department:
            <select name="department" value={formData.department} onChange={handleDepartmentChange} required>
              <option value="">Select</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </label>

          <label>
            Doctor:
            <select name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="">Select</option>
              {doctors.map((doc, index) => (
                <option key={index} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </label>

          <label>
            Appointment Date:
            <input 
              type="date" 
              name="appointmentDate" 
              value={formData.appointmentDate} 
              onChange={handleChange} 
              min={disablePastDates()} 
              required 
            />
          </label>

          <label>
            Appointment Time:
            <select name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required>
              <option value="">Select</option>
              {availableTimeSlots.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Submit</button>
        </form>

        {tokenNumber && (
          <div className="appointment-token">
            <h3>Your Token Number: {tokenNumber}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentPage;
