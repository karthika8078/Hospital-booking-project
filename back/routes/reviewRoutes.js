// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Review = require('../Modules/Review');

// POST /api/reviews - Add a review
router.post('/', async (req, res) => {
  try {
    const { review } = req.body;
    if (!review) {
      return res.status(400).json({ message: 'Review is required' });
    }

    const newReview = new Review({ review });
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully!' });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
