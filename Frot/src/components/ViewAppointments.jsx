import React from "react";

const ViewAppointments = () => {
  // Placeholder for appointments. Ideally, this will be fetched from a database.
  const appointments = [
    {
      id: "APT1234",
      name: "John Doe",
      phone: "1234567890",
      hospital: "Hospital A",
      department: "Cardiology",
      dob: "1990-01-01",
      appointmentDate: "2024-12-01",
      token: 5,
    },
  ];

  return (
    <div className="view-appointments">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments to display.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Hospital</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Appointment Date</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index}>
                <td>{appt.id}</td>
                <td>{appt.name}</td>
                <td>{appt.phone}</td>
                <td>{appt.hospital}</td>
                <td>{appt.department}</td>
                <td>{appt.dob}</td>
                <td>{appt.appointmentDate}</td>
                <td>{appt.token}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAppointments;
