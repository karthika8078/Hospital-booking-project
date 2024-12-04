// frontend/src/components/Admin/EditHospital.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditHospital({ match }) {
  const [hospital, setHospital] = useState({ name: '', location: '' });

  useEffect(() => {
    const fetchHospital = async () => {
      const response = await axios.get(`http://localhost:5000/api/admin/hospitals/${match.params.id}`);
      setHospital(response.data);
    };
    fetchHospital();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/admin/hospitals/${match.params.id}`, hospital);
      console.log('Hospital updated:', response.data);
    } catch (error) {
      console.error('Error updating hospital:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Hospital Name" value={hospital.name} onChange={(e) => setHospital({ ...hospital, name: e.target.value })} />
      <input type="text" placeholder="Location" value={hospital.location} onChange={(e) => setHospital({ ...hospital, location: e.target.value })} />
      <button type="submit">Update Hospital</button>
    </form>
  );
}

export default EditHospital;
