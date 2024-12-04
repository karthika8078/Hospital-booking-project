// backend/routes/admin.js
const express = require('express');
const Hospital = require('../Modules/Hospital');
const router = express.Router();

// Admin adds a new hospital
router.post('/hospitals', async (req, res) => {
  const { name, location } = req.body;
  try {
    const newHospital = new Hospital({ name, location });
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (err) {
    res.status(500).json({ message: 'Error adding hospital', error: err.message });
  }
});

// Admin edits an existing hospital
router.put('/hospitals/:id', async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(id, { name, location }, { new: true });
    res.status(200).json(updatedHospital);
  } catch (err) {
    res.status(500).json({ message: 'Error updating hospital', error: err.message });
  }
});

// Admin deletes a hospital
router.delete('/hospitals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Hospital.findByIdAndDelete(id);
    res.status(200).json({ message: 'Hospital deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting hospital', error: err.message });
  }
});

// Admin gets a list of all hospitals
router.get('/hospitals', async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching hospitals', error: err.message });
  }
});

module.exports = router;
