// frontend/src/components/Admin/ListHospitals.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListHospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      const response = await axios.get('http://localhost:5000/api/admin/hospitals');
      setHospitals(response.data);
    };
    fetchHospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/hospitals/${id}`);
      setHospitals(hospitals.filter(hospital => hospital._id !== id));
    } catch (error) {
      console.error('Error deleting hospital:', error);
    }
  };

  return (
    <div>
      <h1>Hospitals List</h1>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital._id}>
            {hospital.name} - {hospital.location}
            <button onClick={() => handleDelete(hospital._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListHospitals;
