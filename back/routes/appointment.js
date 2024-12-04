const express = require('express');
const router = express.Router();
const Appointment = require('../Modules/Appointment');

// Generate a unique token that is not already used
async function getAvailableToken() {
  const usedTokens = await Appointment.find().select('tokenNumber').exec(); // Fetch all tokenNumbers
  const usedTokenNumbers = new Set(usedTokens.map(appointment => appointment.tokenNumber));

  // Generate tokens from 1 to 100 (or any other range you prefer)
  for (let i = 1; i <= 100; i++) {
    if (!usedTokenNumbers.has(i)) {
      return i; // Return the first available token
    }
  }
  throw new Error('No available tokens'); // Handle case where no tokens are available
}

// POST: Create a new appointment
router.post('/', async (req, res) => {
  try {
    const {
      patientName,
      phoneNumber,
      gender,
      dateOfBirth,
      hospital,
      department,
      doctor,
      appointmentDate,
      appointmentTime,
    } = req.body;

    // Get a valid token before creating the appointment
    const availableToken = await getAvailableToken();

    // Create new appointment with available token
    const newAppointment = new Appointment({
      patientName,
      phoneNumber,
      gender,
      dateOfBirth,
      hospital,
      department,
      doctor,
      appointmentDate,
      appointmentTime,
      tokenNumber: availableToken, // Assign the valid, unique token
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!', appointment: savedAppointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET: Retrieve all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET: Retrieve appointments by date
router.get('/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const appointments = await Appointment.find({ appointmentDate: date });
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments by date:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
