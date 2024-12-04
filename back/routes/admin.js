const express = require('express');
const router = express.Router();
const Appointment = require('../Modules/Appointment'); // Replace with your Appointment model path
const HealthCheckup = require('../Modules/HealthCheckup'); // Replace with your HealthCheckup model path

// Middleware to protect admin routes
const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Get all appointments
router.get('/appointments', authenticateAdmin, async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err });
  }
});

// Get all health checkups
router.get('/healthcheckups', authenticateAdmin, async (req, res) => {
  try {
    const checkups = await HealthCheckup.find();
    res.json(checkups);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health checkups', error: err });
  }
});

// Delete an appointment
router.delete('/appointments/:id', authenticateAdmin, async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting appointment', error: err });
  }
});

// Delete a health checkup
router.delete('/healthcheckups/:id', authenticateAdmin, async (req, res) => {
  try {
    await HealthCheckup.findByIdAndDelete(req.params.id);
    res.json({ message: 'Health checkup deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting health checkup', error: err });
  }
});

// Edit an appointment
router.put('/appointments/:id', authenticateAdmin, async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAppointment);
  } catch (err) {
    res.status(500).json({ message: 'Error updating appointment', error: err });
  }
});

// Edit a health checkup
router.put('/healthcheckups/:id', authenticateAdmin, async (req, res) => {
  try {
    const updatedCheckup = await HealthCheckup.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCheckup);
  } catch (err) {
    res.status(500).json({ message: 'Error updating health checkup', error: err });
  }
});

module.exports = router;
