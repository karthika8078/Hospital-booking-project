// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('review', reviewSchema);
