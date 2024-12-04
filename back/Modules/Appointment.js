const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  phoneNumber: String,
  gender: String,
  dateOfBirth: Date,
  hospital: String,
  department: String,
  doctor: String,
  appointmentDate: Date,  // This can remain as a Date type for the actual appointment date
  appointmentTime: {      // Change this to a String
    type: String,
    required: true,
  },
  tokenNumber: {
    type: Number,
    unique: true,
    required: true,
  },
});
  

module.exports = mongoose.model('appointment', appointmentSchema);
