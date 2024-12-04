const express = require('express');
const router = express.Router();
const HealthCheckupBooking = require('../Modules/HealthCheckup');

// 1. POST: Endpoint to handle booking requests
router.post('/book-health-checkup', async (req, res) => {
  const { name, phoneNumber, date, testName } = req.body;

  if (!name || !phoneNumber || !date || !testName) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save to MongoDB
    const booking = new HealthCheckupBooking({ name, phoneNumber, date, testName });
    const savedBooking = await booking.save();

    console.log('New Health Checkup Booking:', savedBooking);

    res.status(201).json({ message: 'Health checkup appointment booked successfully!', booking: savedBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Failed to book the health checkup' });
  }
});

// 2. GET: Endpoint to retrieve all bookings
router.get('/health-checkup-bookings', async (req, res) => {
  try {
    const bookings = await HealthCheckupBooking.find();
    res.status(200).json({ message: 'Health checkup bookings retrieved successfully!', bookings });
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ error: 'Failed to retrieve bookings' });
  }
});

// 3. DELETE: Endpoint to delete a booking by ID
router.delete('/health-checkup-bookings/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await HealthCheckupBooking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    console.log('Deleted Booking:', deletedBooking);
    res.status(200).json({ message: 'Booking deleted successfully!', deletedBooking });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Failed to delete booking' });
  }
});

module.exports = router;
