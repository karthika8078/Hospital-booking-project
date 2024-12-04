// models/HealthCheckup.js
const mongoose = require('mongoose');
const HealthCheckupSchema= new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  date: { type: String, required: true }, // Use String for simplicity, or Date if you want stricter validation
  testName: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt fields



module.exports = mongoose.model('healthcheckup', HealthCheckupSchema);
