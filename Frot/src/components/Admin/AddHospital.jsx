// frontend/src/components/Admin/AddHospital.jsx
import React, { useState } from 'react';
import axios from 'axios';

function AddHospital() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/admin/hospitals', { name, location });
      console.log('Hospital added:', response.data);
    } catch (error) {
      console.error('Error adding hospital:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Hospital Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button type="submit">Add Hospital</button>
    </form>
  );
}

export default AddHospital;
