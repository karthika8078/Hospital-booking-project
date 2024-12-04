// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './components/AboutUs';
import AppointmentPage from './components/AppointmentPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import BookAppointment from './components/BookAppointment';

import AddHospital from './components/Admin/AddHospital';
import EditHospital from './components/Admin/EditHospital';
import ListHospitals from './components/Admin/ListHospitals';

import './App.css';

function App() {
  return (
   
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/bookappointment" element={<BookAppointment />} />

        {/* Admin Routes */}
        <Route path="/admin/hospitals/add" element={<AddHospital />} />
        <Route path="/admin/hospitals/edit/:id" element={<EditHospital />} />
        <Route path="/admin/hospitals" element={<ListHospitals />} />
      </Routes>
   
  );
}

export default App;
